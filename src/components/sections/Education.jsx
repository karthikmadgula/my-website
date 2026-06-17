import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { FiAward } from 'react-icons/fi';
import SectionTitle from '../ui/SectionTitle';
import { education, certifications } from '../../data/portfolio';

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="education" className="section-pad relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Academic Background"
          title="Education & Certifications"
          description="A strong academic foundation paired with continuous, self-driven learning."
        />

        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-10">
          {/* Education timeline */}
          <div ref={ref} className="relative">
            {/* vertical line */}
            <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-cyan-500/40 via-blue-500/30 to-transparent" />

            <div className="space-y-6">
              {education.map((edu, i) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: -24 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className="relative pl-14"
                >
                  {/* node */}
                  <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-[#050514] border-2 border-cyan-500/40 flex items-center justify-center text-lg z-10">
                    {edu.icon}
                  </div>

                  <div className="card-glass card-glass-hover rounded-2xl p-5">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                      <h3 className="font-grotesk font-semibold text-white text-base">{edu.degree}</h3>
                      <span className="text-cyan-400 text-xs font-mono shrink-0">{edu.period}</span>
                    </div>
                    <p className="text-slate-400 text-sm">{edu.institution}</p>
                    <span className="inline-block mt-3 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 text-xs font-mono border border-emerald-500/20">
                      {edu.score}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-grotesk font-semibold text-white text-lg mb-5 flex items-center gap-2"
            >
              <FiAward className="text-cyan-400" /> Certifications & Awards
            </motion.h3>
            <div className="space-y-4">
              {certifications.map((c, i) => (
                <motion.div
                  key={c.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="card-glass card-glass-hover rounded-2xl p-5 flex items-center gap-4"
                >
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-2xl">
                    {c.icon}
                  </div>
                  <div>
                    <p className="font-medium text-white text-sm leading-snug">{c.name}</p>
                    <p className="text-slate-500 text-xs font-mono mt-0.5">{c.issuer}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
