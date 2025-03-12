import { useEffect, useState } from "react";

const DrupalContent = () => {
  const [landingPage, setLandingPage] = useState(null);
  const [components, setComponents] = useState([]);
  const [included, setIncluded] = useState([]);
  const [files, setFiles] = useState([]); // Store images separately

  useEffect(() => {
    fetch("https://dhangar.in.ddev.site/jsonapi/node/landing_page/2e5b621a-7f7b-4d2b-ba7e-45430f3c6488?include=field_components")
      .then((response) => response.json())
      .then((data) => {
        if (data.data) {
          setLandingPage(data.data); // Store landing page data
        }
        if (data.included) {
          setIncluded(data.included);
          setComponents(data.included.filter(item => item.type.includes("paragraph"))); // Filter only paragraph components
          setFiles(data.included.filter(item => item.type === "file--file")); // Filter only file entities
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!landingPage) return <p>Loading...</p>;

  return (
    <div>
      <h2>{landingPage.attributes.title}</h2>

      <h3>Components:</h3>
      <ul>
        {components.map((component) => {
          const heroImageId = component.relationships?.field_hero_image?.data?.id;
          const media = included.find((item) => item.id === heroImageId);
          
          console.log(included);
          console.log("Hero Image ID:", heroImageId);
          console.log("Media Object:", media);


          return (
            <li key={component.id}>
              <h4>{component.attributes.field_title}</h4>
              <div dangerouslySetInnerHTML={{ __html: component.attributes.field_description?.value }} />
              
            {media?.attributes?.uri?.url && (
              <img
                src={`https://dhangar.in.ddev.site/sites/default/files/${media.attributes.uri.url.replace("public://", "")}`}
                alt={component.attributes.field_title}
                width="600"
                loading="lazy"
                />
            )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DrupalContent;
