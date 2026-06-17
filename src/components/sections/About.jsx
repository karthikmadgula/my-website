import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import AnimatedSection from '../ui/AnimatedSection';
import SectionTitle from '../ui/SectionTitle';
import { personalInfo, stats } from '../../data/portfolio';

function Counter({ value }) {
  // value may be "1+", "8.63", "20+" — keep as-is, just animate opacity reveal
  return <span>{value}</span>;
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="section-pad relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Who I Am"
          title="About Me"
          description="Turning ideas into reliable, well-architected backend systems."
        />

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 items-start">
          {/* Narrative */}
          <AnimatedSection direction="left">
            <div className="space-y-5 text-slate-300 leading-relaxed text-base sm:text-lg">
              <p>
                I'm a <span className="text-white font-semibold">backend & cloud-oriented Software Engineer</span> currently
                at Purview India Consulting and Services, where I build, containerize, and deploy
                production <span className="text-cyan-400">FastAPI microservices</span> across telemetry,
                voice-AI, and content platforms.
              </p>
              <p>
                My work spans the full backend lifecycle — designing async REST APIs, modeling data in{' '}
                <span className="text-cyan-400">PostgreSQL</span>, accelerating responses with{' '}
                <span className="text-cyan-400">Redis</span>, decoupling workloads through{' '}
                <span className="text-cyan-400">RabbitMQ</span>, and shipping everything in{' '}
                <span className="text-cyan-400">Docker</span> containers with JWT security and health-check monitoring.
              </p>
              <p>
                With a foundation in Electronics & Communication Engineering, I bring strong problem-solving
                and systems thinking to every project — and I'm actively expanding into{' '}
                <span className="text-white font-semibold">cloud-native & DevOps</span> with GCP, Kubernetes,
                and Terraform.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                {['Backend Engineering', 'Cloud & DevOps', 'API Architecture', 'System Design'].map((t) => (
                  <span
                    key={t}
                    className="px-4 py-2 rounded-xl border border-cyan-500/20 bg-cyan-500/5 text-cyan-300 text-sm font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Stats grid */}
          <div ref={ref} className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="card-glass card-glass-hover rounded-2xl p-6 text-center group"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{s.icon}</div>
                <div className="font-grotesk font-bold text-3xl gradient-text mb-1">
                  <Counter value={s.value} />
                </div>
                <div className="text-slate-500 text-xs font-mono tracking-wide uppercase">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
