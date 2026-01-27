import React, { useState } from 'react';
import Template from './Template';
import { MapPin, Clock, Phone, Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';

const SocialIcon = ({ name, path, url, handle }) => (
    <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-3 p-4 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-md transition-all border border-slate-100 group"
    >
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-institutional-blue group-hover:text-institutional-orange group-hover:scale-110 transition-all shadow-sm border border-slate-100">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d={path} />
            </svg>
        </div>
        <div>
            <span className="block text-sm font-bold text-slate-700 group-hover:text-institutional-blue transition-colors">{name}</span>
            <span className="block text-xs text-slate-500">{handle}</span>
        </div>
    </a>
);

const Contato = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        type: 'Dúvidas',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('loading');

        // Simulating API call
        setTimeout(() => {
            // Simple validation check simulation
            if (formData.name && formData.email && formData.message) {
                setStatus('success');
                setFormData({ name: '', email: '', type: 'Dúvidas', message: '' });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
            }
        }, 1500);
    };

    const socialMedia = [
        {
            name: 'Facebook',
            handle: '@institutocasadopai',
            url: 'https://facebook.com/institutocasadopai',
            path: "M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036c-2.148 0-2.791 1.606-2.791 2.875v1.1h4.508l-.547 3.667h-3.96v7.98H9.101Z"
        },
        {
            name: 'Instagram',
            handle: '@instituto_casadopai',
            url: 'https://instagram.com/instituto_casadopai',
            path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.073-4.947-.2-4.352-2.617-6.783-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z"
        },
        {
            name: 'Threads',
            handle: '@instituto_casadopai',
            url: 'https://threads.net/@instituto_casadopai',
            path: "M16.98 12.91a4.956 4.956 0 0 0-1.74-3.765 6.442 6.442 0 0 0-4.36-1.579c-3.132 0-5.717 2.107-5.717 5.761 0 2.916 2.055 5.093 5.432 5.093 1.838 0 3.295-.694 4.093-1.626h2.182c-.896 2.213-3.328 3.522-6.275 3.522-4.667 0-7.85-3.056-7.85-7.142 0-3.754 2.877-7.017 7.553-7.017 4.295 0 7.23 2.753 7.23 6.908v1.314c0 1.25-.498 1.636-1.127 1.636-.505 0-.964-.326-.964-1.428V12.91ZM12.21 9.429c-1.71 0-2.923 1.21-2.923 2.986 0 1.574 1.055 2.502 2.623 2.502 1.685 0 2.812-1.22 2.812-3.09 0-1.535-.956-2.398-2.512-2.398Z"
        },
        {
            name: 'TikTok',
            handle: '@instituto_casadopai',
            url: 'https://tiktok.com/@instituto_casadopai',
            path: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v6.16c0 1.62-.27 3.22-1.01 4.67-1.47 2.9-4.5 4.71-7.74 4.56-2.45-.11-4.71-1.33-6.19-3.23-1.46-1.87-2-4.23-1.53-6.54.49-2.41 2.03-4.48 4.21-5.63 2.18-1.15 4.88-1.04 6.95.27v4.11a5.045 5.045 0 0 0-4.77-.38c-1.15.45-1.95 1.39-2.26 2.57-.49 1.83.47 3.8 2.21 4.51 1.74.72 3.88.22 5.07-1.19.82-.96 1.07-2.19 1.04-3.41V.02Z"
        },
        {
            name: 'YouTube',
            handle: '@instituto_casadopai',
            url: 'https://youtube.com/@instituto_casadopai',
            path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
        },
        {
            name: 'Pinterest',
            handle: '@instituto_casadopai',
            url: 'https://pinterest.com/instituto_casadopai',
            path: "M0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.992 3.995-.283 1.195.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.874-2.065-4.882-5.013-4.882-3.653 0-5.798 2.74-5.798 5.575 0 1.103.424 2.286.953 2.927.105.128.12.24.088.373-.096.398-.312 1.254-.353 1.427-.056.233-.184.283-.424.171-1.583-.737-2.571-3.05-2.571-4.909 0-3.996 2.905-7.667 8.376-7.667 4.398 0 7.82 3.134 7.82 7.316 0 4.366-2.75 7.882-6.568 7.882-1.282 0-2.486-.666-2.898-1.451l-.789 3.006c-.287 1.096-1.065 2.469-1.586 3.308 1.189.366 2.453.565 3.766.565 6.626 0 12-5.373 12-12S18.626 0 12 0 0 5.373 0 12z"
        },
        {
            name: 'LinkedIn',
            handle: '/instituto_casadopai',
            url: 'https://linkedin.com/company/instituto_casadopai',
            path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
        }
    ];

    return (
        <Template title="Contato">
            <div className="space-y-16">

                {/* Intro / About Section */}
                <section className="text-center max-w-4xl mx-auto space-y-6">
                    <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                        <p>
                            No coração de Itaguaí/RJ, o <strong>Instituto Casa do Pai</strong>, fundado em 2007,
                            atua como um agente de transformação social, promovendo dignidade, esperança e oportunidades
                            para a comunidade local e regional.
                        </p>
                        <p>
                            Com compromisso e responsabilidade social, o instituto desenvolve ações voltadas ao
                            desenvolvimento humano integral, ao fortalecimento da cidadania, e à inclusão social e digital,
                            contribuindo para a construção de um futuro mais justo e solidário.
                        </p>
                    </div>
                </section>

                <div className="w-full h-px bg-slate-200"></div>

                {/* Contact & Form Section */}
                <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* Left: Direct Contact Info */}
                    <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-32">
                        <div className="bg-institutional-blue p-8 rounded-3xl text-white shadow-xl shadow-blue-900/20 relative overflow-hidden">
                            <div className="relative z-10 space-y-8">
                                <div>
                                    <h3 className="text-2xl font-bold mb-6">Fale Conosco</h3>
                                    <p className="text-blue-100 mb-8">Estamos prontos para ouvir você. Entre em contato pelos canais abaixo.</p>
                                </div>

                                <div className="space-y-6">
                                    <a href="tel:21982274604" className="flex items-center space-x-4 p-4 bg-white/10 rounded-2xl hover:bg-white/20 transition-colors">
                                        <Phone className="w-6 h-6 text-orange-400" />
                                        <div>
                                            <span className="block text-xs text-blue-200 uppercase tracking-wider">Telefone</span>
                                            <span className="text-lg font-bold">(21) 98227-4604</span>
                                        </div>
                                    </a>

                                    <a href="mailto:contato@institutocasadopai.org.br" className="flex items-center space-x-4 p-4 bg-white/10 rounded-2xl hover:bg-white/20 transition-colors">
                                        <Mail className="w-6 h-6 text-orange-400" />
                                        <div className="overflow-hidden">
                                            <span className="block text-xs text-blue-200 uppercase tracking-wider">E-mail</span>
                                            <span className="text-lg font-bold truncate block">contato@institutocasadopai.org.br</span>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            {/* Decorative background circle */}
                            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="lg:col-span-8 bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-slate-800 mb-2">Envie uma mensagem</h3>
                            <p className="text-slate-500">Selecione o assunto e preencha o formulário abaixo.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-semibold text-slate-700 ml-1">Nome Completo *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-institutional-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                                        placeholder="Digite seu nome"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-semibold text-slate-700 ml-1">E-mail *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-institutional-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                                        placeholder="Digite seu email"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="type" className="text-sm font-semibold text-slate-700 ml-1">Tipo de contato *</label>
                                <div className="relative">
                                    <select
                                        id="type"
                                        name="type"
                                        value={formData.type}
                                        onChange={handleInputChange}
                                        className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-institutional-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all appearance-none cursor-pointer"
                                    >
                                        <option value="Reclamação">Reclamação</option>
                                        <option value="Feedback">Feedback</option>
                                        <option value="Dúvidas">Dúvidas</option>
                                        <option value="Sugestão">Sugestão</option>
                                        <option value="Outros">Outros</option>
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-semibold text-slate-700 ml-1">Mensagem *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-institutional-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none"
                                    placeholder="Digite sua mensagem aqui..."
                                ></textarea>
                            </div>

                            <div className="pt-2">
                                <button
                                    type="submit"
                                    disabled={status === 'loading' || status === 'success'}
                                    className={`
                                        w-full py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2
                                        ${status === 'success' ? 'bg-green-500 text-white cursor-default' : 'bg-institutional-orange text-white hover:bg-orange-600 hover:scale-[1.01]'}
                                        ${status === 'loading' ? 'opacity-80 cursor-wait' : ''}
                                    `}
                                >
                                    {status === 'loading' && (
                                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                    )}
                                    {status === 'success' && <CheckCircle className="w-6 h-6" />}
                                    {status === 'error' && <AlertCircle className="w-6 h-6" />}

                                    <span>
                                        {status === 'idle' && 'Enviar Mensagem'}
                                        {status === 'loading' && 'Enviando...'}
                                        {status === 'success' && 'Mensagem Enviada!'}
                                        {status === 'error' && 'Erro ao enviar. Tente novamente.'}
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>
                </section>

                {/* Info Grid: Address & Hours */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Address Card */}
                    <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-all hover:border-blue-100">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 bg-institutional-orange text-white rounded-xl shadow-lg shadow-orange-200 shrink-0">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div className="space-y-3">
                                <h3 className="text-xl font-bold text-slate-800">Venha nos visitar</h3>
                                <p className="text-slate-600">
                                    R. Pref. José Maria de Brito, 201 <br />
                                    Monte Serrat, Itaguaí - RJ <br />
                                    23810-720, Brasil
                                </p>
                                <a
                                    href="https://www.google.com/maps/search/?api=1&query=R.+Pref.+José+Maria+de+Brito,+201+-+Monte+Serrat,+Itaguaí+-+RJ,+23810-720,+Brasil"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-institutional-blue font-semibold hover:underline mt-2 group"
                                >
                                    <span>Ver no Google Maps</span>
                                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Hours Card */}
                    <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-all hover:border-blue-100">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 bg-institutional-blue text-white rounded-xl shadow-lg shadow-blue-200 shrink-0">
                                <Clock className="w-6 h-6" />
                            </div>
                            <div className="space-y-4 w-full">
                                <h3 className="text-xl font-bold text-slate-800">Atendimento</h3>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                                        <span className="text-slate-600">Segunda a sexta</span>
                                        <span className="font-semibold text-institutional-blue">8h às 18h</span>
                                    </div>
                                    <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                                        <span className="text-slate-600">Sábado</span>
                                        <span className="font-semibold text-institutional-blue">8h às 13h</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Social Media Section */}
                <section className="bg-white rounded-3xl p-8 md:p-12 shadow-inner border border-slate-100/50">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-institutional-blue mb-4">Nos acompanhe nas redes sociais</h2>
                        <p className="text-slate-500 max-w-2xl mx-auto">
                            Acompanhe nossas ações, projetos e iniciativas por meio das redes sociais do Instituto Casa do Pai.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {socialMedia.map((social) => (
                            <SocialIcon key={social.name} {...social} />
                        ))}
                    </div>
                </section>
            </div>
        </Template>
    );
};

export default Contato;
