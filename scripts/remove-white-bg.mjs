#!/usr/bin/env node
// Simple white/near-white background remover using sharp
// Usage: node scripts/remove-white-bg.mjs <input> <output> [--threshold 245] [--tolerance 25]

import fs from "fs";
import path from "path";
import sharp from "sharp";

function parseArgs() {
  const args = process.argv.slice(2);
  if (args.length < 2) {
    console.error("Usage: node scripts/remove-white-bg.mjs <input> <output> [--threshold 245] [--tolerance 25]");
    process.exit(1);
  }
  const input = args[0];
  const output = args[1];
  let threshold = 245; // per-channel minimum to consider white-ish
  let tolerance = 25; // how close RGB channels must be to each other
  for (let i = 2; i < args.length; i++) {
    if (args[i] === "--threshold" && args[i + 1]) {
      threshold = Number(args[i + 1]);
      i++;
    } else if (args[i] === "--tolerance" && args[i + 1]) {
      tolerance = Number(args[i + 1]);
      i++;
    }
  }
  return { input, output, threshold, tolerance };
}

async function main() {
  const { input, output, threshold, tolerance } = parseArgs();
  if (!fs.existsSync(input)) {
    console.error(`Input not found: ${input}`);
    process.exit(1);
  }

  const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info; // should be 4
  if (channels !== 4) {
    console.error(`Unexpected channels: ${channels}`);
    process.exit(1);
  }

  const out = Buffer.from(data); // copy
  for (let i = 0; i < out.length; i += 4) {
    const r = out[i];
    const g = out[i + 1];
    const b = out[i + 2];
    // Consider white-ish if bright and near-neutral (low chroma)
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const neutral = max - min <= tolerance;
    if (r >= threshold && g >= threshold && b >= threshold && neutral) {
      out[i + 3] = 0; // transparent
    } else {
      // Keep alpha; optionally preserve existing alpha from input
      // Ensure fully opaque if strong foreground
      if (out[i + 3] === 0) out[i + 3] = 255;
    }
  }

  // Reconstruct image and lightly blur alpha edges to soften cutout
  const composed = sharp(out, { raw: { width, height, channels: 4 } });
  await composed.png({ compressionLevel: 9 }).toFile(output);

  console.log(`Saved with transparent background → ${path.resolve(output)}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
