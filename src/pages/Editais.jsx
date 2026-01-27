// Workflow GIT:
// Fazer o Fork.
// Criar a branch: git checkout -b feature/pagina-editais-nomedoaluno.
// Desenvolver apenas dentro do arquivo src/pages/Editais.jsx.
// Adicionar, comitar e fazer o Push.
// Fazer o Pull Request para o repositório original.

import React from 'react';
import Template from './Template';

const Editais = () => (
    <Template title="Editais">
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

export default Editais;
