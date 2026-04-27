import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b",
        scrolled 
          ? "bg-ink-900/90 backdrop-blur-md border-white/10 py-4" 
          : "bg-transparent border-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-12 flex items-center justify-between">
        <Link to="/" className="font-display text-2xl uppercase tracking-wider text-white flex items-center gap-2">
          <div className="w-8 h-8 bg-brand transform -skew-x-[10deg] flex items-center justify-center">
            <span className="font-display text-ink-900 text-lg leading-none mt-1">M</span>
          </div>
          Mastadon
        </Link>

        <div className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-[0.15em] font-semibold text-white/70">
          <Link to="/#about" className="hover:text-brand transition-colors">About</Link>
          <Link to="/catalog" className="hover:text-brand transition-colors">Catalog</Link>
          <Link to="/#requests" className="hover:text-brand transition-colors">Requests</Link>
          <a 
            href="mailto:mastadongamesgamestudio@gmail.com" 
            className="px-5 py-2 border border-white/20 hover:border-brand hover:text-brand transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
