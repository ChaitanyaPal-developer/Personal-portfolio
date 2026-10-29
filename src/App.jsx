import { Navbar } from "./layout/Navbar";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Projects } from "./sections/Projects";
import { Contact } from "./sections/Contact";
import { Footer } from "./layout/Footer";

const App = () => (
  <div className="min-h-screen">
    <Navbar />
    <main>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>

    <Footer />
  </div>
);

export default App;

