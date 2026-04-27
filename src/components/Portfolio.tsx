import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const GAMES = [
  {
    id: "g1",
    title: "PROJECT: BEHEMOTH",
    genre: "Action RPG",
    status: "In Development",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80",
  },
  {
    id: "g2",
    title: "TUSK & TACTICS",
    genre: "Turn-based Strategy",
    status: "Early Access",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80",
  },
  {
    id: "g3",
    title: "NEON EXILE",
    genre: "Cyberpunk Shooter",
    status: "Concept",
    image: "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?auto=format&fit=crop&q=80",
  }
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 md:py-32 bg-ink-900 border-y border-white/5 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
          <div>
             <span className="font-mono text-sm tracking-[0.2em] text-brand uppercase mb-4 block">
              // The Forge
            </span>
            <h2 className="font-display text-5xl md:text-7xl uppercase leading-none tracking-tight">
              Featured <span className="text-white/40 italic">Titles</span>
            </h2>
          </div>
          <Link to="/catalog" className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-white/50 hover:text-brand transition-colors group">
            View full catalog 
            <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {GAMES.map((game, i) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group cursor-pointer block"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-ink-800 border border-white/10 mb-6">
                <div className="absolute inset-0 bg-brand/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img 
                  src={game.image} 
                  alt={game.title}
                  className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4 z-20">
                  <span className="bg-ink-900/80 backdrop-blur-sm border border-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-white/80">
                    {game.status}
                  </span>
                </div>
              </div>

              <div>
                <span className="text-brand font-mono text-[10px] uppercase tracking-widest mb-2 block">
                  {game.genre}
                </span>
                <h3 className="font-display text-3xl uppercase tracking-wide group-hover:text-brand transition-colors">
                  {game.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
