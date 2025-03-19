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
      title: "Technical Consultant",
      company: "Hash Kite",
      period: "Oct 2024 - Present · 6 mos",
      description: "India",
    },
    {
      title: "Consultant",
      company: "Famaash · Full-time",
      period: "Sep 2022 - Present · 2 yrs 7 mos",
      description: "United States · Remote",
    },
    {
      title: "Member of BNI",
      company: "BNI Global",
      period: "Nov 2024 - Present · 5 mos",
      description: "",
    },
    {
      title: "Senior Drupal developer",
      company: "McKinsey & Company · Freelance",
      period: "Sep 2022 - Jan 2024 · 1 yr 5 mos",
      description: "United States · Remote",
    },
    {
      title: "Drupal consultant",
      company: "Digital Polygon · Freelance",
      period: "Jul 2021 - Sep 2022 · 1 yr 3 mos",
      description: "United States · Remote",
    },
    {
      title: "Senior Developer",
      company: "Acquia · Full-time",
      period: "Jul 2020 - Jul 2021 · 1 yr 1 mo",
      description: "Pune, Maharashtra, India",
    },
    {
      title: "Frontend Engineer",
      company: "Acquia",
      period: "Oct 2018 - Jul 2020 · 1 yr 10 mos",
      description: "Pune Area, India",
    },
    {
      title: "Software Developer",
      company: "Particle41",
      period: "Aug 2017 - Oct 2018 · 1 yr 3 mos",
      description: "Pune",
    },
    {
      title: "Software Engineer",
      company: "WhiteHedge Technologies",
      period: "Aug 2016 - Aug 2017 · 1 yr 1 mo",
      description: "Pune Area, India",
    },
    {
      title: "Software Engineer",
      company: "BeeClicks",
      period: "Oct 2015 - Aug 2016 · 11 mos",
      description: "Pune Area, India",
    },
    {
      title: "Project Engineer",
      company: "SFPL",
      period: "Jul 2013 - Aug 2015 · 2 yrs 2 mos",
      description: "Pune Area, India",
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
                src="/ganesh-devkate.png?height=400&width=400"
                alt="Developer Portrait"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium">Location</h3>
                <p className="text-muted-foreground">Pune Maharashtra, India</p>
              </div>
              <div>
                <h3 className="text-lg font-medium">Email</h3>
                <p className="text-muted-foreground">ganeshdevkate@gmail.com</p>
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
                Passionate about crafting powerful digital experiences, I have spent over 11 years mastering Drupal and
                web development. From building high-performance applications to leading technical teams, my journey has
                been driven by a commitment to innovation, scalability, and user-centric design.
              </p>
              <p>
                As the Technical Director at Hashkite Pvt Ltd, I specialize in leveraging Drupal's capabilities to
                deliver cutting-edge solutions. My expertise spans PHP, JavaScript, SQL, and modern front-end frameworks
                like React and Angular. I thrive on architecting scalable platforms, optimizing performance, and
                ensuring seamless user experiences.
              </p>
              <p>
                Previously, as a Senior Drupal Developer, I played a pivotal role in developing dynamic interfaces and
                integrating cloud-based solutions. My deep understanding of Acquia Cloud and Site Studio has been
                instrumental in delivering enterprise-level applications that are both robust and intuitive.
              </p>
              <p>
                Beyond development, I am passionate about mentoring teams, contributing to open-source projects, and
                staying ahead of industry trends. Whether it's optimizing workflows, enhancing digital accessibility, or
                speaking at tech conferences, I constantly seek opportunities to push the boundaries of web development.
              </p>
              <p>
                Every project I undertake is more than just code—it's about building seamless digital experiences that
                make an impact. Let's connect and create something extraordinary together.
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

