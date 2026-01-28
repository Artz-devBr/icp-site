// Workflow GIT:
// Fazer o Fork.
// Criar a branch: git checkout -b feature/pagina-editais-nomedoaluno.
// Desenvolver apenas dentro do arquivo src/pages/Editais.jsx.
// Adicionar, comitar e fazer o Push.
// Fazer o Pull Request para o repositório original.

import React from 'react';
import Template from './Template';

const editais = [
    "Edital 01.2025 – Aquisição de Tenda – Projeto Caravana Pet",
    "Edital 02.2025 – Locação de caminhonete 4X4 – Projeto Caravana Pet",
    "Edital 03.2025 – Locação de castra móvel – Projeto Caravana Pet",
    "Edital 04.2025 – Material Gráfico – Projeto Caravana Pet",
    "Edital 05.2025 – Material Hospitalar Veterinário – Projeto Caravana Pet",
    "Edital 06.2025 – Recursos humanos – Projeto Caravana Pet",
    "Edital 07.2025 – Serviços de evento – Projeto Caravana Pet",
    "Edital 08.2025 – Serviços de Consultoria em Gestão de Projetos e Prestação de Contas – Projeto Caravana Pet",
    "Edital 09.2025 – Serviços Médicos Veterinários – Projeto Caravana Pet",
    "Edital 10.2025 – Serviços de Recolhimento de lixo infectante – Projeto Caravana Pet",
    "ERRATA ao Edital 04.2025 – Material Gráfico – Projeto Caravana Pet",
    "Edital 11.2025 – Supervisor Administrativo – Projeto Caravana Pet",
    "Edital 12.2025 – Van (MIni Bus) – Up Grade",
    "Prorrogação do Edital 12.2025 – Van (MIni Bus) – Up Grade",
    "Edital 13.2025 – Uniforme – Projeto Controle de Arbovirose",
    "Edital 14.2025 – Software – Projeto Controle de Arbovirose",
    "Edital 15.2025 – Material Gráfico – Projeto Controle de Arbovirose",
    "Edital 16.2025 – Material de Expediente – Projeto Controle de Arbovirose",
    "Edital 17.2025 – Locação de Veículo – Projeto Controle de Arbovirose",
    "Edital 18.2025 – Locação de Notebook – Projeto Controle de Arbovirose",
    "Edital 19.2025 – Armadilhas – Projeto Controle de Arbovirose",
    "Edital 44.2025 – Prestação de serviços – Empreender 2",
    "Edital 20.2025 – Serviços de Contabilidade – Projeto Controle de Arbovirose",
    "Edital 21.2025 – Serviço de Comunicação Social – Projeto Controle de Arbovirose",
    "Edital 22.2025 – Serviço de Consultoria Técnica em Saúde – Projeto Controle de Arbovirose",
    "Edital 24.2025 – Serviço de Coordenação – Projeto Controle de Arbovirose",
    "Edital 25.2025 – Serviços de Supervisão – Projeto Controle de Arbovirose",
    "Edital 26.2025 – Serviço de Gestão de Projetos – Projeto Controle de Arbovirose",
    "Edital 33.2025 – Itens de Alimentação – Up Grade",
    "Edital 34.2025 - Serviços de Recolhimento de Lixo Infectante - Projeto Caravana Pet",
    "Edital 35.2025 – Empresa de RH",
    "Edital 36.2025 – Realização de eventos, Material de Comunicação e divulgação e Logística",
    "Edital 37.2025 – Material Permanente - Projeto Transformando Realidades",
    "Edital 38.2025 – Material de Identificação e Divulgação - Projeto Transformando Realidades",
    "Edital 39.2025 – Material de Consumo - Itens de Cozinha - Projeto Transformando Realidades",
    "Edital 40.2025 – Prestação de Serviços - Projeto Transformando Realidades",
    "Prorrogação dos Editais 37.2025, 38.2025, 39.2025, 40.2025 - Projeto Transformando Realidades",
    "2ª Prorrogação dos Editais 37.2025, 38.2025, 39.2025, 40.2025 - Projeto Transformando Realidades",
    "Edital 27.2025 – Consultoria em Gestão de Projetos e Prestação de Contas - Projeto Jovens em Movimento",
    "Edital 28.2025 – Uniformes - Projeto Jovens em Movimento",
    "Edital 29.2025 – Material Esportivo - Projeto Jovens em Movimento",
    "Edital 30.2025 – Material de Divulgação - Projeto Jovens em Movimento",
    "Edital 31.2025 – Locação de Caixa de Som e Aro de Basquete - Projeto Jovens em Movimento",
    "Edital 43.2025 - Prestação de serviços - UP GRADE",
    "Edital 32.2025 – Recursos Humanos - Projeto Jovens em Movimento",
    "Edital 41.2025 - Combustível Óleo Diesel S10 - Projeto Up Grade",
    "Edital 42.2025 - Realização de Evento - Projeto Pró Amor",
    "Edital 43.2025 - Supervisor Administrativo - Caravana Pet",
    "Edital 44.2025 - Serviço de Instalação Elétrica - Transformando Realidades",
    "Edital 45.2025 - Prestação de Serviços - Caravana Pet",
    "Edital 46.2025 - Prestação de Serviços - Coord de Projetos",
    "Edital 47.2025 - Recursos Humanos - Projeto Protege +",
    "Edital 48.2025 - Serviços Especializados - Projeto Protege +",
    "Edital 49.2025 - Plataforma EAD - Projeto Protege +",
    "Edital 50.2025 - Serviço de Produção de Evento - Projeto Protege +",
    "Edital 51.2025 - Serviços Gráficos - Projeto Protege +",
    "Edital 52.2025 - Recursos Humanos - Projeto Infância Segura",
    "Edital 53.2025 - Serviços Especializados - Projeto Infância Segura",
    "Edital 54.2025 - Plataforma EAD - Projeto Infância Segura",
    "Edital 55.2025 - Serviço de Produção de Evento - Projeto Infância Segura",
    "Edital 56.2025 - Serviços Gráficos - Projeto Infância Segura",
    "Edital 57.2025 - Serviços Audiovisuais - Projeto Infância Segura",
    "Edital 58.2025 - Recursos Humanos - Projeto Jovens em Movimento",
    "Edital 59.2025 - Supervisor Administrativo - Projeto Caravana Pet",
    "Edital 01.2026 - Recursos Humanos - Projeto Empreender 4",
    "Edital 02.2026 - Serviços de Consultoria em Gestão de Projetos e Pretsção de Contas - Projeto Empreender 4",
    "Edital 03.2026 - Material de Consumo - Projeto Empreender 4",
    "Edital 04.2026 - Setrviços de Adequação de Salas de Aula - Projeto Empreender 4"
];

