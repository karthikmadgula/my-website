const variants = {
  default: 'bg-white/[0.05] text-slate-300 border-white/[0.1] hover:border-white/20',
  cyan: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20 hover:border-cyan-400/40',
  purple: 'bg-purple-500/10 text-purple-300 border-purple-500/20 hover:border-purple-400/40',
  blue: 'bg-blue-500/10 text-blue-300 border-blue-500/20 hover:border-blue-400/40',
  emerald: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20 hover:border-emerald-400/40',
  rose: 'bg-rose-500/10 text-rose-300 border-rose-500/20 hover:border-rose-400/40',
  orange: 'bg-orange-500/10 text-orange-300 border-orange-500/20 hover:border-orange-400/40',
};

export default function TechBadge({ label, variant = 'default', size = 'sm' }) {
  const sizeClass = size === 'xs' ? 'px-2 py-0.5 text-[11px]' : 'px-3 py-1 text-xs';
  return (
    <span
      className={`inline-flex items-center ${sizeClass} rounded-full border font-mono font-medium
        transition-colors duration-200 ${variants[variant] || variants.default}`}
    >
      {label}
    </span>
  );
}
