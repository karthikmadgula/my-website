import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import TechBadge from '../ui/TechBadge';
import { skillCategories } from '../../data/portfolio';

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="skills" className="section-pad relative overflow-hidden">
      {/* subtle glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] rounded-full bg-blue-600/5 blur-[140px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="What I Work With"
          title="Technical Skills"
          description="A full backend toolkit — from API design and databases to containers, messaging, and beyond."
        />

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="card-glass card-glass-hover rounded-2xl p-6 group"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                  {cat.emoji}
                </div>
                <h3 className="font-grotesk font-semibold text-white text-lg">{cat.label}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <TechBadge key={skill} label={skill} variant={cat.color} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
