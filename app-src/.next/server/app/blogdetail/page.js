(()=>{var e={};e.id=798,e.ids=[798],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},7363:(e,i,t)=>{"use strict";t.r(i),t.d(i,{GlobalError:()=>n.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>d,routeModule:()=>m,tree:()=>c}),t(3716),t(9427),t(996);var r=t(170),a=t(5002),l=t(3876),n=t.n(l),s=t(6299),o={};for(let e in s)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>s[e]);t.d(i,o);let c=["",{children:["blogdetail",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,3716)),"/home/kite/projects/ganesh-dev/app-src/app/blogdetail/page.tsx"]}]},{loading:[()=>Promise.resolve().then(t.bind(t,5074)),"/home/kite/projects/ganesh-dev/app-src/app/blogdetail/loading.tsx"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,9427)),"/home/kite/projects/ganesh-dev/app-src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,996,23)),"next/dist/client/components/not-found-error"]}],d=["/home/kite/projects/ganesh-dev/app-src/app/blogdetail/page.tsx"],u="/blogdetail/page",p={require:t,loadChunk:()=>Promise.resolve()},m=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/blogdetail/page",pathname:"/blogdetail",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},3100:(e,i,t)=>{Promise.resolve().then(t.bind(t,6754))},5303:()=>{},6754:(e,i,t)=>{"use strict";t.r(i),t.d(i,{default:()=>D});var r=t(7247),a=t(8964),l=t(4178),n=t(4597),s=t(9906),o=t(8053),c=t(1365),d=t(6323);let u=(0,d.Z)("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]),p=(0,d.Z)("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);var m=t(820),h=t(7712),g=t(7358),f=t(4184),b=t(3892),y=t(3077),A=t(4715),v=t(8714),x=t(6325);function D(){let e=(0,l.useSearchParams)(),i=e.get("title"),t=e.get("id"),[d,D]=(0,a.useState)(null),[w,C]=(0,a.useState)(null),[j,S]=(0,a.useState)(!!t),N=[{id:1,title:"Migrating from Drupal 7 to Drupal 9: A Comprehensive Guide",excerpt:"Learn the best practices and strategies for migrating your legacy Drupal 7 site to Drupal 9 with minimal disruption.",content:`
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
      `,date:"May 15, 2023",readTime:"8 min read",author:"John Doe",authorBio:"Senior Drupal Developer with over 10 years of experience in CMS migrations and enterprise Drupal implementations.",image:f.Z,categories:["Migration","Drupal 9"]},{id:2,title:"Building Headless Drupal Solutions with Next.js",excerpt:"Explore the benefits and implementation details of using Drupal as a headless CMS with a Next.js frontend.",content:`
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
      `,date:"April 3, 2023",readTime:"10 min read",author:"John Doe",authorBio:"Full-stack developer specializing in decoupled CMS architectures and modern JavaScript frameworks.",image:b.Z,categories:["Headless","Next.js","API"]},{id:3,title:"Optimizing Drupal Performance for Enterprise Sites",excerpt:"Discover advanced techniques for improving the performance of large-scale Drupal sites under heavy traffic loads.",content:`
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
      `,date:"March 12, 2023",readTime:"12 min read",author:"John Doe",authorBio:"Performance optimization specialist with expertise in scaling Drupal for enterprise applications and high-traffic websites.",image:y.Z,categories:["Performance","Enterprise"]},{id:4,title:"Custom Module Development Best Practices in Drupal 10",excerpt:"Discover essential best practices for building efficient, scalable, and maintainable custom modules in Drupal 10.",date:"March 10, 2023",readTime:"14 min read",author:"John Doe",image:x.Z,categories:["Development","Modules","Drupal 10"],content:`
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
      `},{id:5,title:"Implementing Accessibility in Drupal Themes",excerpt:"Learn how to create accessible Drupal themes that ensure an inclusive experience for all users and comply with WCAG 2.1 standards.",date:"January 15, 2023",readTime:"7 min read",author:"John Doe",image:v.Z,categories:["Accessibility","Theming"],content:`
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
      `},{id:6,title:"Drupal Security: Protecting Your Site from Common Vulnerabilities",excerpt:"Essential security measures and best practices to keep your Drupal site safe from common attacks and vulnerabilities.",content:`
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
      `,date:"December 5, 2022",readTime:"11 min read",author:"John Doe",authorBio:"Cybersecurity expert specializing in CMS security, vulnerability assessment, and secure coding practices for web applications.",image:A.Z,categories:["Security","Best Practices"]}];if(j)return r.jsx("p",{className:"text-center text-gray-500",children:"Loading article..."});if(d){let e;return r.jsx("div",{className:"container mx-auto px-4 py-12",children:(0,r.jsxs)("div",{className:"max-w-4xl mx-auto",children:[r.jsx(o.z,{variant:"ghost",asChild:!0,className:"mb-8 hover:bg-muted",children:(0,r.jsxs)(s.default,{href:"/blog",children:[r.jsx(u,{className:"mr-2 h-4 w-4"}),"Back to Blog"]})}),(0,r.jsxs)("article",{className:"bg-card rounded-lg border overflow-hidden shadow-md",children:[w&&r.jsx("div",{className:"relative h-[400px] w-full",children:r.jsx(n.default,{src:w||"/placeholder.svg",alt:d.attributes?.title||"Article Image",fill:!0,className:"object-cover",priority:!0})}),(0,r.jsxs)("div",{className:"p-8",children:[r.jsx("h1",{className:"text-3xl md:text-4xl font-bold mb-4",children:d.attributes?.title||"No Title Available"}),(0,r.jsxs)("div",{className:"flex items-center text-sm text-muted-foreground mb-6",children:[(0,r.jsxs)("div",{className:"flex items-center mr-4",children:[r.jsx(p,{className:"h-4 w-4 mr-1"}),r.jsx("span",{children:d.attributes?.field_name})]}),(0,r.jsxs)("div",{className:"flex items-center mr-4",children:[r.jsx(m.Z,{className:"h-4 w-4 mr-1"}),r.jsx("span",{children:d.attributes?.field_date?(e=>{try{return new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}catch(i){return console.error("Error formatting date:",i),e}})(d.attributes.field_date):"No date available"})]}),(0,r.jsxs)("div",{className:"flex items-center",children:[r.jsx(h.Z,{className:"h-4 w-4 mr-1"}),r.jsx("span",{children:d.attributes?.field_read&&(e=d.attributes.field_read)?`${e} min read`:"No read time available"})]})]}),r.jsx("p",{className:"text-lg font-medium mb-6",children:d.attributes?.field_short_description||"No Short Description Available"}),r.jsx("div",{className:"prose prose-lg dark:prose-invert",children:r.jsx("div",{dangerouslySetInnerHTML:{__html:d.attributes?.body?.value||"No Content Available"}})})]})]})]})})}let k=N.find(e=>e.title===i)||N[0];return r.jsx("div",{className:"container mx-auto px-4 py-12",children:(0,r.jsxs)("div",{className:"max-w-4xl mx-auto",children:[r.jsx(o.z,{variant:"ghost",asChild:!0,className:"mb-8 hover:bg-muted",children:(0,r.jsxs)(s.default,{href:"/blog",children:[r.jsx(u,{className:"mr-2 h-4 w-4"}),"Back to Blog"]})}),(0,r.jsxs)("article",{className:"bg-card rounded-lg border overflow-hidden shadow-md",children:[r.jsx("div",{className:"relative h-[400px] w-full",children:r.jsx(n.default,{src:k.image||"/placeholder.svg",alt:k.title,fill:!0,className:"object-cover",priority:!0})}),(0,r.jsxs)("div",{className:"p-8",children:[r.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:k.categories.map((e,i)=>r.jsx(c.C,{variant:"secondary",className:"text-xs",children:e},i))}),r.jsx("h1",{className:"text-3xl md:text-4xl font-bold mb-4",children:k.title}),(0,r.jsxs)("div",{className:"flex items-center text-sm text-muted-foreground mb-6",children:[(0,r.jsxs)("div",{className:"flex items-center mr-4",children:[r.jsx(p,{className:"h-4 w-4 mr-1"}),r.jsx("span",{children:k.author})]}),(0,r.jsxs)("div",{className:"flex items-center mr-4",children:[r.jsx(m.Z,{className:"h-4 w-4 mr-1"}),r.jsx("span",{children:k.date})]}),(0,r.jsxs)("div",{className:"flex items-center",children:[r.jsx(h.Z,{className:"h-4 w-4 mr-1"}),r.jsx("span",{children:k.readTime})]})]}),(0,r.jsxs)("div",{className:"prose prose-slate dark:prose-invert max-w-none",children:[r.jsx("p",{className:"text-lg font-medium mb-6",children:k.excerpt}),r.jsx("div",{dangerouslySetInnerHTML:{__html:k.content}})]}),(0,r.jsxs)("div",{className:"mt-12 pt-8 border-t",children:[r.jsx("h3",{className:"text-lg font-bold mb-2",children:"About the Author"}),r.jsx("p",{className:"text-muted-foreground",children:k.authorBio})]})]})]}),(0,r.jsxs)("div",{className:"mt-12",children:[r.jsx("h2",{className:"text-2xl font-bold mb-6",children:"Related Articles"}),r.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:N.filter(e=>e.title!==k.title).slice(0,2).map(e=>(0,r.jsxs)("div",{className:"bg-card rounded-lg border overflow-hidden shadow-sm group",children:[r.jsx(s.default,{href:`/blogdetail?title=${encodeURIComponent(e.title)}`,className:"block",children:r.jsx("div",{className:"relative h-48 w-full",children:r.jsx(n.default,{src:e.image||"/placeholder.svg",alt:e.title,fill:!0,className:"object-cover transition-transform group-hover:scale-105"})})}),(0,r.jsxs)("div",{className:"p-6",children:[r.jsx("div",{className:"flex flex-wrap gap-2 mb-3",children:e.categories.map((e,i)=>r.jsx(c.C,{variant:"secondary",className:"text-xs",children:e},i))}),r.jsx("h3",{className:"text-xl font-bold mb-2",children:e.title}),r.jsx("p",{className:"text-muted-foreground mb-4 line-clamp-2",children:e.excerpt}),r.jsx(o.z,{asChild:!0,variant:"link",className:"p-0",children:(0,r.jsxs)(s.default,{href:`/blogdetail?title=${encodeURIComponent(e.title)}`,children:["Read More ",r.jsx(g.Z,{className:"ml-2 h-4 w-4"})]})})]})]},e.id))})]})]})})}},1365:(e,i,t)=>{"use strict";t.d(i,{C:()=>s});var r=t(7247);t(8964);var a=t(7972),l=t(5008);let n=(0,a.j)("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function s({className:e,variant:i,...t}){return r.jsx("div",{className:(0,l.cn)(n({variant:i}),e),...t})}},7358:(e,i,t)=>{"use strict";t.d(i,{Z:()=>r});let r=(0,t(6323).Z)("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]])},820:(e,i,t)=>{"use strict";t.d(i,{Z:()=>r});let r=(0,t(6323).Z)("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]])},7712:(e,i,t)=>{"use strict";t.d(i,{Z:()=>r});let r=(0,t(6323).Z)("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]])},4597:(e,i,t)=>{"use strict";t.d(i,{default:()=>a.a});var r=t(1561),a=t.n(r)},1561:(e,i,t)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),function(e,i){for(var t in i)Object.defineProperty(e,t,{enumerable:!0,get:i[t]})}(i,{default:function(){return o},getImageProps:function(){return s}});let r=t(352),a=t(1807),l=t(5889),n=r._(t(9857));function s(e){let{props:i}=(0,a.getImgProps)(e,{defaultLoader:n.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,t]of Object.entries(i))void 0===t&&delete i[e];return{props:i}}let o=l.Image},5074:(e,i,t)=>{"use strict";function r(){return null}t.r(i),t.d(i,{default:()=>r})},3716:(e,i,t)=>{"use strict";t.r(i),t.d(i,{default:()=>r});let r=(0,t(5347).createProxy)(String.raw`/home/kite/projects/ganesh-dev/app-src/app/blogdetail/page.tsx#default`)},6325:(e,i,t)=>{"use strict";t.d(i,{Z:()=>r});let r={src:"/_next/static/media/custom.c77c6f28.png",height:509,width:1425,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAIAAAAhqtkfAAAAVElEQVR42mNQsQ/RcAm3dPfIzovNywxprQxa2Bsyt82NQdY6zDgsm8fMo6evc8miyZM7Yqa2R06o92UQ1XDQ8E7W9Inu7OtaOK+3sixs6eToS1sSAOvkHR2MGBWDAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:3}},3077:(e,i,t)=>{"use strict";t.d(i,{Z:()=>r});let r={src:"/_next/static/media/drupal-performance.4059ddd0.png",height:168,width:300,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAbklEQVR42mNQzp1lnT+TwbWG2bdewL/eJLw2KbcjI7OJIWbDxQXHr1llT05uXRzbsCA+t2N578ztXZMY3KbvaVh9KKh8pltWt1dme2ZJ15ruyfu6+xkYgtoZPJsZ3GoYXCsZPMutI2sS0xqTk2oBR2cpwfwH1v8AAAAASUVORK5CYII=",blurWidth:8,blurHeight:4}},4184:(e,i,t)=>{"use strict";t.d(i,{Z:()=>r});let r={src:"/_next/static/media/drupal7to10.9e1d546b.png",height:1225,width:2048,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAiElEQVR42gF9AIL/AC8wRzUwSTA1XiosZTM3d0VLilJQlFVRnAA2PF00TXZBQWrEyNPFythOWJFIZ6ZQY6UAPWCQMZfTYGCH2+by3Of0YnSiUqDXTIO5AExCgUhSkVJPkJCTspCZuEpxpz9/sECItABYQI9aQpRdVqFLVqJFZahNfbFBibU7mbuN7zcaJrguGwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:5}},3892:(e,i,t)=>{"use strict";t.d(i,{Z:()=>r});let r={src:"/_next/static/media/headless.30eb8e35.png",height:710,width:1280,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAb0lEQVR42gFkAJv/AG7N8mnN9FjB6k+440i552O96FK25kCw5ABvxepzpsZVqMxIuuh7xOqSy+yXy+tTs+MAaMXqPYakhqCug8XoyOL05/H45vH4lcjqAGrI71rB7Gu95lG45oTE64rF6X+/51Ow48j0QvADxZv3AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:4}},8714:(e,i,t)=>{"use strict";t.d(i,{Z:()=>r});let r={src:"/_next/static/media/implement-accessi.202610a4.png",height:612,width:1100,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAhklEQVR42gUAXQ7BMPhrrWutXze8EEeQuKQHV3EH1/DIiBKphkr2h6xVIevVxlBa54VkISYT0uYM7MPEVGA6L7ITPWiDSoWh4D1qfZbmWsrFVCL+utTqoyKX3fa9L+9ihBSqbAk4IFD2AP7jQI5nJrGvr3atLzhjwXVPUtMInvHYNBUTXN3+UfE6yiBxVEYAAAAASUVORK5CYII=",blurWidth:8,blurHeight:4}},4715:(e,i,t)=>{"use strict";t.d(i,{Z:()=>r});let r={src:"/_next/static/media/secure.c6dd16dd.png",height:168,width:300,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAZ0lEQVR42mMAAgEeRgYwCNUJDTBOYhSvkVIoYdAz8HT1SAoIiMxIzZja1N2TVZkZ3W7mOYvB2jYtJLwpMiovOT45LT3L1dU9LqbG2auDwdI6y8auyMgkz8yiUFw8lJ1RVVUj1MenGwDCYhrqL4Uq1gAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:4}}};var i=require("../../webpack-runtime.js");i.C(e);var t=e=>i(i.s=e),r=i.X(0,[610,889,750],()=>t(7363));module.exports=r})();