import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Brain, Server, Database, Layout, Cpu, Check } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

const iconMap = {
  Sparkles,
  Brain,
  Server,
  Database,
  Layout,
  Cpu
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-[#f8fafc] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Arsenal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Comprehensive Skills & Technologies
          </h2>
          <p className="mt-3 text-base text-slate-600">
            A battle-tested technical stack optimized for building high-concurrency, intelligent AI architectures.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category, index) => {
            const Icon = iconMap[category.icon] || Sparkles;
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-sm hover:shadow-lg hover:border-indigo-200 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center border ${category.bgColor} ${category.borderColor} ${category.textColor} shadow-xs group-hover:scale-105 transition-transform`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 leading-tight">
                        {category.category}
                      </h3>
                      <span className="text-[11px] text-slate-500 font-medium">
                        {category.skills.length} core proficiencies
                      </span>
                    </div>
                  </div>

                  {/* Skill Items */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 hover:bg-indigo-50/60 border border-slate-200/80 hover:border-indigo-200 text-xs text-slate-700 hover:text-indigo-900 transition-colors"
                      >
                        <Check className="w-3 h-3 text-indigo-500 shrink-0" />
                        <span className="font-medium">{skill.name}</span>
                        {skill.level && (
                          <span className="text-[10px] text-slate-500 bg-slate-200/60 px-1.5 py-0.2 rounded font-medium">
                            {skill.level}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="font-semibold text-slate-700">Production Ready</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
