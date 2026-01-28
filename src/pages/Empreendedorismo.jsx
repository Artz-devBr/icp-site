// Workflow GIT:
// Fazer o Fork.
// Criar a branch: git checkout -b feature/pagina-empreendedorismo-nomedoaluno.
// Desenvolver apenas dentro do arquivo src/pages/Empreendedorismo.jsx.
// Adicionar, comitar e fazer o Push.
// Fazer o Pull Request para o repositório original.

import React from 'react';
import Template from './Template';

import salgados from '../assets/empreendedorismo/salgados.png';
import panificacao from '../assets/empreendedorismo/panificacao.png';
import sobrancelhas from '../assets/empreendedorismo/sobrancelhas.png';
import cabeleireiro from '../assets/empreendedorismo/cabeleireiro.png';
import corteCostura from '../assets/empreendedorismo/corte_costura.png';
import costuraCriativa from '../assets/empreendedorismo/costura_criativa.png';
import artesanato from '../assets/empreendedorismo/artesanato.jpg';

const cursos = [
    {
        title: "Salgados fritos e assados",
        description: "Aprenda a preparar deliciosos salgados para festas e vendas, dominando técnicas de massas e recheios.",
        image: salgados
    },
    {
        title: "Panificação",
        description: "Domine a arte de fazer pães artesanais, doces e salgados, com técnicas profissionais de fermentação e assamento.",
        image: panificacao
    },
    {
        title: "Design de sobrancelhas",
        description: "Capacite-se para realizar designs perfeitos, valorizando o olhar e a beleza natural de cada cliente.",
        image: sobrancelhas
    },
    {
        title: "Cabeleireiro",
        description: "Curso completo de corte, coloração e tratamentos capilares para ingressar no mercado da beleza.",
        image: cabeleireiro
    },
    {
        title: "Corte e costura",
        description: "Desenvolva habilidades para criar e consertar roupas, aprendendo desde o básico até técnicas avançadas de costura.",
        image: corteCostura
    },
    {
        title: "Costura criativa",
        description: "Solte a imaginação criando peças únicas como bolsas, estojos e decorações com técnicas de patchwork e costura.",
        image: costuraCriativa
    },
    {
        title: "Artesanato",
        description: "Explore diversas técnicas manuais para criar objetos decorativos e utilitários, transformando materiais simples em arte.",
        image: artesanato
    }
];

const Empreendedorismo = () => (
    <Template title="Empreendedorismo">
        <div className="space-y-12">
            <div className="max-w-3xl mx-auto text-center space-y-6">
                <p className="text-lg text-slate-600 leading-relaxed">
                    O <strong>Instituto Casa do Pai</strong> acredita no poder transformador do trabalho e da capacitação profissional.
                    Nossos cursos de empreendedorismo são desenhados para gerar renda, autonomia e dignidade para nossa comunidade.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cursos.map((curso, index) => (
                    <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group ring-1 ring-slate-100">
                        <div className="h-48 overflow-hidden relative">
                            <img
                                src={curso.image}
                                alt={curso.title}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                        </div>
                        <div className="p-6 space-y-4">
                            <h3 className="text-xl font-bold text-institutional-blue group-hover:text-institutional-orange transition-colors">
                                {curso.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                {curso.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </Template>
);

export default Empreendedorismo;
