import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, Smile, Sun, Phone, Calendar, ArrowRight } from 'lucide-react';
import Template from './Template';

const ServiceCard = ({ icon: Icon, title, description }) => (
    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-all duration-300">
        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-institutional-blue mb-4">
            <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-bold text-slate-800 mb-2">{title}</h3>
        <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
    </div>
);

const Step = ({ number, title, text }) => (
    <div className="flex gap-4 items-start">
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-institutional-orange text-white flex items-center justify-center font-bold text-sm">
            {number}
        </div>
        <div>
            <h4 className="font-bold text-institutional-blue mb-1">{title}</h4>
            <p className="text-slate-600 text-sm">{text}</p>
        </div>
    </div>
);

const ApoioPsicologico = () => {
    return (
        <Template title="Apoio Psicológico">
            <div className="space-y-12">
                {/* Intro Section */}
                <div className="text-center max-w-3xl mx-auto space-y-6">
                    <p className="text-lg text-slate-600 leading-relaxed">
                        No <strong>Instituto Casa do Pai</strong>, acreditamos que cuidar da mente é tão importante quanto cuidar do corpo.
                        Oferecemos um espaço seguro de escuta, amparo e esperança. Democratizamos o acesso à saúde mental,
                        oferecendo atendimento humanizado para quem mais precisa.
                    </p>
                    <div className="inline-block p-4 bg-blue-50 rounded-2xl text-institutional-blue font-medium">
                        "Você não está sozinho. Valorizamos a sua história e seus sentimentos com total sigilo e respeito."
                    </div>
                </div>

                {/* Services Section */}
                <div>
                    <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">Como podemos ajudar</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <ServiceCard
                            icon={Heart}
                            title="Atendimento"
                            description="Sessões individuais focadas em suas necessidades e equilíbrio."
                        />
                        <ServiceCard
                            icon={Sun}
                            title="Escuta Terapêutica"
                            description="Espaço livre de julgamentos para desabafar e organizar pensamentos."
                        />
                        <ServiceCard
                            icon={Smile}
                            title="Orientação"
                            description="Suporte pontual para lidar com crises, ansiedade e decisões."
                        />
                        <ServiceCard
                            icon={Users}
                            title="Apoio Familiar"
                            description="Orientação para famílias, fortalecendo vínculos e harmonia."
                        />
                    </div>
                </div>

                {/* How it works Section */}
                <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold text-slate-800">Como funciona?</h2>
                            <div className="space-y-6">
                                <Step number="1" title="Entre em Contato" text="Utilize nossos canais digitais ou venha até nossa sede." />
                                <Step number="2" title="Triagem" text="Conversa inicial para entender suas necessidades." />
                                <Step number="3" title="Agendamento" text="Definimos juntos o melhor horário para o atendimento." />
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-slate-100 text-center shadow-sm">
                            <Calendar className="w-12 h-12 text-institutional-orange mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-slate-800 mb-2">Agende sua conversa</h3>
                            <p className="text-slate-600 text-sm mb-6">
                                O atendimento é gratuito ou a custo social. Estamos prontos para te ouvir.
                            </p>
                            <Link to="/contato" className="inline-flex items-center gap-2 px-6 py-3 bg-institutional-orange text-white rounded-xl font-bold hover:bg-orange-600 transition-all w-full justify-center text-sm">
                                <Phone className="w-4 h-4" />
                                Solicitar Atendimento
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Final Message */}
                <div className="text-center bg-institutional-blue text-white p-8 rounded-3xl">
                    <h3 className="text-2xl font-bold mb-4">
                        "Às vezes, o simples ato de ser ouvido é o remédio mais poderoso."
                    </h3>
                    <h5 className="text-blue-100 mb-6">
                        Irvin D. Yalom
                    </h5>
                    <p className="text-blue-100 mb-6">Você é precioso e sua vida importa.</p>
                    <Link to="/contato" className="inline-flex items-center gap-2 px-8 py-3 bg-white text-institutional-blue rounded-full font-bold hover:bg-blue-50 transition-all text-sm">
                        Fale Conosco Agora <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </Template>
    );
};

export default ApoioPsicologico;
