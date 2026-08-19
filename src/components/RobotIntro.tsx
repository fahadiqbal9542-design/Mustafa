import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Volume2, VolumeX, ArrowRight } from 'lucide-react';

interface RobotIntroProps {
  onEnter: () => void;
}

export const RobotIntro: React.FC<RobotIntroProps> = ({ onEnter }) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [showButton, setShowButton] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeFingers, setActiveFingers] = useState<number[]>([]);

  // Web Audio Synth references
  const audioCtxRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const isPlayingRef = useRef(false);
  const timerRef = useRef<number | null>(null);

  const fullText = "MUSTAFA DEVELOPS";

  // Mouse parallax movement
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth - 0.5) * 20;
    const y = (clientY / window.innerHeight - 0.5) * 20;
    setMousePos({ x, y });
  };

  // Laser text typing & finger opening sequence
  useEffect(() => {
    let currentIdx = 0;
    const typingInterval = setInterval(() => {
      if (currentIdx <= fullText.length) {
        setTypedText(fullText.slice(0, currentIdx));
        currentIdx++;
      } else {
        clearInterval(typingInterval);
        setShowButton(true);
      }
    }, 120);

    // Staggered finger activation sequence (0 to 4)
    const fingerTimers = [1, 2, 3, 4, 5].map((num, idx) => {
      return setTimeout(() => {
        setActiveFingers((prev) => [...prev, idx]);
      }, idx * 250);
    });

    return () => {
      clearInterval(typingInterval);
      fingerTimers.forEach(clearTimeout);
    };
  }, []);

  // Web Audio Synth for Bass Boosted Cyber Music
  const stopAudio = () => {
    isPlayingRef.current = false;
    setIsPlayingAudio(false);

    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    if (masterGainRef.current) {
      try {
        masterGainRef.current.gain.cancelScheduledValues(0);
        masterGainRef.current.gain.value = 0;
      } catch (e) {
        console.error(e);
      }
    }

    if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
      try {
        audioCtxRef.current.suspend();
      } catch (e) {
        console.error(e);
      }
    }
  };

  const startBassAudio = () => {
    try {
      if (!audioCtxRef.current) {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioCtxRef.current = new AudioCtx();
      }

      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      // Master gain
      const masterGain = ctx.createGain();
      masterGain.gain.value = 0.4;
      masterGainRef.current = masterGain;

      // Bass Booster Filter
      const bassFilter = ctx.createBiquadFilter();
      bassFilter.type = 'lowshelf';
      bassFilter.frequency.value = 180;
      bassFilter.gain.value = 14; // +14dB Bass boost

      masterGain.connect(bassFilter);
      bassFilter.connect(ctx.destination);

      isPlayingRef.current = true;
      setIsPlayingAudio(true);

      // Play 808 Sub-Bass Drops & Cyber Beats
      const triggerBassNote = () => {
        if (!isPlayingRef.current || !audioCtxRef.current) return;

        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const oscGain = ctx.createGain();

        // Sub-bass frequency drop (140Hz -> 36Hz)
        osc.type = 'sine';
        osc.frequency.setValueAtTime(140, now);
        osc.frequency.exponentialRampToValueAtTime(36, now + 0.4);

        oscGain.gain.setValueAtTime(0.8, now);
        oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);

        osc.connect(oscGain);
        oscGain.connect(masterGain);

        osc.start(now);
        osc.stop(now + 0.52);
      };

      // Rhythmic Cyber Synths
      const triggerCyberSynth = () => {
        if (!isPlayingRef.current || !audioCtxRef.current) return;

        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const oscGain = ctx.createGain();

        const notes = [220, 261.63, 293.66, 329.63, 392.0];
        const randomNote = notes[Math.floor(Math.random() * notes.length)];

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(randomNote, now);

        oscGain.gain.setValueAtTime(0.15, now);
        oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

        osc.connect(oscGain);
        oscGain.connect(masterGain);

        osc.start(now);
        osc.stop(now + 0.26);
      };

      // Immediate first notes
      triggerBassNote();
      triggerCyberSynth();

      // Loop rhythm
      let stepCount = 0;
      timerRef.current = window.setInterval(() => {
        if (!isPlayingRef.current) return;
        stepCount++;
        if (stepCount % 2 === 0) {
          triggerBassNote();
        }
        triggerCyberSynth();
      }, 350);
    } catch (e) {
      console.error('Audio initialization failed:', e);
    }
  };

  const toggleAudio = () => {
    if (isPlayingAudio) {
      stopAudio();
    } else {
      startBassAudio();
    }
  };

  const handleEnterClick = () => {
    stopAudio();
    onEnter();
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-[#0b0d17] text-white overflow-hidden select-none"
    >
      {/* Background Robot Image with Breathing & Parallax Movement */}
      <motion.div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat filter brightness-90"
        style={{
          backgroundImage: `url('https://i.pinimg.com/736x/f5/ef/4f/f5ef4f9ed46ff103b51ddbebfdb84423.jpg')`,
        }}
        animate={{
          scale: [1.02, 1.05, 1.02],
          x: mousePos.x,
          y: mousePos.y,
        }}
        transition={{
          scale: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
          x: { duration: 0.2, ease: 'easeOut' },
          y: { duration: 0.2, ease: 'easeOut' },
        }}
      >
        {/* Dark Sapphire Ambient Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d17] via-[#0b0d17]/40 to-black/60" />
      </motion.div>

      {/* Cybernetic Eye Glow & Neural Scanner */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Glowing eyes overlay */}
        <motion.div
          className="absolute top-[35%] left-[48%] -translate-x-1/2 w-24 h-4 bg-cyan-400/40 rounded-full blur-md"
          animate={{ opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Laser scanner line across screen */}
        <motion.div
          className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_#22d3ee]"
          animate={{ top: ['15%', '85%', '15%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Robot Hand 5-Finger Laser Beams */}
      <div className="absolute bottom-[30%] z-20 flex gap-4 pointer-events-none">
        {[0, 1, 2, 3, 4].map((fingerIdx) => (
          <motion.div
            key={fingerIdx}
            className="relative flex flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: activeFingers.includes(fingerIdx) ? 1 : 0.2,
              y: activeFingers.includes(fingerIdx) ? 0 : 30,
            }}
            transition={{ duration: 0.4 }}
          >
            {/* Fingertip Laser Point */}
            <div className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_20px_#22d3ee]" />
            {/* Upward Laser Ray */}
            <motion.div
              className="w-[2px] bg-gradient-to-t from-cyan-400 to-blue-600 shadow-[0_0_10px_#3b82f6]"
              initial={{ height: 0 }}
              animate={{ height: activeFingers.includes(fingerIdx) ? 140 : 0 }}
              transition={{ duration: 0.6, delay: fingerIdx * 0.1 }}
            />
          </motion.div>
        ))}
      </div>

      {/* Top Header - Pure Editorial Title */}
      <div className="relative z-30 pt-16 flex flex-col items-center text-center px-4">
        {/* Luminous Neon "MUSTAFA DEVELOPS" Holographic Text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-light tracking-widest text-white drop-shadow-[0_0_35px_rgba(255,255,255,0.4)]">
            {typedText}
            <span className="animate-pulse text-indigo-400">|</span>
          </h1>
          <p className="mt-2 text-white/70 tracking-[0.4em] uppercase text-xs sm:text-sm font-sans font-light">
            Creative Director & Full-Stack Developer
          </p>
        </motion.div>
      </div>

      {/* Bottom Center Controls - Speaker Button next to Enter Portfolio */}
      <div className="relative z-30 pb-16 flex items-center justify-center gap-4 px-4">
        <AnimatePresence>
          {showButton && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20 }}
              className="flex items-center gap-4"
            >
              {/* Enter Portfolio Button */}
              <motion.button
                onClick={handleEnterClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 rounded-full bg-white/10 hover:bg-white hover:text-black text-white font-sans text-xs uppercase tracking-widest flex items-center gap-3 border border-white/30 cursor-pointer backdrop-blur-md transition-all duration-300 shadow-2xl"
              >
                <span>ENTER PORTFOLIO</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              {/* Speaker / Bass Boosted Audio Toggle Button */}
              <motion.button
                onClick={toggleAudio}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`relative p-4 rounded-full border border-cyan-400/40 backdrop-blur-md transition-all cursor-pointer ${
                  isPlayingAudio
                    ? 'bg-cyan-500/30 text-cyan-300 shadow-[0_0_25px_#22d3ee]'
                    : 'bg-black/50 text-slate-400 hover:text-white'
                }`}
                title={isPlayingAudio ? 'Mute Bass Audio' : 'Play Bass Boosted Audio'}
              >
                {/* Audio Waves Pulse Ring when Playing */}
                {isPlayingAudio && (
                  <motion.div
                    className="absolute inset-0 rounded-full border border-cyan-400"
                    animate={{ scale: [1, 1.4, 1], opacity: [0.8, 0, 0.8] }}
                    transition={{ duration: 1.2, repeat: Infinity }}
                  />
                )}
                {isPlayingAudio ? (
                  <Volume2 className="w-6 h-6 animate-pulse text-cyan-300" />
                ) : (
                  <VolumeX className="w-6 h-6" />
                )}
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
