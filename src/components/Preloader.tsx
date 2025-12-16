import React, { useEffect, useState } from "react";
import logoLSX from "../assets/logolsx.png";

export const Preloader: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Hide preloader after page loads
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden">
            {/* Animated space background - Spiral stars only */}
            <div className="absolute inset-0">
                {/* Spiral stars background */}
                <div className="stars stars-spiral" />
            </div>

            {/* 3D Cube Container */}
            <div 
                className="relative"
                style={{
                    width: "200px",
                    height: "200px",
                    perspective: "1000px",
                }}
            >
                {/* Rotating cube */}
                <div
                    style={{
                        width: "100%",
                        height: "100%",
                        position: "relative",
                        transformStyle: "preserve-3d",
                        animation: "rotate3d 6s infinite linear",
                    }}
                >
                    {/* Front face */}
                    <div
                        style={{
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            transform: "translateZ(100px)",
                            background: "rgba(30, 30, 40, 0.7)",
                            boxShadow: "0 0 30px rgba(255, 255, 255, 0.3), inset 0 0 20px rgba(255, 255, 255, 0.1)",
                            overflow: "hidden",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            border: "2px solid rgba(255, 255, 255, 0.4)",
                        }}
                    >
                        <img src={logoLSX} alt="logo-front" style={{ width: "70%", height: "70%", objectFit: "contain", filter: "brightness(2) contrast(1.3) drop-shadow(0 0 20px rgba(255,255,255,0.9))" }} />
                    </div>
                    {/* Back face */}
                    <div
                        style={{
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            transform: "rotateY(180deg) translateZ(100px)",
                            background: "rgba(30, 30, 40, 0.7)",
                            boxShadow: "0 0 30px rgba(255, 255, 255, 0.3), inset 0 0 20px rgba(255, 255, 255, 0.1)",
                            overflow: "hidden",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            border: "2px solid rgba(255, 255, 255, 0.4)",
                        }}
                    >
                        <img src={logoLSX} alt="logo-back" style={{ width: "70%", height: "70%", objectFit: "contain", filter: "brightness(2) contrast(1.3) drop-shadow(0 0 20px rgba(255,255,255,0.9))" }} />
                    </div>
                    {/* Right face */}
                    <div
                        style={{
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            transform: "rotateY(90deg) translateZ(100px)",
                            background: "rgba(30, 30, 40, 0.7)",
                            boxShadow: "0 0 30px rgba(255, 255, 255, 0.3), inset 0 0 20px rgba(255, 255, 255, 0.1)",
                            overflow: "hidden",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            border: "2px solid rgba(255, 255, 255, 0.4)",
                        }}
                    >
                        <img src={logoLSX} alt="logo-right" style={{ width: "70%", height: "70%", objectFit: "contain", filter: "brightness(2) contrast(1.3) drop-shadow(0 0 20px rgba(255,255,255,0.9))" }} />
                    </div>
                    {/* Left face */}
                    <div
                        style={{
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            transform: "rotateY(-90deg) translateZ(100px)",
                            background: "rgba(30, 30, 40, 0.7)",
                            boxShadow: "0 0 30px rgba(255, 255, 255, 0.3), inset 0 0 20px rgba(255, 255, 255, 0.1)",
                            overflow: "hidden",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            border: "2px solid rgba(255, 255, 255, 0.4)",
                        }}
                    >
                        <img src={logoLSX} alt="logo-left" style={{ width: "70%", height: "70%", objectFit: "contain", filter: "brightness(2) contrast(1.3) drop-shadow(0 0 20px rgba(255,255,255,0.9))" }} />
                    </div>
                    {/* Top face */}
                    <div
                        style={{
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            transform: "rotateX(90deg) translateZ(100px)",
                            background: "rgba(30, 30, 40, 0.7)",
                            boxShadow: "0 0 30px rgba(255, 255, 255, 0.3), inset 0 0 20px rgba(255, 255, 255, 0.1)",
                            overflow: "hidden",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            border: "2px solid rgba(255, 255, 255, 0.4)",
                        }}
                    >
                        <img src={logoLSX} alt="logo-top" style={{ width: "70%", height: "70%", objectFit: "contain", filter: "brightness(2) contrast(1.3) drop-shadow(0 0 20px rgba(255,255,255,0.9))" }} />
                    </div>
                    {/* Bottom face */}
                    <div
                        style={{
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            transform: "rotateX(-90deg) translateZ(100px)",
                            background: "rgba(30, 30, 40, 0.7)",
                            boxShadow: "0 0 30px rgba(255, 255, 255, 0.3), inset 0 0 20px rgba(255, 255, 255, 0.1)",
                            overflow: "hidden",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            border: "2px solid rgba(255, 255, 255, 0.4)",
                        }}
                    >
                        <img src={logoLSX} alt="logo-bottom" style={{ width: "70%", height: "70%", objectFit: "contain", filter: "brightness(2) contrast(1.3) drop-shadow(0 0 20px rgba(255,255,255,0.9))" }} />
                    </div>
                </div>
            </div>

            {/* Loading text */}
            <div className="absolute bottom-24 text-center">
                <p className="text-white/80 text-sm tracking-widest uppercase animate-pulse font-light">
                    A carregar...
                </p>
            </div>

            <style>{`
                @keyframes rotate3d {
                    0% {
                        transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
                    }
                    100% {
                        transform: rotateX(360deg) rotateY(360deg) rotateZ(0deg);
                    }
                }

                @keyframes spiral-rotate {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(360deg);
                    }
                }

                .stars-spiral {
                    width: 100%;
                    height: 100%;
                    position: relative;
                    overflow: hidden;
                    
                    /* Vórtex/espiral background */
                    background: 
                        radial-gradient(ellipse at 50% 50%, rgba(168, 85, 247, 0.15) 0%, rgba(168, 85, 247, 0.05) 20%, transparent 50%),
                        radial-gradient(ellipse at 50% 50%, transparent 30%, rgba(186, 85, 211, 0.08) 50%, transparent 80%),
                        radial-gradient(circle at 50% 50%, rgba(138, 43, 226, 0.1) 0%, transparent 60%);
                    background-size: 100% 100%;
                    background-position: center;
                    animation: spiral-rotate 25s linear infinite;
                    
                    /* Muitas estrelas roxas */
                    background-image:
                        /* Camada 1 - estrelas grandes */
                        radial-gradient(6px 6px at 10% 20%, rgba(168, 85, 247, 1), transparent),
                        radial-gradient(7px 7px at 90% 15%, rgba(186, 85, 211, 1), transparent),
                        radial-gradient(6px 6px at 15% 80%, rgba(168, 85, 247, 0.9), transparent),
                        radial-gradient(7px 7px at 85% 85%, rgba(186, 85, 211, 0.9), transparent),
                        radial-gradient(6px 6px at 5% 50%, rgba(168, 85, 247, 0.8), transparent),
                        radial-gradient(7px 7px at 95% 60%, rgba(186, 85, 211, 0.8), transparent),
                        /* Camada 2 - estrelas médias */
                        radial-gradient(5px 5px at 25% 10%, rgba(168, 85, 247, 0.95), transparent),
                        radial-gradient(5px 5px at 75% 25%, rgba(186, 85, 211, 0.95), transparent),
                        radial-gradient(5px 5px at 20% 45%, rgba(168, 85, 247, 0.85), transparent),
                        radial-gradient(5px 5px at 80% 55%, rgba(186, 85, 211, 0.85), transparent),
                        radial-gradient(5px 5px at 30% 75%, rgba(168, 85, 247, 0.9), transparent),
                        radial-gradient(5px 5px at 70% 40%, rgba(186, 85, 211, 0.9), transparent),
                        radial-gradient(5px 5px at 40% 20%, rgba(168, 85, 247, 0.8), transparent),
                        radial-gradient(5px 5px at 60% 80%, rgba(186, 85, 211, 0.8), transparent),
                        radial-gradient(5px 5px at 12% 65%, rgba(168, 85, 247, 0.75), transparent),
                        radial-gradient(5px 5px at 88% 70%, rgba(186, 85, 211, 0.75), transparent),
                        /* Camada 3 - estrelas pequenas */
                        radial-gradient(3px 3px at 18% 32%, rgba(168, 85, 247, 1), transparent),
                        radial-gradient(3px 3px at 82% 35%, rgba(186, 85, 211, 1), transparent),
                        radial-gradient(3px 3px at 22% 62%, rgba(168, 85, 247, 0.9), transparent),
                        radial-gradient(3px 3px at 78% 72%, rgba(186, 85, 211, 0.9), transparent),
                        radial-gradient(3px 3px at 35% 42%, rgba(168, 85, 247, 0.85), transparent),
                        radial-gradient(3px 3px at 65% 48%, rgba(186, 85, 211, 0.85), transparent),
                        radial-gradient(3px 3px at 42% 18%, rgba(168, 85, 247, 0.8), transparent),
                        radial-gradient(3px 3px at 58% 88%, rgba(186, 85, 211, 0.8), transparent),
                        radial-gradient(3px 3px at 8% 38%, rgba(168, 85, 247, 0.75), transparent),
                        radial-gradient(3px 3px at 92% 42%, rgba(186, 85, 211, 0.75), transparent),
                        radial-gradient(3px 3px at 28% 8%, rgba(168, 85, 247, 0.7), transparent),
                        radial-gradient(3px 3px at 72% 92%, rgba(186, 85, 211, 0.7), transparent),
                        radial-gradient(3px 3px at 48% 55%, rgba(168, 85, 247, 0.65), transparent),
                        radial-gradient(3px 3px at 52% 45%, rgba(186, 85, 211, 0.65), transparent),
                        radial-gradient(3px 3px at 15% 92%, rgba(168, 85, 247, 0.7), transparent),
                        radial-gradient(3px 3px at 85% 8%, rgba(186, 85, 211, 0.7), transparent);
                    background-size: 100% 100%;
                    background-position: 0 0;
                    background-repeat: no-repeat;
                }
            `}</style>
        </div>
    );
};

