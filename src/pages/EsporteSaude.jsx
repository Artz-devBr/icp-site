// Workflow GIT:
// Fazer o Fork.
// Criar a branch: git checkout -b feature/pagina-esporte-saude-nomedoaluno.
// Desenvolver apenas dentro do arquivo src/pages/EsporteSaude.jsx.
// Adicionar, comitar e fazer o Push.
// Fazer o Pull Request para o repositório original.

import React, { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Heart, Users, Trophy, Dumbbell, Target, Brain } from 'lucide-react';
import Template from './Template';

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

const EsporteSaude = () => {
    const containerRef = useRef();

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
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

    return (
        <Template title="Esporte e Saúde">
            <div ref={containerRef} className="space-y-24">
                {/* About Sports Section */}
                <section className="relative">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6 section-title">
                            <h2 className="text-3xl md:text-4xl font-bold text-institutional-blue">
                                Transformação através do movimento
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                No Instituto Casa do Pai, acreditamos que o esporte e a saúde são ferramentas poderosas de transformação social. Nossas atividades vão além do desenvolvimento físico.
                            </p>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Promovemos valores como disciplina, respeito, trabalho em equipe e autoconfiança. Cada modalidade é cuidadosamente planejada para desenvolver habilidades sociais, emocionais e cognitivas.
                            </p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {['Desenvolvimento Físico', 'Valores e Cidadania', 'Inclusão e Respeito', 'Saúde Mental'].map((item) => (
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
                                className="rounded-3xl shadow-xl shadow-slate-200 object-cover w-full h-[400px]"
                            />
                        </div>
                    </div>
                </section>

                {/* Sports Modalities Grid */}
                <section className="sports-grid">
                    <div className="text-center mb-16">
                        <h2 className="section-title text-3xl md:text-4xl font-bold text-institutional-blue mb-4">
                            Nossas Modalidades
                        </h2>
                        <p className="section-title text-lg text-slate-500">
                            Diversas opções para todas as idades e interesses
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {sports.map((sport, index) => (
                            <div
                                key={index}
                                className="sport-card bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 hover:shadow-xl hover:shadow-slate-200 transition-all duration-300 group"
                            >
                                <div className="relative h-56 overflow-hidden">
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
                                    <button className="text-institutional-orange font-bold hover:underline flex items-center">
                                        Saiba mais →
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="benefits-section">
                    <div className="text-center mb-16">
                        <h2 className="section-title text-3xl md:text-4xl font-bold text-institutional-blue mb-4">
                            Benefícios do Esporte
                        </h2>
                        <p className="section-title text-lg text-slate-500">
                            Transformação completa através da atividade física
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="benefit-card flex items-start space-x-6 p-8 bg-slate-50 rounded-3xl border border-slate-100"
                            >
                                <div className={`flex-shrink-0 w-14 h-14 ${benefit.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                                    <benefit.icon className="w-7 h-7" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-institutional-blue mb-2">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-slate-500 leading-relaxed">
                                        {benefit.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Gallery Section */}
                <section className="gallery-section">
                    <div className="text-center mb-12">
                        <h2 className="section-title text-3xl md:text-4xl font-bold text-institutional-blue mb-4">
                            Galeria em Ação
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {galleryImages.map((item, index) => (
                            <div
                                key={index}
                                className="gallery-img relative h-48 md:h-64 rounded-2xl overflow-hidden group cursor-pointer"
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
                </section>
            </div>
        </Template>
    );
};

export default EsporteSaude;
