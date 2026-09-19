import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ExternalLink, Sparkles, Copy, Check, Code2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

function LinkedinIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.9 0-1.63.73-1.63 1.63s.73 1.63 1.63 1.63 1.63-.73 1.63-1.63-.73-1.63-1.63-1.63Z" />
    </svg>
  );
}

function GithubIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5 text-indigo-600" />
            <span>Connect & Collaborate</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Get In Touch
          </h2>
          <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Open to discussing Generative AI architectures, innovative technical projects, and enterprise engineering opportunities.
          </p>
        </div>

        {/* Direct Contact Hub */}
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Top Primary Channels Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Email Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="p-6 rounded-2xl bg-slate-50/80 hover:bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-4 group-hover:scale-105 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Email
                </p>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="mt-1 block text-sm font-bold text-slate-900 hover:text-indigo-600 transition-colors break-all"
                >
                  {personalInfo.email}
                </a>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-xs font-bold text-indigo-600 hover:text-indigo-800"
                >
                  Compose Email →
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors"
                  title="Copy Email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </motion.div>

            {/* Phone Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="p-6 rounded-2xl bg-slate-50/80 hover:bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-4 group-hover:scale-105 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Phone
                </p>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="mt-1 block text-sm font-bold text-slate-900 hover:text-indigo-600 transition-colors"
                >
                  {personalInfo.phone}
                </a>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="text-xs font-bold text-blue-600 hover:text-blue-800"
                >
                  Call Directly →
                </a>
                <button
                  onClick={handleCopyPhone}
                  className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors"
                  title="Copy Phone"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </motion.div>

            {/* Location Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="p-6 rounded-2xl bg-slate-50/80 hover:bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-600 mb-4 group-hover:scale-105 transition-transform">
                  <MapPin className="w-6 h-6" />
                </div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Location
                </p>
                <p className="mt-1 text-sm font-bold text-slate-900">
                  {personalInfo.location}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 font-medium">
                Assistant System Engineer @ TCS
              </div>
            </motion.div>

          </div>

          {/* Social Profiles Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white flex items-center justify-between shadow-md transition-all group"
            >
              <div className="flex items-center gap-3">
                <GithubIcon className="w-5 h-5 text-white" />
                <div>
                  <p className="text-xs font-semibold text-slate-400">Repositories</p>
                  <p className="text-sm font-bold text-white">GitHub Profile</p>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
            </a>

            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-[#0a66c2] hover:bg-[#084e96] text-white flex items-center justify-between shadow-md transition-all group"
            >
              <div className="flex items-center gap-3">
                <LinkedinIcon className="w-5 h-5 text-white" />
                <div>
                  <p className="text-xs font-semibold text-blue-200">Professional</p>
                  <p className="text-sm font-bold text-white">LinkedIn Profile</p>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-blue-200 group-hover:text-white transition-colors" />
            </a>

            <a
              href={personalInfo.socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white flex items-center justify-between shadow-md transition-all group"
            >
              <div className="flex items-center gap-3">
                <Code2 className="w-5 h-5 text-white" />
                <div>
                  <p className="text-xs font-semibold text-amber-100">500+ Solved</p>
                  <p className="text-sm font-bold text-white">LeetCode Profile</p>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-amber-100 group-hover:text-white transition-colors" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
