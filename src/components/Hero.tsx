import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Terminal } from 'lucide-react';
import { PERSONAL_INFO, HERO_IMAGES } from '../constants';

export const Hero: React.FC = () => {
  const [currentImgIdx, setCurrentImgIdx] = useState(0);

  // Auto-slide profile images every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImgIdx((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-[#0A0B10] text-[#E5E7EB]">
      {/* Background Radial Glow */}
      <div
        className="absolute top-0 right-0 w-full h-full opacity-30 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 70% 30%, #4F46E5 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Editorial Eyebrow */}
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <span className="text-[10px] uppercase tracking-[0.4em] text-white/50 font-editorial-eyebrow">
                Est. MMXXIV &bull; {PERSONAL_INFO.availability}
              </span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif font-light tracking-tight text-white leading-[0.9]">
              THE <br />
              <span className="font-serif italic font-normal text-white/90">CELESTIAL</span> <br />
              ARCHITECT.
            </h1>

            {/* Subtitle with line divider */}
            <div className="space-y-4 max-w-xl mx-auto lg:mx-0">
              <p className="text-sm leading-relaxed text-[#E5E7EB]/70 font-sans">
                I'm <span className="text-white font-medium">{PERSONAL_INFO.name}</span>, Creative Director & Full-Stack Developer. A curated exploration of form, light, and code. Crafting quiet brilliance and interactive visual engines.
              </p>

              <div className="flex items-center justify-center lg:justify-start gap-4 pt-2">
                <div className="h-[1px] w-12 bg-white/40" />
                <span className="text-[10px] uppercase tracking-[0.25em] text-white/60 font-sans">
                  Series 01 &bull; {PERSONAL_INFO.location}
                </span>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <Link
                to="/contact"
                className="group px-8 py-4 rounded-full border border-white/30 bg-white/5 hover:bg-white hover:text-black font-sans text-xs uppercase tracking-widest flex items-center gap-3 transition-all duration-300 cursor-pointer backdrop-blur-sm"
              >
                <span>INITIATE IDENTITY CHECK</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/projects"
                className="px-8 py-4 rounded-full border border-white/10 hover:border-white/40 text-white/70 hover:text-white font-sans text-xs uppercase tracking-widest transition-all"
              >
                Explore Selected Works
              </Link>
            </div>
          </div>

          {/* Right Profile Image Container with Side Badge */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-64 sm:w-80 h-80 sm:h-96">
              
              {/* Image Frame Card */}
              <div className="relative w-full h-full bg-gradient-to-br from-[#1A1D29] to-[#0A0B10] border border-white/10 shadow-2xl overflow-hidden rounded-sm">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={HERO_IMAGES[currentImgIdx]}
                    src={HERO_IMAGES[currentImgIdx]}
                    alt={PERSONAL_INFO.name}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.8 }}
                    className="w-full h-full object-cover filter contrast-105 opacity-90"
                  />
                </AnimatePresence>
                
                {/* Subtle Editorial Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B10] via-transparent to-transparent opacity-70" />
                
                {/* Bottom Card Title */}
                <div className="absolute bottom-4 left-4 right-4 p-4">
                  <h2 className="text-2xl font-serif italic text-white/90">
                    {PERSONAL_INFO.name}
                  </h2>
                  <p className="text-[10px] font-sans uppercase tracking-[0.2em] text-white/50 mt-1">
                    Creative Direction / Limited Release
                  </p>
                </div>
              </div>

              {/* Repositioned Badge on the Right Side */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="absolute -right-4 sm:-right-12 top-8 z-20 w-28 h-28 rounded-full border border-white/20 flex flex-col items-center justify-center backdrop-blur-md bg-black/40 text-center shadow-xl"
              >
                <span className="text-[9px] uppercase tracking-widest text-white/90 font-sans leading-tight">
                  AVAILABLE<br />FOR HIRE
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 animate-pulse" />
              </motion.div>

              {/* Bottom Tech Label Badge */}
              <div className="absolute -bottom-5 left-4 right-4 z-20 px-4 py-2.5 bg-[#0A0B10]/90 border border-white/10 backdrop-blur-md flex items-center justify-between text-[10px] uppercase tracking-widest text-white/60">
                <div className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                  <span>FULL-STACK ARCHITECTURE</span>
                </div>
                <div className="flex items-center gap-1.5 font-serif italic text-white/90">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                  <span>01 / 04</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
