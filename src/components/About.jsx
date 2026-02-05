import { BarChart3, Code, Layout, Smartphone } from "lucide-react";
import React from "react";

function About() {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About<span className="text-primary "> Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Front-end Web Developer and Data Science Enthusiast
            </h3>
            <p className="text-muted-primary">
              I am a Software Engineering student with a strong foundation in
              frontend development and a growing interest in mobile app
              development using Flutter. I enjoy transforming ideas into clean,
              responsive, and user-friendly interfaces while focusing on
              clarity, structure, and usability.
            </p>
            <p className="text-muted-primary">
              Alongside frontend and Flutter development, I am actively building
              skills in data analytics and data visualization, exploring how
              data can drive better decisions and meaningful insights. I believe
              in learning by doing and regularly work on mini projects to
              strengthen my understanding of core concepts, widgets, and
              workflows. I am motivated by continuous improvement, curious about
              modern technologies, and eager to apply my skills to real-world
              projects while growing as a developer and analyst.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-btn">
                Get In Touch
              </a>
              <a
                href="https://drive.google.com/file/d/1anvi5iAw7czU0wiwhiWYkZn8wCznmoYx/view?usp=drive_link"
                target="_blank"
                className="px-6 py-2 rounded-full border-2 border-primary text-primary hover:bg-primary/10 hover:text-fore-ground transition-colors duration-300 font-semibold"
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Layout className="h-6 w-6 text-primary"/>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Frontend Development</h4>
                  <p className="text-muted-foreground">
                    Building responsive, accessible, and user-friendly interfaces using modern frontend technologies and UI best practices.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <BarChart3 className="h-6 w-6 text-primary"/>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Data Science and Analytics</h4>
                  <p className="text-muted-foreground">
                    Working with data to clean, analyze, and visualize insights that support better decision-making.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Smartphone className="h-6 w-6 text-primary"/>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Mobile App Development</h4>
                  <p className="text-muted-foreground">
                    Creating clean and functional mobile UI using Flutter while exploring core widgets, navigation, and layouts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
