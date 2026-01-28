import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import {
  QuemSomos, Educacao, Castracao,
  ApoioPsicologico, Cursos, Transparencia,
  Doar, Eventos, Editais, Parceiros, Contato,
  Empreendedorismo, EducacaoCultura, Tecnologia, EsporteSaude
} from './pages';
import { useEffect } from 'react';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-social-clean selection:bg-institutional-orange/30 selection:text-institutional-blue">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quem-somos" element={<QuemSomos />} />
            <Route path="/educacao" element={<Educacao />} />
            <Route path="/castracao" element={<Castracao />} />
            <Route path="/apoio-psicologico" element={<ApoioPsicologico />} />
            <Route path="/cursos" element={<Cursos />} />
            <Route path="/transparencia" element={<Transparencia />} />
            <Route path="/doar" element={<Doar />} />
            <Route path="/eventos" element={<Eventos />} />
            <Route path="/editais" element={<Editais />} />
            <Route path="/parceiros" element={<Parceiros />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/empreendedorismo" element={<Empreendedorismo />} />
            <Route path="/educacao-cultura" element={<EducacaoCultura />} />
            <Route path="/tecnologia" element={<Tecnologia />} />
            <Route path="/esporte-saude" element={<EsporteSaude />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
