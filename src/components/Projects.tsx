import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

import proj2 from "../assets/project 2.png";
import proj3 from "../assets/project 3.png";
import proj4 from "../assets/project 4.png";
import proj5 from "../assets/project 5.png";
import proj6 from "../assets/project 6.png";
import projeto1Thumb from "../assets/projeto1.png";
import projeto2Thumb from "../assets/projeto2.png";
import projeto3Thumb from "../assets/projeto3.png";

// Videos are hosted on Cloudinary - add URLs to your .env file
const VIDEO_PROJETO1 = import.meta.env.VITE_VIDEO_PROJETO1 || "";
const VIDEO_PROJETO2 = import.meta.env.VITE_VIDEO_PROJETO2 || "";
const VIDEO_PROJETO3 = import.meta.env.VITE_VIDEO_PROJETO3 || "";

type ProjectImageProps = { src: string; alt: string };

function ProjectImage({ src, alt }: ProjectImageProps) {
    return <img src={src} alt={alt} className="w-full h-full object-cover" loading="lazy" />;
}

function ParallaxImage({ src, alt, intensity = 8 }: { src: string; alt: string; intensity?: number }) {
    const ref = useRef<HTMLDivElement | null>(null);
    const [transform, setTransform] = useState<string>("translate3d(0,0,0)");
    const rafRef = useRef<number | null>(null);

    const finePointer = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(pointer: fine)").matches;

    const onMove = (e: React.MouseEvent) => {
        if (!finePointer) return;
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const rx = (e.clientX - r.left) / r.width - 0.5;
        const ry = (e.clientY - r.top) / r.height - 0.5;
        const tx = rx * intensity;
        const ty = ry * intensity;
        const next = `translate3d(${tx}px, ${ty}px, 0)`;
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(() => setTransform(next));
    };

    const onLeave = () => {
        setTransform("translate3d(0,0,0)");
    };

    return (
        <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} className="w-full h-full">
            <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover"
                style={{ transform, transition: "transform 200ms ease-out" }}
                loading="lazy"
            />
        </div>
    );
}

