import { useEffect, useState } from "react";

const DrupalContent = () => {
  const [landingPage, setLandingPage] = useState(null);
  const [components, setComponents] = useState([]);

  useEffect(() => {
    fetch("https://dhangar.in.ddev.site/jsonapi/node/landing_page/2e5b621a-7f7b-4d2b-ba7e-45430f3c6488?include=field_components")
      .then((response) => response.json())
      .then((data) => {
        if (data.data) {
          setLandingPage(data.data); // Store landing page data
        }
        if (data.included) {
          setComponents(data.included); // Store paragraph components
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  console.log(components);

  if (!landingPage) return <p>Loading...</p>;

  return (
    <div>
      <h2>{landingPage.attributes.title}</h2>

      <h3>Components:</h3>
      <ul>
        {components.map((component) => {
          const image = components.find((img) => img.id === component.relationships.field_hero_image?.data?.id);

          return (
            <li key={component.id}>
            <h4>{component.attributes.field_title}</h4>
            <div dangerouslySetInnerHTML={{ __html: component.attributes.field_description.value }} />
            
            {image && (
                <img
                  src={`https://dhangar.in.ddev.site${image.attributes.uri.url}`}
                  alt={component.attributes.field_title}
                  width="600"
                  loading="lazy"
                />
              )}
          </li>
          )
        })}
      </ul>
    </div>
  );
};

export default DrupalContent;
