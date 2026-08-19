import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, Lock, Trash2, RefreshCw, Key, UserCheck, Inbox } from 'lucide-react';
import { Lead } from '../types';

export const Admin: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(false);
  const [actionMessage, setActionMessage] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'mustafa' && password === 'mustafanoor') {
      setIsAuthenticated(true);
      setLoginError('');
      fetchLeads();
    } else {
      setLoginError('Invalid Intelligence Credentials');
    }
  };

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/leads');
      if (!res.ok) throw new Error('Failed to fetch intelligence records');
      const data = await res.json();
      setLeads(data);
    } catch (err) {
      console.error(err);
      setActionMessage('Failed to connect to Intelligence DB');
    } finally {
      setLoading(false);
    }
  };

  const handlePurge = async () => {
    if (!window.confirm('Are you sure you want to PURGE ALL intelligence records? This action cannot be undone.')) {
      return;
    }

    try {
      const res = await fetch('/api/leads', { method: 'DELETE' });
      if (res.ok) {
        setLeads([]);
        setActionMessage('All records purged successfully.');
      }
    } catch (err) {
      console.error(err);
      setActionMessage('Failed to purge records.');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="pt-32 pb-20 max-w-md mx-auto px-6 bg-[#0A0B10] text-[#E5E7EB]">
        <div className="bg-[#12141C] border border-white/10 rounded-sm p-8 backdrop-blur-md shadow-2xl space-y-6">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 rounded-full border border-white/20 bg-white/5 text-white flex items-center justify-center mx-auto">
              <Lock className="w-5 h-5 text-indigo-400" />
            </div>
            <h2 className="text-2xl font-serif italic text-white">
              INTELLIGENCE COMMAND
            </h2>
            <p className="text-[10px] text-white/50 font-sans uppercase tracking-[0.2em]">
              RESTRICTED ADMIN CLEARANCE REQUIRED
            </p>
          </div>

          {loginError && (
            <div className="p-3 rounded-sm bg-red-950/40 border border-red-500/30 text-red-300 text-xs text-center font-sans">
              {loginError}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-1">
              <label className="text-[10px] uppercase tracking-widest font-sans text-white/60">
                Identity Name
              </label>
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="mustafa"
                className="w-full px-4 py-2.5 rounded-sm bg-[#0A0B10] border border-white/10 text-white text-sm focus:outline-none focus:border-white/30 font-sans"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] uppercase tracking-widest font-sans text-white/60">
                Access Key
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-2.5 rounded-sm bg-[#0A0B10] border border-white/10 text-white text-sm focus:outline-none focus:border-white/30 font-sans"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-full border border-white/30 bg-white/10 hover:bg-white hover:text-black text-white font-sans text-xs uppercase tracking-widest cursor-pointer transition-all"
            >
              AUTHENTICATE COMMAND
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-6 sm:px-12 space-y-8 bg-[#0A0B10] text-[#E5E7EB]">
      
      {/* Top Admin Header Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 rounded-sm bg-[#12141C] border border-white/10">
        <div>
          <div className="flex items-center gap-2 text-indigo-400 font-sans text-[10px] uppercase tracking-widest mb-1">
            <UserCheck className="w-4 h-4" />
            <span>AUTHENTICATED: MUSTAFA COMMAND</span>
          </div>
          <h1 className="text-2xl font-serif italic text-white">
            Client Intelligence Center
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={fetchLeads}
            disabled={loading}
            className="p-2.5 rounded-full border border-white/20 bg-white/5 hover:bg-white hover:text-black text-white transition-all cursor-pointer"
            title="Refresh Intelligence Data"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          </button>

          <button
            onClick={handlePurge}
            className="px-4 py-2.5 rounded-full border border-red-500/30 bg-red-950/30 hover:bg-red-900/50 text-red-200 font-sans text-xs uppercase tracking-widest flex items-center gap-2 transition-all cursor-pointer"
          >
            <Trash2 className="w-4 h-4" />
            <span>PURGE ALL RECORDS</span>
          </button>
        </div>
      </div>

      {actionMessage && (
        <div className="p-3 rounded-sm bg-[#12141C] border border-white/10 text-white/70 text-xs font-sans">
          {actionMessage}
        </div>
      )}

      {/* Leads Intelligence Table */}
      <div className="bg-[#12141C] border border-white/10 rounded-sm p-6 backdrop-blur-md overflow-x-auto shadow-2xl">
        {leads.length === 0 ? (
          <div className="py-16 text-center space-y-3">
            <Inbox className="w-12 h-12 text-white/30 mx-auto" />
            <p className="text-white/60 font-sans text-sm">
              No client submissions logged yet.
            </p>
          </div>
        ) : (
          <table className="w-full text-left text-sm text-white/80">
            <thead className="text-[10px] uppercase font-sans bg-[#0A0B10] text-white/50 border-b border-white/10">
              <tr>
                <th className="py-3 px-4">Timestamp</th>
                <th className="py-3 px-4">Client Identity</th>
                <th className="py-3 px-4">Email</th>
                <th className="py-3 px-4">Domain</th>
                <th className="py-3 px-4">Budget</th>
                <th className="py-3 px-4">Transmission Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 font-sans">
              {leads.map((lead) => (
                <tr key={lead.id} className="hover:bg-white/5 transition-colors">
                  <td className="py-4 px-4 text-xs text-white/50 whitespace-nowrap">
                    {new Date(lead.timestamp).toLocaleString()}
                  </td>
                  <td className="py-4 px-4 font-serif italic text-white whitespace-nowrap">
                    {lead.name}
                  </td>
                  <td className="py-4 px-4 text-indigo-400 whitespace-nowrap">
                    <a href={`mailto:${lead.email}`}>{lead.email}</a>
                  </td>
                  <td className="py-4 px-4 text-xs text-white/70 whitespace-nowrap">
                    {lead.projectType}
                  </td>
                  <td className="py-4 px-4 text-xs text-white/80 whitespace-nowrap">
                    {lead.budget || 'N/A'}
                  </td>
                  <td className="py-4 px-4 text-white/70 text-xs max-w-md break-words">
                    {lead.message}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

    </div>
  );
};
