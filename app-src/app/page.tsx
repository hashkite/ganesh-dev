import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Database, Globe, Server,  Lightbulb, Cloud } from "lucide-react"
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
<section className="py-16 md:py-24 bg-gradient-to-b from-gray-100 dark:from-gray-900 to-transparent">
  <div className="text-center mb-12">
    <h2 className="text-4xl font-bold mb-4 text-primary">What I Offer</h2>
    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
      Delivering cutting-edge web solutions with expertise in Drupal, front-end technologies, and scalable architectures.
    </p>
  </div>
  
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {[
      {
        title: "Drupal Development",
        icon: <Globe className="h-8 w-8 text-primary" />,
        description: "Custom Drupal themes, module development, and migrations from legacy systems to the latest Drupal versions.",
      },
      {
        title: "Front-end Development",
        icon: <Code className="h-8 w-8 text-primary" />,
        description: "Building modern web interfaces with React, Next.js, and Vue.js, seamlessly integrated with Drupal.",
      },
      {
        title: "API Development",
        icon: <Database className="h-8 w-8 text-primary" />,
        description: "Developing robust APIs with Drupal REST, JSON:API, GraphQL, and custom endpoints for seamless integrations.",
      },
      {
        title: "Performance Optimization",
        icon: <Server className="h-8 w-8 text-primary" />,
        description: "Enhancing Drupal site speed, scalability, and security to handle high-traffic environments.",
      },
      {
        title: "Drupal Consulting",
        icon: <Lightbulb className="h-8 w-8 text-primary" />,
        description: "Providing expert guidance on Drupal architecture, best practices, and project roadmaps for businesses.",
      },
      {
        title: "Cloud & DevOps",
        icon: <Cloud className="h-8 w-8 text-primary" />,
        description: "Deploying and managing scalable Drupal applications on AWS, Acquia Cloud, and Kubernetes with CI/CD pipelines.",
      },
    ].map((service, index) => (
      <div key={index} className="bg-card p-6 rounded-xl border shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
        <div className="h-16 w-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
          {service.icon}
        </div>
        <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
        <p className="text-muted-foreground">{service.description}</p>
      </div>
    ))}
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

