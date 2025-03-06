import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { Button } from "../components/ui/button"

// Mock project data
const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A fully-featured e-commerce platform built with Drupal Commerce, featuring custom product types, payment integrations, and a headless React frontend.",
    image: "https://placehold.co/600x400/png",
    tags: ["Drupal 9", "Commerce", "React", "API"],
    featured: true,
  },
  {
    id: 2,
    title: "University Website",
    description:
      "A comprehensive university website with complex content architecture, custom search functionality, and multi-language support.",
    image: "https://placehold.co/600x400/png",
    tags: ["Drupal 10", "Multilingual", "Search API"],
    featured: true,
  },
  {
    id: 3,
    title: "Media Portal",
    description:
      "A media distribution platform with advanced asset management, user permissions, and content workflow capabilities.",
    image: "https://placehold.co/600x400/png",
    tags: ["Drupal 9", "Media", "Workflow"],
    featured: true,
  },
  {
    id: 4,
    title: "Government Agency Site",
    description:
      "An accessible, secure website for a government agency with complex information architecture and document management.",
    image: "https://placehold.co/600x400/png",
    tags: ["Drupal 9", "Accessibility", "Security"],
    featured: false,
  },
  {
    id: 5,
    title: "Nonprofit Organization",
    description:
      "A donation-enabled website with event management, volunteer coordination, and impact reporting features.",
    image: "https://placehold.co/600x400/png",
    tags: ["Drupal 8", "Donations", "Events"],
    featured: false,
  },
  {
    id: 6,
    title: "Corporate Intranet",
    description:
      "A secure internal portal with document management, employee directory, and department-specific content areas.",
    image: "https://placehold.co/600x400/png",
    tags: ["Drupal 9", "Intranet", "LDAP"],
    featured: false,
  },
]

export default function ProjectsPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">My Projects</h1>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          A showcase of my work as a Drupal developer, featuring a variety of websites and applications.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div key={project.id} className="group relative overflow-hidden rounded-lg border shadow-sm">
            <div className="aspect-video overflow-hidden">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="object-cover transition-transform duration-300 group-hover:scale-105 w-full h-full"
              />
              {project.featured && (
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center rounded-full bg-primary px-2.5 py-0.5 text-xs font-semibold text-primary-foreground">
                    Featured
                  </span>
                </div>
              )}
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold">{project.title}</h2>
              <p className="mt-2 text-muted-foreground">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6">
                <Link to={`/projects/${project.id}`}>
                  <Button variant="outline" size="sm">
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

