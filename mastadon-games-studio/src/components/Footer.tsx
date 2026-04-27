import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-ink-900 pt-24 md:pt-32 pb-8 border-t border-white/5 relative z-10 overflow-hidden">
      {/* Huge background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.03] select-none">
        <span className="font-display text-[25vw] leading-none whitespace-nowrap title-wrapper block transform -skew-x-[10deg]">MASTADON</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-24">
          <div className="lg:col-span-2">
            <h3 className="font-display text-4xl uppercase tracking-wide mb-6">
              Pitch A <span className="text-brand">Project</span>
            </h3>
            <p className="font-sans text-white/50 max-w-sm mb-8 text-sm">
              We focus on our proprietary Unity titles but occasionally take on select custom requests. Drop us a line with your project details and username for vetting.
            </p>
            <a 
              href="mailto:mastadongamesgamestudio@gmail.com?subject=Custom%20Project%20Request%20-%20[Your%20Username]"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-bold uppercase tracking-wider text-xs hover:bg-brand hover:border-brand hover:text-ink-900 transition-all font-mono"
            >
              Submit Request <ArrowUpRight size={16} />
            </a>
          </div>

          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/40 mb-6 block">Company</span>
            <ul className="space-y-4 font-sans text-sm text-white/70">
              <li><Link to="/#about" className="hover:text-brand transition-colors">About Us</Link></li>
              <li><Link to="/catalog" className="hover:text-brand transition-colors">Our Games</Link></li>
              <li><Link to="/#requests" className="hover:text-brand transition-colors">Custom Requests</Link></li>
            </ul>
          </div>

          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/40 mb-6 block">Socials</span>
            <ul className="space-y-4 font-sans text-sm text-white/70">
              <li><a href="#" className="hover:text-brand transition-colors">Twitter // X</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">ArtStation</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">GitHub</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-widest text-white/40">
          <p>© {new Date().getFullYear()} Mastadon Games Studio. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
