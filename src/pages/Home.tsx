import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, Layers, Code, Sparkles, Cpu } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Navigation, Pagination } from 'swiper/modules';
import type { Swiper as SwiperClass } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Hero } from '../components/Hero';
import { VISUALIZATION_SLIDER_IMAGES, SKILLS_LIST } from '../constants';
import { Counter } from '../components/Counter';

export const Home: React.FC = () => {
  const swiperRef = useRef<SwiperClass | null>(null);

  return (
    <div className="space-y-24 pb-16">
      {/* Hero Section */}
      <Hero />

      {/* Featured Works - Visualization Section */}
      <section className="relative max-w-7xl mx-auto px-6 sm:px-12">
        
        {/* Centered Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-white/80 font-sans text-[10px] uppercase tracking-[0.3em]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Gallery &bull; Series 01</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-serif italic text-white tracking-tight">
            Featured Works
          </h2>
          <p className="text-white/60 text-base font-sans leading-relaxed">
            A curated exploration of form, light, and visual rendering engines.
          </p>
        </div>

        {/* 3D Coverflow Swiper Slider */}
        <div className="relative group px-4">
          
          {/* Custom Navigation Arrows */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full border border-white/20 bg-[#0A0B10]/80 text-white hover:bg-white hover:text-black flex items-center justify-center transition-all cursor-pointer backdrop-blur-md"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full border border-white/20 bg-[#0A0B10]/80 text-white hover:bg-white hover:text-black flex items-center justify-center transition-all cursor-pointer backdrop-blur-md"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            loop={true}
            speed={800}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            coverflowEffect={{
              rotate: 25,
              stretch: 0,
              depth: 180,
              modifier: 1.2,
              slideShadows: false,
            }}
            modules={[EffectCoverflow, Autoplay, Navigation, Pagination]}
            className="w-full py-8"
          >
            {VISUALIZATION_SLIDER_IMAGES.map((imgUrl, idx) => (
              <SwiperSlide
                key={idx}
                className="!w-[280px] sm:!w-[420px] md:!w-[520px] !h-[340px] sm:!h-[420px] rounded-sm overflow-hidden border border-white/10 bg-[#12141C] shadow-2xl relative group/card"
              >
                {/* Image element with contain fit */}
                <div className="w-full h-full p-3 flex items-center justify-center bg-[#0A0B10] relative">
                  <img
                    src={imgUrl}
                    alt={`Visualization Work ${idx + 1}`}
                    className="max-w-full max-h-full object-contain filter contrast-105 transition-transform duration-500 group-hover/card:scale-105"
                  />
                  
                  {/* Top Glowing Overlay - "Visualization Works" */}
                  <div className="absolute top-4 left-4 right-4 z-20 pt-2 pb-2 px-4 rounded-full bg-[#0A0B10]/90 backdrop-blur-md border border-white/20 flex items-center justify-between text-[10px] uppercase tracking-widest text-white/90">
                    <span className="flex items-center gap-2 font-sans">
                      <Layers className="w-3.5 h-3.5 text-indigo-400" />
                      <span>VISUALIZATION WORKS</span>
                    </span>
                    <span className="font-serif italic text-white/60">0{idx + 1} / 05</span>
                  </div>

                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B10]/80 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Technical Arsenal & Expertise Section */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="bg-[#12141C] border border-white/10 p-8 sm:p-14 backdrop-blur-md relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/20 bg-white/5 text-white/70 font-sans text-[10px] uppercase tracking-[0.3em]">
                <Cpu className="w-3.5 h-3.5 text-indigo-400" />
                <span>TECHNICAL ARSENAL</span>
              </div>
              <h3 className="text-3xl sm:text-5xl font-serif font-light text-white leading-tight">
                Engineering <br /><span className="font-serif italic text-white/80">Precision & Speed</span>
              </h3>
              <p className="text-white/60 text-sm leading-relaxed font-sans">
                Combining modern frontend architectures, clean state management, and custom visual rendering engines to deliver exceptional user interfaces.
              </p>
              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-sans text-white/80 hover:text-white transition-colors"
                >
                  <span>Learn more about my background</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Skill Bars with Animated Counter */}
            <div className="lg:col-span-7 space-y-5">
              {SKILLS_LIST.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex items-center justify-between text-xs uppercase tracking-widest font-sans text-white/80">
                    <span className="flex items-center gap-2">
                      <Code className="w-3.5 h-3.5 text-indigo-400" />
                      <span>{skill.name}</span>
                    </span>
                    <span className="text-white/60 font-serif italic">
                      <Counter to={skill.level} suffix="%" />
                    </span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      className="h-full rounded-full bg-white/80"
                    />
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="relative rounded-sm bg-gradient-to-br from-[#1A1D29] to-[#0A0B10] border border-white/10 p-10 sm:p-16 text-center space-y-6 overflow-hidden shadow-2xl">
          <h3 className="text-3xl sm:text-5xl font-serif italic text-white">
            Ready to Build Your Next Solution?
          </h3>
          <p className="text-white/60 max-w-2xl mx-auto text-sm sm:text-base font-sans leading-relaxed">
            Let's connect and discuss your vision, architecture requirements, or custom interactive application.
          </p>
          <div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/30 bg-white/10 hover:bg-white hover:text-black text-white font-sans text-xs uppercase tracking-widest transition-all cursor-pointer backdrop-blur-sm"
            >
              <span>SUBMIT IDENTITY CHECK</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
