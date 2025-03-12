import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Database, Globe, Server } from "lucide-react"
import Logo from './assets/ganesh-devkate.png';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="py-12 md:py-24 lg:py-32 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            I LOVE Everything about <span className="text-primary">Web</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-[600px]">
            Building robust, scalable web solutions with Drupal, PHP, and modern JavaScript frameworks.
          </p>
          <div className="flex flex-wrap gap-3">
            <Badge variant="outline" className="px-3 py-1 text-sm">
              Drupal
            </Badge>
            <Badge variant="outline" className="px-3 py-1 text-sm">
              PHP
            </Badge>
            <Badge variant="outline" className="px-3 py-1 text-sm">
              JavaScript
            </Badge>
            <Badge variant="outline" className="px-3 py-1 text-sm">
              React
            </Badge>
            <Badge variant="outline" className="px-3 py-1 text-sm">
              Next.js
            </Badge>
          </div>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button asChild size="lg">
              <Link href="/projects">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Contact Me</Link>
            </Button>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary">
            <Image
              src={ Logo }
              alt="Developer Portrait"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">My Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Specialized in Drupal development and integration with modern web technologies
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-card p-6 rounded-lg border shadow-sm">
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Globe className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Drupal Development</h3>
            <p className="text-muted-foreground">
              Custom Drupal theme and module development, site building, and migrations from legacy systems.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg border shadow-sm">
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Code className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Front-end Development</h3>
            <p className="text-muted-foreground">
              Modern front-end development with React, Next.js, and headless Drupal integrations.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg border shadow-sm">
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Database className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">API Development</h3>
            <p className="text-muted-foreground">
              Building robust APIs with Drupal's REST, JSON:API, and custom endpoints for seamless integrations.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg border shadow-sm">
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Server className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Performance Optimization</h3>
            <p className="text-muted-foreground">
              Optimizing Drupal sites for speed, scalability, and security to handle high traffic loads.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-12 md:py-24">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <Button asChild variant="outline">
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((project) => (
            <div key={project} className="bg-card rounded-lg border overflow-hidden shadow-sm group">
              <div className="relative h-48 w-full">
                <Image
                  src={`/placeholder.svg?height=300&width=500`}
                  alt={`Project ${project}`}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Project Title {project}</h3>
                <p className="text-muted-foreground mb-4">
                  A brief description of the project, highlighting key features and technologies used.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Drupal 9</Badge>
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">API</Badge>
                </div>
                {/* <Button asChild variant="link" className="p-0">
                  <Link href={`/projects/${project}`}>
                    View Project <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button> */}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-24">
        <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to work together?</h2>
            <p className="text-primary-foreground/90 mb-8 text-lg">
              Let's discuss how I can help bring your Drupal project to life with modern web technologies.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

