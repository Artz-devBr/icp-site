import React, { useState, useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X, Heart } from 'lucide-react';
import gsap from 'gsap';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isAtuacaoOpen, setIsAtuacaoOpen] = useState(false);
    const [isProgramasOpen, setIsProgramasOpen] = useState(false);
    const atuacaoRef = useRef();
    const programasRef = useRef();
    const navRef = useRef();

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // Atuação Dropdown
            if (isAtuacaoOpen) {
                gsap.to(atuacaoRef.current, {
                    opacity: 1,
                    y: 0,
                    display: 'block',
                    duration: 0.3,
                    ease: 'power2.out'
                });
            } else {
                gsap.to(atuacaoRef.current, {
                    opacity: 0,
                    y: -10,
                    display: 'none',
                    duration: 0.2,
                    ease: 'power2.in'
                });
            }

            // Programas Dropdown
            if (isProgramasOpen) {
                gsap.to(programasRef.current, {
                    opacity: 1,
                    y: 0,
                    display: 'block',
                    duration: 0.3,
                    ease: 'power2.out'
                });
            } else {
                gsap.to(programasRef.current, {
                    opacity: 0,
                    y: -10,
                    display: 'none',
                    duration: 0.2,
                    ease: 'power2.in'
                });
            }
        }, navRef);
        return () => ctx.revert();
    }, [isAtuacaoOpen, isProgramasOpen]);

    const programsRoutes = [
        { name: 'Empreendedorismo', path: '/empreendedorismo' },
        { name: 'Educação e Cultura', path: '/educacao-cultura' },
        { name: 'Tecnologia', path: '/tecnologia' },
        { name: 'Esporte e Saúde', path: '/esporte-saude' },
    ];

    const actingRoutes = [
        { name: 'Transparência', path: '/transparencia' },
        { name: 'Eventos', path: '/eventos' },
        { name: 'Parceiros e Empresas', path: '/parceiros' },
        { name: 'Editais', path: '/editais' },
        { name: 'Contato', path: '/contato' },
    ];

    return (
        <nav ref={navRef} className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <img
                            src="/logo.avif"
                            alt="ICP Logo"
                            className="h-16 w-auto object-contain hover:scale-105 transition-transform"
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/" className="text-slate-600 hover:text-institutional-blue font-medium transition-colors">Home</Link>
                        <Link to="/quem-somos" className="text-slate-600 hover:text-institutional-blue font-medium transition-colors">Quem Somos</Link>
                        <Link to="/pilares" className="text-slate-600 hover:text-institutional-blue font-medium transition-colors">Pilares</Link>

                        {/* Programas Dropdown */}
                        <div
                            className="relative group"
                            onMouseEnter={() => setIsProgramasOpen(true)}
                            onMouseLeave={() => setIsProgramasOpen(false)}
                        >
                            <button className="flex items-center text-slate-600 hover:text-institutional-blue font-medium transition-colors py-8">
                                Programas <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${isProgramasOpen ? 'rotate-180' : ''}`} />
                            </button>

                            <div
                                ref={programasRef}
                                className="absolute top-full left-0 w-64 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden hidden opacity-0 -translate-y-2"
                            >
                                <div className="py-3 px-2 grid grid-cols-1 gap-1">
                                    {programsRoutes.map((route) => (
                                        <Link
                                            key={route.path}
                                            to={route.path}
                                            className="px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-institutional-blue rounded-xl transition-all"
                                        >
                                            {route.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Nossa Atuação Dropdown */}
                        <div
                            className="relative group"
                            onMouseEnter={() => setIsAtuacaoOpen(true)}
                            onMouseLeave={() => setIsAtuacaoOpen(false)}
                        >
                            <button className="flex items-center text-slate-600 hover:text-institutional-blue font-medium transition-colors py-8">
                                Nossa Atuação <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${isAtuacaoOpen ? 'rotate-180' : ''}`} />
                            </button>

                            <div
                                ref={atuacaoRef}
                                className="absolute top-full left-0 w-64 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden hidden opacity-0 -translate-y-2"
                            >
                                <div className="py-3 px-2 grid grid-cols-1 gap-1">
                                    {actingRoutes.map((route) => (
                                        <Link
                                            key={route.path}
                                            to={route.path}
                                            className="px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-institutional-blue rounded-xl transition-all"
                                        >
                                            {route.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <Link to="/doar" className="bg-institutional-orange hover:bg-orange-600 text-white px-6 py-3 rounded-full font-bold flex items-center space-x-2 transition-all hover:scale-105 shadow-lg shadow-orange-200">
                            <Heart className="w-4 h-4" />
                            <span>DOE AGORA</span>
                        </Link>
                    </div>

                    {/* Mobile toggle */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 p-2">
                            {isOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-b border-slate-100 max-h-[80vh] overflow-y-auto">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        <Link to="/" className="block px-4 py-3 text-slate-600 font-medium" onClick={() => setIsOpen(false)}>Home</Link>
                        <Link to="/quem-somos" className="block px-4 py-3 text-slate-600 font-medium" onClick={() => setIsOpen(false)}>Quem Somos</Link>
                        <Link to="/pilares" className="block px-4 py-3 text-slate-600 font-medium" onClick={() => setIsOpen(false)}>Pilares</Link>

                        {/* Programas Mobile */}
                        <div className="px-4 py-3 font-bold text-institutional-blue bg-slate-50 rounded-xl">Programas</div>
                        <div className="pl-6 space-y-1">
                            {programsRoutes.map((route) => (
                                <Link
                                    key={route.path}
                                    to={route.path}
                                    className="block px-4 py-2 text-slate-500 hover:text-institutional-blue transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {route.name}
                                </Link>
                            ))}
                        </div>

                        {/* Nossa Atuação Mobile */}
                        <div className="px-4 py-3 font-bold text-institutional-blue bg-slate-50 rounded-xl">Nossa Atuação</div>
                        <div className="pl-6 space-y-1">
                            {actingRoutes.map((route) => (
                                <Link
                                    key={route.path}
                                    to={route.path}
                                    className="block px-4 py-2 text-slate-500 hover:text-institutional-blue transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {route.name}
                                </Link>
                            ))}
                        </div>

                        <Link
                            to="/doar"
                            className="mt-4 block bg-institutional-orange text-white text-center px-6 py-4 rounded-xl font-bold"
                            onClick={() => setIsOpen(false)}
                        >
                            DOE AGORA
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
