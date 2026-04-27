import { motion } from "motion/react";
import { ShieldAlert, UserCheck, Send } from "lucide-react";

const PROCESS_STEPS = [
  {
    icon: ShieldAlert,
    title: "Proprietary First",
    desc: "We are primarily a proprietary studio. We build our own games and software in Unity.",
  },
  {
    icon: UserCheck,
    title: "Evaluation Process",
    desc: "We rarely take on custom projects. If you have a request, we will vet your online presence before accepting.",
  },
  {
    icon: Send,
    title: "Submit a Request",
    desc: "You must provide your most well-known username/handle when submitting your project request.",
  }
];

export function Services() {
  return (
    <section id="requests" className="py-24 md:py-32 bg-ink-800 relative z-10">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="text-center mb-16 md:mb-24">
          <span className="font-mono text-sm tracking-[0.2em] text-brand uppercase mb-4 block">
            // Custom Work
          </span>
          <h2 className="font-display text-5xl md:text-7xl uppercase leading-none tracking-tight">
            Project <span className="text-white/40 italic">Requests</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
          {PROCESS_STEPS.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col gap-6 group"
            >
              <div className="w-16 h-16 border border-white/10 flex items-center justify-center bg-ink-900 group-hover:border-brand group-hover:text-brand transition-colors duration-300">
                <step.icon size={28} strokeWidth={1.5} />
              </div>
              
              <div>
                <h3 className="font-sans text-xl font-bold uppercase tracking-wider mb-4 group-hover:text-brand transition-colors">
                  {step.title}
                </h3>
                <p className="font-sans text-white/60 leading-relaxed text-sm lg:text-base">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href="mailto:mastadongamesgamestudio@gmail.com?subject=Custom%20Project%20Request%20-%20[Your%20Username]"
            className="px-8 py-4 bg-brand text-ink-900 font-bold uppercase tracking-wider text-sm hover:bg-white transition-colors"
          >
            Submit Request
          </a>
        </div>
      </div>
    </section>
  );
}
