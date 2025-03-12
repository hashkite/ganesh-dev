import Image from "next/image"
import { Badge } from "@/components/ui/badge"

export default function AboutPage() {
  const skills = [
    { category: "CMS", items: ["Drupal 7/8/9/10", "WordPress", "Contentful"] },
    { category: "Languages", items: ["PHP", "JavaScript/TypeScript", "HTML", "CSS/SCSS"] },
    { category: "Frameworks", items: ["React", "Next.js", "Vue.js", "Symfony"] },
    { category: "Tools", items: ["Git", "Docker", "Composer", "npm/yarn"] },
    { category: "Databases", items: ["MySQL", "PostgreSQL", "MongoDB"] },
    { category: "DevOps", items: ["CI/CD", "AWS", "Netlify", "Vercel"] },
  ]

  const experiences = [
    {
      title: "Senior Drupal Developer",
      company: "Web Solutions Inc.",
      period: "2020 - Present",
      description:
        "Lead developer for enterprise Drupal projects, mentoring junior developers, and implementing best practices.",
    },
    {
      title: "Full Stack Developer",
      company: "Digital Agency",
      period: "2017 - 2020",
      description:
        "Developed and maintained multiple Drupal sites and integrated with various third-party services and APIs.",
    },
    {
      title: "Web Developer",
      company: "Tech Startup",
      period: "2015 - 2017",
      description: "Built responsive websites and implemented custom Drupal modules for client projects.",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        <div className="md:col-span-1">
          <div className="sticky top-24">
            <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-6">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Developer Portrait"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium">Location</h3>
                <p className="text-muted-foreground">San Francisco, CA</p>
              </div>
              <div>
                <h3 className="text-lg font-medium">Email</h3>
                <p className="text-muted-foreground">hello@drupaldeveloper.com</p>
              </div>
              <div>
                <h3 className="text-lg font-medium">Available for</h3>
                <p className="text-muted-foreground">Freelance, Contract, Full-time opportunities</p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-2">
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">My Journey</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                I'm a passionate Drupal developer with over 8 years of experience building complex web applications and
                content management systems. My journey in web development began with a fascination for creating digital
                experiences that solve real-world problems.
              </p>
              <p>
                After completing my degree in Computer Science, I discovered Drupal and was immediately drawn to its
                flexibility and powerful architecture. Since then, I've dedicated my career to mastering Drupal
                development while staying current with modern front-end technologies.
              </p>
              <p>
                I specialize in creating custom Drupal solutions that combine robust back-end architecture with elegant,
                user-friendly interfaces. My approach focuses on performance, scalability, and maintainability—ensuring
                that the websites I build not only look great but also function flawlessly.
              </p>
              <p>
                When I'm not coding, you can find me contributing to open-source projects, speaking at web development
                conferences, or exploring new technologies that can enhance my development workflow.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Experience</h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="border-l-4 border-primary pl-4 pb-2">
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-primary font-medium">{exp.company}</span>
                    <span className="text-sm text-muted-foreground">{exp.period}</span>
                  </div>
                  <p className="text-muted-foreground">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Skills & Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skillGroup, index) => (
                <div key={index} className="bg-card p-4 rounded-lg border">
                  <h3 className="text-lg font-bold mb-3">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, idx) => (
                      <Badge key={idx} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

