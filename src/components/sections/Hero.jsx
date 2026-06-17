import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown, FiMail, FiLinkedin, FiMapPin } from 'react-icons/fi';
import { personalInfo } from '../../data/portfolio';

/* Typewriter cycling through roles */
function useTypewriter(words, speed = 90, pause = 1600) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    let timeout;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === '') {
      setDeleting(false);
      setIndex((i) => i + 1);
    } else {
      timeout = setTimeout(
        () => {
          setText((prev) =>
            deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)
          );
        },
        deleting ? speed / 2 : speed
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, speed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(personalInfo.roles);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      {/* Background layers */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#050514]" />
        {/* grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        {/* glow blobs */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.75, 0.5] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 -left-32 w-[28rem] h-[28rem] rounded-full bg-cyan-500/20 blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.4, 0.65, 0.4] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/4 -right-32 w-[30rem] h-[30rem] rounded-full bg-purple-600/20 blur-[120px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050514]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-12 items-center py-10 lg:py-0">
        {/* Mobile / tablet avatar (shown above text on < lg) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex lg:hidden justify-center order-first"
        >
          <div className="relative w-44 h-44 sm:w-52 sm:h-52">
            <div className="absolute inset-0 rounded-full border border-cyan-500/20 animate-spin-slow" />
            <div className="absolute inset-3 rounded-full overflow-hidden border-2 border-white/10 shadow-2xl shadow-cyan-500/20 bg-gradient-to-br from-slate-800 to-slate-900">
              <img
                src="/profile.jpeg"
                alt="Karthik Madgula"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling.style.display = 'flex';
                }}
              />
              <div className="absolute inset-0 hidden items-center justify-center font-grotesk font-bold text-4xl gradient-text">
                KM
              </div>
            </div>
          </div>
        </motion.div>

        {/* Left — text */}
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-xs font-mono text-slate-300 tracking-wide">
              Available for opportunities
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-grotesk font-bold text-4xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-4"
          >
            <span className="text-white">Karthik</span>
            <br />
            <span className="gradient-text">Madgula</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="h-9 mb-6"
          >
            <p className="text-xl sm:text-2xl text-slate-300 font-mono">
              <span className="text-cyan-400">&gt;</span> {typed}
              <span className="inline-block w-[2px] h-6 bg-cyan-400 ml-1 animate-pulse align-middle" />
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-slate-400 text-sm sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8"
          >
            {personalInfo.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold text-white
                hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300"
            >
              View My Work
              <FiArrowDown className="group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 font-semibold text-slate-200
                hover:border-cyan-400/40 hover:bg-white/[0.03] transition-all duration-300"
            >
              <FiMail /> Get in Touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-5 mt-8 text-sm text-slate-500"
          >
            <span className="inline-flex items-center gap-1.5">
              <FiMapPin size={14} className="text-cyan-400" /> {personalInfo.location}
            </span>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
            >
              <FiLinkedin size={14} /> LinkedIn
            </a>
          </motion.div>
        </div>

        {/* Right — avatar card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden lg:flex justify-center"
        >
          <div className="relative w-80 h-80">
            {/* rotating ring */}
            <div className="absolute inset-0 rounded-full border border-cyan-500/20 animate-spin-slow" />
            <div className="absolute inset-4 rounded-full border border-purple-500/15" />

            {/* avatar */}
            <div className="absolute inset-8 rounded-full overflow-hidden border-2 border-white/10 shadow-2xl shadow-cyan-500/20 bg-gradient-to-br from-slate-800 to-slate-900">
              {/* Drop your photo at /public/profile.jpg and it will appear here */}
              <img
                src="/profile.jpeg"
                alt="Karthik Madgula"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling.style.display = 'flex';
                }}
              />
              <div className="absolute inset-0 hidden items-center justify-center font-grotesk font-bold text-6xl gradient-text">
                KM
              </div>
            </div>

            {/* floating chips */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-2 -right-2 px-3 py-2 rounded-xl card-glass text-xs font-mono text-cyan-300"
            >
              ⚡ FastAPI
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute bottom-4 -left-4 px-3 py-2 rounded-xl card-glass text-xs font-mono text-blue-300"
            >
              🐳 Docker
            </motion.div>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-1/2 -right-8 px-3 py-2 rounded-xl card-glass text-xs font-mono text-purple-300"
            >
              🐍 Python
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600"
      >
        <FiArrowDown size={20} />
      </motion.div>
    </section>
  );
}
