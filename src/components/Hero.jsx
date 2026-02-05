import { ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";

function Hero() {
  function Counter({ end, duration = 2000 }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const incrementTime = 20;
      const steps = duration / incrementTime;
      const increment = end / steps;

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }, [end, duration]);

    return <span>{count}</span>;
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Ayman
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              Kz
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Building clean, user-friendly interfaces with modern frontend
            technologies and Flutter. Passionate about data analytics,
            visualization, and continuous learning through hands-on projects.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-btn">
              View My Projects
            </a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 opacity-0 animate-fade-in-delay-4">
        <div className="gradient-border p-6 card-hover text-center">
          <h3 className="text-3xl font-bold text-primary">
            <Counter end={1} />+
          </h3>
          <p className="text-muted-foreground mt-2">
            Years Frontend Experience
          </p>
        </div>

        <div className="gradient-border p-6 card-hover text-center">
          <h3 className="text-3xl font-bold text-primary">
            <Counter end={12} />+
          </h3>
          <p className="text-muted-foreground mt-2">Projects Completed</p>
        </div>

        <div className="gradient-border p-6 card-hover text-center">
          <h3 className="text-3xl font-bold text-primary">
            <Counter end={8} />+
          </h3>
          <p className="text-muted-foreground mt-2">Technologies Used</p>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <a href="#about">
          <span className="text-sm text-muted-foreground mb-2">Scroll</span>
          <ArrowDown className="h-5 w-5 text-primary cursor-pointer text-center mx-auto" />
        </a>
      </div>
    </section>
  );
}

export default Hero;
