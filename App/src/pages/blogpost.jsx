import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, MessageCircle } from "lucide-react";
import drupalImage from "../assets/drupal7to10.png";
import performanceImage from "../assets/drupal-performance.png";
import headImage from "../assets/headless.png"; // Add relevant image for blog 3

const blogPosts = {
  1: {
    title: "Migrating from Drupal 7 to Drupal 10: A Complete Guide",
    date: "March 10, 2025",
    author: "John Doe",
    category: "Migration",
    image: drupalImage,
    content: (
      <>
        <p>
          Drupal 7 has been a reliable CMS for years, but with its end-of-life
          approaching, upgrading to Drupal 10 is essential. Drupal 10 offers
          numerous advantages, including enhanced security, improved
          performance, and modern development standards.
        </p>

        <h2>🚀 Key Benefits of Drupal 10</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            <strong>Security & Support:</strong> Continued security updates and
            long-term stability.
          </li>
          <li>
            <strong>Performance Enhancements:</strong> Faster with Symfony 6 and
            PHP 8.1.
          </li>
          <li>
            <strong>Modern Development Standards:</strong> Better headless CMS
            support.
          </li>
          <li>
            <strong>Improved User Experience:</strong> New Claro admin theme and
            CKEditor 5.
          </li>
          <li>
            <strong>Future-Proofing:</strong> Compatibility with new modules.
          </li>
        </ul>

        <h2>✅ Drupal 7 to 10 Migration Checklist</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>✅ Backup your existing Drupal 7 site (database & files).</li>
          <li>✅ Audit existing modules for Drupal 10 compatibility.</li>
          <li>✅ Plan content migration strategy (manual or automated).</li>
          <li>✅ Choose a new theme or migrate the existing one using Twig.</li>
          <li>
            ✅ Implement SEO strategies (301 redirects, metadata updates).
          </li>
          <li>✅ Test thoroughly before going live.</li>
        </ul>

        <h2>⚠️ Common Migration Mistakes & How to Avoid Them</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            <strong>Not Testing Early:</strong> Run tests throughout migration,
            not just at the end.
          </li>
          <li>
            <strong>Ignoring SEO Impact:</strong> Set up proper redirects to
            avoid broken links.
          </li>
          <li>
            <strong>Skipping Performance Optimization:</strong> Use caching
            tools like Redis and Varnish.
          </li>
          <li>
            <strong>Not Training Editors & Admins:</strong> Drupal 10 has a
            different UI; train your team.
          </li>
        </ul>
      </>
    ),
  },
  2: {
    title: "Optimizing Drupal Performance with Redis and Varnish",
    date: "March 15, 2025",
    author: "Jane Smith",
    category: "Performance",
    image: performanceImage,
    content: (
      <>
        <p>
          Performance optimization is crucial for delivering fast, efficient,
          and scalable Drupal websites. In this guide, we will explore how Redis
          and Varnish can dramatically enhance Drupal performance.
        </p>

        <h2>🚀 Why Optimize Drupal Performance?</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>📈 Improves page load speed and user experience.</li>
          <li>💰 Reduces hosting costs by optimizing resource usage.</li>
          <li>🔍 Enhances SEO rankings as Google favors fast sites.</li>
          <li>
            🔄 Prevents downtime by handling high traffic loads efficiently.
          </li>
        </ul>

        <h2>🔥 Using Redis for Caching</h2>
        <p>
          Redis is an in-memory data store that speeds up page load times by
          caching frequently used database queries. This reduces the number of
          direct database requests, making your site more responsive.
        </p>
        <h3>📌 Steps to Implement Redis</h3>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            Install Redis on your server using:{" "}
            <code>sudo apt install redis-server</code>
          </li>
          <li>
            Enable Redis PHP extension: <code>sudo apt install php-redis</code>
          </li>
          <li>
            Install the Drupal Redis module via Composer:{" "}
            <code>composer require drupal/redis</code>
          </li>
          <li>
            Enable the Redis module in Drupal: <code>drush en redis -y</code>
          </li>
          <li>
            Configure <code>settings.php</code> to use Redis as a cache backend.
          </li>
        </ul>

        <h2>⚡ Setting Up Varnish for Drupal</h2>
        <p>
          Varnish is a reverse proxy that caches pages in memory, reducing the
          load on your web server. It handles requests faster than PHP,
          significantly improving site speed.
        </p>
        <h3>📌 Steps to Configure Varnish</h3>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            Install Varnish: <code>sudo apt install varnish</code>
          </li>
          <li>
            Modify the default port in <code>/etc/varnish/default.vcl</code> to
            work with Drupal.
          </li>
          <li>
            Set Apache/Nginx to listen on port 8080 and configure Varnish to
            handle requests on port 80.
          </li>
          <li>Enable Drupal’s Varnish module for integration.</li>
          <li>
            Test caching with: <code>varnishstat</code> and{" "}
            <code>varnishlog</code>
          </li>
        </ul>
      </>
    ),
  },

  3: {
    title: "Building Headless Drupal Applications with React",
    date: "March 20, 2025",
    author: "Alex Johnson",
    category: "Headless CMS",
    image: headImage,
    content: (
      <>
        <p>
          Headless Drupal, combined with React, enables developers to build
          modern, dynamic applications while leveraging Drupal’s robust backend
          for content management. This tutorial guides you through the process
          of setting up a decoupled Drupal site with React.
        </p>

        <h2>🔹 Why Choose a Headless Approach?</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            🚀 <strong>Performance:</strong> Faster, more responsive UI powered
            by React.
          </li>
          <li>
            🔄 <strong>Flexibility:</strong> Use Drupal as a backend while
            serving content on multiple platforms.
          </li>
          <li>
            🔧 <strong>Improved Developer Experience:</strong> Modern JavaScript
            workflows with React.
          </li>
          <li>
            📡 <strong>Better Scalability:</strong> API-first approach allows
            seamless integrations.
          </li>
        </ul>

        <h2>🛠️ Setting Up Drupal for Headless Mode</h2>
        <p>
          First, install and enable the JSON:API module, which allows Drupal to
          expose content as structured data through an API.
        </p>
        <pre className="bg-gray-900 text-white p-4 rounded-md overflow-auto">
          {`
composer require drupal/jsonapi
drush en jsonapi
          `}
        </pre>

        <h2>⚡ Fetching Data in React</h2>
        <p>
          Use the <code>fetch</code> API or <code>axios</code> to retrieve
          content from Drupal’s JSON:API endpoints.
        </p>
        <pre className="bg-gray-900 text-white p-4 rounded-md overflow-auto">
          {`
import React, { useEffect, useState } from "react";
import axios from "axios";

const DrupalData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://your-drupal-site.com/jsonapi/node/article")
      .then(response => setData(response.data.data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h2>Drupal Content</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.attributes.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default DrupalData;
          `}
        </pre>
      </>
    ),
  },
};

