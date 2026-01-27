import React, { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Heart, Users, Trophy, Dumbbell, Target, Brain } from 'lucide-react';

// Import images
import heroImage from '../assets/esportes_alvaro/equipamentos_esportivos.png';
import judoCriancasImg from '../assets/esportes_alvaro/judo_criancas.png';
import judoAdultosImg from '../assets/esportes_alvaro/judo_adultos.png';
import voleibolImg from '../assets/esportes_alvaro/voleibol.png';
import balletImg from '../assets/esportes_alvaro/ballet.jpg';
import funcionalImg from '../assets/esportes_alvaro/exercicios_funcionais.png';
import basqueteImg from '../assets/esportes_alvaro/basquete.jpg';
import tenisImg from '../assets/esportes_alvaro/tenis.jpg';

gsap.registerPlugin(ScrollTrigger);

const Esportes = () => {
    const containerRef = useRef();

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // Hero Animations
            const tl = gsap.timeline();
            tl.from(".hero-content", {
                y: 50,
                opacity: 0,
                duration: 1.2,
                ease: "power4.out"
            });

            // Parallax effect on hero background
            gsap.to(".hero-bg", {
                scale: 1.2,
                scrollTrigger: {
                    trigger: ".hero-section",
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            });

            // Section titles animation - Individual triggers for each title
            const titles = gsap.utils.toArray(".section-title");
            titles.forEach((title) => {
                gsap.from(title, {
                    y: 30,
                    opacity: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: title,
                        start: "top 90%",
                        toggleActions: "play none none none"
                    }
                });
            });

            // Sport cards - Using batch for better grid reliability
            ScrollTrigger.batch(".sport-card", {
                onEnter: batch => gsap.fromTo(batch,
                    { opacity: 0, y: 50 },
                    { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out", overwrite: true }
                ),
                start: "top 85%"
            });

            // Benefits cards - Using batch
            ScrollTrigger.batch(".benefit-card", {
                onEnter: batch => gsap.fromTo(batch,
                    { opacity: 0, y: 40 },
                    { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power3.out", overwrite: true }
                ),
                start: "top 85%"
            });

            // Gallery images - Using batch
            ScrollTrigger.batch(".gallery-img", {
                onEnter: batch => gsap.fromTo(batch,
                    { opacity: 0, scale: 0.9 },
                    { opacity: 1, scale: 1, duration: 0.6, stagger: 0.1, ease: "power2.out", overwrite: true }
                ),
                start: "top 85%"
            });

            // Handle layout shifts from images
            window.addEventListener('load', () => ScrollTrigger.refresh());
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const sports = [
        {
            name: "Judô Infantil",
            image: judoCriancasImg,
            description: "Disciplina, respeito e coordenação motora para crianças através da arte marcial japonesa."
        },
        {
            name: "Judô Adulto",
            image: judoAdultosImg,
            description: "Arte marcial completa que desenvolve corpo e mente para todas as idades."
        },
        {
            name: "Vôlei",
            image: voleibolImg,
            description: "Trabalho em equipe, coordenação e estratégia através do esporte coletivo mais popular."
        },
        {
            name: "Ballet",
            image: balletImg,
            description: "Expressão artística, postura e consciência corporal através da dança clássica."
        },
        {
            name: "Treinamento Funcional",
            image: funcionalImg,
            description: "Condicionamento físico completo com exercícios que melhoram a saúde e qualidade de vida."
        },
        {
            name: "Basquete",
            image: basqueteImg,
            description: "Estratégia, espírito de equipe e habilidades motoras no esporte da cesta."
        },
        {
            name: "Tênis",
            image: tenisImg,
            description: "Precisão, foco e desenvolvimento individual através do esporte de raquete."
        },
        {
            name: "Esportes Diversos",
            image: heroImage,
            description: "Variedade de atividades esportivas para todos os gostos e idades."
        }
    ];

    const benefits = [
        {
            icon: Dumbbell,
            title: "Condicionamento Físico",
            description: "Melhora da saúde cardiovascular e fortalecimento muscular",
            color: "bg-orange-500"
        },
        {
            icon: Target,
            title: "Disciplina",
            description: "Desenvolvimento de foco, compromisso e autodisciplina",
            color: "bg-blue-600"
        },
        {
            icon: Users,
            title: "Trabalho em Equipe",
            description: "Socialização e habilidades de cooperação",
            color: "bg-purple-600"
        },
        {
            icon: Brain,
            title: "Saúde Mental",
            description: "Redução do estresse e melhora do bem-estar emocional",
            color: "bg-pink-500"
        }
    ];

    const galleryImages = [
        { img: judoCriancasImg, alt: "Judô Infantil em ação" },
        { img: voleibolImg, alt: "Vôlei - trabalho em equipe" },
        { img: balletImg, alt: "Ballet - expressão artística" },
        { img: funcionalImg, alt: "Treinamento funcional" },
        { img: basqueteImg, alt: "Basquete recreativo" },
        { img: tenisImg, alt: "Tênis - precisão e foco" }
    ];

    const scrollToModalities = () => {
        document.querySelector('.sports-grid')?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };

    return (
        <div ref={containerRef} className="overflow-x-hidden">
            {/* Hero Section */}
            <section className="hero-section relative h-screen w-full flex items-center justify-center overflow-hidden">
                <div className="hero-bg absolute inset-0 z-0">
                    <img
                        src={heroImage}
                        alt="Esportes ICP"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-slate-900/60 transition-all duration-500"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/40"></div>
                </div>

                <div className="hero-content relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white space-y-8">
                    <h1 className="text-5xl md:text-8xl font-bold leading-tight">
                        Esporte que <span className="text-institutional-orange">transforma</span> vidas
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-200 leading-relaxed max-w-3xl mx-auto">
                        Através do esporte, promovemos saúde, inclusão social e cidadania, transformando vidas e construindo um futuro melhor para nossa comunidade.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <button
                            onClick={scrollToModalities}
                            className="bg-institutional-orange text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-orange-600 transition-all hover:scale-105 shadow-2xl shadow-orange-500/30"
                        >
                            Ver Modalidades
                        </button>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hero-content">
                    <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
                        <div className="w-1 h-2 bg-white rounded-full animate-bounce"></div>
                    </div>
                </div>
            </section>

            {/* About Sports Section */}
            <section className="py-24 bg-slate-50 relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.1)] rounded-t-[3rem] -mt-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6 section-title">
                            <h2 className="text-3xl md:text-4xl font-bold text-institutional-blue">
                                Transformação através do movimento
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                No Instituto Casa do Pai, acreditamos que o esporte é uma ferramenta poderosa de transformação social. Nossas atividades esportivas vão além do desenvolvimento físico.
                            </p>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Promovemos valores como disciplina, respeito, trabalho em equipe e autoconfiança. Cada modalidade é cuidadosamente planejada para desenvolver habilidades sociais, emocionais e cognitivas, contribuindo para a formação integral de crianças, jovens e adultos.
                            </p>
                            <ul className="space-y-4">
                                {['Desenvolvimento Físico Completo', 'Valores e Cidadania', 'Inclusão e Respeito', 'Saúde Mental e Bem-estar'].map((item) => (
                                    <li key={item} className="flex items-center space-x-3 text-slate-700 font-medium">
                                        <div className="w-2 h-2 bg-institutional-orange rounded-full"></div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="section-title">
                            <img
                                src={funcionalImg}
                                alt="Atividades esportivas ICP"
                                className="rounded-[3rem] shadow-2xl shadow-slate-200"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Sports Modalities Grid */}
            <section className="sports-grid py-24 bg-white relative z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="section-title text-3xl md:text-5xl font-bold text-institutional-blue mb-4">
                            Nossas Modalidades Esportivas
                        </h2>
                        <p className="section-title text-lg text-slate-500">
                            Diversas opções para todas as idades e interesses
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {sports.map((sport, index) => (
                            <div
                                key={index}
                                className="sport-card bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-100 border border-slate-50 hover:shadow-2xl hover:shadow-slate-200 transition-all duration-300 hover:-translate-y-2 group"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={sport.image}
                                        alt={sport.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                                </div>
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold text-institutional-blue mb-3">
                                        {sport.name}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed mb-6">
                                        {sport.description}
                                    </p>
                                    <button className="bg-institutional-orange hover:bg-orange-600 text-white px-6 py-3 rounded-full font-bold transition-all hover:scale-105 shadow-lg shadow-orange-200">
                                        Saiba mais
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="benefits-section py-24 bg-slate-50 relative z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="section-title text-3xl md:text-5xl font-bold text-institutional-blue mb-4">
                            Benefícios do Esporte
                        </h2>
                        <p className="section-title text-lg text-slate-500">
                            Transformação completa através da atividade física
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="benefit-card text-center p-8 bg-white rounded-3xl shadow-xl shadow-slate-100 border border-slate-50 hover:shadow-2xl hover:shadow-slate-200 transition-all duration-300"
                            >
                                <div className={`w-16 h-16 ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg`}>
                                    <benefit.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-institutional-blue mb-3">
                                    {benefit.title}
                                </h3>
                                <p className="text-slate-500">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="gallery-section py-24 bg-white relative z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="section-title text-3xl md:text-5xl font-bold text-institutional-blue mb-4">
                            Galeria de Atividades
                        </h2>
                        <p className="section-title text-lg text-slate-500">
                            Veja nossos atletas em ação
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {galleryImages.map((item, index) => (
                            <div
                                key={index}
                                className="gallery-img relative h-80 rounded-3xl overflow-hidden shadow-xl shadow-slate-200 group cursor-pointer"
                            >
                                <img
                                    src={item.img}
                                    alt={item.alt}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-institutional-blue/0 group-hover:bg-institutional-blue/20 transition-colors duration-300"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Esportes;
