import React from "react";

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-[#070307]"></div>

      {/* 3D shapes */}
      <img
        src="/assets/star-small.png"
        alt="star-small"
        className="hidden lg:block absolute shape-float drop-shadow-2xl z-30 pointer-events-auto"
        style={{ left: "173px", top: "248px", width: "200px", height: "200px", transform: "rotate(0deg)" }}
      />
      <img
        src="/assets/cone.png"
        alt="cone"
        className="absolute shape-float drop-shadow-2xl z-30 pointer-events-auto"
        style={{ left: "503px", top: "161px", width: "186.41px", height: "186.41px", transform: "rotate(103.12deg)" }}
      />
      <img
        src="/assets/cube.png"
        alt="cube"
        className="absolute shape-float drop-shadow-2xl lg:opacity-90 z-30 pointer-events-auto"
        style={{ left: "399px", top: "410px", width: "438.02px", height: "437.43px", transform: "rotate(-21.9deg)" }}
      />
      <img
        src="/assets/cursor.png"
        alt="cursor"
        className="absolute opacity-90 shape-float z-30 pointer-events-auto"
        style={{ left: "140px", top: "693px", width: "157.96px", height: "156.74px", transform: "rotate(90deg)" }}
      />
      <img
        src="/assets/star-large.png"
        alt="star-large"
        className="hidden xl:block absolute shape-float drop-shadow-2xl z-30 pointer-events-auto"
        style={{ left: "1250px", top: "103px", width: "742.45px", height: "536.09px", transform: "rotate(50deg)" }}
      />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 py-28 flex items-center min-h-[70vh] pointer-events-none">
        <div className="w-full lg:w-1/2 ml-auto text-left lg:pr-24 pointer-events-auto" style={{ marginRight: "-5%" }}>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white">
            Onde design <span className="text-purple-400">encontra</span> performance.
          </h1>

          <p className="mt-6 text-lg text-gray-300 max-w-lg">
            Despertamos o invisível. <br className="hidden md:inline" />
            Impulsionamos o novo.
          </p>

          <div className="mt-8 flex justify-start gap-4">
            <a
              href="#projetos"
              className="bg-white text-black px-6 py-3 rounded-full font-medium shadow-lg hover:scale-[1.02] transition"
            >
              Ver Projetos
            </a>
            <a
              href="#contactos"
              className="border border-white/20 text-white px-5 py-3 rounded-full hover:bg-white/5 transition"
            >
              Contactar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
