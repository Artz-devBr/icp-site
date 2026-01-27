import React, { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Heart, Users, BookOpen, Utensils } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Counter = ({ end, label, icon: Icon, color }) => {
    const ref = useRef();

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(ref.current, {
                textContent: 0,
                duration: 2,
                ease: "power2.out",
                snap: { textContent: 1 },
                scrollTrigger: {
                    trigger: ref.current,
                    start: "top 90%",
                }
            });
        });
        return () => ctx.revert();
    }, [end]);

    return (
        <div className="text-center p-8 bg-white rounded-3xl shadow-xl shadow-slate-100 border border-slate-50">
            <div className={`w-16 h-16 ${color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg`}>
                <Icon className="w-8 h-8" />
            </div>
            <div className="text-4xl font-bold text-institutional-blue mb-2" ref={ref}>
                {end}
            </div>
            <div className="text-slate-500 font-medium">{label}</div>
        </div>
    );
};

const Home = () => {
    const heroRef = useRef();

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // Hero Animations
            const tl = gsap.timeline();
            tl.from(".hero-title", {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power4.out"
            })
                .from(".hero-text", {
                    y: 30,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.out"
                }, "-=0.5")
                .from(".hero-cta", {
                    scale: 0.8,
                    opacity: 0,
                    duration: 0.5,
                    ease: "back.out(1.7)"
                }, "-=0.3");

            // Shared section animation
            gsap.from(".section-title", {
                y: 40,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: ".section-title",
                    start: "top 85%",
                }
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={heroRef} className="overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center pt-20">
                <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
                    <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <h1 className="hero-title text-5xl md:text-7xl font-bold text-institutional-blue leading-tight">
                            Transformando <span className="text-institutional-orange">Vidas</span> através do Amor.
                        </h1>
                        <p className="hero-text text-xl text-slate-600 leading-relaxed max-w-2xl">
                            O Instituto Casa do Pai é um polo de impacto social dedicado a oferecer educação, cultura e apoio para comunidades em situação de vulnerabilidade.
                        </p>
                        <div className="hero-cta flex flex-wrap gap-4">
                            <Link to="/doar" className="bg-institutional-orange text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-600 transition-all shadow-xl shadow-orange-200">
                                Quero Ajudar
                            </Link>
                            <Link to="/quem-somos" className="bg-white text-institutional-blue border-2 border-institutional-blue px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition-all">
                                Conheça nossa História
                            </Link>
                        </div>
                    </div>

                    <div className="relative hero-text">
                        <div className="aspect-square bg-slate-200 rounded-[3rem] overflow-hidden shadow-2xl relative">
                            {/* Placeholder for impact image */}
                            <div className="absolute inset-0 bg-gradient-to-br from-institutional-blue/20 to-transparent"></div>
                            <img
                                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                                alt="Impacto Social"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                    <Heart className="w-6 h-6 fill-current" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-slate-800">+500 Famílias</p>
                                    <p className="text-xs text-slate-500">Atendidas mensalmente</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Numbers Section */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="section-title text-3xl md:text-5xl font-bold text-institutional-blue mb-4">
                            Números que Transformam
                        </h2>
                        <p className="section-title text-lg text-slate-500">Nossa transparência é o que nos move adiante.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <Counter end={1200} label="Refeições/Mês" icon={Utensils} color="bg-orange-500" />
                        <Counter end={350} label="Alunos" icon={BookOpen} color="bg-blue-600" />
                        <Counter end={45} label="Voluntários" icon={Users} color="bg-purple-600" />
                        <Counter end={12} label="Projetos Ativos" icon={Heart} color="bg-pink-500" />
                    </div>
                </div>
            </section>

            {/* Actions Summary */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6 section-title">
                            <h2 className="text-3xl md:text-4xl font-bold text-institutional-blue">
                                Uma ponte entre quem quer ajudar e quem precisa.
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                No ICP, acreditamos que a mudança real acontece quando a comunidade se une. Nossos projetos abrangem desde educação infantil até cursos profissionalizantes para jovens e adultos.
                            </p>
                            <ul className="space-y-4">
                                {['Impacto Social Direto', 'Transparência Total', 'Eficiência em Gestão'].map((item) => (
                                    <li key={item} className="flex items-center space-x-3 text-slate-700 font-medium">
                                        <div className="w-2 h-2 bg-institutional-orange rounded-full"></div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-institutional-blue rounded-[3rem] p-12 text-white relative overflow-hidden section-title">
                            <div className="relative z-10">
                                <h3 className="text-3xl font-bold mb-6 italic">"Ninguém é tão pobre que não possa dar, nem tão rico que não possa receber."</h3>
                                <p className="text-blue-100">— Princípio ICP</p>
                            </div>
                            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;
