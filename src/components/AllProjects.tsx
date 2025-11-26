import React, { useState } from "react";

export const AllProjects: React.FC = () => {
    const [activeService, setActiveService] = useState("motion");

    const projects = {
        motion: [
            { id: 1, name: "Projeto 1", category: "Motion Design" },
            { id: 2, name: "Projeto 2", category: "Motion Design" },
        ],
        web: [
            { id: 4, name: "Projeto 4", category: "Web Design" },
        ],
        video: [
            { id: 3, name: "Projeto 3", category: "Edição de Vídeo" },
        ],
        app: [
            { id: 5, name: "Projeto 5", category: "App Design" },
            { id: 6, name: "Projeto 6", category: "App Design" },
        ],
    };

    const services = [
        { id: "motion", label: "Motion Design", icon: "🎬" },
        { id: "web", label: "Web Design", icon: "💻" },
        { id: "video", label: "Edição de Vídeo", icon: "📹" },
        { id: "app", label: "App Design", icon: "📱" },
    ];

    const currentProjects = projects[activeService as keyof typeof projects];

    return (
        <section className="relative z-40 w-full px-4 md:px-8 lg:px-16 xl:px-24 py-12 md:py-16 lg:py-20 bg-black">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-center text-white text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-wide mb-12">
                    Ver Todos os Projetos
                </h2>

                {/* Service Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {services.map((service) => (
                        <button
                            key={service.id}
                            onClick={() => setActiveService(service.id)}
                            className={`px-6 py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-300 ${
                                activeService === service.id
                                    ? "bg-violet-600 text-white shadow-[0_10px_30px_rgba(139,92,246,0.5)]"
                                    : "bg-white/10 text-gray-300 hover:bg-white/20"
                            }`}
                        >
                            <span className="mr-2">{service.icon}</span>
                            {service.label}
                        </button>
                    ))}
                </div>

                {/* Projects Grid for Service */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentProjects.map((project) => (
                        <a
                            key={project.id}
                            href={`/projeto/${project.id}`}
                            className="group relative rounded-[28px] overflow-hidden bg-white/5 border border-white/10 p-6 hover:bg-white/10 hover:border-violet-500/50 transition-all duration-300 cursor-pointer flex flex-col"
                        >
                            <div className="flex-1">
                                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-violet-400 transition-colors">
                                    {project.name}
                                </h3>
                                <p className="text-gray-400 text-sm mb-4">{project.category}</p>
                            </div>

                            <div className="flex items-center text-violet-400 font-semibold text-sm group-hover:translate-x-2 transition-transform">
                                Ver Projeto
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </a>
                    ))}
                </div>

                {currentProjects.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-400 text-lg">Nenhum projeto disponível nesta categoria</p>
                    </div>
                )}
            </div>
        </section>
    );
};
