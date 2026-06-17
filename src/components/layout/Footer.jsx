import { FiMail, FiLinkedin, FiPhone } from 'react-icons/fi';
import { personalInfo } from '../../data/portfolio';

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#050514]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center font-bold text-[#050514] text-xs">
            KM
          </div>
          <div>
            <p className="font-grotesk font-semibold text-white text-sm">Karthik Madgula</p>
            <p className="text-slate-500 text-xs">Software Engineer · Hyderabad</p>
          </div>
        </div>

        {/* Social */}
        <div className="flex items-center gap-3">
          {[
            { href: `mailto:${personalInfo.email}`, Icon: FiMail, label: 'Email' },
            { href: personalInfo.linkedin, Icon: FiLinkedin, label: 'LinkedIn' },
            { href: `tel:${personalInfo.phone.replace(/[^+\d]/g, '')}`, Icon: FiPhone, label: 'Phone' },
          ].map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={label}
              className="p-2.5 rounded-xl border border-white/[0.08] text-slate-400 hover:text-cyan-400 hover:border-cyan-400/30 hover:bg-cyan-400/5 transition-all duration-200"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

        {/* Copy */}
        <p className="text-slate-600 text-xs font-mono">
          © {new Date().getFullYear()} Karthik Madgula
        </p>
      </div>
    </footer>
  );
}
