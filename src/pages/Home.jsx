import StarBg from "@/components/StarBg";
import ThemeToggle from "@/components/ThemeToggle";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/SKills";
import Projects from "@/components/Projects";

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden ">
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Background Effects */}
      <StarBg />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>

      {/* Footer */}
    </div>
  );
}

export default Home;
