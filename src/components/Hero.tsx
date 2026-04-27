import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 md:px-12 pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand rounded-full filter blur-[150px] opacity-20 transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand rounded-full filter blur-[200px] opacity-10 transform translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="z-10 w-full max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 50, skewX: -5 }}
          animate={{ opacity: 1, y: 0, skewX: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="title-wrapper transform -skew-x-[5deg]"
        >
          <h1 className="font-display text-[15vw] leading-[0.85] tracking-tight text-white uppercase drop-shadow-[0_0_40px_rgba(242,125,38,0.2)]">
            MASTADON
            <br />
            <span className="text-brand">GAMES</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-8 mb-12 flex flex-col items-center gap-4"
        >
          <p className="font-sans text-sm md:text-base font-semibold tracking-[0.2em] text-white/70 uppercase max-w-xl">
            Forging Epic Digital Realities • Built for the Players
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <a
            href="#portfolio"
            className="group relative px-8 py-4 bg-brand text-ink-900 font-bold uppercase tracking-wider text-sm transition-all hover:bg-white overflow-hidden"
          >
            <span className="relative z-10">Explore Our Games</span>
            <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
          </a>
          <a
            href="#requests"
            className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-wider text-sm hover:border-brand hover:text-brand transition-colors"
          >
            Custom Requests
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer flex flex-col items-center text-white/50 hover:text-brand transition-colors"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-xs uppercase tracking-[0.2em] mb-2 font-semibold">Scroll</span>
        <ChevronDown size={20} />
      </motion.div>
    </section>
  );
}
