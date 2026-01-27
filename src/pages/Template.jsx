import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

const Template = ({ title, children, developerName = "Desenvolvedor ICP" }) => {
    const containerRef = useRef();

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(".fade-item", {
                opacity: 0,
                y: 30,
                x: -20,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out"
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="min-h-screen pt-24 pb-12 px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
                <header className="mb-12 text-center fade-item">
                    <h1 className="text-4xl md:text-5xl font-bold text-institutional-blue mb-4">
                        {title}
                    </h1>
                    <div className="h-1 w-24 bg-institutional-orange mx-auto rounded-full"></div>
                    {developerName && (
                        <p className="mt-4 text-slate-500 text-sm italic">
                            Desenvolvido por: <span className="text-institutional-orange font-semibold">{developerName}</span>
                        </p>
                    )}
                </header>

                <main className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-8 md:p-12 fade-item">
                    {children || (
                        <div className="text-center py-20">
                            <p className="text-slate-400 text-lg">Conteúdo em desenvolvimento...</p>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default Template;
