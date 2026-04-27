import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Portfolio } from "../components/Portfolio";
import { Services } from "../components/Services";

export function Landing() {
  return (
    <main>
      <Hero />
      <About />
      <Portfolio />
      <Services />
    </main>
  );
}
