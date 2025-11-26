import React, { useState } from "react";
import { ContactModal } from "./ContactModal";

export const Navbar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div>
          <img src="/assets/logo-principal.png" alt="LSX Studio" className="h-16 w-auto" />
        </div>

        {/* Links - hidden on small screens */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-200">
          <a href="#projetos" className="hover:text-white transition">Projetos</a>
          <a href="#sobre-nos" className="hover:text-white transition">Sobre</a>
          <a href="#contactos" className="hover:text-white transition">Contactos</a>
        </nav>

        {/* CTA */}
        <div className="ml-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-block bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-full text-sm shadow-md transition cursor-pointer"
          >
            Pedir Orçamento
          </button>
        </div>
      </div>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </header>
  );
};
