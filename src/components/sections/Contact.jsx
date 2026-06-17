import { motion } from 'framer-motion';
import { FiMail, FiLinkedin, FiPhone, FiMapPin, FiArrowUpRight } from 'react-icons/fi';
import SectionTitle from '../ui/SectionTitle';
import { personalInfo } from '../../data/portfolio';

const channels = [
  {
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    Icon: FiMail,
    color: 'cyan',
  },
  {
    label: 'LinkedIn',
    value: 'karthik-madgula',
    href: personalInfo.linkedin,
    Icon: FiLinkedin,
    color: 'blue',
    external: true,
  },
  {
    label: 'Phone',
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone.replace(/[^+\d]/g, '')}`,
    Icon: FiPhone,
    color: 'purple',
  },
  {
    label: 'Location',
    value: personalInfo.location,
    href: null,
    Icon: FiMapPin,
    color: 'emerald',
  },
];

const colorMap = {
  cyan: 'group-hover:text-cyan-400 group-hover:border-cyan-400/40',
  blue: 'group-hover:text-blue-400 group-hover:border-blue-400/40',
  purple: 'group-hover:text-purple-400 group-hover:border-purple-400/40',
  emerald: 'group-hover:text-emerald-400 group-hover:border-emerald-400/40',
};

export default function Contact() {
  return (
    <section id="contact" className="section-pad relative overflow-hidden">
      {/* glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40rem] h-[30rem] rounded-full bg-cyan-500/[0.07] blur-[120px] -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Let's Connect"
          title="Get In Touch"
          description="Open to backend, cloud & DevOps opportunities. Have a project or role in mind? Let's talk."
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl card-glass p-6 sm:p-10 md:p-12 text-center"
        >
          <h3 className="font-grotesk font-bold text-2xl sm:text-4xl text-white mb-3">
            Ready to build something <span className="gradient-text">great</span>?
          </h3>
          <p className="text-slate-400 max-w-xl mx-auto mb-8">
            I'm currently available for new opportunities. The fastest way to reach me is email —
            I usually respond within a day.
          </p>

          <a
            href={`mailto:${personalInfo.email}`}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold text-white
              hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 mb-10"
          >
            <FiMail /> Say Hello
            <FiArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-8 border-t border-white/[0.06]">
            {channels.map(({ label, value, href, Icon, color, external }) => {
              const inner = (
                <>
                  <div
                    className={`w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-slate-300 transition-colors ${colorMap[color]}`}
                  >
                    <Icon size={18} />
                  </div>
                  <div className="text-left min-w-0">
                    <p className="text-slate-500 text-xs font-mono uppercase tracking-wide">{label}</p>
                    <p className="text-slate-200 text-sm break-all leading-snug">{value}</p>
                  </div>
                </>
              );

              return href ? (
                <a
                  key={label}
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  className="group flex items-center gap-3 p-3 rounded-xl hover:bg-white/[0.03] transition-colors"
                >
                  {inner}
                </a>
              ) : (
                <div key={label} className="group flex items-center gap-3 p-3 rounded-xl">
                  {inner}
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
