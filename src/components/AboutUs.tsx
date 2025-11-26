import React from "react";
import lauro from "../assets/lauro.png";
import sergio from "../assets/sergio.png";
import lauroLogo from "../assets/lauro.logo.png";
import sergioLogo from "../assets/sergio.logo.png";
import fundoVerde from "../assets/fundo-verde.png";

export const AboutUs: React.FC = () => {
    return (
        <section id="sobre-nos" className="relative z-50 bg-black text-white py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-center text-3xl md:text-4xl font-extrabold mb-12">
                    Por Trás da Criatividade, Gente Real
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Lauro */}
                    <article className="rounded-[32px] overflow-visible">
                        <div className="group relative h-[420px] rounded-[40px] overflow-hidden">
                            <img src={fundoVerde} alt="" className="absolute inset-0 w-full h-full object-cover" />
                            <img
                                src={lauro}
                                alt="Lauro Trapia"
                                className="absolute top-1/2 left-1/2 -translate-x-[60%] -translate-y-[48%] h-[100%] md:h-[104%] object-contain drop-shadow-2xl pointer-events-none select-none transition-opacity duration-300 group-hover:opacity-0"
                            />
                            {/* Hover overlay logo */}
                            <img
                                src={lauroLogo}
                                alt="Lauro logo"
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none select-none w-full h-auto object-contain"
                            />
                        </div>

                        <div className="relative z-10 pt-6 pb-6 md:pb-8">
                            <h3 className="text-2xl font-bold">Lauro Trapia — Design & Motion</h3>
                            <p className="text-gray-300 text-sm leading-relaxed mt-3">
                                Criativo por instinto e estrategista por vocação. Lauro é quem dá forma, ritmo e emoção às ideias. Atua na vertente de design e motion, combinando estética e propósito para transformar conceitos em experiências visuais marcantes. Sua visão une o olhar artístico à clareza do design funcional — o equilíbrio perfeito entre beleza e intenção.
                            </p>
                        </div>
                    </article>

                    {/* Sérgio */}
                    <article className="rounded-[32px] overflow-visible">
                        <div className="group relative h-[420px] rounded-[40px] overflow-hidden">
                            <img src={fundoVerde} alt="" className="absolute inset-0 w-full h-full object-cover" />
                            <img
                                src={sergio}
                                alt="Sérgio Schulze"
                                className="absolute top-1/2 left-1/2 -translate-x-[40%] -translate-y-[53%] h-[134%] md:h-[138%] object-contain drop-shadow-2xl pointer-events-none select-none transition-opacity duration-300 group-hover:opacity-0"
                            />
                            {/* Hover overlay logo */}
                            <img
                                src={sergioLogo}
                                alt="Sérgio logo"
                                className="absolute top-1/2 left-1/2 -translate-x-[40%] -translate-y-[45%] h-[165%] md:h-[172%] object-contain pointer-events-none select-none z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            />
                        </div>

                        <div className="relative z-10 pt-6 pb-6 md:pb-8">
                            <h3 className="text-2xl font-bold">Sérgio Schulze — Programação & Desenvolvimento</h3>
                            <p className="text-gray-300 text-sm leading-relaxed mt-3">
                                A lógica que transforma ideias em realidade digital. O Sérgio é o responsável pela programação e pela estrutura, garantindo precisão e fluidez na execução dos projectos. Com uma mente analítica e foco no desempenho, traduz cada detalhe criativo em interfaces sólidas, eficientes e intuitivas.
                            </p>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
};