export default function BlogPost() {
  const { id } = useParams();
  const post = blogPosts[id];

  if (!post) {
    return (
      <h1 className="text-center text-2xl font-bold mt-12">Post Not Found</h1>
    );
  }

  return (
    <div className="container mx-auto max-w-3xl py-12 px-4">
      <div className="relative w-full h-64 md:h-80 overflow-hidden rounded-lg shadow-lg">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <span className="absolute top-4 left-4 bg-primary/80 text-white px-3 py-1 rounded-md text-sm">
          {post.category}
        </span>
      </div>

      <div className="mt-6">
        <h1 className="text-4xl font-bold">{post.title}</h1>
        <p className="mt-2 text-muted-foreground text-sm">
          By <span className="font-semibold">{post.author}</span> • {post.date}
        </p>
        <div className="mt-6 text-lg space-y-4">{post.content}</div>
      </div>

      <div className="mt-8 flex justify-between">
        <Link to="/blog" className="text-primary flex items-center gap-2">
          <ArrowLeft size={18} /> Back to Blog
        </Link>
        {parseInt(id) < Object.keys(blogPosts).length && (
          <Link
            to={`/blog/${parseInt(id) + 1}`}
            className="text-primary flex items-center gap-2"
          >
            Next Post <ArrowRight size={18} />
          </Link>
        )}
      </div>

      <div className="mt-12 border-t pt-6">
        <h2 className="text-2xl font-semibold">💬 Comments</h2>
        <textarea
          className="w-full border p-3 mt-3 rounded-md"
          placeholder="Write a comment..."
        ></textarea>
        <button className="mt-2 bg-primary text-white py-2 px-4 rounded-md flex items-center gap-2">
          <MessageCircle size={18} /> Post Comment
        </button>
      </div>
    </div>
  );
}
