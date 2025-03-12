import { Link } from "react-router-dom"
import { ArrowRight, Calendar } from "lucide-react"
import { Button } from "../components/ui/button"
import drupalImage from "../assets/drupal7to10.png"
import performanceImage from "../assets/drupal-performance.png"
import headImage from "../assets/headless.png"
import customImage from "../assets/custom.png"
import secureImage from "../assets/secure.png"


// Mock blog data
const posts = [
  {
    id: 1,
    title: "Migrating from Drupal 7 to Drupal 10: A Complete Guide",
    excerpt:
      "Learn the step-by-step process for migrating your legacy Drupal 7 site to the latest Drupal 10 platform, including content migration strategies and potential pitfalls to avoid.",
    date: "2023-11-15",
    image: drupalImage,
    category: "Migration",
  },
  {
    id: 2,
    title: "Optimizing Drupal Performance with Redis and Varnish",
    excerpt:
      "Discover how to significantly improve your Drupal site's performance by implementing Redis for caching and Varnish as a reverse proxy cache.",
    date: "2023-10-22",
    image: performanceImage,
    category: "Performance",
  },
  {
    id: 3,
    title: "Building Headless Drupal Applications with React",
    excerpt:
      "A comprehensive tutorial on creating decoupled Drupal applications using React as the frontend, with practical examples and best practices.",
    date: "2023-09-18",
    image: headImage,
    category: "Development",
  },
  {
    id: 4,
    title: "Custom Entity Types in Drupal: When and How to Use Them",
    excerpt:
      "An in-depth look at when to create custom entity types in Drupal instead of using content types, and a step-by-step guide on implementation.",
    date: "2023-08-05",
    image: customImage,
    category: "Development",
  },
  {
    id: 5,
    title: "Securing Your Drupal Site: Essential Security Measures",
    excerpt:
      "Learn about the critical security measures every Drupal site should implement, from module updates to custom security configurations.",
    date: "2023-07-12",
    image: secureImage,
    category: "Security",
  },
]

export default function BlogPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">Blog</h1>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Insights, tutorials, and thoughts on Drupal development and web technologies.
        </p>
      </div>

      <div className="mt-12 space-y-12">
        {posts.map((post) => (
          <div key={post.id} className="group relative overflow-hidden rounded-lg border shadow-sm">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                </div>
                <h2 className="mt-4 text-2xl font-bold">{post.title}</h2>
                <p className="mt-2 text-muted-foreground">{post.excerpt}</p>
                <div className="mt-6">
                <Link to={`/blog/${post.id}`}>
  <Button variant="outline" size="sm">
    Read More
    <ArrowRight className="ml-2 h-4 w-4" />
  </Button>
</Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

