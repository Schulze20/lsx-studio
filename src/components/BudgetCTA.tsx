import React, { useEffect, useMemo, useRef, useState } from "react";
import mao1 from "../assets/mao1.png";
import mao2 from "../assets/mao2.png";
import { ContactModal } from "./ContactModal";

export function BudgetCTA() {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const [progress, setProgress] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;
        const onScroll = () => {
            const r = el.getBoundingClientRect();
            const vh = window.innerHeight || 1;
            const start = vh * 0.95;
            const end = vh * 0.35;
            const raw = (start - r.top) / (start - end);
            const clamped = Math.max(0, Math.min(1, raw));
            setProgress(clamped);
        };
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
        };
    }, []);

    const eased = useMemo(() => 1 - (1 - progress) * (1 - progress), [progress]);

    // Posições finais onde param (valores atuais)
    const leftFinalX = 340;
    const leftFinalY = 130;
    const rightFinalX = 310;
    const rightFinalY = 28;

    // Posições iniciais (fora do ecrã)
    const startOffsetX = 640;
    const startOffsetY = 200;

    const leftX = startOffsetX - (startOffsetX - leftFinalX) * eased;
    const leftY = startOffsetY - (startOffsetY - leftFinalY) * eased;
    const rightX = startOffsetX - (startOffsetX - rightFinalX) * eased;
    const rightY = startOffsetY - (startOffsetY - rightFinalY) * eased;
    return (
        <section id="orcamento" className="relative z-40 w-full px-4 md:px-8 lg:px-16 xl:px-24 py-16 md:py-20">
            <div ref={sectionRef} className="relative max-w-6xl mx-auto min-h-[280px] md:min-h-[360px]">
                <h3 className="text-center text-white text-xl md:text-2xl font-extrabold tracking-wide mb-6">ENTRE EM CONTACTO</h3>

                {/* Mãos que se aproximam durante o scroll e param nas posições finais */}
                <img
                    src={mao2}
                    alt="Mão esquerda"
                    className="hidden md:block absolute top-1/2 left-1/2 drop-shadow-2xl select-none pointer-events-none"
                    style={{
                        transform: `translate(calc(-50% - ${leftX}px), calc(-50% - ${leftY}px)) rotate(-12deg)`,
                        transformOrigin: "80% 40%",
                        width: "24rem",
                    }}
                    loading="lazy"
                />
                <img
                    src={mao1}
                    alt="Mão direita"
                    className="hidden md:block absolute top-1/2 left-1/2 drop-shadow-2xl select-none pointer-events-none"
                    style={{
                        transform: `translate(calc(-50% + ${rightX}px), calc(-50% - ${rightY}px)) rotate(12deg)`,
                        transformOrigin: "20% 45%",
                        width: "22rem",
                    }}
                    loading="lazy"
                />

                {/* Center button (pill) */}
                <div className="relative flex items-center justify-center pt-6 md:pt-8 z-10">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="pulse-glow inline-flex items-center justify-center px-10 md:px-16 py-3.5 md:py-4 rounded-full text-white font-semibold tracking-wide transition-all duration-300 hover:scale-105 bg-[#5E3BB3] cursor-pointer"
                    >
                        Pedir Orçamento
                    </button>
                </div>
            </div>
            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
}
