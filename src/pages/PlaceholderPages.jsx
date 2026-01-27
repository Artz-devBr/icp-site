import React from 'react';
import Template from './Template';

const PlaceholderPage = ({ title }) => (
    <Template title={title}>
        <div className="space-y-6">
            <p className="text-lg text-slate-600 leading-relaxed">
                Esta página está sendo preparada para mostrar o impacto do <strong>Instituto Casa do Pai</strong> nesta área.
                Em breve, você encontrará aqui informações detalhadas, fotos e depoimentos sobre nossas ações.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="h-48 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200 flex items-center justify-center text-slate-400">
                    Espaço para Galeria
                </div>
                <div className="h-48 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200 flex items-center justify-center text-slate-400">
                    Espaço para Informações
                </div>
            </div>
        </div>
    </Template>
);

export const QuemSomos = () => <PlaceholderPage title="Quem Somos" />;
export const Educacao = () => <PlaceholderPage title="Educação" />;
export const Esportes = () => <PlaceholderPage title="Esportes" />;
export const Culinaria = () => <PlaceholderPage title="Culinária Social" />;
export const ApoioPsicologico = () => <PlaceholderPage title="Apoio Psicológico" />;
export const Cursos = () => <PlaceholderPage title="Cursos Profissionalizantes" />;
export const Transparencia = () => <PlaceholderPage title="Transparência" />;
export const Doar = () => <PlaceholderPage title="Como Ajudar / Doações" />;
export const Eventos = () => <PlaceholderPage title="Eventos Beneficentes" />;
export const Voluntariado = () => <PlaceholderPage title="Seja um Voluntário" />;
export const Parceiros = () => <PlaceholderPage title="Parceiros e Empresas" />;
export const Contato = () => <PlaceholderPage title="Contato" />;
