"use client"

import { useState } from "react"
import { Mail, MapPin, Phone } from "lucide-react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Textarea } from "../components/ui/textarea"
import { toast } from "../components/ui/use-toast"
import { Toaster } from "../components/toaster"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Reset form and show success message
    setFormData({ name: "", email: "", subject: "", message: "" })
    setIsSubmitting(false)
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    })
  }

  return (
    <div className="container py-12 md:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">Get in Touch</h1>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Have a project in mind or want to discuss a potential collaboration? I'd love to hear from you.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-2 lg:gap-12">
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Contact Information</h2>
            <p className="text-muted-foreground">
              Feel free to reach out through any of the following channels or use the contact form.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <Mail className="mt-0.5 h-5 w-5 text-primary" />
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-muted-foreground">hello@drupaldev.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="mt-0.5 h-5 w-5 text-primary" />
              <div>
                <h3 className="font-medium">Phone</h3>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <MapPin className="mt-0.5 h-5 w-5 text-primary" />
              <div>
                <h3 className="font-medium">Location</h3>
                <p className="text-muted-foreground">San Francisco, CA</p>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-bold">Working Hours</h3>
            <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 5:00 PM PST</p>
            <p className="text-muted-foreground">Weekend: Available for urgent matters</p>
          </div>
        </div>

        <div className="rounded-lg border p-6 shadow-sm">
          <h2 className="text-2xl font-bold">Send a Message</h2>
          <form onSubmit={handleSubmit} className="mt-6 space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email address"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                rows={5}
                required
              />
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
      <Toaster />
    </div>
  )
}

