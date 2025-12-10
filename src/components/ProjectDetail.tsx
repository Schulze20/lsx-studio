import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import projeto1Thumb from "../assets/projeto1.png";
import projeto2Thumb from "../assets/projeto2.png";
import projeto3Thumb from "../assets/projeto3.png";

// Videos are hosted on Cloudinary - add URLs to your .env file
const VIDEO_PROJETO1 = import.meta.env.VITE_VIDEO_PROJETO1 || "";
const VIDEO_PROJETO2 = import.meta.env.VITE_VIDEO_PROJETO2 || "";
const VIDEO_PROJETO3 = import.meta.env.VITE_VIDEO_PROJETO3 || "";

export const ProjectDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const projectData: { [key: string]: any } = {
        "1": {
            title: "Projeto 1",
            description: "Descrição detalhada do Projeto 1. Adiciona aqui mais informações sobre o projeto, objetivos, processo criativo e resultados.",
            video: VIDEO_PROJETO1,
            thumb: projeto1Thumb,
            category: "Motion Design",
            year: "2024",
            client: "Cliente Exemplo",
        },
        "2": {
            title: "Projeto 2",
            description: "Descrição detalhada do Projeto 2. Adiciona aqui mais informações sobre o projeto, objetivos, processo criativo e resultados.",
            video: VIDEO_PROJETO2,
            thumb: projeto2Thumb,
            category: "Motion Design",
            year: "2024",
            client: "Cliente Exemplo",
        },
        "3": {
            title: "Projeto 3",
            description: "Descrição detalhada do Projeto 3. Adiciona aqui mais informações sobre o projeto, objetivos, processo criativo e resultados.",
            video: VIDEO_PROJETO3,
            thumb: projeto3Thumb,
            category: "Motion Design",
            year: "2024",
            client: "Cliente Exemplo",
        },
    };

    const project = projectData[id || "1"];

    if (!project) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <h1 className="text-white text-2xl">Projeto não encontrado</h1>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black pt-32 pb-20">
            {/* Header com botão voltar */}
            <div className="max-w-7xl mx-auto px-6 mb-12">
                <button
                    onClick={() => navigate("/#projetos")}
                    className="text-violet-400 hover:text-violet-300 transition text-sm font-semibold mb-8"
                >
                    ← Voltar aos Projetos
                </button>

                <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                    {project.title}
                </h1>

                <div className="flex gap-8 text-gray-300 text-sm">
                    <div>
                        <span className="text-gray-500">Categoria</span>
                        <p className="text-white font-semibold">{project.category}</p>
                    </div>
                    <div>
                        <span className="text-gray-500">Ano</span>
                        <p className="text-white font-semibold">{project.year}</p>
                    </div>
                    <div>
                        <span className="text-gray-500">Cliente</span>
                        <p className="text-white font-semibold">{project.client}</p>
                    </div>
                </div>
            </div>

            {/* Vídeo principal */}
            <div className="max-w-7xl mx-auto px-6 mb-16">
                <div className="rounded-[40px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                    <video
                        className="w-full h-auto object-cover"
                        controls
                        poster={project.thumb}
                    >
                        <source src={project.video} type="video/mp4" />
                        O seu navegador não suporta vídeos HTML5.
                    </video>
                </div>
            </div>

            {/* Descrição */}
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="md:col-span-2">
                        <h2 className="text-2xl font-bold text-white mb-4">Sobre este Projeto</h2>
                        <p className="text-gray-300 leading-relaxed">
                            {project.description}
                        </p>
                    </div>

                    <div className="bg-white/5 rounded-[28px] p-8 border border-white/10">
                        <h3 className="text-lg font-bold text-white mb-4">Detalhes</h3>
                        <div className="space-y-4 text-sm">
                            <div>
                                <span className="text-gray-500">Categoria</span>
                                <p className="text-white font-semibold">{project.category}</p>
                            </div>
                            <div>
                                <span className="text-gray-500">Ano</span>
                                <p className="text-white font-semibold">{project.year}</p>
                            </div>
                            <div>
                                <span className="text-gray-500">Cliente</span>
                                <p className="text-white font-semibold">{project.client}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
