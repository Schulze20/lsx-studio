import React, { useEffect, useRef, useState } from "react";

type Step = {
    id: number;
    title: string;
    intro?: string;
    bullets: string[];
};

const STEPS: Step[] = [
    {
        id: 1,
        title: "Imersão e Alinhamento",
        intro: "Onde entendemos o que o cliente quer — e o que realmente precisa.",
        bullets: [
            "Reunião inicial (briefing guiado)",
            "Diagnóstico do desafio: propósito, público e objetivos",
            "Referências e definições técnicas (prazo, formatos, escopo)",
            "Documento de direcionamento (Creative Deck)",
        ],
    },
    {
        id: 2,
        title: "Direção Criativa",
        intro: "Onde as ideias começam a tomar forma.",
        bullets: [
            "Moodboard e conceito visual",
            "Paleta, tipografia e identidade de apoio",
            "Linha criativa — feeling do projeto",
            "Em motion/vídeo: roteiro e storyboard",
            "Em web/app: wireframes e arquitetura de informação",
        ],
    },
    {
        id: 3,
        title: "Produção",
        intro: "Onde transformamos o conceito em algo real.",
        bullets: [
            "Design de telas, animações ou edição de vídeo",
            "Desenvolvimento técnico (web e apps)",
            "Revisões internas entre design e programação",
            "Primeira entrega para validação do cliente",
        ],
    },
    {
        id: 4,
        title: "Feedback e Refinamento",
        intro: "Onde a mágica é polida.",
        bullets: [
            "Coleta estruturada de feedback",
            "Ajustes visuais, técnicos e narrativos",
            "Refinamento final (cor, ritmo, performance)",
        ],
    },
    {
        id: 5,
        title: "Entrega e Implementação",
        intro: "O momento de mostrar ao mundo.",
        bullets: [
            "Exportação e entrega de arquivos finais",
            "Implementação técnica (sites e apps)",
            "Preparação de kits (identidade, presets, specs)",
            "Verificação de performance e usabilidade",
        ],
    },
    {
        id: 6,
        title: "Pós‑Entrega e Expansão",
        intro: "A relação continua e evolui.",
        bullets: [
            "Reunião de encerramento e documentação",
            "Relatório de desempenho (quando aplicável)",
            "Propostas de evolução, iterações e novos projetos",
            "Atualização de portfólio e estratégia",
        ],
    },
];

function Chevron({ open }: { open: boolean }) {
    return (
        <svg
            className={`w-5 h-5 transition-transform duration-300 ${open ? "rotate-180" : "rotate-0"}`}
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
        >
            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.25 4.38a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
        </svg>
    );
}

// Brand-adapted accents (violet/purple family)
const ACCENTS = [
    { bar: "from-violet-500 to-purple-500", dot: "bg-violet-400", ring: "ring-violet-400/30" },
    { bar: "from-violet-500 to-fuchsia-500", dot: "bg-fuchsia-400", ring: "ring-fuchsia-400/30" },
    { bar: "from-purple-500 to-indigo-500", dot: "bg-purple-400", ring: "ring-purple-400/30" },
    { bar: "from-fuchsia-500 to-pink-500", dot: "bg-pink-400", ring: "ring-pink-400/30" },
    { bar: "from-indigo-500 to-violet-500", dot: "bg-indigo-400", ring: "ring-indigo-400/30" },
    { bar: "from-purple-600 to-violet-500", dot: "bg-purple-500", ring: "ring-purple-500/30" },
];

