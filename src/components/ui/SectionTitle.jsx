import AnimatedSection from './AnimatedSection';

export default function SectionTitle({ subtitle, title, description, align = 'center' }) {
  const textAlign = align === 'left' ? 'text-left' : 'text-center';
  const mx = align === 'left' ? '' : 'mx-auto';

  return (
    <div className={`mb-16 ${textAlign}`}>
      <AnimatedSection delay={0}>
        <p className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs tracking-[0.35em] uppercase mb-4">
          <span className="w-6 h-px bg-cyan-400/60" />
          {subtitle}
          <span className="w-6 h-px bg-cyan-400/60" />
        </p>
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-grotesk text-white leading-tight mb-4">
          {title}
        </h2>
      </AnimatedSection>
      {description && (
        <AnimatedSection delay={0.2}>
          <p className={`text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed ${mx}`}>
            {description}
          </p>
        </AnimatedSection>
      )}
    </div>
  );
}
