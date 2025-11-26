import React, { useEffect, useState } from "react";

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        contacto: "",
        empresa: "",
        servico: "",
        ideia: "",
    });

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aqui podes adicionar lógica para enviar o formulário
        console.log("Formulário enviado:", formData);
        alert("Obrigado! Entraremos em contacto em breve.");
        onClose();
        setFormData({ nome: "", email: "", contacto: "", empresa: "", servico: "", ideia: "" });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fadeIn"
            onClick={onClose}
        >
            <div
                className="relative bg-gradient-to-br from-gray-900 to-black border border-violet-500/30 rounded-2xl p-8 md:p-10 w-[90%] max-w-2xl shadow-[0_20px_60px_rgba(139,92,246,0.4)] animate-scaleIn"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors text-2xl font-bold"
                    aria-label="Fechar"
                >
                    ×
                </button>

                {/* Header */}
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Pedir Orçamento</h2>
                <p className="text-gray-400 mb-6">Preencha o formulário e entraremos em contacto consigo.</p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label htmlFor="nome" className="block text-sm font-medium text-gray-300 mb-2">
                            Nome *
                        </label>
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            value={formData.nome}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-black/50 border border-violet-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition"
                            placeholder="O seu nome"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                            Email *
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-black/50 border border-violet-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition"
                            placeholder="exemplo@email.com"
                        />
                    </div>

                    <div>
                        <label htmlFor="contacto" className="block text-sm font-medium text-gray-300 mb-2">
                            Contacto *
                        </label>
                        <input
                            type="tel"
                            id="contacto"
                            name="contacto"
                            value={formData.contacto}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-black/50 border border-violet-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition"
                            placeholder="+351 000 000 000"
                        />
                    </div>

                    <div>
                        <label htmlFor="empresa" className="block text-sm font-medium text-gray-300 mb-2">
                            Empresa
                        </label>
                        <input
                            type="text"
                            id="empresa"
                            name="empresa"
                            value={formData.empresa}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-black/50 border border-violet-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition"
                            placeholder="Nome da empresa (opcional)"
                        />
                    </div>

                    <div>
                        <label htmlFor="servico" className="block text-sm font-medium text-gray-300 mb-2">
                            Selecione o seu serviço *
                        </label>
                        <select
                            id="servico"
                            name="servico"
                            value={formData.servico}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-black/50 border border-violet-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition cursor-pointer"
                        >
                            <option value="">Escolha um serviço...</option>
                            <option value="Motion Design">Motion Design</option>
                            <option value="Web Design">Web Design</option>
                            <option value="Edição de Vídeo">Edição de Vídeo</option>
                            <option value="App Design">App Design</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="ideia" className="block text-sm font-medium text-gray-300 mb-2">
                            Ideia / Projeto *
                        </label>
                        <textarea
                            id="ideia"
                            name="ideia"
                            value={formData.ideia}
                            onChange={handleChange}
                            required
                            rows={4}
                            className="w-full px-4 py-3 bg-black/50 border border-violet-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition resize-none"
                            placeholder="Conte-nos sobre o seu projeto..."
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#5E3BB3] hover:bg-[#6d47c9] text-white font-semibold py-3.5 rounded-full transition-all duration-300 shadow-[0_10px_30px_rgba(139,92,246,0.5)] hover:shadow-[0_15px_40px_rgba(139,92,246,0.7)] hover:scale-[1.02]"
                    >
                        Enviar Pedido
                    </button>
                </form>
            </div>
        </div>
    );
}
