import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';

export const FloatingContact: React.FC = () => {
  return (
    <div className="fixed bottom-6 left-6 z-40 hidden sm:block">
      <Link
        to="/contact"
        className="group px-4 py-2.5 rounded-full bg-slate-900/90 hover:bg-slate-900 border border-blue-500/40 text-slate-200 hover:text-white text-xs font-bold tracking-wider flex items-center gap-2.5 shadow-[0_0_20px_rgba(37,99,235,0.3)] backdrop-blur-md transition-all"
      >
        <ShieldCheck className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
        <span>IDENTITY CHECK</span>
      </Link>
    </div>
  );
};
