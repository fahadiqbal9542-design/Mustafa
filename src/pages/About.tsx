import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, Briefcase, Users, Code2, Sparkles, Terminal } from 'lucide-react';
import { PERSONAL_INFO, HERO_IMAGES, STATS_LIST, SKILLS_LIST } from '../constants';
import { Counter } from '../components/Counter';

export const About: React.FC = () => {
  const [currentImgIdx, setCurrentImgIdx] = useState(0);

  // Auto-slide image in photo box every 3.5s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImgIdx((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-6 sm:px-12 space-y-20 bg-[#0A0B10] text-[#E5E7EB]">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-white/80 font-sans text-[10px] uppercase tracking-[0.3em]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>CREATIVE PROFILE &bull; PHILOSOPHY</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-serif font-light tracking-tight text-white">
          About Ghulam Mustafa
        </h1>
        <p className="text-white/60 text-base font-sans leading-relaxed">
          Creative Director, Full-Stack Developer & Digital Craftsman based in {PERSONAL_INFO.location}.
        </p>
      </div>

      {/* Main Grid: Bio & Hover-Animated Sliding Image Box */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column - Bio & Discovery */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-[#12141C] border border-white/10 p-8 sm:p-10 backdrop-blur-md space-y-6 rounded-sm">
            <h2 className="text-2xl sm:text-4xl font-serif italic text-white">
              Design thinking meets Engineering
            </h2>
            <p className="text-white/80 text-sm leading-relaxed font-sans">
              With over 4+ years of hands-on experience in software development and visual aesthetics, I specialize in bridging the gap between artistic direction and complex technical execution.
            </p>
            <p className="text-white/60 text-xs sm:text-sm leading-relaxed font-sans">
              My core focus centers on crafting ultra-fast web applications, real-time interactive canvases, and brand ecosystems that leave a lasting digital footprint.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-sm bg-[#0A0B10] border border-white/10 flex items-center gap-3">
                <Terminal className="w-5 h-5 text-indigo-400 shrink-0" />
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-white/50 font-sans">Primary Focus</h4>
                  <p className="text-xs font-medium text-white font-sans mt-0.5">Full-Stack & Interactive UI</p>
                </div>
              </div>
              <div className="p-4 rounded-sm bg-[#0A0B10] border border-white/10 flex items-center gap-3">
                <Code2 className="w-5 h-5 text-indigo-400 shrink-0" />
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-white/50 font-sans">Core Stack</h4>
                  <p className="text-xs font-medium text-white font-sans mt-0.5">React, Node, TS, Motion</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Hover Animated Photo Box */}
        <div className="lg:col-span-5 flex justify-center">
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="relative w-72 sm:w-80 h-96 border border-white/20 bg-[#12141C] group cursor-pointer overflow-hidden rounded-sm shadow-2xl"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={HERO_IMAGES[currentImgIdx]}
                src={HERO_IMAGES[currentImgIdx]}
                alt={PERSONAL_INFO.name}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.7 }}
                className="w-full h-full object-cover filter contrast-110 group-hover:brightness-110 transition-all duration-500"
              />
            </AnimatePresence>

            {/* Gradient Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B10] via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Label Overlay */}
            <div className="absolute bottom-4 left-4 right-4 z-20 p-4 bg-[#0A0B10]/90 border border-white/20 backdrop-blur-md text-center">
              <p className="text-lg font-serif italic text-white">
                {PERSONAL_INFO.name}
              </p>
              <p className="text-[10px] text-white/50 font-sans uppercase tracking-[0.2em] mt-1">
                {PERSONAL_INFO.title}
              </p>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Animated Stats Section (0 to Target Counter) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {STATS_LIST.map((stat, idx) => (
          <div
            key={idx}
            className="bg-[#12141C] border border-white/10 p-6 text-center space-y-2 backdrop-blur-md rounded-sm"
          >
            <div className="text-3xl sm:text-5xl font-serif italic text-white">
              <Counter to={stat.value} suffix={stat.suffix} />
            </div>
            <div className="text-[10px] font-sans uppercase tracking-[0.2em] text-white/50">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Technical Arsenal Grid */}
      <div className="bg-[#12141C] border border-white/10 p-8 sm:p-12 space-y-8 backdrop-blur-md rounded-sm">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h3 className="text-2xl sm:text-4xl font-serif italic text-white">
            Skill & Proficiency Matrix
          </h3>
          <p className="text-white/60 text-xs font-sans">
            Continuous development across modern frontend, backend, and visual engineering tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILLS_LIST.map((skill) => (
            <div key={skill.name} className="p-4 rounded-sm bg-[#0A0B10] border border-white/10 space-y-2">
              <div className="flex justify-between text-xs uppercase tracking-widest font-sans text-white/80">
                <span>{skill.name}</span>
                <span className="text-white/60 font-serif italic">
                  <Counter to={skill.level} suffix="%" />
                </span>
              </div>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="h-full bg-white/80"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
