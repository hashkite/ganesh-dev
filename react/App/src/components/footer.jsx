import { Link } from "react-router-dom"
import { Code, Github, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <Code className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl"><span className="text-primary">Dev</span> Ganesh</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Professional Drupal developer specializing in creating modern, high-performance websites and applications.
            </p>
          </div>
          {/* <div className="flex flex-col space-y-4">
            <h3 className="font-medium">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
                Home
              </Link>
              <Link to="/projects" className="text-sm text-muted-foreground hover:text-foreground">
                Projects
              </Link>
              <Link to="/blog" className="text-sm text-muted-foreground hover:text-foreground">
                Blog
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                Contact
              </Link>
            </div>
          </div> */}
          <div className="flex flex-col space-y-6">
            <h3 className="font-medium">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 text-muted-foreground hover:text-foreground" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-5 w-5 text-muted-foreground hover:text-foreground" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} DrupalDev. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

