import React, { useState } from 'react';
import { Heart, Zap, QrCode, Building2, Copy, Check, Quote } from 'lucide-react';
import Template from './Template';
import qrMensal from '../assets/qrcode.png';
import collageAtividades from '../assets/collage-atividades.png';

const Doar = () => {
    const [copied, setCopied] = useState(false);
    const pixKey = "08913297000198";

    const copyToClipboard = () => {
        navigator.clipboard.writeText(pixKey).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    return (
        <Template title="Gesto Solidário">
            <div className="space-y-24">
                {/* Visual Context Section */}
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="lg:w-5/12 space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-institutional-blue/5 text-institutional-blue rounded-full text-sm font-bold tracking-wide uppercase">
                            <Heart className="w-4 h-4" /> Faça parte da mudança
                        </div>

                        <h2 className="text-4xl md:text-6xl font-black text-slate-800 leading-[1.1]">
                            Sua generosidade <br />
                            <span className="text-institutional-blue">transforma o agora.</span>
                        </h2>

                        <div className="relative">
                            <Quote className="absolute -top-4 -left-6 w-12 h-12 text-institutional-orange/10 -z-10" />
                            <p className="text-xl text-slate-600 leading-relaxed italic font-medium pl-2">
                                "A caridade é o único tesouro que se aumenta ao ser dividido."
                            </p>
                        </div>

                        <div className="space-y-4 text-slate-500 text-lg leading-relaxed">
                            <p>
                                No <strong className="text-slate-700">Instituto Casa do Pai</strong>, cada doação é convertida em oportunidades reais.
                                Atuamos desde 2007 como um pilar de apoio, educação e bem-estar para quem mais precisa.
                            </p>
                        </div>
                    </div>

                    <div className="lg:w-7/12 w-full relative">
                        <div className="absolute -inset-4 bg-institutional-blue/5 rounded-[3rem] rotate-2"></div>
                        <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl shadow-slate-300">
                            <img
                                src={collageAtividades}
                                alt="Nossas Atividades"
                                className="w-full h-[500px] object-cover transition-transform duration-700 hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                        </div>
                    </div>
                </div>

                {/* Donation Flow */}
                <div className="space-y-12">
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl font-bold text-slate-800">Caminhos para Contribuir</h2>
                        <p className="text-slate-500 max-w-2xl mx-auto">
                            Escolha a forma que melhor se adapta a você. Toda ajuda é vital para a continuidade dos nossos projetos.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-4">
                        {/* Pix Card */}
                        <div className="bg-white border border-slate-100 rounded-[2.5rem] p-8 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col items-center text-center group">
                            <div className="w-16 h-16 bg-blue-50 text-institutional-blue rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-institutional-blue group-hover:text-white transition-all duration-300">
                                <Zap className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-800 mb-2">Doe via Pix</h3>
                            <p className="text-slate-500 mb-8 text-sm leading-relaxed">Ajuda imediata e segura direto para nossa conta institucional.</p>

                            <div
                                className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 mb-6 cursor-pointer hover:bg-slate-100 transition-colors group/key"
                                onClick={copyToClipboard}
                            >
                                <div className="flex items-center justify-between mb-1">
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Chave CNPJ</span>
                                    <Copy className="w-3 h-3 text-slate-300 group-hover/key:text-institutional-blue transition-colors" />
                                </div>
                                <span className="block text-sm font-mono text-slate-700 break-all font-bold tracking-tight">{pixKey}</span>
                            </div>

                            <button
                                onClick={copyToClipboard}
                                className={`w-full py-4 rounded-xl font-bold tracking-widest transition-all flex items-center justify-center gap-2 ${copied ? 'bg-green-600 text-white shadow-lg shadow-green-100' : 'bg-institutional-blue text-white hover:bg-blue-900 shadow-xl shadow-blue-100'}`}
                            >
                                {copied ? <><Check className="w-5 h-5" /> COPIADO!</> : 'COPIAR CHAVE PIX'}
                            </button>
                        </div>

                        {/* QR Code Subscription Card - PRIMARY CTA */}
                        <div className="bg-slate-900 border border-slate-800 rounded-[2.5rem] p-8 shadow-2xl shadow-slate-400/20 flex flex-col items-center text-center group relative overflow-hidden transform md:-translate-y-4">
                            <div className="absolute top-0 right-0 p-8 opacity-5">
                                <Heart className="w-32 h-32 fill-white" />
                            </div>

                            <h3 className="text-2xl font-black text-white mb-2 uppercase italic tracking-tighter">Seja a Mudança</h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-8">Sua constância permite o planejamento e expansão de nossas causas sociais e animais.</p>

                            <div className="bg-white p-3 rounded-3xl mb-8 group-hover:scale-105 transition-transform duration-500 shadow-xl">
                                <img
                                    src={qrMensal}
                                    alt="QR Code"
                                    className="w-48 h-48 rounded-xl"
                                />
                            </div>

                            <div className="space-y-4 w-full">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-[10px] font-bold text-institutional-orange uppercase tracking-widest">
                                    <QrCode className="w-5 h-5" />
                                </div>
                            </div>
                        </div>

                        {/* Bank Details Card */}
                        <div className="bg-white border border-slate-100 rounded-[2.5rem] p-8 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col items-center text-center group">
                            <div className="w-16 h-16 bg-slate-50 text-slate-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-slate-800 group-hover:text-white transition-all duration-300">
                                <Building2 className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-800 mb-2">Dados Bancários</h3>
                            <p className="text-slate-500 mb-8 text-sm leading-relaxed">Depósitos diretos para nossa conta corrente institucional.</p>

                            <div className="w-full text-left bg-slate-50 border border-slate-100 rounded-2xl p-6 space-y-3 text-[10px] font-bold text-slate-700 uppercase tracking-widest leading-none">
                                <div className="flex justify-between border-b border-slate-200 pb-2"><span className="text-slate-400">Banco</span> <span>Mercado Pago</span></div>
                                <div className="flex justify-between border-b border-slate-200 pb-2"><span className="text-slate-400">Agência</span> <span>0001</span></div>
                                <div className="flex justify-between border-b border-slate-200 pb-2"><span className="text-slate-400">Conta</span> <span>47668811805</span></div>
                                <div className="flex justify-between"><span className="text-slate-400">CNPJ</span> <span>08.913.297/0001-98</span></div>
                            </div>

                            <div className="mt-8 pt-4 w-full border-t border-slate-50 text-[10px] text-slate-400 uppercase tracking-widest font-bold">
                                Instituto Casa do Pai
                            </div>
                        </div>
                    </div>
                </div>

                {/* Transparency Footnote */}
                <div className="bg-slate-50 rounded-3xl p-8 text-center border border-slate-100">
                    <p className="text-slate-500 text-sm max-w-3xl mx-auto leading-relaxed">
                        <strong className="text-slate-700">Compromisso com a Verdade:</strong> O Instituto Casa do Pai preza pela transparência absoluta. Todas as doações são auditadas e destinadas integralmente aos nossos projetos sociais e de cuidado animal.
                    </p>
                </div>
            </div>
        </Template>
    );
};

export default Doar;
