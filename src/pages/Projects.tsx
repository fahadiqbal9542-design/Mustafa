import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ExternalLink, Video, Sparkles, Layers, ArrowRight } from 'lucide-react';
import { PROJECTS_LIST } from '../constants';

export const Projects: React.FC = () => {
  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-6 sm:px-12 space-y-16 bg-[#0A0B10] text-[#E5E7EB]">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-white/80 font-sans text-[10px] uppercase tracking-[0.3em]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>PORTFOLIO SHOWCASE &bull; ARCHIVE</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-serif font-light tracking-tight text-white">
          Selected Works
        </h1>
        <p className="text-white/60 text-base font-sans leading-relaxed">
          A curated selection of full-stack applications, games, e-commerce platforms, and motion graphic edits.
        </p>
      </div>

      {/* Featured Special Card: Video Editing Section */}
      <div className="relative rounded-sm bg-[#12141C] border border-white/10 p-8 sm:p-12 shadow-2xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/5 text-white/80 text-[10px] uppercase tracking-widest font-sans">
              <Video className="w-3.5 h-3.5 text-indigo-400" />
              <span>SPECIAL CHILD PAGE</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif italic text-white">
              Video Editing & Motion Graphics Portfolio
            </h2>
            <p className="text-white/70 text-sm leading-relaxed font-sans">
              Explore my post-production showreels, commercial video edits, calligraphy VFX, and spiritual motion graphics.
            </p>
          </div>

          <div className="lg:col-span-4 flex lg:justify-end">
            <Link
              to="/projects/video-editing"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full border border-white/30 bg-white/10 hover:bg-white hover:text-black text-white font-sans text-xs uppercase tracking-widest transition-all cursor-pointer backdrop-blur-sm"
            >
              <span>EXPLORE VIDEO EDITING</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>

      {/* Primary Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS_LIST.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ y: -6 }}
            className="group bg-[#12141C] border border-white/10 hover:border-white/30 rounded-sm overflow-hidden backdrop-blur-md transition-all shadow-2xl flex flex-col"
          >
            {/* Image Preview Container */}
            <div className="relative h-56 bg-[#0A0B10] overflow-hidden border-b border-white/10">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B10] via-transparent to-transparent opacity-60" />
              
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 p-2.5 rounded-full bg-[#0A0B10]/90 border border-white/20 text-white hover:bg-white hover:text-black transition-all shadow-lg"
                title="Open Live Project"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Content Details */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <h3 className="text-xl font-serif italic text-white group-hover:text-white/80 transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed font-sans">
                  {project.description}
                </p>
              </div>

              {/* Tags & Action Button */}
              <div className="space-y-4 pt-2">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full bg-[#0A0B10] border border-white/10 text-white/60 text-[10px] uppercase tracking-widest font-sans"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-full border border-white/10 hover:bg-white hover:text-black text-white/80 hover:text-black text-[10px] uppercase tracking-widest font-sans flex items-center justify-center gap-2 transition-all"
                >
                  <span>LAUNCH DEMO</span>
                  <ExternalLink className="w-3.5 h-3.5 text-indigo-400 group-hover:text-black" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
};
