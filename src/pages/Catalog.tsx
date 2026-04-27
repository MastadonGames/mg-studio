import { useState, useMemo } from "react";
import { motion } from "motion/react";
import { ArrowLeft, Search, FilterX } from "lucide-react";
import { Link } from "react-router-dom";

const ALL_GAMES = [
  {
    id: "g1",
    title: "PROJECT: BEHEMOTH",
    genre: "Action RPG",
    status: "In Development",
    year: "2026",
    description: "A dark, atmospheric action RPG where players must hunt down monolithic creatures in a dying world. Heavy focus on deliberate combat and environmental exploration.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80",
  },
  {
    id: "g2",
    title: "TUSK & TACTICS",
    genre: "Turn-based Strategy",
    status: "Early Access",
    year: "2025",
    description: "A squad-based tactical strategy game set in an alternative pre-historic timeline. Build your tribe, train war mammoths, and conquer the frozen wastes.",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80",
  },
  {
    id: "g3",
    title: "NEON EXILE",
    genre: "Cyberpunk Shooter",
    status: "Concept",
    year: "TBA",
    description: "High-octane boomer shooter with roguelite elements. Fast movement, heavy weapons, and a pulsing synthwave soundtrack.",
    image: "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?auto=format&fit=crop&q=80",
  },
  {
    id: "g4",
    title: "VOID RUNNER",
    genre: "Space Combat",
    status: "Prototyping",
    year: "TBA",
    description: "6DOF space dogfighting game focusing on zero-g physics, momentum conservation, and deep ship customization.",
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&q=80",
  }
];

export function Catalog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [genreFilter, setGenreFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [yearFilter, setYearFilter] = useState("All");

  const genres = ["All", ...new Set(ALL_GAMES.map(g => g.genre))];
  const statuses = ["All", ...new Set(ALL_GAMES.map(g => g.status))];
  const years = ["All", ...new Set(ALL_GAMES.map(g => g.year))].sort().reverse();

  const filteredGames = useMemo(() => {
    return ALL_GAMES.filter(game => {
      const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            game.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesGenre = genreFilter === "All" || game.genre === genreFilter;
      const matchesStatus = statusFilter === "All" || game.status === statusFilter;
      const matchesYear = yearFilter === "All" || game.year === yearFilter;
      
      return matchesSearch && matchesGenre && matchesStatus && matchesYear;
    });
  }, [searchQuery, genreFilter, statusFilter, yearFilter]);

  const clearFilters = () => {
    setSearchQuery("");
    setGenreFilter("All");
    setStatusFilter("All");
    setYearFilter("All");
  };

  return (
    <div className="pt-32 pb-24 md:py-32 min-h-screen bg-ink-900 border-t border-white/5 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <Link to="/" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-white/50 hover:text-brand transition-colors mb-12 group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Terminal
        </Link>
        
        <div className="mb-12">
          <span className="font-mono text-sm tracking-[0.2em] text-brand uppercase mb-4 block">
            // Full Database
          </span>
          <h1 className="font-display text-5xl md:text-7xl uppercase leading-none tracking-tight">
            The <span className="text-white/40 italic">Catalog</span>
          </h1>
        </div>

        {/* Search and Filter Bar */}
        <div className="mb-16 md:mb-24 bg-ink-800 border border-white/10 p-4 md:p-6 flex flex-col lg:flex-row gap-6 lg:items-end">
          <div className="flex-1 space-y-2">
            <label className="font-mono text-[10px] uppercase tracking-widest text-white/40 ml-1">Search Database</label>
            <div className="relative">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
              <input 
                type="text" 
                placeholder="Search titles or keywords..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-ink-900 border border-white/10 text-white pl-12 pr-4 py-3 font-sans text-sm focus:outline-none focus:border-brand transition-colors"
              />
            </div>
          </div>

          <div className="flex flex-wrap md:flex-nowrap gap-4">
            <div className="space-y-2 flex-1 min-w-[140px]">
              <label className="font-mono text-[10px] uppercase tracking-widest text-white/40 ml-1">Genre</label>
              <select 
                value={genreFilter}
                onChange={(e) => setGenreFilter(e.target.value)}
                className="w-full bg-ink-900 border border-white/10 text-white px-4 py-3 font-sans text-sm appearance-none focus:outline-none focus:border-brand transition-colors cursor-pointer"
              >
                {genres.map(g => <option key={g} value={g}>{g}</option>)}
              </select>
            </div>
            
            <div className="space-y-2 flex-1 min-w-[140px]">
              <label className="font-mono text-[10px] uppercase tracking-widest text-white/40 ml-1">Status</label>
              <select 
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full bg-ink-900 border border-white/10 text-white px-4 py-3 font-sans text-sm appearance-none focus:outline-none focus:border-brand transition-colors cursor-pointer"
              >
                {statuses.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>

            <div className="space-y-2 flex-1 min-w-[100px]">
              <label className="font-mono text-[10px] uppercase tracking-widest text-white/40 ml-1">Year</label>
              <select 
                value={yearFilter}
                onChange={(e) => setYearFilter(e.target.value)}
                className="w-full bg-ink-900 border border-white/10 text-white px-4 py-3 font-sans text-sm appearance-none focus:outline-none focus:border-brand transition-colors cursor-pointer"
              >
                {years.map(y => <option key={y} value={y}>{y}</option>)}
              </select>
            </div>

            {(searchQuery || genreFilter !== "All" || statusFilter !== "All" || yearFilter !== "All") && (
              <button 
                onClick={clearFilters}
                className="flex items-center justify-center gap-2 bg-ink-900 border border-white/10 text-white/60 hover:text-white px-4 py-3 font-mono text-xs uppercase tracking-widest transition-colors h-[46px] self-end"
                title="Clear Filters"
              >
                <FilterX size={16} />
                <span className="md:hidden lg:inline">Clear</span>
              </button>
            )}
          </div>
        </div>

        <div className="space-y-16 lg:space-y-24">
          {filteredGames.length === 0 ? (
            <div className="text-center py-24 bg-ink-800 border border-white/10 flex flex-col items-center justify-center">
              <span className="font-display text-4xl text-white/20 mb-4 uppercase">No Results</span>
              <p className="font-sans text-white/50 text-sm">Matches not found. Adjust your search parameters.</p>
              <button 
                onClick={clearFilters}
                className="mt-6 font-mono text-xs text-brand uppercase tracking-widest hover:text-white transition-colors"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            filteredGames.map((game, i) => (
              <motion.div
                key={game.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 group"
              >
                <div className="relative aspect-[16/9] lg:aspect-[4/3] overflow-hidden bg-ink-800 border border-white/10">
                  <div className="absolute inset-0 bg-brand/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <img 
                    src={game.image} 
                    alt={game.title}
                    className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                </div>

                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-brand font-mono text-xs uppercase tracking-widest block">
                      {game.genre}
                    </span>
                    <span className="bg-ink-800 border border-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-white/80">
                      {game.status}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-white/40">
                      // {game.year}
                    </span>
                  </div>
                  
                  <h3 className="font-display text-4xl lg:text-5xl uppercase tracking-wide mb-6 group-hover:text-brand transition-colors">
                    {game.title}
                  </h3>
                  
                  <p className="font-sans text-white/60 leading-relaxed text-sm lg:text-base max-w-xl">
                    {game.description}
                  </p>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
