import StarBg from "@/components/StarBg";
import ThemeToggle from "@/components/ThemeToggle";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";

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
      </main>

      {/* Footer */}
    </div>
  );
}

export default Home;
