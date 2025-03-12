"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitSuccess(true)
    setFormData({ name: "", email: "", subject: "", message: "" })

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitSuccess(false), 5000)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
      <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
        Have a project in mind or want to discuss how I can help with your Drupal development needs? Get in touch!
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center">
              <Mail className="h-5 w-5 mr-2 text-primary" />
              Email
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base">hello@drupaldeveloper.com</CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center">
              <Phone className="h-5 w-5 mr-2 text-primary" />
              Phone
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base">+1 (555) 123-4567</CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center">
              <MapPin className="h-5 w-5 mr-2 text-primary" />
              Location
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base">San Francisco, CA</CardDescription>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Project Inquiry"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>

            {submitSuccess && (
              <div className="bg-green-100 dark:bg-green-900 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-100 p-4 rounded-md">
                Thank you for your message! I'll get back to you as soon as possible.
              </div>
            )}
          </form>
        </div>

        <div className="bg-muted rounded-lg overflow-hidden h-[400px] lg:h-auto">
          {/* This would be a map in a real implementation */}
          <div className="w-full h-full flex items-center justify-center bg-primary/10">
            <p className="text-center text-muted-foreground">Map would be displayed here</p>
          </div>
        </div>
      </div>
    </div>
  )
}

