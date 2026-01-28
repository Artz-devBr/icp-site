import React, { useState } from 'react';
import { Pin, X, Calendar, Clock, Tag, Instagram, ArrowRight } from 'lucide-react';
import Template from './Template';

// Data Source with 4 real-world items
const eventosData = [
    {
        id: 1,
        title: "Bazar ICP",
        description: "Venda de roupas e itens seminovos com preços acessíveis para toda a comunidade.",
        frequency: "Edições Periódicas",
        category: "Comunidade",
        color: "bg-yellow-100",
        rotation: "rotate-2"
    },
    {
        id: 2,
        title: "Oficinas de Capacitação",
        description: "Cursos rápidos e atividades práticas focadas em desenvolvimento de habilidades.",
        frequency: "Verifique nosso Instagram",
        category: "Educação",
        color: "bg-blue-100",
        rotation: "-rotate-1"
    },
    {
        id: 3,
        title: "Projeto Caravana Pet",
        description: "Projeto criado junto da UFRRJ e o Ministério da Educação com o objetivo de oferecer o serviço de castração para animais domésticos (cães e gatos) de forma gratuita.",
        frequency: "Acompanhe as Datas",
        category: "Saúde Animal",
        color: "bg-green-100",
        rotation: "rotate-1"
    },
    {
        id: 4,
        title: "Feiras",
        description: "Feiras Temáticas acontecem no Instituto com o objetivo de mostrar diversas culturas e serviços com preços populares.",
        frequency: "Eventos Especiais",
        category: "Cultura",
        color: "bg-pink-100",
        rotation: "-rotate-2"
    }
];

const Eventos = () => {
    const [selectedEvent, setSelectedEvent] = useState(null);

    return (
        <Template title="Mural de Eventos">
            <div className="relative min-h-screen">
                
                {/* Introduction / Pinned Announcement Section */}
                <div className="max-w-4xl mx-auto mb-16 px-4">
                    {/* The Pinned Note */}
                    <div className="relative transform -rotate-1 mx-auto max-w-2xl">
                        {/* Pin Visual */}
                        <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-20">
                            <Pin className="w-10 h-10 text-red-600 drop-shadow-md fill-current" />
                        </div>
                        
                        <div className="bg-orange-200 p-8 pt-10 rounded-sm shadow-xl border-t border-white/40">
                            <h3 className="text-xl font-bold text-orange-900 mb-3 text-center uppercase tracking-wide flex items-center justify-center gap-2">
                                <span className="text-2xl">⚠️</span> Importante
                            </h3>
                            <p className="text-orange-950 text-center font-medium text-lg leading-relaxed font-marker">
                                "Nossas atividades são dinâmicas! Para saber se um evento vai acontecer esta semana, confirme sempre as datas e horários no nosso Instagram oficial."
                            </p>
                            
                            <div className="mt-6 flex justify-center">
                                <a 
                                    href="https://www.instagram.com/instituto_casadopai/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-bold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all text-sm"
                                >
                                    <Instagram size={18} />
                                    Seguir no Instagram
                                </a>
                            </div>
                        </div>
                        
                        {/* Shadow/Tape styling for realism */}
                         <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-24 h-8 bg-white/20 rotate-1 backdrop-blur-sm"></div>
                    </div>
                </div>

                {/* Main Events Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 px-4 max-w-7xl mx-auto pb-20">
                    {eventosData.map((evento) => (
                        <div
                            key={evento.id}
                            onClick={() => setSelectedEvent(evento)}
                            className={`
                                group relative cursor-pointer 
                                ${evento.color}
                                ${evento.rotation}
                                p-6 rounded-sm shadow-md 
                                transition-all duration-300 ease-spring
                                hover:rotate-0 hover:scale-105 hover:shadow-2xl hover:z-10
                                flex flex-col h-full min-h-[300px]
                            `}
                        >
                            {/* Tape Visual */}
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-12 h-6 bg-yellow-50/50 rotate-3 shadow-sm border-l border-r border-white/20"></div>

                            {/* Card Content */}
                            <div className="flex-1 flex flex-col text-center pt-4">
                                <span className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-2 opacity-70">
                                    {evento.category}
                                </span>
                                
                                <h3 className="text-xl font-bold text-slate-800 mb-4 font-marker leading-tight">
                                    {evento.title}
                                </h3>

                                <div className="mt-auto space-y-3">
                                    <p className="text-sm text-slate-700 font-medium line-clamp-3 leading-relaxed">
                                        {evento.description}
                                    </p>
                                    
                                    <div className="pt-4 border-t border-slate-900/5">
                                        <div className="inline-flex items-center justify-center gap-1.5 px-3 py-1 bg-white/50 rounded-full text-xs font-bold text-slate-600">
                                            <Tag size={12} />
                                            {evento.frequency}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Modal for Details */}
                {selectedEvent && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <div 
                            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
                            onClick={() => setSelectedEvent(null)}
                        ></div>

                        <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-fadeIn">
                            {/* Header Color Stripe */}
                            <div className={`h-3 w-full ${selectedEvent.color}`}></div>

                            <button
                                onClick={() => setSelectedEvent(null)}
                                className="absolute top-5 right-5 p-2 bg-slate-100 hover:bg-slate-200 rounded-full text-slate-500 hover:text-red-500 transition-colors"
                            >
                                <X size={20} />
                            </button>

                            <div className="p-8 pt-10">
                                <span className="inline-block px-3 py-1 bg-slate-100 rounded-lg text-xs font-bold uppercase text-slate-500 mb-4">
                                    {selectedEvent.category}
                                </span>
                                
                                <h2 className="text-3xl font-bold text-slate-800 mb-2 font-marker">
                                    {selectedEvent.title}
                                </h2>
                                
                                <div className="flex items-center gap-2 text-institutional-orange font-semibold text-sm mb-6">
                                    <Clock size={16} />
                                    {selectedEvent.frequency}
                                </div>

                                <div className="space-y-6">
                                    <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 text-slate-600 leading-relaxed text-lg">
                                        {selectedEvent.description}
                                    </div>

                                    <button
                                        onClick={() => setSelectedEvent(null)}
                                        className="w-full py-4 bg-slate-800 hover:bg-slate-900 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-slate-300 flex items-center justify-center gap-2"
                                    >
                                        Fechar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Injected Styles for specialized fonts or animations if needed */}
             <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');
                
                .font-marker {
                    font-family: 'Permanent Marker', cursive, sans-serif;
                }
                
                .ease-spring {
                    transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
                }
                
                @keyframes fadeIn {
                    from { opacity: 0; transform: scale(0.95); }
                    to { opacity: 1; transform: scale(1); }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.2s ease-out forwards;
                }
            `}</style>
        </Template>
    );
};

export default Eventos;