const resultados = [
    "RESULTADO PRELIMINAR DO EDITAL 01/2025",
    "RESULTADO PRELIMINAR DO EDITAL 02/2025",
    "RESULTADO PRELIMINAR DO EDITAL 03/2025",
    "RESULTADO PRELIMINAR DO EDITAL 04/2025",
    "RESULTADO PRELIMINAR DO EDITAL 05/2025",
    "RESULTADO PRELIMINAR DO EDITAL 06/2025",
    "RESULTADO PRELIMINAR DO EDITAL 07/2025",
    "RESULTADO PRELIMINAR DO EDITAL 08/2025",
    "RESULTADO PRELIMINAR DO EDITAL 09/2025",
    "RESULTADO PRELIMINAR DO EDITAL 10/2025",
    "RESULTADO FINAL DO EDITAL 01/2025",
    "RESULTADO FINAL DO EDITAL 02/2025",
    "RESULTADO FINAL DO EDITAL 03/2025",
    "RESULTADO FINAL DO EDITAL 04/2025",
    "RESULTADO FINAL DO EDITAL 05/2025",
    "RESULTADO FINAL DO EDITAL 06/2025",
    "RESULTADO FINAL DO EDITAL 07/2025",
    "RESULTADO FINAL DO EDITAL 08/2025",
    "RESULTADO FINAL DO EDITAL 09/2025",
    "RESULTADO FINAL DO EDITAL 10/2025",
    "RESULTADO PRELIMINAR DO EDITAL 11/2025",
    "RESULTADO FINAL DO EDITAL 11/2025",
    "RESULTADO PRELIMINAR DO EDITAL 12/2025",
    "RESULTADO PRELIMINAR DO EDITAL 44/2025",
    "RESULTADO FINAL DO EDITAL 12/2025",
    "RESULTADO FINAL DO EDITAL 44/2025",
    "RESULTADO PRELIMINAR DO EDITAL 13/2025",
    "RESULTADO PRELIMINAR DO EDITAL 14/2025",
    "RESULTADO PRELIMINAR DO EDITAL 15/2025",
    "RESULTADO PRELIMINAR DO EDITAL 16/2025",
    "RESULTADO PRELIMINAR DO EDITAL 17/2025",
    "RESULTADO PRELIMINAR DO EDITAL 18/2025",
    "RESULTADO PRELIMINAR DO EDITAL 19/2025",
    "RESULTADO PRELIMINAR DO EDITAL 20/2025",
    "RESULTADO PRELIMINAR DO EDITAL 21/2025",
    "RESULTADO PRELIMINAR DO EDITAL 22/2025",
    "RESULTADO PRELIMINAR DO EDITAL 24/2025",
    "RESULTADO PRELIMINAR DO EDITAL 25/2025",
    "RESULTADO PRELIMINAR DO EDITAL 26/2025",
    "RESULTADO FINAL DO EDITAL 13/2025",
    "RESULTADO FINAL DO EDITAL 14/2025",
    "RESULTADO FINAL DO EDITAL 15/2025",
    "RESULTADO FINAL DO EDITAL 16/2025",
    "RESULTADO FINAL DO EDITAL 17/2025",
    "RESULTADO FINAL DO EDITAL 18/2025",
    "RESULTADO FINAL DO EDITAL 19/2025",
    "RESULTADO FINAL DO EDITAL 20/2025",
    "RESULTADO FINAL DO EDITAL 21/2025",
    "RESULTADO FINAL DO EDITAL 22/2025",
    "RESULTADO FINAL DO EDITAL 24/2025",
    "RESULTADO FINAL DO EDITAL 25/2025",
    "RESULTADO FINAL DO EDITAL 26/2025",
    "RESULTADO PRELIMINAR DO EDITAL 33.2025",
    "RESULTADO FINAL DO EDITAL 33/2025",
    "RESULTADO PRELIMINAR DO EDITAL 34/2025",
    "RESULTADO FINAL DO EDITAL 34/2025",
    "RESULTADO PRELIMINAR DO EDITAL 35/2025",
    "RESULTADO FINAL DO EDITAL 35/2025",
    "RESULTADO PRELIMINAR DO EDITAL 36/2025",
    "RESULTADO FINAL DO EDITAL 36/2025",
    "RESULTADO PRELIMINAR DO EDITAL 37/2025",
    "RESULTADO PRELIMINAR DO EDITAL 38/2025",
    "RESULTADO PRELIMINAR DO EDITAL 39/2025",
    "RESULTADO PRELIMINAR DO EDITAL 40/2025",
    "RESULTADO FINAL DO EDITAL 37/2025",
    "RESULTADO FINAL DO EDITAL 38/2025",
    "RESULTADO FINAL DO EDITAL 39/2025",
    "RESULTADO FINAL DO EDITAL 40/2025",
    "RESULTADO PRELIMINAR DO EDITAL 27/2025",
    "RESULTADO PRELIMINAR DO EDITAL 28/2025",
    "RESULTADO PRELIMINAR DO EDITAL 29/2025",
    "RESULTADO PRELIMINAR DO EDITAL 30/2025",
    "RESULTADO PRELIMINAR DO EDITAL 31/2025",
    "RESULTADO PRELIMINAR DO EDITAL 43/2025",
    "RESULTADO PRELIMINAR DO EDITAL 32/2025",
    "RESULTADO FINAL DO EDITAL 27/2025",
    "RESULTADO FINAL DO EDITAL 28/2025",
    "RESULTADO FINAL DO EDITAL 29/2025",
    "RESULTADO FINAL DO EDITAL 30/2025",
    "RESULTADO FINAL DO EDITAL 31/2025",
    "RESULTADO FINAL DO EDITAL 43/2025",
    "RESULTADO FINAL DO EDITAL 32/2025",
    "RESULTADO PRELIMINAR DO EDITAL 41/2025",
    "RESULTADO FINAL DO EDITAL 41/2025",
    "RESULTADO PRELIMINAR DO EDITAL 42/2025",
    "RESULTADO FINAL DO EDITAL 42/2025",
    "RESULTADO PRELIMINAR DO EDITAL 43/2025",
    "RESULTADO FINAL DO EDITAL 43/2025",
    "RESULTADO PRELIMINAR DO EDITAL 44/2025",
    "RESULTADO FINAL DO EDITAL 44/2025",
    "RESULTADO PRELIMINAR DO EDITAL 45/2025",
    "RESULTADO FINAL DO EDITAL 45/2025",
    "RESULTADO PRELIMINAR DO EDITAL 46/2025",
    "RESULTADO FINAL DO EDITAL 46/2025",
    "RESULTADO PRELIMINAR DO EDITAL 47/2025",
    "RESULTADO PRELIMINAR DO EDITAL 48/2025",
    "RESULTADO PRELIMINAR DO EDITAL 49/2025",
    "RESULTADO PRELIMINAR DO EDITAL 50/2025",
    "RESULTADO PRELIMINAR DO EDITAL 51/2025",
    "RESULTADO FINAL DO EDITAL 47/2025",
    "RESULTADO FINAL DO EDITAL 48/2025",
    "RESULTADO FINAL DO EDITAL 49/2025",
    "RESULTADO FINAL DO EDITAL 50/2025",
    "RESULTADO FINAL DO EDITAL 51/2025",
    "RESULTADO PRELIMINAR DO EDITAL 52/2025",
    "RESULTADO PRELIMINAR DO EDITAL 53/2025",
    "RESULTADO PRELIMINAR DO EDITAL 54/2025",
    "RESULTADO PRELIMINAR DO EDITAL 55/2025",
    "RESULTADO PRELIMINAR DO EDITAL 56/2025",
    "RESULTADO PRELIMINAR DO EDITAL 57/2025",
    "RESULTADO PRELIMINAR DO EDITAL 58/2025",
    "RESULTADO FINAL DO EDITAL 52/2025",
    "RESULTADO FINAL DO EDITAL 53/2025",
    "RESULTADO FINAL DO EDITAL 54/2025",
    "RESULTADO FINAL DO EDITAL 55/2025",
    "RESULTADO FINAL DO EDITAL 56/2025",
    "RESULTADO FINAL DO EDITAL 57/2025",
    "RESULTADO FINAL DO EDITAL 58/2025",
    "RESULTADO PRELIMINAR DO EDITAL 59/2025",
    "RESULTADO FINAL DO EDITAL 59/2025"
];

const Editais = () => (
    <Template title="Editais">
        <div className="space-y-12">

            <section>
                <h2 className="text-2xl font-bold text-slate-800 mb-6 border-l-4 border-blue-600 pl-4">
                    Editais - Licitações
                </h2>
                <div className="grid grid-cols-1 gap-4">
                    {editais.map((item, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex items-center">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-4 flex-shrink-0"></span>
                            <a href="#" className="text-slate-700 hover:text-blue-600 font-medium break-words">
                                {item}
                            </a>
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-slate-800 mb-6 border-l-4 border-green-600 pl-4">
                    Resultados Editais 2025
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {resultados.map((item, index) => (
                        <div key={index} className="bg-slate-50 p-3 rounded-lg border border-slate-200 hover:border-green-300 transition-colors">
                            <a href="#" className="text-sm text-slate-600 hover:text-green-700 font-medium flex items-center">
                                <svg className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {item}
                            </a>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    </Template>
);

export default Editais;
