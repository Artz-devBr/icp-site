import React from 'react';
import Template from './Template';

const QuemSomos = () => (
    <Template title="Quem Somos">
        {/* Hero Section */}
        <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                18 Anos de Transformação e Amor
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Somos o Instituto Casa do Pai (ICP), um pólo de impacto social que conecta quem quer ajudar a quem precisa, transformando vidas através do amor e da oportunidade.
            </p>
        </div>

        {/* Nossa Trajetória */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm mb-16 border border-gray-100">
            <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="md:w-1/2">
                    <h2 className="text-3xl font-bold text-indigo-700 mb-6">Nossa Trajetória</h2>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                        Há 18 anos, atuamos romperendo barreiras sociais e etárias em Itaguaí (RJ), no bairro Monte Serrat. Nossa missão vai além da caridade: focamos em converter responsabilidade social em ação real, oferecendo ferramentas para que crianças, jovens e adultos reescrevam suas histórias.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        Hoje, expandimos nosso abraço com filiais em Brasília, Rio Grande do Sul e São Paulo, mantendo sempre nossos diferenciais inegociáveis: impacto social direto, transparência total e eficiência na gestão.
                    </p>
                </div>
                <div className="md:w-1/2 grid grid-cols-2 gap-4">
                    {/* Placeholder blocks for images - would be replaced by actual photos */}
                    <div className="h-40 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-300">Foto Histórica 1</div>
                    <div className="h-40 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-300">Foto Histórica 2</div>
                    <div className="h-40 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-300">Foto Histórica 3</div>
                    <div className="h-40 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-300">Foto Histórica 4</div>
                </div>
            </div>
        </div>

        {/* Pilares de Atuação */}
        <div className="mb-20 text-center">
            <div className="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-700 rounded-full font-medium text-sm mb-6">Nossos Pilares</div>
            <h2 className="text-3xl font-bold text-gray-800 mb-12">Como Transformamos Vidas</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {[
                    { title: "Educação", icon: "📚", desc: "Apoio escolar e cursos profissionalizantes." },
                    { title: "Arte", icon: "🎨", desc: "Expressão cultural e desenvolvimento criativo." },
                    { title: "Esporte", icon: "⚽", desc: "Disciplina, saúde e trabalho em equipe." },
                    { title: "Tecnologia", icon: "💻", desc: "Inclusão digital através do nosso Polo Tecnológico." },
                    { title: "Renda", icon: "💼", desc: "Capacitação para o mercado de trabalho." },
                ].map((pilar, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="text-4xl mb-4">{pilar.icon}</div>
                        <h3 className="font-bold text-gray-800 mb-2">{pilar.title}</h3>
                        <p className="text-sm text-gray-500">{pilar.desc}</p>
                    </div>
                ))}
            </div>
        </div>




    </Template>
);

export default QuemSomos;