function ArrowIcon({ dir = "left" }: { dir?: "left" | "right" }) {
    const rotate = dir === "right" ? "rotate-180" : "rotate-0";
    return (
        <svg className={`w-6 h-6 text-violet-400 ${rotate}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
        </svg>
    );
}

export function Workflow() {
    const [active, setActive] = useState(0);
    const total = STEPS.length;
    const step = STEPS[active];
    const accent = ACCENTS[active % ACCENTS.length];
    const containerRef = useRef<HTMLDivElement | null>(null);

    const go = (delta: number) => {
        setActive((prev) => {
            const next = (prev + delta + total) % total;
            return next;
        });
    };

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            // Arrow keys navigation removed - only clicking arrows works
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    return (
        <section id="workflow" className="relative z-40 w-full px-4 md:px-8 lg:px-16 xl:px-24 py-12 md:py-16 lg:py-20">
            <div className="text-center mb-8 md:mb-12">
                <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-wider mb-3">
                    WORK FLOW
                </h2>
                <div className="w-full bg-white/10 rounded-full h-1.5 max-w-xs mx-auto overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-violet-500 to-purple-600 transition-all duration-500" style={{ width: `${((active + 1) / total) * 100}%` }} />
                </div>
            </div>

            <div ref={containerRef} className={`relative mx-auto w-full max-w-5xl text-white`}>
                {/* Card */}
                <div className={`relative rounded-[36px] md:rounded-[48px] bg-gradient-to-br from-white/8 to-white/3 border border-white/20 ${accent.ring} overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.4)] backdrop-blur-sm transition-all duration-500 hover:border-white/30 hover:shadow-[0_30px_80px_rgba(139,92,246,0.4)] hover:scale-[1.02] hover:-translate-y-1`}>
                    {/* Animated background gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${accent.bar} opacity-5 animate-pulse`} />
                    
                    {/* Accent bar - gradient */}
                    <div className={`absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b ${accent.bar} shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all duration-500`} />

                    {/* Header section */}
                    <div className="relative px-8 md:px-12 pt-8 md:pt-10 pb-4">
                        <div className="flex items-center gap-4 mb-2 group">
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${accent.bar} flex items-center justify-center font-bold text-lg shadow-[0_10px_25px_rgba(139,92,246,0.3)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_15px_40px_rgba(139,92,246,0.5)]`}>
                                {active + 1}
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white transition-all duration-300 group-hover:text-violet-300">{step.title}</h3>
                        </div>
                    </div>

                    {/* Content area with step intro + bullets */}
                    <div className="relative mx-8 md:mx-12 mb-8 md:mb-10 animate-fadeIn">
                        <div className="rounded-[24px] bg-white/5 border border-white/10 backdrop-blur-sm p-8 md:p-10 min-h-[240px] md:min-h-[320px] flex flex-col justify-between transition-all duration-300 hover:bg-white/8 hover:border-white/20">
                            <div className="max-w-[70ch] overflow-y-auto">
                                {step.intro && (
                                    <p className={`text-${accent.dot.split('-')[1]}-300 uppercase tracking-widest text-xs md:text-sm font-bold mb-6 animate-slideInUp`}>
                                        ✨ {step.intro}
                                    </p>
                                )}
                                <ul className="text-gray-100 text-sm md:text-base space-y-3">
                                    {step.bullets.map((b, i) => (
                                        <li key={i} className="flex gap-3 items-start animate-slideInUp transition-all duration-300 hover:translate-x-2" style={{ animationDelay: `${i * 50}ms` }}>
                                            <span className={`w-1.5 h-1.5 rounded-full ${accent.dot} mt-2 flex-shrink-0 transition-all duration-300 hover:scale-150`} />
                                            <span className="transition-colors duration-300 hover:text-white">{b}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navigation Footer */}
                <div className="mt-8 flex items-center justify-center gap-4 animate-slideInUp">
                    <button 
                        aria-label="Anterior" 
                        onClick={() => go(-1)} 
                        className="group p-3 rounded-full bg-white/5 border border-white/10 hover:bg-violet-600/30 hover:border-violet-500/50 transition-all duration-300 hover:shadow-[0_10px_25px_rgba(139,92,246,0.3)] hover:scale-125 hover:-translate-y-1 active:scale-95"
                    >
                        <ArrowIcon dir="left" />
                    </button>

                    {/* Dots */}
                    <div className="flex items-center gap-2">
                        {STEPS.map((_, i) => (
                            <button 
                                key={i} 
                                aria-label={`Ir para passo ${i + 1}`} 
                                onClick={() => { setActive(i); }} 
                                className={`transition-all duration-300 cursor-pointer ${
                                    i === active 
                                        ? `w-8 h-3 rounded-full bg-gradient-to-r ${ACCENTS[i % ACCENTS.length].bar} shadow-[0_10px_25px_rgba(139,92,246,0.5)] scale-110` 
                                        : "w-2.5 h-2.5 rounded-full bg-white/20 hover:bg-white/40 hover:scale-125"
                                }`} 
                            />
                        ))}
                    </div>

                    <button 
                        aria-label="Seguinte" 
                        onClick={() => go(1)} 
                        className="group p-3 rounded-full bg-white/5 border border-white/10 hover:bg-violet-600/30 hover:border-violet-500/50 transition-all duration-300 hover:shadow-[0_10px_25px_rgba(139,92,246,0.3)] hover:scale-125 hover:-translate-y-1 active:scale-95"
                    >
                        <ArrowIcon dir="right" />
                    </button>
                </div>
            </div>
        </section>
    );
}
