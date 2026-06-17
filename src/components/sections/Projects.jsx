import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import TechBadge from '../ui/TechBadge';
import { projects } from '../../data/portfolio';

const accent = {
  cyan: 'from-cyan-500/15 text-cyan-300 border-cyan-500/20',
  blue: 'from-blue-500/15 text-blue-300 border-blue-500/20',
  purple: 'from-purple-500/15 text-purple-300 border-purple-500/20',
  emerald: 'from-emerald-500/15 text-emerald-300 border-emerald-500/20',
  rose: 'from-rose-500/15 text-rose-300 border-rose-500/20',
};

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative card-glass card-glass-hover rounded-2xl p-6 overflow-hidden flex flex-col"
    >
      {/* corner glow */}
      <div
        className={`absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br ${accent[project.categoryColor]} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />

      <div className="relative flex items-start justify-between mb-4">
        <div className="w-14 h-14 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
          {project.emoji}
        </div>
        <span
          className={`px-3 py-1 rounded-full text-[11px] font-mono font-medium border bg-gradient-to-br ${accent[project.categoryColor]}`}
        >
          {project.category}
        </span>
      </div>

      <h3 className="relative font-grotesk font-semibold text-white text-lg leading-snug mb-3 group-hover:text-cyan-300 transition-colors">
        {project.name}
      </h3>

      <p className="relative text-slate-400 text-sm leading-relaxed mb-5 flex-1">
        {project.description}
      </p>

      <div className="relative flex flex-wrap gap-2 pt-4 border-t border-white/[0.06]">
        {project.tech.map((t) => (
          <TechBadge key={t} label={t} variant={project.categoryColor} size="xs" />
        ))}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-pad relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-[35rem] h-[35rem] rounded-full bg-purple-600/5 blur-[140px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Things I've Built"
          title="Featured Projects"
          description="From deep-learning audio models to FPGA protocols and embedded systems — a span of hands-on engineering."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.name} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
