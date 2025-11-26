import React from "react";

const logos = [
  "/assets/logo-ordem.png",
  "/assets/logo-care.png",
  "/assets/logo-esposende.png",
  "/assets/logo-eugreen.png",
  "/assets/logo-t.png",
  "/assets/logo-evora.png",
  "/assets/logo-uporto.png",
];

export const LogoCarousel: React.FC = () => {
  return (
    <div className="w-full bg-white overflow-hidden" style={{ marginTop: "200px" }}>
      <div className="flex items-center py-4">
        <div className="w-full overflow-hidden relative">
          <div className="flex items-center logo-marquee" style={{ width: "max-content" }}>
            {[...logos, ...logos, ...logos, ...logos, ...logos, ...logos].map((src, i) => (
              <div key={i} className="flex-shrink-0 opacity-90 px-6">
                <img src={src} alt={`logo-${i}`} className="h-12 object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
