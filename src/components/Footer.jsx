import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Facebook, Mail, Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Column 1: Identity */}
                    <div className="space-y-6">
                        <Link to="/" className="inline-block">
                            <img
                                src="/logo.avif"
                                alt="ICP Logo"
                                className="h-16 w-auto brightness-0 invert"
                            />
                        </Link>
                        <p className="text-sm leading-relaxed">
                            Certificação de Entidade Beneficente de Assistência Social (CEBAS) do Ministério do Desenvolvimento Social.
                        </p>
                        <div className="space-y-2">
                            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Nossas Filiais</h4>
                            <ul className="text-sm space-y-1">
                                <li>Filial Brasília</li>
                                <li>Filial Rio Grande do Sul</li>
                                <li>Filial São Paulo</li>
                            </ul>
                        </div>
                    </div>

                    {/* Column 2: Quick Links / Visit */}
                    <div className="space-y-6">
                        <h3 className="text-white font-bold text-lg flex items-center gap-2">
                            <MapPin className="w-5 h-5 text-institutional-orange" />
                            Venha nos visitar
                        </h3>
                        <p className="text-sm leading-relaxed">
                            R. Pref. José Maria de Brito, 201 - Monte Serrat, Itaguaí - RJ, 23810-720, Brasil
                        </p>
                        <div className="space-y-4 pt-2">
                            <h3 className="text-white font-bold text-lg flex items-center gap-2">
                                <Clock className="w-5 h-5 text-institutional-orange" />
                                Atendimento
                            </h3>
                            <div className="text-sm space-y-1">
                                <p>Segunda a sexta das 8h às 18h</p>
                                <p>Sábado das 8h às 13h</p>
                            </div>
                        </div>
                    </div>

                    {/* Column 3: Contact */}
                    <div className="space-y-6">
                        <h3 className="text-white font-bold text-lg">Contato</h3>
                        <div className="space-y-4 text-sm">
                            <a href="tel:2198227460" className="flex items-center hover:text-white transition-colors">
                                <div className="w-6 h-8  flex items-center">
                                    <Phone className="w-4 h-4 text-institutional-orange" />
                                </div>
                                (21) 98227-460
                            </a>
                            <a href="mailto:contato@institutocasadopai.org.br" className="flex items-center hover:text-white transition-colors">
                                <div className="w-8 h-8  flex items-center">
                                    <Mail className="w-4 h-4 text-institutional-orange" />
                                </div>
                                contato@institutocasadopai.org.br
                            </a>
                            <div className="pt-2">
                                <p className="text-xs text-slate-500 mb-1 uppercase tracking-tighter">CNPJ</p>
                                <p className="font-mono text-slate-400">08.913.297/0001-98</p>
                            </div>
                        </div>
                    </div>

                    {/* Column 4: Social & Terms */}
                    <div className="space-y-6">
                        <h3 className="text-white font-bold text-lg">Redes Sociais</h3>
                        <p className="text-sm text-slate-400">
                            Nos acompanhe nas redes sociais do instituto e confira as nossas ações.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-institutional-blue transition-colors text-slate-400 hover:text-white">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-500 transition-colors text-slate-400 hover:text-white">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors text-slate-400 hover:text-white">
                                <Facebook className="w-5 h-5" />
                            </a>
                        </div>
                        <div className="pt-8">
                            <Link to="/termos" className="text-xs font-bold text-slate-500 hover:text-institutional-orange transition-colors tracking-widest uppercase">
                                Termos de Uso
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 mt-8 border-t border-slate-800 text-center text-xs text-slate-500">
                    <p>© 2026 Direitos autorais reservados ao Instituto Casa do Pai.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
