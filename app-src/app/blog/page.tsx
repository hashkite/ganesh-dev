"use client"
import Image from "next/image"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import drupal from "../assets/drupal7to10.png"
import headImage from "../assets/headless.png"
import performence from "../assets/drupal-performance.png"
import secureImage from "../assets/secure.png"
import implement from "../assets/implement-accessi.png"
import custom from "../assets/custom.png"

type DrupalItem = {
  id: string
  attributes?: {
    title?: string
    field_categories?:string
    field_read?:number
    field_date?:string
    field_short_description?: string
    body?: { value: string }
    created?: string
  }
}

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: "Migrating from Drupal 7 to Drupal 9: A Comprehensive Guide",
      excerpt:
        "Learn the best practices and strategies for migrating your legacy Drupal 7 site to Drupal 9 with minimal disruption.",
      date: "May 15, 2023",
      readTime: "8 min read",
      author: "John Doe",
      image: drupal,
      categories: ["Migration", "Drupal 9"],
    },
    {
      id: 2,
      title: "Building Headless Drupal Solutions with Next.js",
      excerpt:
        "Explore the benefits and implementation details of using Drupal as a headless CMS with a Next.js frontend.",
      date: "April 3, 2023",
      readTime: "10 min read",
      author: "John Doe",
      image: headImage,
      categories: ["Headless", "Next.js", "API"],
    },
    {
      id: 3,
      title: "Optimizing Drupal Performance for Enterprise Sites",
      excerpt:
        "Discover advanced techniques for improving the performance of large-scale Drupal sites under heavy traffic loads.",
      date: "March 12, 2023",
      readTime: "12 min read",
      author: "John Doe",
      image: performence,
      categories: ["Performance", "Enterprise"],
    },
    {
      id: 4,
      title: "Custom Module Development Best Practices in Drupal 10",
      excerpt:
        "Learn how to write clean, maintainable, and efficient custom modules for Drupal 10 following industry best practices.",
      date: "February 28, 2023",
      readTime: "9 min read",
      author: "John Doe",
      image: custom,
      categories: ["Development", "Modules", "Drupal 10"],
    },
    {
      id: 5,
      title: "Implementing Accessibility in Drupal Themes",
      excerpt:
        "A guide to creating accessible Drupal themes that comply with WCAG 2.1 standards and provide an inclusive user experience.",
      date: "January 15, 2023",
      readTime: "7 min read",
      author: "John Doe",
      image: implement,
      categories: ["Accessibility", "Theming"],
    },
    {
      id: 6,
      title: "Drupal Security: Protecting Your Site from Common Vulnerabilities",
      excerpt:
        "Essential security measures and best practices to keep your Drupal site safe from common attacks and vulnerabilities.",
      date: "December 5, 2022",
      readTime: "11 min read",
      author: "John Doe",
      image: secureImage,
      categories: ["Security", "Best Practices"],
    },
  ] 
  const categories = [
    "All",
    "Migration",
    "Headless",
    "Performance",
    "Development",
    "Accessibility",
    "Security",
    "Drupal 9",
    "Drupal 10",
  ]

  const [articles, setArticles] = useState<DrupalItem[]>([])
  const [imageUrls, setImageUrls] = useState<{ [key: string]: string }>({})

  const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(`${apiUrl}/jsonapi/node/article?include=field_image`)

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }

        const data = await response.json()
        console.log("API Response:", data) // Debugging output

        setArticles(data.data)

        // Extract images for each article
        const urls: { [key: string]: string } = {}
        data.data.forEach((article: any) => {
          const imageId = article.relationships?.field_image?.data?.id
          const media = data.included?.find((item: any) => item.id === imageId)

          if (media?.attributes?.uri?.url) {
            const fileUrl = media.attributes.uri.url.replace("public://", "")
            urls[article.id] = `${apiUrl}/${fileUrl}`
          }
        })

        setImageUrls(urls)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchArticles()
  }, [apiUrl])

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
      <h1 className="text-4xl font-bold mb-4">Blog</h1>
      <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
        Insights, tutorials, and thoughts on Drupal development, web
        technologies, and industry trends.
      </p>

      <div className="flex flex-wrap gap-2 mb-12">
        {categories.map((category) => (
          <Badge
            key={category}
            variant={category === "All" ? "default" : "outline"}
            className="px-4 py-2 text-sm cursor-pointer"
          >
            {category}
          </Badge>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <article
            key={post.id}
            className="bg-card rounded-lg border overflow-hidden shadow-sm group"
          >
            {/* <Link href={`/blog/${post.id}`} className="block"> */}
            <div className="relative h-48 w-full">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            {/* </Link> */}
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-3">
                {post.categories.map((category, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {category}
                  </Badge>
                ))}
              </div>
              {/* <Link href={`/blog/${post.id}`} className="block group-hover:text-primary"> */}
              <h2 className="text-xl font-bold mb-2">{post.title}</h2>
              {/* </Link> */}
              <p className="text-muted-foreground mb-4">{post.excerpt}</p>
              <div className="flex items-center text-sm text-muted-foreground mb-4">
                <div className="flex items-center mr-4">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{post.readTime}</span>
                </div>
              </div>
              <Button asChild variant="link" className="p-0">
                <Link
                  href={`/blogdetail?title=${encodeURIComponent(post.title)}`}
                >
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </article>
        ))}
      </div>
      {articles.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {articles.map((article) => (
            <article
              key={article.id}
              className="bg-card rounded-lg border overflow-hidden shadow-sm group"
            >
              <div className="relative h-48 w-full">
                {imageUrls[article.id] ? (
                  <Image
                    src={imageUrls[article.id] || "/placeholder.svg"}
                    alt={article.attributes?.title || "Article Image"}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                ) : (
                  <p className="text-gray-500">No image available</p>
                )}
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">
                  {article.attributes?.title || "No Title Available"}
                </h2>
                <p className="text-muted-foreground mb-4">
                  {article.attributes?.field_short_description
                    ? String(article.attributes.field_short_description)
                    : "No Content Available"}
                </p>
                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <div className="flex items-center mr-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>
                      {article.attributes?.field_date
                        ? formattedDate(article.attributes.field_date)
                        : "No date available"}
                    </span>
                  </div>

                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>
                      {article.attributes?.field_read
                        ? formatReadTime(article.attributes.field_read)
                        : "No read time available"}
                    </span>
                  </div>
                </div>
                <Button asChild variant="link" className="p-0">
                  <Link href={`/blogdetail?id=${article.id}`}>
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

