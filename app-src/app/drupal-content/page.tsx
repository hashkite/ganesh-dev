"use client";

import { useEffect, useState } from "react";

type DrupalItem = {
  id: string;
  type: string;
  attributes?: {
    title?: string;
    body?: { value: string };
  };
  relationships?: {
    field_image?: { data?: { id: string } };
  };
};

type DrupalFile = {
  id: string;
  type: string;
  attributes?: {
    uri?: { url: string };
  };
};

const DrupalArticle = () => {
  const [article, setArticle] = useState<DrupalItem | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(
          `${apiUrl}/jsonapi/node/article/3062ac43-93fe-4cdd-ac5a-78e3bea0889f?include=field_image`

        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);

        if (data.data) {
          setArticle(data.data);

          // Extract image URL from included files
          const imageId = data.data.relationships?.field_image?.data?.id;
          const media = data.included?.find((item: DrupalFile) => item.id === imageId);

          if (media?.attributes?.uri?.url) {
            const fileUrl = media.attributes.uri.url.replace("public://");
            setImageUrl(`${apiUrl}${fileUrl}`);
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchArticle();
  }, [apiUrl]);

  if (!article) return <p className="text-center text-xl">Loading...</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        {article.attributes?.title || "No Title Available"}
      </h1>

      {imageUrl ? (
        <img
          src={imageUrl}
          alt={article.attributes?.title || "Article Image"}
          width="600"
          loading="lazy"
          className="mt-4 rounded-lg"
        />
      ) : (
        <p className="text-gray-500">No image available</p>
      )}

      <div
        className="mt-6 text-gray-700"
        dangerouslySetInnerHTML={{ __html: article.attributes?.body?.value || "No Content" }}
      />
    </div>
  );
};

export default DrupalArticle;
