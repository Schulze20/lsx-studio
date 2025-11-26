import React from "react";

export const Services: React.FC = () => {
    const services = [
        {
            title: "Motion Design",
            description: "Criamos vídeos com ritmo e intenção, que contam histórias, emocionam e dão força visual à presença da tua marca.",
            image: "/assets/motion-logo.png",
            categories: ["Motion Branding", "Explainer Videos", "Social Motion"],
        },
        {
            title: "Web Design",
            description: "Criação de sites e landing pages focados em conversão. Desenvolvemos interfaces responsivas com UX/UI pensado ao detalhe, layout otimizado e integração com ferramentas essenciais para performance e resultados.",
            image: "/assets/web-logo.png",
            categories: ["Landing Pages", "Websites Institucionais", "Lojas Online"],
        },
        {
            title: "Edição de Vídeo",
            description: "Edição criativa e narrativa visual com ritmo e sequência de vídeos. Publicidade, entrevistas, cortes dinâmicas e pós-produção.",
            image: "/assets/edicao-logo.png",
            categories: ["Vídeos Promocionais", "Reels", "Vídeos Corporativos"],
        },
        {
            title: "App Design",
            description: "Design completo de interfaces e especificações para aplicativos. Inclui prototipagem, fluxos de navegação, sistema de design e wirefram para apps mobile e web.",
            image: "/assets/app-logo.png",
            categories: ["UI Design", "Prototipagem", "Sistema de Design"],
        },
    ];

    return (
        <section id="servicos" className="bg-black py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-300 cursor-pointer flex items-center bg-white"
                            style={{
                                minHeight: "250px",
                            }}
                        >
                            {/* Image - Left side */}
                            <div className="flex items-center justify-center p-8 w-1/2">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-52 h-52 object-contain rounded-2xl"
                                />
                            </div>

                            {/* Content - Right side */}
                            <div className="p-6 w-1/2 flex flex-col justify-center">
                                <h3 className="text-xl font-bold text-black mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-gray-700 text-xs leading-relaxed mb-3">
                                    {service.description}
                                </p>
                                {service.categories && (
                                    <div className="flex flex-wrap gap-2">
                                        {service.categories.map((cat, i) => (
                                            <span key={i} className="text-xs font-semibold text-gray-800 bg-gray-200 px-3 py-1 rounded-full">
                                                {cat}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
