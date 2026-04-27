import { motion } from "motion/react";

const TEAM = [
  {
    name: "Mastadon Games",
    role: "Main Developer",
    extra: "(Catalyst Anomaly on YT)"
  },
  {
    name: "Stevey Thorn",
    role: "Team Advisor / Investor",
    extra: ""
  },
  {
    name: "Connor Sylara",
    role: "Play Tester",
    extra: ""
  }
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-ink-800 relative z-10">
      <div className="max-w-7xl mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1 relative group">
          <div className="aspect-[4/5] bg-ink-900 border border-white/10 relative overflow-hidden flex flex-col group-hover:border-brand/50 transition-colors duration-500 p-8">
            <div className="absolute inset-0 bg-brand/5 group-hover:bg-brand/10 transition-colors duration-500" />
            
            <div className="z-10 relative h-full flex flex-col">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/40 mb-12 block">
                // The Core Team
              </span>
              
              <div className="space-y-10 flex-grow">
                {TEAM.map((member, i) => (
                  <motion.div 
                    key={member.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (i * 0.1) }}
                  >
                    <h3 className="font-display text-3xl uppercase tracking-wide text-white group-hover:text-brand transition-colors">
                      {member.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="font-mono text-xs uppercase tracking-widest text-brand">
                        {member.role}
                      </span>
                      {member.extra && (
                        <span className="font-sans text-xs text-white/50 italic">
                          {member.extra}
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand/10 rounded-full blur-[40px] pointer-events-none" />
        </div>

        <div className="order-1 md:order-2 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-sm tracking-[0.2em] text-brand uppercase mb-4 block">
              // Who We Are
            </span>
            <h2 className="font-display text-5xl md:text-7xl uppercase leading-none tracking-tight mb-8">
              Proprietary <span className="text-white/40 italic">Builders</span>
            </h2>
            
            <div className="font-sans text-lg text-white/70 space-y-6">
              <p>
                Mastadon Games Studio isn't just about building digital experiences—we're about forging our own visions. Born from passionate creators, we bring raw, unapologetic energy to game development and software engineering.
              </p>
              <p>
                We are a proprietary studio. We craft our own games and software using Unity. We don't do general technical consulting or co-development. We keep our core tight and focused on what we want to build.
              </p>
              <p>
                While we occasionally take on custom projects, they are rare and subject to a strict evaluation of your online profile. If you have an idea that aligns with our vibe, you must provide your most well-known username when reaching out.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
