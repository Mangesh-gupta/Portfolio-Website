import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, ShieldCheck, Trophy, Sparkles, CheckCircle2 } from 'lucide-react';
import { certificationsData, achievementsData } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-white relative border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5 text-indigo-600" />
            <span>Credentials & Honors</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Certifications & Key Achievements
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Validated technical expertise by Anthropic, Microsoft, HackerRank, and Tata Consultancy Services.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="mb-16">
          <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-indigo-600" />
            <span>Industry Certifications</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificationsData.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`rounded-2xl border p-6 flex flex-col justify-between transition-all duration-200 ${
                  cert.highlight
                    ? 'bg-gradient-to-b from-indigo-50/70 to-white border-indigo-200 shadow-sm hover:shadow-md'
                    : 'bg-white border-slate-200/90 shadow-2xs hover:shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                      cert.highlight
                        ? 'bg-indigo-600 text-white'
                        : 'bg-slate-100 text-slate-700'
                    }`}>
                      {cert.issuer}
                    </span>
                    {cert.issued && (
                      <span className="text-xs text-slate-400 font-medium">
                        {cert.issued}
                      </span>
                    )}
                  </div>

                  <h4 className="text-base font-bold text-slate-900 leading-snug">
                    {cert.title}
                  </h4>

                  {cert.credentialId && (
                    <p className="mt-1 text-[11px] font-mono text-slate-500 truncate">
                      ID: {cert.credentialId}
                    </p>
                  )}

                  {/* Skills associated */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 text-[10px] font-medium bg-slate-50 text-slate-600 rounded border border-slate-200/70"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Credly / Verification Link */}
                {cert.url && (
                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
                    >
                      <span>Verify on Credly</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Hackathon & Expo Honors */}
        <div>
          <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
            <Trophy className="w-5 h-5 text-amber-500" />
            <span>Honors & Hackathon Accolades</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievementsData.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200 hover:bg-white hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h4 className="text-base font-bold text-slate-900">
                    {item.title}
                  </h4>
                  <span className="text-xs font-semibold text-indigo-700 bg-indigo-50 border border-indigo-100 px-2.5 py-0.5 rounded-full shrink-0">
                    {item.location}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[11px] font-medium bg-white text-slate-700 rounded-md border border-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
