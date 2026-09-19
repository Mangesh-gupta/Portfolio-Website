import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-[#f8fafc] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Education & Foundations
          </h2>
          <p className="mt-3 text-base text-slate-600">
            A solid academic bedrock combining theoretical computer science with practical software engineering.
          </p>
        </div>

        {/* Education Cards */}
        <div className="max-w-4xl mx-auto space-y-6">
          {educationData.map((item, index) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`rounded-2xl border p-6 sm:p-7 transition-all duration-200 ${
                index === 0
                  ? 'bg-white border-indigo-200 shadow-md ring-1 ring-indigo-50'
                  : 'bg-white/80 border-slate-200 shadow-2xs'
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-4">
                <div className="space-y-1.5 max-w-2xl">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-lg font-bold text-slate-900 leading-snug">
                      {item.degree}
                    </h3>
                    {item.grade && (
                      <span className="whitespace-nowrap text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full shadow-2xs">
                        {item.grade}
                      </span>
                    )}
                  </div>
                  <p className="text-sm font-semibold text-slate-600">
                    {item.institution}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 font-medium shrink-0">
                  <span className="inline-flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200/80 whitespace-nowrap">
                    <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                    {item.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200/80 whitespace-nowrap">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {item.location}
                  </span>
                </div>
              </div>

              {item.details && (
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2">
                  {item.details}
                </p>
              )}

              {item.highlights && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-indigo-700 bg-indigo-50 border border-indigo-100 px-2.5 py-0.5 rounded-md"
                    >
                      <CheckCircle2 className="w-3 h-3 text-indigo-500" />
                      {h}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
