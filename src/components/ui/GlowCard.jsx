const glowMap = {
  cyan: 'hover:border-cyan-500/30 hover:shadow-[0_8px_32px_rgba(0,212,255,0.08)]',
  purple: 'hover:border-purple-500/30 hover:shadow-[0_8px_32px_rgba(139,92,246,0.08)]',
  blue: 'hover:border-blue-500/30 hover:shadow-[0_8px_32px_rgba(79,110,247,0.08)]',
  emerald: 'hover:border-emerald-500/30 hover:shadow-[0_8px_32px_rgba(16,185,129,0.08)]',
  rose: 'hover:border-rose-500/30 hover:shadow-[0_8px_32px_rgba(244,63,94,0.08)]',
};

export default function GlowCard({ children, className = '', glow = 'cyan', as: Tag = 'div' }) {
  return (
    <Tag
      className={`card-glass card-glass-hover rounded-2xl ${glowMap[glow] || glowMap.cyan} ${className}`}
    >
      {children}
    </Tag>
  );
}
