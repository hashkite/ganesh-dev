"use client"
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Clock, User, ArrowRight } from "lucide-react"


type DrupalItem = {
  id: string;
  attributes?: {
    title?: string;
    field_read?:number
    field_name?: string
    field_date?:string
    field_short_description?: string;
    body?: { value: string };
    created?: string;
  };
};

export default function BlogDetailPage() {
  const searchParams = useSearchParams()
  const title = searchParams.get("title")
const articleId = searchParams.get("id");

const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

const [article, setArticle] = useState<DrupalItem | null>(null);
const [imageUrl, setImageUrl] = useState<string | null>(null);
const [loading, setLoading] = useState(!!articleId);
  useEffect(() => {
    if (!articleId) return;
  
    const fetchArticle = async () => {
      try {
        const response = await fetch(`${apiUrl}/jsonapi/node/article/${articleId}?include=field_image`);
        if (!response.ok) throw new Error("Failed to fetch article");
  
        const data = await response.json();
        console.log("Fetched Article:", data);
  
        setArticle(data.data);
        setLoading(false);
  
        const imageId = data.data?.relationships?.field_image?.data?.id;
        const media = data.included?.find((item: any) => item.id === imageId);
  
        if (media?.attributes?.uri?.url) {
          const fileUrl = media.attributes.uri.url.replace("public://", "");
          setImageUrl(`${apiUrl}/${fileUrl}`);
        }
      } catch (error) {
        console.error("Error fetching article:", error);
        setLoading(false);
      }
    };
  
    fetchArticle();
  }, [articleId, apiUrl]);
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

  if (loading) return <p className="text-center text-gray-500">Loading article...</p>;
  if (article) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Button variant="ghost" asChild className="mb-8 hover:bg-muted">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
  
          <article className="bg-card rounded-lg border overflow-hidden shadow-md">
            {imageUrl && (
              <div className="relative h-[400px] w-full">
                <Image src={imageUrl || "/placeholder.svg"} alt={article.attributes?.title || "Article Image"} fill className="object-cover" priority />
              </div>
            )}
  
            <div className="p-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {article.attributes?.title || "No Title Available"}
              </h1>
              
            <div className="flex items-center text-sm text-muted-foreground mb-6">
            <div className="flex items-center mr-4">
                <User className="h-4 w-4 mr-1" />
                <span>{article.attributes?.field_name}</span>
              </div>
              <div className="flex items-center mr-4">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{article.attributes?.field_date
                        ? formattedDate(article.attributes.field_date)
                        : "No date available"}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>{article.attributes?.field_read
                        ? formatReadTime(article.attributes.field_read)
                        : "No read time available"}</span>
              </div>
            </div>
              <p className="text-lg font-medium mb-6">
                {article.attributes?.field_short_description || "No Short Description Available"}
              </p>
  
              <div className="prose prose-lg dark:prose-invert">
                <div dangerouslySetInnerHTML={{ __html: article.attributes?.body?.value || "No Content Available" }} />
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }
  const createMarkup = (htmlContent: string) => {
    return { __html: htmlContent }
  }
}

