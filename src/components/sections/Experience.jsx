import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { FiExternalLink, FiBriefcase, FiMapPin, FiCalendar } from 'react-icons/fi';
import SectionTitle from '../ui/SectionTitle';
import TechBadge from '../ui/TechBadge';
import { experience } from '../../data/portfolio';

function ProjectBlock({ project, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className="card-glass card-glass-hover rounded-2xl p-6 sm:p-7"
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 shrink-0 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-2xl">
          {project.emoji}
        </div>
        <div className="min-w-0">
          <h4 className="font-grotesk font-semibold text-white text-lg leading-snug">
            {project.name}
          </h4>
          {project.url && (
            <a
              href={`https://${project.url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-cyan-400 text-sm font-mono hover:text-cyan-300 transition-colors mt-1"
            >
              {project.url} <FiExternalLink size={12} />
            </a>
          )}
        </div>
      </div>

      <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>

      <ul className="space-y-2 mb-5">
        {project.bullets.map((b, i) => (
          <li key={i} className="flex gap-3 text-slate-300 text-sm leading-relaxed">
            <span className="text-cyan-400 mt-1.5 shrink-0">▹</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06]">
        {project.tech.map((t) => (
          <TechBadge key={t} label={t} variant="cyan" size="xs" />
        ))}
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section-pad relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Where I've Worked"
          title="Experience"
          description="Production backend & DevOps work shipping real platforms used in the wild."
        />

        {experience.map((job, idx) => (
          <div key={idx} className="relative">
            {/* Company header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-6 rounded-2xl bg-gradient-to-r from-cyan-500/[0.07] to-transparent border border-cyan-500/15">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-[#050514]">
                    <FiBriefcase size={22} />
                  </div>
                  <div>
                    <h3 className="font-grotesk font-bold text-white text-xl">{job.role}</h3>
                    <p className="text-cyan-400 font-medium">{job.company}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5 text-sm text-slate-400 sm:items-end">
                  <span className="inline-flex items-center gap-1.5">
                    <FiCalendar size={13} /> {job.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <FiMapPin size={13} /> {job.location}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Project cards */}
            <div className="grid lg:grid-cols-3 gap-6 lg:items-start">
              {job.projects.map((p, i) => (
                <ProjectBlock key={p.name} project={p} delay={i * 0.1} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
