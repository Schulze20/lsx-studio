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
                    animation: spiral-rotate 20s linear infinite;
                    background-image:
                        radial-gradient(3px 3px at 50% 50%, rgba(168, 85, 247, 1), rgba(168, 85, 247, 0.3)),
                        radial-gradient(2.5px 2.5px at 55% 45%, rgba(186, 85, 211, 1), rgba(186, 85, 211, 0.3)),
                        radial-gradient(3px 3px at 60% 55%, rgba(168, 85, 247, 0.9), rgba(168, 85, 247, 0.2)),
                        radial-gradient(2.5px 2.5px at 52% 62%, rgba(186, 85, 211, 0.9), rgba(186, 85, 211, 0.2)),
                        radial-gradient(3px 3px at 42% 55%, rgba(168, 85, 247, 1), rgba(168, 85, 247, 0.3)),
                        radial-gradient(2px 2px at 65% 50%, rgba(186, 85, 211, 0.8), rgba(186, 85, 211, 0.1)),
                        radial-gradient(3px 3px at 48% 35%, rgba(168, 85, 247, 0.9), rgba(168, 85, 247, 0.2)),
                        radial-gradient(2.5px 2.5px at 70% 65%, rgba(186, 85, 211, 1), rgba(186, 85, 211, 0.3)),
                        radial-gradient(3px 3px at 35% 60%, rgba(168, 85, 247, 0.8), rgba(168, 85, 247, 0.1)),
                        radial-gradient(2.5px 2.5px at 75% 40%, rgba(186, 85, 211, 0.9), rgba(186, 85, 211, 0.2)),
                        radial-gradient(3px 3px at 30% 45%, rgba(168, 85, 247, 1), rgba(168, 85, 247, 0.3)),
                        radial-gradient(2px 2px at 78% 58%, rgba(186, 85, 211, 0.8), rgba(186, 85, 211, 0.1)),
                        radial-gradient(3px 3px at 45% 25%, rgba(168, 85, 247, 0.9), rgba(168, 85, 247, 0.2)),
                        radial-gradient(2.5px 2.5px at 68% 75%, rgba(186, 85, 211, 1), rgba(186, 85, 211, 0.3)),
                        radial-gradient(3px 3px at 25% 50%, rgba(168, 85, 247, 0.8), rgba(168, 85, 247, 0.1)),
                        radial-gradient(2.5px 2.5px at 80% 30%, rgba(186, 85, 211, 0.9), rgba(186, 85, 211, 0.2)),
                        radial-gradient(3px 3px at 20% 70%, rgba(168, 85, 247, 1), rgba(168, 85, 247, 0.3)),
                        radial-gradient(2.5px 2.5px at 40% 80%, rgba(186, 85, 211, 0.8), rgba(186, 85, 211, 0.1)),
                        radial-gradient(3px 3px at 72% 20%, rgba(168, 85, 247, 0.9), rgba(168, 85, 247, 0.2)),
                        radial-gradient(2px 2px at 15% 35%, rgba(186, 85, 211, 1), rgba(186, 85, 211, 0.3));
                    background-size: 100% 100%;
                    background-position: 0 0;
                    background-repeat: no-repeat;
                }
            `}</style>
        </div>
    );
};

