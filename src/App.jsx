import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import {
  QuemSomos, Educacao, Esportes, Culinaria,
  ApoioPsicologico, Cursos, Transparencia,
  Doar, Eventos, Voluntariado, Parceiros, Contato
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
            <Route path="/esportes" element={<Esportes />} />
            <Route path="/culinaria" element={<Culinaria />} />
            <Route path="/apoio-psicologico" element={<ApoioPsicologico />} />
            <Route path="/cursos" element={<Cursos />} />
            <Route path="/transparencia" element={<Transparencia />} />
            <Route path="/doar" element={<Doar />} />
            <Route path="/eventos" element={<Eventos />} />
            <Route path="/voluntariado" element={<Voluntariado />} />
            <Route path="/parceiros" element={<Parceiros />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
