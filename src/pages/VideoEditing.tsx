import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Play, ArrowLeft, Video, ExternalLink, Film, Film as Clapperboard } from 'lucide-react';
import { VIDEO_PROJECTS } from '../constants';

export const VideoEditing: React.FC = () => {
  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-6 sm:px-12 space-y-16 bg-[#0A0B10] text-[#E5E7EB]">
      
      {/* Top Breadcrumb & Return */}
      <div className="flex items-center justify-between">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-white/60 hover:text-white text-xs font-sans uppercase tracking-widest transition-colors"
        >
          <ArrowLeft className="w-4 h-4 text-indigo-400" />
          <span>Back to Projects</span>
        </Link>
        <span className="text-[10px] font-sans uppercase tracking-widest text-white/40">
          PATH: /PROJECTS/VIDEO-EDITING
        </span>
      </div>

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-white/80 font-sans text-[10px] uppercase tracking-[0.3em]">
          <Clapperboard className="w-3.5 h-3.5" />
          <span>CINEMATIC SHOWCASE &bull; MOTION GRAPHICS</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-serif font-light tracking-tight text-white">
          Video Editing & VFX
        </h1>
        <p className="text-white/60 text-base font-sans leading-relaxed">
          High-energy commercial edits, motion graphics, calligraphy visual effects, and post-production work.
        </p>
      </div>

      {/* Video Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {VIDEO_PROJECTS.map((video) => (
          <motion.div
            key={video.id}
            whileHover={{ y: -6 }}
            className="group bg-[#12141C] border border-white/10 hover:border-white/30 rounded-sm overflow-hidden backdrop-blur-md transition-all shadow-2xl flex flex-col"
          >
            {/* Thumbnail Box */}
            <div className="relative h-60 bg-[#0A0B10] overflow-hidden border-b border-white/10">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B10] via-transparent to-transparent opacity-70" />

              {/* Play Overlay Button */}
              <a
                href={video.pinterestUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-colors"
              >
                <div className="w-14 h-14 rounded-full border border-white/30 bg-white/20 backdrop-blur-md text-white flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all">
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                </div>
              </a>

              {/* Duration Tag */}
              {video.duration && (
                <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-black/80 text-white font-sans text-[10px] uppercase tracking-widest border border-white/20">
                  {video.duration}
                </span>
              )}
            </div>

            {/* Video Info */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <h3 className="text-xl font-serif italic text-white group-hover:text-white/80 transition-colors">
                  {video.title}
                </h3>
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed font-sans">
                  {video.description}
                </p>
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex flex-wrap gap-2">
                  {video.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full bg-[#0A0B10] border border-white/10 text-white/60 text-[10px] uppercase tracking-widest font-sans"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={video.pinterestUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-full border border-white/10 hover:bg-white hover:text-black text-white/80 hover:text-black text-[10px] uppercase tracking-widest font-sans flex items-center justify-center gap-2 transition-all"
                >
                  <span>WATCH ON PINTEREST</span>
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
