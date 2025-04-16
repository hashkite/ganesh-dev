"use client"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Database, Globe, Server,  Lightbulb, Cloud } from "lucide-react"
import Logo from './assets/ganesh-devkate.png';
import { Calendar} from "lucide-react"
type DrupalItem = {
  id: string
  attributes?: {
    title?: string
    field_categories?:string[]
    field_read?:number
    field_date?:string
    field_short_description?: string
    body?: { value: string }
    created?: string
  }
}

export default function Home() {
    const [projects, setProjects] = useState<DrupalItem[]>([])
    const [imageUrls, setImageUrls] = useState<{ [key: string]: string }>({})
    const [showAll, setShowAll] = useState(false)
  
    const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL
  
    useEffect(() => {
      const fetchArticles = async () => {
        try {
          const response = await fetch(`${apiUrl}/jsonapi/node/project?include=field_image`);
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
    
          const data = await response.json();
          console.log("API Response:", data);
    
          setProjects(data.data);
    
          const urls: { [key: string]: string } = {};
          data.data.forEach((article: any) => {
            const imageId = article.relationships?.field_image?.data?.id;
            const media = data.included?.find((item: any) => item.id === imageId);
    
            if (media?.attributes?.uri?.url) {
              const fileUrl = media.attributes.uri.url.replace("public://", "");
              urls[article.id] = `${apiUrl}/${fileUrl}`;
            }
          });
          setImageUrls(urls);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
    
      fetchArticles();
    }, [apiUrl]);
    
  
    const formattedDate = (dateString: string) => {
      try {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
      } catch (error) {
        console.error("Error formatting date:", error);
        return dateString; // Return original string if formatting fails
      }
    };
    
    const formatReadTime = (readTime?: number) => {
      return readTime ? `${readTime} min read` : "No read time available";
    };
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
            <Image src={Logo || "/placeholder.svg"} alt="Developer Portrait" fill className="object-cover" priority />
          </div>
        </div>
      </section>

      {/* Services Section */}
<section className="py-16 md:py-24 bg-gradient-to-b to-transparent">
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
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-4">Project</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
            Insights, tutorials, and thoughts on Drupal development, web technologies, and industry trends.
          </p>
          {projects.length > 0 && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                {projects.slice(0, showAll ? projects.length : 3).map((project) => (
                  <article key={project.id} className="bg-card rounded-lg border overflow-hidden shadow-sm group">
                    <div className="relative h-48 w-full">
                      {imageUrls[project.id] ? (
                        <Image
                          src={imageUrls[project.id] || "/placeholder.svg"}
                          alt={project.attributes?.title || "Article Image"}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                      ) : (
                        <p className="text-gray-500">No image available</p>
                      )}
                    </div>
                    <div className="p-6">
                      <h2 className="text-xl font-bold mb-2">{project.attributes?.title || "No Title Available"}</h2>
                      <p className="text-muted-foreground mb-4">
                        {project.attributes?.field_short_description
                          ? String(project.attributes.field_short_description)
                          : "No Content Available"}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.attributes?.field_categories?.map((category, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {category}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground mb-4">
                        <div className="flex items-center mr-4">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>
                            {project.attributes?.field_date
                              ? formattedDate(project.attributes.field_date)
                              : "No date available"}
                          </span>
                        </div>
                      </div>
                      <Button asChild variant="link" className="p-0">
                        <Link href={`/blogdetail?id=${project.id}`}>
                          Read More <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </article>
                ))}
              </div>
              {projects.length > 3 && (
                <div className="mt-8 text-center">
                  <Button variant="outline" onClick={() => setShowAll(!showAll)}>
                    {showAll ? "View Less" : "View All"}
                  </Button>
                </div>
              )}
            </>
          )}
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
