import React, { useLayoutEffect, useRef } from 'react';
import {
    GraduationCap, Palette, Trophy, Monitor,
    Briefcase, Quote, Heart, Target, Users2
} from 'lucide-react';
import Template from './Template';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Imagens
import slidesSite2 from '../assets/quem_somos/Slides_site2.avif';

gsap.registerPlugin(ScrollTrigger);

const PilarItem = ({ icon: Icon, label }) => (
    <div className="flex flex-col items-center gap-3 group">
        <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center group-hover:bg-institutional-blue group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1">
            <Icon className="w-8 h-8" />
        </div>
        <span className="text-slate-600 font-bold text-sm uppercase tracking-wider">{label}</span>
    </div>
);

const QuemSomos = () => {
    const mainRef = useRef();
    const heroRef = useRef();
    const imageBoxRef = useRef();
    const contentRef = useRef();

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // Hero Animation
            gsap.from(heroRef.current, {
                y: 50,
                opacity: 0,
                duration: 1.2,
                ease: 'power4.out'
            });

            // Image Reveal Animation
            gsap.from(imageBoxRef.current, {
                scale: 0.95,
                opacity: 0,
                y: 30,
                duration: 1.5,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: imageBoxRef.current,
                    start: 'top 85%',
                }
            });

            // Content Stagger
            gsap.from('.reveal-text', {
                y: 30,
                opacity: 0,
                stagger: 0.2,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: contentRef.current,
                    start: 'top 80%',
                }
            });
        }, mainRef);
        return () => ctx.revert();
    }, []);

    return (
        <Template title="Quem Somos">
            <div ref={mainRef} className="max-w-6xl mx-auto space-y-24 pb-12">

                {/* 1. Header Hero Minimalista */}
                <section ref={heroRef} className="text-center space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-institutional-blue/5 text-institutional-blue rounded-full text-sm font-bold tracking-wide uppercase">
                        <Heart className="w-4 h-4" /> Nossa História
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-slate-800 leading-tight">
                        Há 18 anos,<br />
                        <span className="text-institutional-blue">transformamos vidas.</span>
                    </h1>
                </section>

                {/* 3. Narrativa Storytelling */}
                <section ref={contentRef} className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start px-4">
                    <div className="space-y-8">
                        <div className="reveal-text">
                            <Quote className="w-12 h-12 text-institutional-orange/30 mb-4" />
                            <p className="text-2xl md:text-3xl font-bold text-slate-800 leading-tight">
                                Somos um ponto de encontro para a transformação social em Itaguaí/RJ.
                            </p>
                        </div>
                        <p className="reveal-text text-xl text-slate-600 leading-relaxed">
                            Nosso propósito é converter a responsabilidade social em ação real e integrada,
                            rompendo barreiras sociais e etárias ao acolher crianças, jovens, adultos e idosos.
                        </p>
                        <div className="reveal-text flex items-center gap-6 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
                            <div className="w-12 h-12 bg-institutional-orange/10 rounded-full flex items-center justify-center text-institutional-orange">
                                <Target className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-800">Propósito Real</h4>
                                <p className="text-sm text-slate-500">Transformação integrada e acolhimento humano.</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8 lg:pt-12">
                        <p className="reveal-text text-xl text-slate-600 leading-relaxed">
                            Enxergamos cada projeto social como um instrumento educacional poderoso, que,
                            ao se articular com as demais políticas públicas, não apenas oferece oportunidades,
                            mas forja futuros.
                        </p>
                        <p className="reveal-text text-xl text-slate-600 leading-relaxed">
                            Capacitamos a comunidade para a inclusão social e digital, provando que a
                            verdadeira mudança acontece quando se investe no potencial humano.
                        </p>
                        <div className="reveal-text flex items-center gap-6 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
                            <div className="w-12 h-12 bg-institutional-blue/10 rounded-full flex items-center justify-center text-institutional-blue">
                                <Users2 className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-800">Inclusão Digital</h4>
                                <p className="text-sm text-slate-500">Capacitando a comunidade para o amanhã.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. Imagem Focal Principal */}
                <section
                    ref={imageBoxRef}
                    className="relative group px-4"
                >
                    <div className="absolute inset-x-4 inset-y-0 bg-institutional-blue/10 rounded-[3.5rem] -rotate-1 blur-2xl group-hover:rotate-1 transition-transform duration-700"></div>
                    <div className="relative overflow-hidden rounded-[3.5rem] border-8 border-white shadow-2xl">
                        <img
                            src={slidesSite2}
                            alt="Instituto Casa do Pai em ação"
                            className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-[2000ms]"
                        />
                    </div>
                </section>

            </div>
        </Template>
    );
};

export default QuemSomos;
