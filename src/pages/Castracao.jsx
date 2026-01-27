import React, { useEffect, useRef } from 'react';
import Template from './Template';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import rigbyGif from '../assets/fotos/rigby-cat-rigby.gif';

const Castracao = () => {
    const textRef = useRef(null);
    const cardsRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Parallax effect
            gsap.to(imageRef.current, {
                yPercent: 30,
                ease: "none",
                scrollTrigger: {
                    trigger: imageRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            });

            // Text Animations
            gsap.fromTo(textRef.current,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: textRef.current,
                        start: "top 85%",
                    }
                }
            );

            // Cards Stagger
            gsap.fromTo(cardsRef.current.children,
                { opacity: 0, scale: 0.9 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: cardsRef.current,
                        start: "top 80%",
                    }
                }
            );
        });

        return () => ctx.revert();
    }, []);

    return (
        <Template title="Castração">
            <div className="space-y-12 pb-12">

                {/* Parallax Hero Section - Funny Dog */}
                <div className="relative h-[400px] overflow-hidden rounded-2xl shadow-xl group">
                    <div
                        ref={imageRef}
                        className="absolute -top-1/4 left-0 w-full h-[150%] bg-cover bg-center pointer-events-none blur-[2px]"
                        style={{
                            backgroundImage: "url('https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?q=80&w=2574&auto=format&fit=crop')"
                        }}
                    >
                        <div className="absolute inset-0 bg-black/40" />
                    </div>

                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
                        <h2 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg mb-4">
                            Cuidado e Respeito à Vida
                        </h2>
                        <p className="text-white/90 text-lg max-w-2xl">
                            Promovendo o equilíbrio ambiental e o bem-estar animal
                        </p>
                    </div>
                </div>

                {/* Main Content */}
                <div ref={textRef} className="max-w-4xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-10">
                        <div className="flex-1 space-y-6 text-slate-600 leading-relaxed text-lg">
                            <p>
                                Reconhecendo a importância dos animais para o equilíbrio ambiental e o bem-estar humano, o <strong>Instituto Casa do Pai</strong> dedica esforços significativos à promoção e defesa animal.
                            </p>
                            <p>
                                Realizamos <span className="text-pink-600 font-bold">mutirões de castrações</span>, campanhas de adoção responsável, ações de bem-estar e cuidados veterinários.
                            </p>
                            <p className="italic bg-pink-50 p-4 rounded-lg border-l-4 border-pink-400">
                                "Visamos conscientizar a comunidade sobre a guarda responsável e o respeito à vida animal."
                            </p>
                        </div>
                        <div className="w-full md:w-1/3">
                            <div className="aspect-square rounded-full overflow-hidden border-8 border-pink-100 shadow-lg relative">
                                <img
                                    src={rigbyGif}
                                    alt="Gato com língua para fora"
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Cards Section */}
                <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
                    <div className="bg-white p-6 rounded-3xl shadow-lg border-2 border-pink-100 transform transition hover:-translate-y-2">
                        <div className="h-12 w-12 bg-pink-100 rounded-full flex items-center justify-center text-2xl mb-4">🏥</div>
                        <h4 className="text-lg font-bold text-slate-800 mb-2">Mutirões de Castração</h4>
                        <p className="text-slate-600">
                            Controle populacional ético e prevenção de doenças para cães e gastos da comunidade.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-3xl shadow-lg border-2 border-blue-100 transform transition hover:-translate-y-2">
                        <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl mb-4">🏠</div>
                        <h4 className="text-lg font-bold text-slate-800 mb-2">Adoção Responsável</h4>
                        <p className="text-slate-600">
                            Encontramos lares amorosos para animais resgatados, garantindo um futuro seguro.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-3xl shadow-lg border-2 border-green-100 transform transition hover:-translate-y-2">
                        <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center text-2xl mb-4">📢</div>
                        <h4 className="text-lg font-bold text-slate-800 mb-2">Conscientização</h4>
                        <p className="text-slate-600">
                            Palestras e ações educativas sobre guarda responsável e respeito à vida.
                        </p>
                    </div>
                </div>

            </div>
        </Template>
    );
};

export default Castracao;
