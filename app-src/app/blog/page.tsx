"use client"
import Image from "next/image"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, Clock } from "lucide-react"

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

export default function BlogPage() {
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
        const response = await fetch(`${apiUrl}/jsonapi/node/article?include=field_image`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const data = await response.json();
        console.log("API Response:", data);
  
        setArticles(data.data);
  
        const urls: { [key: string]: string } = {};
        const categoryMap: { [key: string]: string } = {};
  
        data.included?.forEach((item: any) => {
          if (item.type === "taxonomy_term--categories") {
            categoryMap[item.id] = item.attributes.name;
          }
        });
  
        data.data.forEach((article: any) => {
          const imageId = article.relationships?.field_image?.data?.id;
          const media = data.included?.find((item: any) => item.id === imageId);
  
          if (media?.attributes?.uri?.url) {
            const fileUrl = media.attributes.uri.url.replace("public://", "");
            urls[article.id] = `${apiUrl}/${fileUrl}`;
          }
  
          if (Array.isArray(article.relationships?.field_categories?.data)) {
            article.attributes.field_categories = article.relationships.field_categories.data.map(
              (cat: any) => categoryMap[cat.id] ?? "Uncategorized" // Use Nullish Coalescing (??)
            );
          } else {
            article.attributes.field_categories = ["Uncategorized"];
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
              <div className="flex flex-wrap gap-2 mb-3">
                {article.attributes?.field_categories?.map((category: string, index: number) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {category}
                  </Badge>
                ))}
              </div>

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

