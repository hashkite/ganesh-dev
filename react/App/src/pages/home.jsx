import { Link } from "react-router-dom"
import { ArrowRight, Code, Database, Server } from "lucide-react"
import { Button } from "../components/ui/button"
import UserImage from "../assets/ganesh-devkate.png"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="container py-12 md:py-24 lg:py-32">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                I LOVE Everything <br />
                about <span className="text-primary">Web</span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Building modern, high-performance websites and applications with Drupal, React, and cutting-edge
                technologies.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <span variant="outline" className="px-2 py-1 text-sm mx-1 border border-primary rounded-lg shadow-sm">
                Drupal
              </span>
              <span variant="outline" className="px-2 py-1 text-sm mx-1 border border-primary rounded-lg shadow-sm">
                PHP
              </span>
              <span variant="outline" className="px-2 py-1 text-sm mx-1 border border-primary rounded-lg shadow-sm">
                JavaScript
              </span>
              <span variant="outline" className="px-2 py-1 text-sm mx-1 border border-primary rounded-lg shadow-sm">
                React
              </span>
              <span variant="outline" className="px-2 py-1 text-sm mx-1 border border-primary rounded-lg shadow-sm">
                Next.js
              </span>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link to="/projects">
                <Button className="w-full min-[400px]:w-auto">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="w-full min-[400px]:w-auto">
                  Contact Me
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative h-[350px] w-[350px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px] rounded-full overflow-hidden border-4 border-primary">
              <img
                src= {UserImage}
                alt="Developer portrait"
                className="rounded-full object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container py-12 md:py-24 lg:py-32 bg-muted/40">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">About Me</h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            I'm a passionate Drupal developer with over 5 years of experience building robust, scalable web solutions. I
            specialize in creating custom Drupal modules, themes, and integrations that deliver exceptional user
            experiences.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-12 mt-12">
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-primary/10 p-3">
              <Code className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Custom Development</h3>
            <p className="text-center text-muted-foreground">
              Specialized in building custom Drupal modules and themes tailored to your specific business needs.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-primary/10 p-3">
              <Server className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Site Architecture</h3>
            <p className="text-center text-muted-foreground">
              Designing robust, scalable site architectures that support your content strategy and business goals.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-primary/10 p-3">
              <Database className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Migration & Integration</h3>
            <p className="text-center text-muted-foreground">
              Seamlessly migrating content and integrating third-party services with your Drupal platform.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container py-12 md:py-24 lg:py-32">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Skills & Expertise</h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            My technical toolkit includes a wide range of technologies and frameworks that I leverage to build modern
            web solutions.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {[
            "Drupal 8/9/10",
            "PHP",
            "JavaScript",
            "React.js",
            "Next.js",
            "MySQL",
            "REST API",
            "GraphQL",
            "Twig",
            "Composer",
            "Git",
            "Docker",
            "Tailwind CSS",
            "SASS/SCSS",
            "Drush",
            "CI/CD",
          ].map((skill) => (
            <div key={skill} className="flex items-center justify-center rounded-md border p-4 shadow-sm">
              <span className="font-medium">{skill}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="container py-12 md:py-24 lg:py-32 bg-muted/40">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Featured Projects</h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            A selection of my recent work showcasing Drupal development expertise.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((project) => (
            <div key={project} className="group relative overflow-hidden rounded-lg border shadow-sm">
              <div className="aspect-video overflow-hidden">
                <img
                  src={`https://placehold.co/600x400/png`}
                  alt={`Project ${project}`}
                  className="object-cover transition-transform duration-300 group-hover:scale-105 w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">Project Title {project}</h3>
                <p className="mt-2 text-muted-foreground">
                  A custom Drupal-based solution with advanced features and integrations.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                    Drupal 9
                  </span>
                  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                    React
                  </span>
                  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                    Commerce
                  </span>
                </div>
                <div className="mt-6">
                  <Link to={`/projects/${project}`}>
                    <Button variant="outline" size="sm">
                      View Project
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Link to="/projects">
            <Button variant="outline">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-12 md:py-24 lg:py-32">
        <div className="mx-auto max-w-[58rem] rounded-lg border bg-background p-8 shadow-sm">
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-4xl">Ready to start your project?</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Let's discuss how I can help bring your vision to life with custom Drupal development.
            </p>
            <Link to="/contact">
              <Button size="lg" className="mt-4">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

