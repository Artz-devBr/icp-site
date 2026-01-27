import React, { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Heart, Users, BookOpen, Utensils, Pointer } from 'lucide-react';
import heroImage from '../assets/home/background.avif';
import governoBrasil from '../assets/home/governodobrasil.png';
import governoRJ from '../assets/home/governodorj.png';
import receitaFederal from '../assets/home/receitafederal.png';
import rvContabilidade from '../assets/home/rvcontabilidade.png';
import ufrrj from '../assets/home/ufrrj.png';
import vale from '../assets/home/vale.png';

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
    const [isVideoPlaying, setIsVideoPlaying] = React.useState(false);

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

            // Parallax/Zoom effect on scroll for the background
            gsap.to(".hero-bg", {
                scale: 1.2,
                scrollTrigger: {
                    trigger: ".hero-section",
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            });

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
            {/* Full Background Hero Section */}
            <section className="hero-section relative h-screen w-full flex items-center justify-center overflow-hidden">
                {/* Background Image with GSAP animation */}
                <div className="hero-bg absolute inset-0 z-0">
                    <img
                        src={heroImage}
                        alt="ICP Instituto Casa do Pai"
                        className="w-full h-full object-cover"
                    />
                    {/* Darker Overlay for better contrast */}
                    <div className="absolute inset-0 bg-slate-900/60 transition-all duration-500"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/40"></div>
                </div>

                <div className="hero-content relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white space-y-8">
                    <h1 className="text-5xl md:text-8xl font-bold leading-tight">
                        Transformando <span className="text-institutional-orange">Vidas</span> <br className="hidden md:block" /> através do Amor.
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-200 leading-relaxed max-w-3xl mx-auto">
                        O Instituto Casa do Pai é um polo de impacto social dedicado a oferecer educação, cultura e apoio para comunidades em situação de vulnerabilidade.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <Link to="/doar" className="bg-institutional-orange text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-orange-600 transition-all hover:scale-105 shadow-2xl shadow-orange-500/30">
                            Quero Ajudar
                        </Link>
                        <Link to="/quem-somos" className="bg-white/10 backdrop-blur-md text-white border-2 border-white/30 px-10 py-5 rounded-full font-bold text-lg hover:bg-white/20 transition-all hover:scale-105">
                            Conheça nossa História
                        </Link>
                    </div>
                </div>

                {/* Scroll Indicator */}
                {/* Scroll Indicator */}
                <div className="absolute bottom-10 md:bottom-32 left-1/2 transform -translate-x-1/2 hero-content">
                    {/* Desktop Mouse Animation */}
                    <div className="hidden md:flex flex-col items-center gap-2">
                        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
                            <div className="w-1 h-2 bg-white rounded-full animate-bounce"></div>
                        </div>
                    </div>

                    {/* Mobile Finger Animation */}
                    <div className="flex md:hidden flex-col items-center gap-2 animate-bounce">
                        <Pointer className="w-8 h-8 text-white/80" />
                        <span className="text-white/60 text-xs">Deslize</span>
                    </div>
                </div>
            </section>

            {/* Numbers Section */}
            <section className="py-24 bg-slate-50 relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.1)] rounded-t-[3rem] -mt-10">
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

            {/* Video Section */}
            <section className="py-24 bg-white relative z-20">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 section-title">
                        <h2 className="text-3xl md:text-5xl font-bold text-institutional-blue mb-4">
                            Nossa Missão em Movimento
                        </h2>
                        <p className="text-lg text-slate-500">Assista ao nosso vídeo institucional e conheça de perto o trabalho do ICP.</p>
                    </div>

                    <div className="section-title relative aspect-video bg-slate-900 rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-200 group">
                        {!isVideoPlaying ? (
                            <div
                                className="absolute inset-0 cursor-pointer flex items-center justify-center"
                                onClick={() => setIsVideoPlaying(true)}
                            >
                                {/* Thumbnail Background */}
                                <img
                                    src="https://img.youtube.com/vi/YIhFRO09IKA/maxresdefault.jpg"
                                    alt="Thumbnail Vídeo Institucional"
                                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                                />

                                {/* Institutional Overlay */}
                                <div className="absolute inset-0 bg-institutional-blue/20 group-hover:bg-institutional-blue/10 transition-colors duration-500"></div>

                                {/* Play Button */}
                                <div className="relative z-10 w-24 h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30 transform group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                                    <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[22px] border-l-white border-b-[12px] border-b-transparent ml-2"></div>
                                </div>
                            </div>
                        ) : (
                            /* Actual YouTube Embed */
                            <iframe
                                className="absolute inset-0 w-full h-full"
                                src="https://www.youtube.com/embed/YIhFRO09IKA?autoplay=1"
                                title="Vídeo Institucional ICP"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        )}
                    </div>
                </div>
            </section>

            {/* Actions Summary */}
            <section className="py-24 bg-white relative z-20">
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

            {/* Sponsors Section */}
            <section className="py-24 bg-slate-50 relative z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 section-title">
                        <h2 className="text-3xl md:text-5xl font-bold text-institutional-blue mb-4">
                            Nossos Parceiros
                        </h2>
                        <p className="text-lg text-slate-500">
                            Quem caminha conosco nessa jornada de transformação.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                        <img src={governoBrasil} alt="Governo do Brasil" className="h-25 object-contain hover:scale-110 transition-transform duration-300" />
                        <img src={governoRJ} alt="Governo do Rio de Janeiro" className="h-30 object-contain hover:scale-110 transition-transform duration-300" />
                        <img src={receitaFederal} alt="Receita Federal" className="h-20 object-contain hover:scale-110 transition-transform duration-300" />
                        <img src={rvContabilidade} alt="RV Contabilidade" className="h-16.3 object-contain hover:scale-110 transition-transform duration-300" />
                        <img src={ufrrj} alt="UFRRJ" className="h-22 object-contain hover:scale-110 transition-transform duration-300" />
                        <img src={vale} alt="Vale" className="h-30 object-contain hover:scale-110 transition-transform duration-300" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
