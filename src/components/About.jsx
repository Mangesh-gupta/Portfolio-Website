import React from 'react';
import { motion } from 'framer-motion';
import { Bot, BrainCircuit, Terminal, Trophy, Sparkles, CheckCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const pillars = [
    {
      icon: Bot,
      title: "Generative AI & Enterprise RAG",
      description: "Designing end-to-end LLM architectures with LangChain, Claude Agent SDK, and ChromaDB vector retrieval for compliant enterprise environments.",
      color: "text-blue-600 bg-blue-50 border-blue-100",
    },
    {
      icon: BrainCircuit,
      title: "Deep Learning & Vision",
      description: "Fine-tuning deep neural networks with TensorFlow & Keras for mission-critical applications like automated MRI cancer detection and NLP sentiment analysis.",
      color: "text-indigo-600 bg-indigo-50 border-indigo-100",
    },
    {
      icon: Terminal,
      title: "High-Performance Backend",
      description: "Crafting asynchronous RESTful microservices using FastAPI, JWT security, and structured data handling for ultra-low latency model inference.",
      color: "text-cyan-600 bg-cyan-50 border-cyan-100",
    },
    {
      icon: Trophy,
      title: "Disciplined Problem Solving",
      description: "500+ problems solved on LeetCode with a 4★ Python rating on HackerRank. Deep mastery of data structures, graph algorithms, and system optimization.",
      color: "text-amber-600 bg-amber-50 border-amber-100",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white border-y border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Bridging Deep Learning, Generative AI & Production Engineering
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            I am an Assistant System Engineer at Tata Consultancy Services (TCS) driven by solving complex technological challenges with scalable, intelligent AI systems.
          </p>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Narrative description */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 space-y-5 text-slate-600 leading-relaxed text-base"
          >
            <p>
              With a distinguished <strong className="text-slate-900">9.8 CGPA Bsc.IT</strong>, I cultivate a disciplined approach to software development and artificial intelligence. My current focus centers around architecting <strong className="text-slate-900">Generative AI systems</strong>, enterprise Retrieval-Augmented Generation (RAG) pipelines, and high-performance Python backends.
            </p>

            <p>
              At <strong className="text-slate-900">Tata Consultancy Services</strong>, I contribute to high-impact AI/ML solutions for global enterprise clients operating within compliance-driven sectors. My work spans designing robust FastAPI services, vector search with ChromaDB, and applying deep learning to medical imaging and NLP workflows.
            </p>

            <p>
              Beyond development, algorithmic excellence is central to my craftsmanship: I have tackled <strong className="text-slate-900">500+ LeetCode problems</strong>, achieved a <strong className="text-slate-900">4-Star Python rating</strong> on HackerRank, and earned the <strong className="text-slate-900">Claude Certified Architect (Foundations & Professional)</strong> credentials from Anthropic.
            </p>

            {/* Bullet Highlights */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2 text-slate-800 font-medium">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>E2 GenAI Competency (TCS)</span>
              </div>
              <div className="flex items-center gap-2 text-slate-800 font-medium">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Anthropic Claude Certified</span>
              </div>
              <div className="flex items-center gap-2 text-slate-800 font-medium">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Azure AI Certified Engineer</span>
              </div>
              <div className="flex items-center gap-2 text-slate-800 font-medium">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>9.8 CGPA Bsc.IT</span>
              </div>
            </div>
          </motion.div>

          {/* Core Pillars Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200/90 hover:bg-white hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center border mb-3 ${pillar.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
