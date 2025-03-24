"use client"

import { useSearchParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Clock, User, ArrowRight } from "lucide-react"
import drupal from "../assets/drupal7to10.png"
import headImage from "../assets/headless.png"
import performanceImage from "../assets/drupal-performance.png"
import secureImage from "../assets/secure.png"
import implement from "../assets/implement-accessi.png"
import custom from "../assets/custom.png"

export default function BlogDetailPage() {
  const searchParams = useSearchParams()
  const title = searchParams.get("title")

  // Sample blog posts data - in a real app, this would come from a database or API
  const posts = [
    {
      id: 1,
      title: "Migrating from Drupal 7 to Drupal 9: A Comprehensive Guide",
      excerpt:
        "Learn the best practices and strategies for migrating your legacy Drupal 7 site to Drupal 9 with minimal disruption.",
      content: `
        <p>Migrating from Drupal 7 to Drupal 9 is a significant undertaking that requires careful planning and execution. This comprehensive guide will walk you through the entire process, from initial assessment to post-migration optimization.</p>
        
        <h2>Why Upgrade from Drupal 7?</h2>
        <p>Drupal 7 will reach end-of-life soon, meaning it will no longer receive security updates. Additionally, Drupal 9 offers numerous improvements in terms of performance, security, and developer experience.</p>
        
        <h2>Pre-Migration Assessment</h2>
        <p>Before beginning the migration process, it's essential to conduct a thorough assessment of your current Drupal 7 site. This includes:</p>
        <ul>
          <li>Inventory of all modules and their Drupal 9 compatibility</li>
          <li>Content audit to identify what needs to be migrated</li>
          <li>Custom code review to determine necessary updates</li>
          <li>Performance baseline to compare post-migration results</li>
        </ul>
        
        <h2>Migration Approaches</h2>
        <p>There are several approaches to migrating from Drupal 7 to Drupal 9:</p>
        <ol>
          <li><strong>Direct Migration:</strong> Using the Migrate API to move content directly from Drupal 7 to Drupal 9</li>
          <li><strong>Phased Migration:</strong> Upgrading to Drupal 8 first, then to Drupal 9</li>
          <li><strong>Rebuild and Migrate:</strong> Building a new Drupal 9 site and migrating content separately</li>
        </ol>
        
        <h2>Step-by-Step Migration Process</h2>
        <p>The migration process typically involves the following steps:</p>
        <ol>
          <li>Set up a new Drupal 9 environment</li>
          <li>Install and configure the Migrate module suite</li>
          <li>Define migration mappings for content types, fields, and entities</li>
          <li>Run test migrations and resolve issues</li>
          <li>Execute the full migration</li>
          <li>Verify and test the migrated site</li>
          <li>Update custom modules and themes for Drupal 9 compatibility</li>
          <li>Optimize performance and security</li>
        </ol>
        
        <h2>Post-Migration Considerations</h2>
        <p>After completing the migration, consider the following:</p>
        <ul>
          <li>Performance optimization using Drupal 9's new caching system</li>
          <li>Security review and hardening</li>
          <li>User training for new administrative interfaces</li>
          <li>Documentation updates</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Migrating from Drupal 7 to Drupal 9 requires significant effort but offers substantial benefits in terms of security, performance, and future-proofing your website. By following this comprehensive guide, you can ensure a smooth transition with minimal disruption to your users.</p>
      `,
      date: "May 15, 2023",
      readTime: "8 min read",
      author: "John Doe",
      authorBio:
        "Senior Drupal Developer with over 10 years of experience in CMS migrations and enterprise Drupal implementations.",
      image: drupal,
      categories: ["Migration", "Drupal 9"],
    },
    {
      id: 2,
      title: "Building Headless Drupal Solutions with Next.js",
      excerpt:
        "Explore the benefits and implementation details of using Drupal as a headless CMS with a Next.js frontend.",
      content: `
        <p>Headless Drupal architecture has gained significant popularity in recent years, offering flexibility, performance, and improved developer experience. This article explores how to build a headless Drupal solution with Next.js as the frontend framework.</p>
        
        <h2>What is Headless Drupal?</h2>
        <p>In a headless architecture, Drupal serves as a content repository and API provider, while the frontend presentation layer is handled by a separate JavaScript framework. This decoupling allows teams to leverage the strengths of both technologies.</p>
        
        <h2>Why Choose Next.js for the Frontend?</h2>
        <p>Next.js offers several advantages as a frontend framework for headless Drupal:</p>
        <ul>
          <li>Server-side rendering for improved SEO and performance</li>
          <li>Static site generation capabilities</li>
          <li>Incremental static regeneration for dynamic content</li>
          <li>Built-in routing and API routes</li>
          <li>React-based component model</li>
        </ul>
        
        <h2>Setting Up Drupal as a Headless CMS</h2>
        <p>To prepare Drupal for headless operation, you'll need to:</p>
        <ol>
          <li>Install and configure the JSON:API module</li>
          <li>Set up proper CORS configuration</li>
          <li>Implement authentication (JWT or OAuth)</li>
          <li>Configure content types and fields</li>
          <li>Set up media handling</li>
        </ol>
        
        <h2>Building the Next.js Frontend</h2>
        <p>The Next.js implementation typically involves:</p>
        <ol>
          <li>Setting up a Next.js project</li>
          <li>Creating API services to communicate with Drupal</li>
          <li>Implementing page templates and components</li>
          <li>Setting up routing to match Drupal's content structure</li>
          <li>Implementing preview functionality for content editors</li>
        </ol>
        
        <h2>Data Fetching Strategies</h2>
        <p>Next.js offers multiple data fetching methods that work well with Drupal:</p>
        <ul>
          <li><strong>getStaticProps:</strong> For content that can be pre-rendered at build time</li>
          <li><strong>getStaticPaths:</strong> For dynamic routes that can be pre-rendered</li>
          <li><strong>getServerSideProps:</strong> For content that needs to be fetched on each request</li>
          <li><strong>Incremental Static Regeneration:</strong> For content that changes occasionally</li>
        </ul>
        
        <h2>Authentication and Personalization</h2>
        <p>Implementing user authentication and personalized content in a headless architecture requires:</p>
        <ul>
          <li>JWT or OAuth token management</li>
          <li>User session handling in Next.js</li>
          <li>Conditional rendering based on user roles</li>
          <li>Secure API endpoints in Drupal</li>
        </ul>
        
        <h2>Deployment Considerations</h2>
        <p>When deploying a headless Drupal with Next.js solution, consider:</p>
        <ul>
          <li>Separate hosting for Drupal and Next.js</li>
          <li>CDN configuration for optimal performance</li>
          <li>Cache invalidation strategies</li>
          <li>CI/CD pipelines for both systems</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Building headless Drupal solutions with Next.js combines the content management strengths of Drupal with the frontend capabilities of Next.js. This architecture provides improved performance, better developer experience, and greater flexibility for creating modern web experiences.</p>
      `,
      date: "April 3, 2023",
      readTime: "10 min read",
      author: "John Doe",
      authorBio: "Full-stack developer specializing in decoupled CMS architectures and modern JavaScript frameworks.",
      image: headImage,
      categories: ["Headless", "Next.js", "API"],
    },
    {
      id: 3,
      title: "Optimizing Drupal Performance for Enterprise Sites",
      excerpt:
        "Discover advanced techniques for improving the performance of large-scale Drupal sites under heavy traffic loads.",
      content: `
        <p>Performance optimization is critical for enterprise Drupal sites that handle high traffic volumes and complex functionality. This article explores advanced techniques for maximizing Drupal performance at scale.</p>
        
        <h2>Understanding Drupal's Performance Stack</h2>
        <p>Drupal's performance can be optimized at multiple levels:</p>
        <ul>
          <li>Server infrastructure and hosting</li>
          <li>PHP configuration and optimization</li>
          <li>Database optimization</li>
          <li>Drupal core and module configuration</li>
          <li>Frontend performance</li>
          <li>Caching strategies</li>
        </ul>
        
        <h2>Infrastructure Optimization</h2>
        <p>Enterprise Drupal sites benefit from:</p>
        <ul>
          <li>Containerized environments with orchestration (Kubernetes, Docker)</li>
          <li>Auto-scaling capabilities to handle traffic spikes</li>
          <li>Geographic distribution through CDNs</li>
          <li>Load balancing across multiple servers</li>
          <li>Dedicated database servers with optimized configurations</li>
        </ul>
        
        <h2>Database Performance Tuning</h2>
        <p>Database optimization techniques include:</p>
        <ol>
          <li>Proper indexing of frequently queried fields</li>
          <li>Query optimization and monitoring</li>
          <li>Database server configuration tuning</li>
          <li>Implementing database caching layers</li>
          <li>Regular maintenance and cleanup of database tables</li>
        </ol>
        
        <h2>Caching Strategies</h2>
        <p>Implement multi-layered caching:</p>
        <ul>
          <li><strong>Internal Caching:</strong> Drupal's internal page and render cache</li>
          <li><strong>Memory-based Caching:</strong> Redis or Memcached for dynamic content</li>
          <li><strong>Reverse Proxy:</strong> Varnish for anonymous page caching</li>
          <li><strong>CDN:</strong> For static assets and potentially cached pages</li>
          <li><strong>Browser Caching:</strong> Proper HTTP headers for client-side caching</li>
        </ul>
        
        <h2>Module and Theme Optimization</h2>
        <p>Optimize your Drupal codebase:</p>
        <ul>
          <li>Audit and remove unnecessary modules</li>
          <li>Use profiling tools to identify slow modules</li>
          <li>Optimize custom module code for performance</li>
          <li>Implement lazy loading for non-critical components</li>
          <li>Optimize theme rendering and asset loading</li>
        </ul>
        
        <h2>Frontend Performance</h2>
        <p>Improve frontend performance through:</p>
        <ul>
          <li>JavaScript and CSS aggregation and minification</li>
          <li>Image optimization and responsive images</li>
          <li>Critical CSS implementation</li>
          <li>Lazy loading of below-the-fold content</li>
          <li>Reducing third-party script impact</li>
        </ul>
        
        <h2>Monitoring and Continuous Optimization</h2>
        <p>Implement robust monitoring:</p>
        <ul>
          <li>Real-user monitoring (RUM) for actual user experience</li>
          <li>Synthetic monitoring for consistent benchmarking</li>
          <li>Database query monitoring</li>
          <li>Server resource utilization tracking</li>
          <li>Regular performance testing and optimization cycles</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Optimizing Drupal performance for enterprise sites requires a holistic approach that addresses all layers of the technology stack. By implementing these advanced techniques, you can ensure your Drupal site delivers exceptional performance even under heavy load conditions.</p>
      `,
      date: "March 12, 2023",
      readTime: "12 min read",
      author: "John Doe",
      authorBio:
        "Performance optimization specialist with expertise in scaling Drupal for enterprise applications and high-traffic websites.",
      image: performanceImage,
      categories: ["Performance", "Enterprise"],
    },

    {
      id: 4,
      title: "Custom Module Development Best Practices in Drupal 10",
      excerpt:
        "Discover essential best practices for building efficient, scalable, and maintainable custom modules in Drupal 10.",
      date: "March 10, 2023",
      readTime: "14 min read",
      author: "John Doe",
      image: custom,
      categories: ["Development", "Modules", "Drupal 10"],
      content: `
        <p>Drupal’s modular architecture allows developers to extend and customize its functionality through custom modules. Whether you're building a simple feature or a complex integration, following best practices ensures maintainability, performance, and security.</p>
    
        <h2>Understanding Drupal’s Module System</h2>
        <p>Drupal modules are building blocks that add new features to a Drupal site. There are two main types of modules:</p>
        <ul>
          <li><strong>Contributed Modules:</strong> Developed by the Drupal community and shared via Drupal.org.</li>
          <li><strong>Custom Modules:</strong> Created for specific project needs.</li>
        </ul>
        
        <h2>Best Practices for Custom Module Development</h2>
        <h3>1. Plan Before You Code</h3>
        <p>Before writing a single line of code, plan the functionality, database schema, and API integrations of your module. Check if a contributed module already exists to fulfill your requirements.</p>
        
        <h2>2. Follow Drupal Coding Standards</h2>
        <p>Adhere to Drupal’s <a href="https://www.drupal.org/docs/develop/standards/coding-standards">coding standards</a> to ensure consistency and maintainability.</p>
    
        <h2>3. Use Hooks and Services</h2>
        <p>Leverage Drupal’s hook system to alter and extend existing functionality without modifying core code. Additionally, use dependency injection and services to keep your module flexible and reusable.</p>
        
        <h2>4. Optimize for Performance</h2>
        <p>Performance optimization is crucial for a scalable Drupal module. Consider:</p>
        <ul>
          <li>Minimizing database queries</li>
          <li>Implementing caching mechanisms</li>
          <li>Using efficient data structures</li>
          <li>Optimizing render pipelines for frontend performance</li>
        </ul>
    
        <h2>3. Secure Your Code</h2>
        <p>Security is a major concern when developing custom Drupal modules. To enhance security:</p>
        <ul>
          <li>Sanitize all user inputs</li>
          <li>Use parameterized queries to prevent SQL injection</li>
          <li>Follow Drupal’s best practices for permissions and roles</li>
          <li>Regularly update your module to patch vulnerabilities</li>
        </ul>
        
        <h2>4. Use Drupal APIs</h2>
        <p>Drupal provides various APIs such as:</p>
        <ul>
          <li>Form API (FAPI) for handling user input securely</li>
          <li>Entity API for creating and managing content programmatically</li>
          <li>Cache API to optimize performance</li>
          <li>Routing API for defining custom page routes</li>
        </ul>
        
        <h2>3. Testing and Debugging</h2>
        <p>Automated testing is crucial for module reliability. Use:</p>
        <ul>
          <li>PHPUnit for backend testing</li>
          <li>Behat for behavior-driven testing</li>
          <li>Devel module for debugging performance issues</li>
        </ul>
        
        <h2>4. Version Control and Documentation</h2>
        <p>For team collaboration and maintainability, consider:</p>
        <ul>
          <li>Using Git for version control</li>
          <li>Writing clear documentation for installation and configuration</li>
          <li>Adding comments in code to explain complex logic</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>By following best practices for custom module development, you can ensure high performance, security, and maintainability. Leverage Drupal’s built-in APIs, focus on performance, and document your work to create robust modules for enterprise applications.</p>
      `,
    },

    {
      id: 5,
      title: "Implementing Accessibility in Drupal Themes",
      excerpt:
        "Learn how to create accessible Drupal themes that ensure an inclusive experience for all users and comply with WCAG 2.1 standards.",
      date: "January 15, 2023",
      readTime: "7 min read",
      author: "John Doe",
      image: implement,
      categories: ["Accessibility", "Theming"],
      content: `
        <p>Web accessibility is a crucial aspect of modern web development, ensuring that websites are usable by everyone, including people with disabilities. When building Drupal themes, it is important to follow accessibility best practices to create an inclusive experience.</p>
        
        <h2>Understanding Web Accessibility</h2>
        <p>Web Content Accessibility Guidelines (WCAG) provide standards to improve web accessibility. Drupal has built-in support for accessibility, but theme developers must take additional steps to enhance usability.</p>
        
        <h2>Key Accessibility Considerations</h2>
        <ul>
          <li><strong>Semantic HTML:</strong> Use proper HTML elements (e.g., <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;footer&gt;</code>).</li>
          <li><strong>ARIA Landmarks:</strong> Implement ARIA roles to improve navigation for screen readers.</li>
          <li><strong>Keyboard Navigation:</strong> Ensure all interactive elements are keyboard accessible.</li>
          <li><strong>Color Contrast:</strong> Follow WCAG contrast guidelines to improve readability.</li>
          <li><strong>Text Alternatives:</strong> Provide alternative text for images and multimedia content.</li>
        </ul>
        
        <h2>Using Drupal’s Accessibility Features</h2>
        <p>Drupal offers various built-in accessibility features that theme developers can utilize:</p>
        <ul>
          <li>Enable the <strong>Text Resize</strong> module for adjustable text sizes.</li>
          <li>Use semantic <code>&lt;nav&gt;</code>, <code>&lt;section&gt;</code>, and <code>&lt;article&gt;</code> tags.</li>
          <li>Ensure proper contrast ratios for text and background colors.</li>
          <li>Utilize the <strong>alt</strong> attribute for all images.</li>
          <li>Enable keyboard navigation and focus indicators.</li>
        </ul>
        
        <h2>Ensuring Compliance with WCAG</h2>
        <p>Make sure your Drupal theme adheres to WCAG 2.1 Level AA guidelines, including:</p>
        <ul>
          <li>Text alternatives for non-text content</li>
          <li>Keyboard accessibility</li>
          <li>Color contrast and text readability</li>
          <li>Providing descriptive link text</li>
          <li>Ensuring accessible forms with labels</li>
        </ul>
        
        <h2>Testing and Improving Accessibility</h2>
        <p>Regularly test your theme for accessibility issues using:</p>
        <ul>
          <li>Automated tools like WAVE and Axe</li>
          <li>Manual testing with keyboard navigation</li>
          <li>Screen reader testing with NVDA, JAWS, or VoiceOver</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>By following best practices, using Drupal’s built-in accessibility features, and regularly testing for compliance, developers can create inclusive Drupal themes that provide a better experience for all users.</p>
      `,
    },

    {
      id: 6,
      title: "Drupal Security: Protecting Your Site from Common Vulnerabilities",
      excerpt:
        "Essential security measures and best practices to keep your Drupal site safe from common attacks and vulnerabilities.",
      content: `
        <p>Security is a critical concern for any Drupal website. This article covers essential security measures and best practices to protect your Drupal site from common vulnerabilities and attacks.</p>
        
        <h2>Understanding Drupal Security Risks</h2>
        <p>Drupal sites face various security threats, including:</p>
        <ul>
          <li>SQL injection attacks</li>
          <li>Cross-site scripting (XSS)</li>
          <li>Cross-site request forgery (CSRF)</li>
          <li>Brute force login attempts</li>
          <li>Malware and backdoor insertion</li>
          <li>Outdated module vulnerabilities</li>
        </ul>
        
        <h2>Keeping Drupal Core and Modules Updated</h2>
        <p>The most important security practice is keeping your site updated:</p>
        <ul>
          <li>Subscribe to Drupal security announcements</li>
          <li>Implement a regular update schedule</li>
          <li>Use Composer for managing dependencies</li>
          <li>Test updates in a staging environment before applying to production</li>
          <li>Remove unused modules to reduce the attack surface</li>
        </ul>
        
        <h2>Server-Level Security</h2>
        <p>Secure your server infrastructure:</p>
        <ol>
          <li>Implement a web application firewall (WAF)</li>
          <li>Configure proper file permissions</li>
          <li>Use HTTPS with proper SSL/TLS configuration</li>
          <li>Implement IP blocking for suspicious activity</li>
          <li>Regular security patching of the server OS and software</li>
        </ol>
        
        <h2>User Authentication and Access Control</h2>
        <p>Strengthen your authentication system:</p>
        <ul>
          <li>Implement strong password policies</li>
          <li>Use two-factor authentication</li>
          <li>Apply the principle of least privilege for user roles</li>
          <li>Regularly audit user accounts and permissions</li>
          <li>Implement login attempt limitations</li>
        </ul>
        
        <h2>Content Security Measures</h2>
        <p>Protect your content and forms:</p>
        <ul>
          <li>Implement Content Security Policy (CSP) headers</li>
          <li>Use input filtering and sanitization</li>
          <li>Configure text formats and allowed HTML tags</li>
          <li>Implement CAPTCHA or similar solutions for forms</li>
          <li>Validate all user inputs server-side</li>
        </ul>
        
        <h2>Database Security</h2>
        <p>Secure your database:</p>
        <ul>
          <li>Use parameterized queries to prevent SQL injection</li>
          <li>Implement database access controls</li>
          <li>Regularly backup your database</li>
          <li>Encrypt sensitive data</li>
          <li>Use a separate database user with minimal privileges for Drupal</li>
        </ul>
        
        <h2>Security Monitoring and Incident Response</h2>
        <p>Implement proactive security measures:</p>
        <ul>
          <li>Set up security monitoring and logging</li>
          <li>Regularly scan for malware and file changes</li>
          <li>Develop an incident response plan</li>
          <li>Conduct regular security audits</li>
          <li>Use Drupal security modules like Security Review</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Securing your Drupal site is an ongoing process that requires vigilance and regular maintenance. By implementing these security measures and best practices, you can significantly reduce the risk of security breaches and protect your site from common vulnerabilities.</p>
      `,
      date: "December 5, 2022",
      readTime: "11 min read",
      author: "John Doe",
      authorBio:
        "Cybersecurity expert specializing in CMS security, vulnerability assessment, and secure coding practices for web applications.",
      image: secureImage,
      categories: ["Security", "Best Practices"],
    },
  ]

  // Find the post that matches the title from the query parameter
  const post = posts.find((p) => p.title === title) || posts[0]

  // Function to create markup from HTML content with proper typing
  const createMarkup = (htmlContent: string) => {
    return { __html: htmlContent }
  }

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
          <div className="relative h-[400px] w-full">
            <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
          </div>

          <div className="p-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.categories.map((category, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {category}
                </Badge>
              ))}
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>

            <div className="flex items-center text-sm text-muted-foreground mb-6">
              <div className="flex items-center mr-4">
                <User className="h-4 w-4 mr-1" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center mr-4">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-lg font-medium mb-6">{post.excerpt}</p>
              <div dangerouslySetInnerHTML={createMarkup(post.content)} />
            </div>

            <div className="mt-12 pt-8 border-t">
              <h3 className="text-lg font-bold mb-2">About the Author</h3>
              <p className="text-muted-foreground">{post.authorBio}</p>
            </div>
          </div>
        </article>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts
              .filter((p) => p.title !== post.title)
              .slice(0, 2)
              .map((relatedPost) => (
                <div key={relatedPost.id} className="bg-card rounded-lg border overflow-hidden shadow-sm group">
                  <Link href={`/blogdetail?title=${encodeURIComponent(relatedPost.title)}`} className="block">
                    <div className="relative h-48 w-full">
                      <Image
                        src={relatedPost.image || "/placeholder.svg"}
                        alt={relatedPost.title}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                  </Link>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {relatedPost.categories.map((category, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {category}
                        </Badge>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{relatedPost.title}</h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">{relatedPost.excerpt}</p>
                    <Button asChild variant="link" className="p-0">
                      <Link href={`/blogdetail?title=${encodeURIComponent(relatedPost.title)}`}>
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

