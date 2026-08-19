import React, { useState } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingContact } from './components/FloatingContact';
import { RobotIntro } from './components/RobotIntro';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { VideoEditing } from './pages/VideoEditing';
import { Contact } from './pages/Contact';
import { Admin } from './pages/Admin';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
};

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  if (showIntro) {
    return <RobotIntro onEnter={() => setShowIntro(false)} />;
  }

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#0b0d17] text-slate-100 flex flex-col selection:bg-blue-600 selection:text-white">
        {/* Top Navbar */}
        <Navbar onReplayIntro={() => setShowIntro(true)} />

        {/* Main Route Body */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/video-editing" element={<VideoEditing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>

        {/* Floating Quick Contact Widget */}
        <FloatingContact />

        {/* Footer */}
        <Footer />
      </div>
    </HashRouter>
  );
}
