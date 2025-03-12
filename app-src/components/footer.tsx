import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col md:flex-row items-center justify-between py-10 md:py-8">
        <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
          <Link href="/" className="font-bold text-xl mb-2">
            <span className="text-primary">Drupal</span>Dev
          </Link>
          <p className="text-sm text-muted-foreground text-center md:text-left">
            Building exceptional Drupal experiences since 2015
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end">
          <div className="flex space-x-4 mb-4">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} DrupalDev. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

