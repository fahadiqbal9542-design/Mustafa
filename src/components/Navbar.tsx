import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Download, Check, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

interface NavbarProps {
  onReplayIntro?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onReplayIntro }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Identity Check', path: '/contact' },
  ];

  const handleDownloadApp = () => {
    // Trigger download of app ZIP from backend
    window.location.href = '/api/download-app';
    setDownloaded(true);
    setShowDownloadModal(true);

    // Also trigger .url shortcut generation for desktop
    const urlContent = `[InternetShortcut]\nURL=${window.location.origin}\nIDList=\nIconIndex=0\nIconFile=${PERSONAL_INFO.socialLinks.pinterest}\n`;
    const blob = new Blob([urlContent], { type: 'application/octet-stream' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Abdullah_Portfolio.url';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#0A0B10]/90 backdrop-blur-md border-b border-white/10 transition-all">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-full border border-white/20 bg-gradient-to-br from-[#1A1D29] to-[#0A0B10] flex items-center justify-center font-serif text-sm tracking-widest text-[#E5E7EB] group-hover:border-white/60 transition-all">
              AD
            </div>
            <span className="text-lg sm:text-xl font-light tracking-[0.2em] font-serif text-[#E5E7EB] group-hover:opacity-80 transition-opacity">
              ABDULLAH <span className="font-serif italic font-normal opacity-70">WEB DEVELOPER</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-12 text-xs uppercase tracking-widest text-[#E5E7EB]/70">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative hover:text-white transition-opacity ${
                    isActive ? 'text-white font-medium' : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-2 left-0 right-0 h-[1px] bg-white/60"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Controls: Download App & Replay Intro */}
          <div className="hidden md:flex items-center gap-4">
            {/* Replay Intro Button */}
            {onReplayIntro && (
              <button
                onClick={onReplayIntro}
                className="text-[10px] uppercase tracking-widest text-[#E5E7EB]/60 hover:text-white transition-all px-3 py-1.5 rounded-full border border-white/10 hover:border-white/30"
              >
                AI Intro
              </button>
            )}

            {/* PWA Download Button */}
            <button
              onClick={handleDownloadApp}
              className="group px-4 py-2 rounded-full border border-white/20 hover:bg-white hover:text-black text-white font-sans text-[11px] uppercase tracking-widest flex items-center gap-2 transition-all cursor-pointer"
            >
              {downloaded ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>APP INSTALLED</span>
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5 group-hover:translate-y-[2px] transition-transform" />
                  <span>DOWNLOAD APP</span>
                </>
              )}
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={handleDownloadApp}
              className="p-2 rounded-lg bg-blue-600/20 border border-blue-500/40 text-blue-400"
              title="Download App"
            >
              <Download className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#0b0d17] border-b border-slate-800 px-4 pt-2 pb-6 space-y-4"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 text-base font-semibold border-b border-slate-800/40 ${
                    location.pathname === link.path ? 'text-blue-400' : 'text-slate-300'
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              {/* Social links in mobile menu */}
              <div className="pt-2 flex items-center gap-4">
                <a
                  href={PERSONAL_INFO.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-900 text-slate-300 hover:text-blue-400"
                >
                  LinkedIn
                </a>
                <a
                  href={PERSONAL_INFO.socialLinks.pinterest}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-900 text-slate-300 hover:text-red-400"
                >
                  Pinterest
                </a>
                <a
                  href={PERSONAL_INFO.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-900 text-slate-300 hover:text-pink-400"
                >
                  Instagram
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Download App Guidance Modal */}
      <AnimatePresence>
        {showDownloadModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-slate-900 border border-blue-500/40 rounded-2xl p-6 max-w-md w-full shadow-[0_0_40px_rgba(59,130,246,0.3)] text-white relative"
            >
              <button
                onClick={() => setShowDownloadModal(false)}
                className="absolute top-4 right-4 p-1 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-3 text-blue-400 mb-3">
                <Check className="w-6 h-6 text-green-400" />
                <h3 className="font-heading font-bold text-xl">App Package Ready!</h3>
              </div>
              <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                Abdullah Developer Portfolio download start ho chuka hai! Aapke Downloads folder mein <span className="text-blue-400 font-semibold">Abdullah_Portfolio.url</span> shortcut aur <span className="text-blue-400 font-semibold">Abdullah-Portfolio-App.zip</span> download ho gaye hain.
              </p>
              <div className="space-y-2 text-xs text-slate-400 bg-slate-950/80 p-3 rounded-xl border border-slate-800">
                <p>1. Desktop par chalane ke liye: <span className="text-slate-200">Downloads se .url shortcut drag-and-drop karke Desktop par rakhein.</span></p>
                <p>2. Offline chalane ke liye: <span className="text-slate-200">ZIP file extract karke index.html open karain.</span></p>
              </div>
              <button
                onClick={() => setShowDownloadModal(false)}
                className="mt-5 w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm tracking-wider cursor-pointer"
              >
                OK, GOT IT!
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
