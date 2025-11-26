import logoLSX from '../assets/logolsx.png';

export default function Footer() {
    return (
        <footer id="footer" className="w-full bg-gradient-to-b from-pink-100 to-pink-50 py-12 md:py-16 relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <img src={logoLSX} alt="LSX Studio" className="h-96 md:h-[600px] opacity-20" />
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col items-center gap-12">
                    {/* Navigation Links */}
                    <div className="flex flex-col md:flex-row gap-8 md:gap-16 text-center text-white">
                        <div>
                            <h3 className="text-sm font-semibold text-white mb-3 uppercase tracking-wide">
                                Páginas
                            </h3>
                            <ul className="space-y-2 text-sm text-white">
                                <li>
                                    <a href="#projetos" className="hover:text-purple-600 transition-colors">
                                        Projetos
                                    </a>
                                </li>
                                <li>
                                    <a href="#sobre-nos" className="hover:text-purple-600 transition-colors">
                                        Sobre nós
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h3 className="text-sm font-semibold text-white mb-3 uppercase tracking-wide">
                                Contactos
                            </h3>
                            <ul className="space-y-2 text-sm text-white">
                                <li>
                                    <a href="mailto:lsx-studio@outlook.com" className="hover:text-purple-600 transition-colors">
                                        lsx-studio@outlook.com
                                    </a>
                                </li>
                                <li>
                                    <a href="tel:+351123123123" className="hover:text-purple-600 transition-colors">
                                        +351 123-123-123
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Social Media */}
                        <div>
                            <h3 className="text-sm font-semibold text-white mb-3 uppercase tracking-wide">
                                Redes Sociais
                            </h3>
                            <ul className="space-y-2 text-sm text-white">
                                <li>
                                    <a href="https://www.instagram.com/lsx_studio/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 transition-colors">
                                        Instagram
                                    </a>
                                </li>
                                <li>
                                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 transition-colors">
                                        Linkedin
                                    </a>
                                </li>
                                <li>
                                    <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 transition-colors">
                                        Tiktok
                                    </a>
                                </li>
                            </ul>
                        </div>


                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-300 mt-12 pt-8 relative z-10">
                    <p className="text-center text-sm text-white">
                        © 2024 LSX Studio. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}