function VideoProject({ thumb, video, alt }: { thumb: string; video: string; alt: string }) {
    const [isHovered, setIsHovered] = useState(false);
    const videoRef = useRef<HTMLVideoElement | null>(null);

    return (
        <div
            onMouseEnter={() => {
                setIsHovered(true);
                if (videoRef.current) {
                    videoRef.current.play();
                }
            }}
            onMouseLeave={() => {
                setIsHovered(false);
                if (videoRef.current) {
                    videoRef.current.pause();
                    videoRef.current.currentTime = 0;
                }
            }}
            className="w-full h-full relative"
        >
            <img src={thumb} alt={alt} className="w-full h-full object-cover" loading="lazy" />
            <video
                ref={videoRef}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                    isHovered ? "opacity-100" : "opacity-0"
                }`}
                muted
                loop
            >
                <source src={video} type="video/mp4" />
            </video>
        </div>
    );
}

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<number | null>(null);
    const [isFlipped, setIsFlipped] = useState(false);
    
    const items = [
        { src: projeto1Thumb, video: VIDEO_PROJETO1, alt: "Projeto 1", isVideo: true, title: "Projeto 1", description: "Descrição do projeto 1" },
        { src: projeto2Thumb, video: VIDEO_PROJETO2, alt: "Projeto 2", isVideo: true, title: "Projeto 2", description: "Descrição do projeto 2" },
        { src: projeto3Thumb, video: VIDEO_PROJETO3, alt: "Projeto 3", isVideo: true, title: "Projeto 3", description: "Descrição do projeto 3" },
        { src: proj4, alt: "Projeto 4", isVideo: false, title: "Projeto 4", description: "Descrição do projeto 4" },
        { src: proj5, alt: "Projeto 5", isVideo: false, title: "Projeto 5", description: "Descrição do projeto 5" },
        { src: proj6, alt: "Projeto 6", isVideo: false, title: "Projeto 6", description: "Descrição do projeto 6" },
    ];

    const handleCardClick = (index: number) => {
        setSelectedProject(index);
        setIsFlipped(true);
    };

    const closeModal = () => {
        setIsFlipped(false);
        setTimeout(() => setSelectedProject(null), 300);
    };

    const handleModalClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };

    const selectedItem = selectedProject !== null ? items[selectedProject] : null;

    return (
        <section id="projetos" className="relative z-40 w-full px-4 md:px-8 lg:px-16 xl:px-24 pt-8 md:pt-10 lg:pt-12 pb-12 md:pb-14 lg:pb-16">
            <h2 className="text-center text-white text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-wide mb-3 md:mb-4">
                PROJETOS
            </h2>

            <div className="grid grid-cols-2 gap-4 md:gap-5 lg:gap-6 relative">
                {items.map((item, index) => (
                    <div
                        key={item.alt}
                        className={`relative w-full h-[400px] md:h-[500px] group cursor-pointer ${
                            index % 2 === 1 ? 'md:-ml-8 lg:-ml-12' : ''
                        }`}
                        onClick={() => handleCardClick(index)}
                    >
                        <div
                            className="absolute inset-0 rounded-[32px] md:rounded-[40px] overflow-hidden ring-1 ring-white/10 shadow-[0_12px_36px_rgba(0,0,0,0.35)] transition-all duration-300 ease-out will-change-transform group-hover:-translate-y-8 md:group-hover:-translate-y-12 group-hover:ring-white/20 md:group-hover:ring-white/25 group-hover:shadow-[0_16px_44px,rgba(0,0,0,0.45)] md:group-hover:shadow-[0_18px_52px,rgba(0,0,0,0.5)]"
                        >
                            {item.isVideo ? (
                                <VideoProject thumb={item.src} video={item.video!} alt={item.alt} />
                            ) : (
                                <ParallaxImage src={item.src} alt={item.alt} intensity={6} />
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal Popup com Flip */}
            {selectedProject !== null && selectedItem && (
                <div
                    className={`fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${
                        isFlipped ? "opacity-100" : "opacity-0"
                    }`}
                    onClick={handleModalClick}
                >
                    <div className="relative w-full max-w-2xl h-[500px] md:h-[600px] mx-4">
                        {/* Flip Card */}
                        <div
                            style={{
                                transformStyle: "preserve-3d",
                                transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                                transition: "transform 600ms ease-out",
                                width: "100%",
                                height: "100%",
                            }}
                        >
                            {/* Front - Image/Video */}
                            <div
                                className="absolute inset-0 rounded-[40px] overflow-hidden"
                                style={{
                                    backfaceVisibility: "hidden",
                                    WebkitBackfaceVisibility: "hidden",
                                }}
                            >
                                {selectedItem.isVideo ? (
                                    <VideoProject thumb={selectedItem.src} video={selectedItem.video!} alt={selectedItem.alt} />
                                ) : (
                                    <ParallaxImage src={selectedItem.src} alt={selectedItem.alt} intensity={6} />
                                )}
                            </div>

                            {/* Back - Info */}
                            <div
                                className="absolute inset-0 bg-gradient-to-br from-purple-600 to-purple-900 flex flex-col items-center justify-center p-8 rounded-[40px]"
                                style={{
                                    backfaceVisibility: "hidden",
                                    WebkitBackfaceVisibility: "hidden",
                                    transform: "rotateY(180deg)",
                                }}
                            >
                                <h3 className="text-white text-3xl md:text-4xl font-bold mb-6 text-center">{selectedItem.title}</h3>
                                <p className="text-gray-100 text-center text-base md:text-lg mb-8 leading-relaxed">{selectedItem.description}</p>
                                <Link
                                    to={`/projeto/${selectedProject + 1}`}
                                    className="inline-block bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                                >
                                    Ver Detalhes Completos
                                </Link>
                            </div>
                        </div>

                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 z-50 bg-white/10 hover:bg-white/20 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all backdrop-blur-sm"
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}

            {/* Ver todos os Projetos Button */}
            <div className="flex justify-center mt-12">
                <Link
                    to="/projetos"
                    className="inline-block bg-violet-600 hover:bg-violet-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-[0_10px_30px_rgba(139,92,246,0.5)] hover:shadow-[0_15px_40px_rgba(139,92,246,0.7)] transition-all duration-300 hover:scale-105"
                >
                    Ver Todos os Projetos
                </Link>
            </div>
        </section>
    );
}
