import React from 'react';
import {
    Activity, TrendingUp, Leaf, BookOpen, PawPrint,
    ShieldCheck, CheckCircle2, Heart, GraduationCap,
    Palette, Trophy, Monitor, Briefcase
} from 'lucide-react';
import Template from './Template';

const PillarCard = ({ icon: Icon, title, description, color, bg }) => (
    <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
        <div className={`w-16 h-16 ${bg} rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
            <Icon className={`w-8 h-8 ${color}`} />
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-4">{title}</h3>
        <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
    </div>
);

const CertificationItem = ({ text }) => (
    <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100 transition-colors hover:bg-white hover:border-institutional-blue/20">
        <CheckCircle2 className="w-5 h-5 text-institutional-blue flex-shrink-0" />
        <span className="text-slate-700 text-sm font-medium">{text}</span>
    </div>
);

const Pilares = () => (
    <Template title="Pilares">
        <div className="max-w-6xl mx-auto space-y-24 pb-12">

            {/* Hero & Intro */}
            <section className="text-center space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-institutional-blue/5 text-institutional-blue rounded-full text-sm font-bold tracking-wide uppercase">
                    <Heart className="w-4 h-4" /> Atuamos em 4 pilares fundamentais
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-slate-800 leading-tight">
                    Nossos Programas: <br />
                    <span className="text-institutional-blue">Transformando Vidas e Construindo Futuros</span>
                </h1>
                <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed text-center">
                    Desde 2007, o Instituto Casa do Pai atua como uma Organização da Sociedade Civil, sem fins lucrativos,
                    dedicada a promover o desenvolvimento humano integral e o bem-estar animal. Acreditamos que cada
                    indivíduo e ser vivo possui um potencial único, e nossa missão é oferecer as ferramentas e
                    oportunidades necessárias para que esse potencial seja plenamente realizado. Por meio de uma
                    atuação multifacetada e comprometida, buscamos construir uma sociedade mais justa, equitativa e solidária.
                </p>
            </section>

            {/* Eixos de Atuação */}
            <section className="space-y-12">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl font-bold text-slate-800">Eixos de Atuação: Pilares para o Desenvolvimento Integral</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto">
                        Nossa estratégia de impacto social é estruturada em quatro eixos fundamentais,
                        que se interligam para abordar as diversas dimensões da vida de nossos beneficiários:
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <PillarCard
                        icon={Activity}
                        title="Esporte e Saúde"
                        description="Promovemos a prática esportiva e atividades físicas como ferramentas de inclusão social, desenvolvimento de habilidades e promoção da saúde. Nossos programas visam estimular hábitos de vida saudáveis, fortalecer o espírito de equipe, a disciplina e a resiliência por meio de atividades para crianças, jovens e adultos."
                        color="text-rose-600"
                        bg="bg-rose-50"
                    />
                    <PillarCard
                        icon={TrendingUp}
                        title="Empreendedorismo Social"
                        description="Capacitamos indivíduos e comunidades para a geração de renda e autonomia. Através de cursos, oficinas e mentorias, incentivamos a criação de negócios sociais e o desenvolvimento de competências empreendedoras, fomentando a inovação e o desenvolvimento econômico local."
                        color="text-emerald-600"
                        bg="bg-emerald-50"
                    />
                    <PillarCard
                        icon={Leaf}
                        title="Tecnologia e Meio Ambiente"
                        description="Conectamos pessoas ao mundo digital e à consciência ambiental. Oferecemos acesso à tecnologia e educação sobre práticas sustentáveis, visando a inclusão digital e a formação de cidadãos engajados na preservação do planeta."
                        color="text-cyan-600"
                        bg="bg-cyan-50"
                    />
                    <PillarCard
                        icon={BookOpen}
                        title="Educação e Cultura"
                        description="Investimos na educação formal e não formal, bem como na valorização da cultura. Por meio de atividades educativas, artísticas e culturais, estimulamos o pensamento crítico, a criatividade e o acesso ao conhecimento, ampliando horizontes e fortalecendo a identidade cultural."
                        color="text-amber-600"
                        bg="bg-amber-50"
                    />
                </div>
            </section>

            {/* Defesa dos Animais */}
            <section className="bg-slate-900 rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                    <PawPrint className="w-64 h-64 -rotate-12" />
                </div>
                <div className="relative z-10 max-w-3xl">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                        <PawPrint className="w-4 h-4" /> Respeito à Vida
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-8">Promoção e Defesa dos Animais: Cuidado e Respeito à Vida</h2>
                    <p className="text-lg text-slate-300 leading-relaxed mb-10">
                        Reconhecendo a importância dos animais para o equilíbrio ambiental e o bem-estar humano, o Instituto Casa do Pai também dedica esforços significativos à sua proteção.
                        Realizamos mutirões de castrações, campanhas de adoção responsável, cuidados veterinários e palestras educativas
                        sobre a guarda responsável e o respeito à vida animal.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="text-center border-r border-white/10 last:border-0">
                            <div className="text-3xl font-bold text-institutional-orange mb-1">1200+</div>
                            <div className="text-xs text-slate-400 uppercase tracking-tighter">Castrações</div>
                        </div>
                        <div className="text-center border-r border-white/10 last:border-0">
                            <div className="text-3xl font-bold text-institutional-orange mb-1">500+</div>
                            <div className="text-xs text-slate-400 uppercase tracking-tighter">Adoções</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-institutional-orange mb-1">100%</div>
                            <div className="text-xs text-slate-400 uppercase tracking-tighter">Compromisso</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Credibilidade */}
            <section className="space-y-12">
                <div className="text-center space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-institutional-blue/5 text-institutional-blue rounded-full text-sm font-bold tracking-wide uppercase">
                        <ShieldCheck className="w-4 h-4" /> Credibilidade e Reconhecimento
                    </div>
                    <h2 className="text-3xl font-bold text-slate-800 text-center">Transparência e Compromisso</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-center">
                        A seriedade de nosso trabalho é atestada por diversas certificações e credenciamentos junto a
                        órgãos públicos e conselhos de classe, reforçando nossa conformidade com as melhores práticas do terceiro setor.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <CertificationItem text="Título de Utilidade Pública" />
                    <CertificationItem text="Inscrição no CMDCA" />
                    <CertificationItem text="Inscrição no CMAS" />
                    <CertificationItem text="Inscrição no CMPcD" />
                    <CertificationItem text="Inscrição no CNEAS" />
                    <CertificationItem text="Min. da Cidadania - Prevenção" />
                    <CertificationItem text="Título de Ponto de Cultura" />
                    <CertificationItem text="Inscrição no CRMV" />
                    <CertificationItem text="CNES - Min. da Saúde" />
                    <CertificationItem text="CEBAS - Min. do Desenv. Social" />
                </div>
            </section>
        </div>
    </Template>
);

export default Pilares;
