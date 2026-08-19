import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Send, CheckCircle2, Lock, Mail, User, MessageSquare, Tag } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Web Development',
    budget: '$1,000 - $3,000',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // 1. Submit to Formspree
      const formspreePromise = fetch('https://formspree.io/f/xbdavjle', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          _subject: `New Identity Check from ${formData.name}`,
        }),
      });

      // 2. Submit to local server /api/leads for Admin Panel persistence
      const localPromise = fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          deviceInfo: navigator.userAgent,
        }),
      });

      await Promise.allSettled([formspreePromise, localPromise]);
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        projectType: 'Web Development',
        budget: '$1,000 - $3,000',
        message: '',
      });
    } catch (err) {
      console.error('Submission error:', err);
      setStatus('error');
    }
  };

  return (
    <div className="pt-28 pb-20 max-w-5xl mx-auto px-6 sm:px-12 space-y-12 bg-[#0A0B10] text-[#E5E7EB]">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-white/80 font-sans text-[10px] uppercase tracking-[0.3em]">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>INTELLIGENCE HUB &bull; ENCRYPTED</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-serif font-light tracking-tight text-white">
          Identity Check
        </h1>
        <p className="text-white/60 text-sm sm:text-base font-sans leading-relaxed">
          Submit your project requirements, scope, or direct message below.
        </p>
      </div>

      {/* Form Container */}
      <div className="bg-[#12141C] border border-white/10 rounded-sm p-8 sm:p-12 backdrop-blur-md shadow-2xl relative overflow-hidden">
        
        {/* Top Encryption Security Badge */}
        <div className="flex items-center justify-between pb-8 mb-8 border-b border-white/10 text-[10px] font-sans uppercase tracking-widest text-white/50">
          <div className="flex items-center gap-2 text-indigo-400">
            <Lock className="w-3.5 h-3.5" />
            <span>256-BIT ENCRYPTED TRANSMISSION</span>
          </div>
          <div className="hidden sm:block text-white/40">
            DESTINATION: {PERSONAL_INFO.email}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="py-12 text-center space-y-6"
            >
              <div className="w-16 h-16 rounded-full border border-white/20 bg-white/10 text-white flex items-center justify-center mx-auto shadow-2xl">
                <CheckCircle2 className="w-8 h-8 text-indigo-400" />
              </div>
              <h3 className="text-3xl font-serif italic text-white">
                IDENTITY LOGGED & TRANSMITTED
              </h3>
              <p className="text-white/70 max-w-md mx-auto text-sm leading-relaxed font-sans">
                Thank you! Your submission has been securely recorded on the intelligence server and dispatched. I will respond within &lt; 2 hours.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="px-6 py-3 rounded-full border border-white/20 bg-white/10 hover:bg-white hover:text-black text-white font-sans text-xs uppercase tracking-widest cursor-pointer transition-all"
              >
                SUBMIT ANOTHER CHECK
              </button>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 1 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-sans text-white/60 flex items-center gap-2">
                    <User className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Identity Name *</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Mercer"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-sm bg-[#0A0B10] border border-white/10 text-white focus:outline-none focus:border-white/30 text-sm transition-colors font-sans"
                  />
                </div>

                {/* Email Address */}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-sans text-white/60 flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Email Address *</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-sm bg-[#0A0B10] border border-white/10 text-white focus:outline-none focus:border-white/30 text-sm transition-colors font-sans"
                  />
                </div>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Project Type */}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-sans text-white/60 flex items-center gap-2">
                    <Tag className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Project Domain</span>
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3 rounded-sm bg-[#0A0B10] border border-white/10 text-white focus:outline-none focus:border-white/30 text-sm transition-colors font-sans"
                  >
                    <option value="Web Development">Full-Stack Web App</option>
                    <option value="Mobile App">Mobile Application</option>
                    <option value="UI/UX Branding">UI/UX & Brand System</option>
                    <option value="Video Editing">Video Editing & Motion VFX</option>
                    <option value="Consultation">General Inquiry / Consultation</option>
                  </select>
                </div>

                {/* Budget Range */}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-sans text-white/60 flex items-center gap-2">
                    <Tag className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Budget Scope</span>
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3 rounded-sm bg-[#0A0B10] border border-white/10 text-white focus:outline-none focus:border-white/30 text-sm transition-colors font-sans"
                  >
                    <option value="< $1,000">&lt; $1,000</option>
                    <option value="$1,000 - $3,000">$1,000 - $3,000</option>
                    <option value="$3,000 - $5,000">$3,000 - $5,000</option>
                    <option value="$5,000+">$5,000+</option>
                  </select>
                </div>

              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-sans text-white/60 flex items-center gap-2">
                  <MessageSquare className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Project Transmission Details *</span>
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Describe your project vision, timeline, or objectives..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-sm bg-[#0A0B10] border border-white/10 text-white focus:outline-none focus:border-white/30 text-sm transition-colors resize-none font-sans"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-4 rounded-full border border-white/30 bg-white/10 hover:bg-white hover:text-black text-white font-sans text-xs uppercase tracking-widest flex items-center justify-center gap-3 transition-all cursor-pointer backdrop-blur-sm disabled:opacity-50"
              >
                {status === 'submitting' ? (
                  <span>TRANSMITTING IDENTITY CHECK...</span>
                ) : (
                  <>
                    <span>SUBMIT IDENTITY CHECK</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

            </motion.form>
          )}
        </AnimatePresence>

      </div>

    </div>
  );
};
