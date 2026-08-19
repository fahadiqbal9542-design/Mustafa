import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Clock, ArrowUp, Compass, MessageCircle, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';
import { Counter } from './Counter';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <footer className="relative bg-[#0A0B10] text-[#E5E7EB] pt-20 pb-12 border-t border-white/10 overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-gradient-to-t from-indigo-950/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        
        {/* 3 Floating Rectangle Boxes Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* Box 1: Explore */}
          <motion.div
            whileHover={{ y: -6, borderColor: 'rgba(255, 255, 255, 0.3)' }}
            className="relative bg-[#12141C] border border-white/10 p-8 backdrop-blur-md transition-all shadow-2xl group"
          >
            {/* Floating Top-Left Rectangle Icon Container */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-5 left-6 w-11 h-11 rounded-lg bg-[#0A0B10] border border-white/20 flex items-center justify-center text-white shadow-lg"
            >
              <Compass className="w-5 h-5" />
            </motion.div>

            <h4 className="mt-4 text-xl font-serif italic text-white tracking-wide mb-4 flex items-center gap-2">
              Explore
            </h4>
            <ul className="space-y-3 text-xs uppercase tracking-widest font-sans">
              {[
                { name: 'Home Showcase', path: '/' },
                { name: 'About Abdullah', path: '/about' },
                { name: 'Selected Works', path: '/projects' },
                { name: 'Video Editing', path: '/projects/video-editing' },
                { name: 'Identity Check', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
                  >
                    <span className="w-1 h-1 rounded-full bg-white/40 group-hover:bg-white" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Box 2: Direct Contact */}
          <motion.div
            whileHover={{ y: -6, borderColor: 'rgba(255, 255, 255, 0.3)' }}
            className="relative bg-[#12141C] border border-white/10 p-8 backdrop-blur-md transition-all shadow-2xl group"
          >
            {/* Floating Top-Left Rectangle Icon Container */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -top-5 left-6 w-11 h-11 rounded-lg bg-[#0A0B10] border border-white/20 flex items-center justify-center text-white shadow-lg"
            >
              <Mail className="w-5 h-5" />
            </motion.div>

            <h4 className="mt-4 text-xl font-serif italic text-white tracking-wide mb-4">
              Direct Intelligence
            </h4>
            <div className="space-y-4 text-xs font-sans">
              <div className="flex items-start gap-3 text-white/70">
                <MapPin className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-white transition-colors break-all">
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 hover:bg-white hover:text-black font-sans uppercase tracking-widest text-[10px] transition-all"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>SUBMIT IDENTITY CHECK</span>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Box 3: Live Status */}
          <motion.div
            whileHover={{ y: -6, borderColor: 'rgba(255, 255, 255, 0.3)' }}
            className="relative bg-[#12141C] border border-white/10 p-8 backdrop-blur-md transition-all shadow-2xl group"
          >
            {/* Floating Top-Left Rectangle Icon Container */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
              className="absolute -top-5 left-6 w-11 h-11 rounded-lg bg-[#0A0B10] border border-white/20 flex items-center justify-center text-white shadow-lg"
            >
              <Clock className="w-5 h-5" />
            </motion.div>

            <h4 className="mt-4 text-xl font-serif italic text-white tracking-wide mb-4">
              System Status
            </h4>
            <div className="space-y-3 text-xs font-sans">
              <div className="flex items-center justify-between py-2 border-b border-white/10">
                <span className="text-white/50 uppercase tracking-widest">Availability:</span>
                <span className="text-emerald-400 font-medium flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {PERSONAL_INFO.availability}
                </span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-white/10">
                <span className="text-white/50 uppercase tracking-widest">Response Time:</span>
                <span className="text-white/90 font-medium">
                  &lt; <Counter to={2} duration={1} /> Hours
                </span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-white/50 uppercase tracking-widest">Timezone:</span>
                <span className="text-white/90 font-medium">{PERSONAL_INFO.timezone}</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Bottom Social Bar & Back to Top */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-[10px] uppercase tracking-widest text-white/40 text-center md:text-left font-sans">
            &copy; {new Date().getFullYear()} <span className="text-white/80 font-medium">{PERSONAL_INFO.brandName}</span>. All Rights Reserved.
          </div>

          {/* Social Links with Round Editorial Icon Nodes */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="h-9 w-9 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:bg-white hover:text-black transition-all cursor-pointer"
              title="LinkedIn"
            >
              <span className="text-[9px] font-bold">IN</span>
            </a>

            <a
              href={PERSONAL_INFO.socialLinks.pinterest}
              target="_blank"
              rel="noopener noreferrer"
              className="h-9 w-9 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:bg-white hover:text-black transition-all cursor-pointer"
              title="Pinterest"
            >
              <span className="text-[9px] font-bold">PIN</span>
            </a>

            <a
              href={PERSONAL_INFO.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="h-9 w-9 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:bg-white hover:text-black transition-all cursor-pointer"
              title="Instagram"
            >
              <span className="text-[9px] font-bold">IG</span>
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="group px-4 py-2 rounded-full border border-white/10 text-white/70 hover:text-white hover:border-white/40 text-[10px] uppercase tracking-widest flex items-center gap-2 cursor-pointer transition-all font-sans"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform text-indigo-400" />
          </button>
        </div>

      </div>

      {/* Floating WhatsApp Button */}
      <a
        href={PERSONAL_INFO.socialLinks.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-white/10 border border-white/20 text-white backdrop-blur-md shadow-2xl hover:bg-white hover:text-black transition-all cursor-pointer flex items-center justify-center group"
        title="Direct WhatsApp Chat"
      >
        <MessageCircle className="w-5 h-5 relative z-10" />
      </a>
    </footer>
  );
};
