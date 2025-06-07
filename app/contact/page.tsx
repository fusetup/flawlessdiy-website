"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const form = e.currentTarget
    const formData = new FormData(form)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    }
    console.log("Contact form data:", data)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        toast({
          title: "Message Sent",
          description: "Thank you for your message! We'll get back to you as soon as possible.",
        })
        form.reset()
      } else {
        toast({
          title: "Error",
          description: "There was a problem sending your message. Please try again later.",
          variant: "destructive",
        })
      }
    } catch {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-gradient-to-r from-green-50 to-blue-50 text-center">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Contact Flawless DIY in Warwickshire</h1>
            <p className="text-lg mb-8 text-gray-600">
              Get in touch with our trusted handyman, gardening, and home improvement team in Leamington Spa, Warwick, Kenilworth, Stratford-upon-Avon, and across Warwickshire. Request a free quote or ask us a question today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Get In Touch with Our Warwickshire Team</h2>
              <p className="text-gray-600 mb-8">
                We’d love to hear from you. Whether you have a question about our handyman, gardening, or home improvement services, want to schedule a consultation, or need a quote in Warwickshire, our team is here to help.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Address</h3>
                    <p className="text-gray-600">
                      Flawless DIY<br />
                      Leamington Spa, Warwick, Kenilworth, Stratford-upon-Avon<br />
                      Warwickshire
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Phone</h3>
                    <p className="text-gray-600">
                      <a href="tel:+447513912686" className="hover:text-primary">
                        +44 7513 912686
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:victor@flawlessdiy.co.uk" className="hover:text-primary">
                        victor@flawlessdiy.co.uk
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="rounded-lg">
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" name="name" placeholder="Your name" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" type="email" placeholder="Your email address" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" name="phone" type="tel" placeholder="Your phone number" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" name="subject" placeholder="Subject of your message" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" name="message" placeholder="How can we help you?" className="min-h-[150px]" required />
                    </div>

                    <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90" disabled={loading}>
                      {loading ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      {/*
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Find Us in Warwickshire</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Visit or contact Flawless DIY in Leamington Spa, Warwick, Kenilworth, Stratford-upon-Avon, and throughout Warwickshire.</p>
          </div>

          <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2441.056085319793!2d-1.5457400236677088!3d52.27868375406836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487734bd64ed725b%3A0x364bf3385d43e2dc!2s46%20Monarch%20Gdns%2C%20Leamington%20Spa%20CV31%203LX!5e0!3m2!1sen!2suk!4v1745789693258!5m2!1sen!2suk"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full rounded-lg"
            ></iframe>
          </div>
        </div>
      </section>
      */}

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: 'Contact Flawless DIY',
            url: 'https://flawlessdiy.co.uk/contact',
            description: 'Contact Flawless DIY for handyman, gardening, and home improvement services in Leamington Spa, Warwick, Kenilworth, Stratford-upon-Avon, and across Warwickshire.',
            mainEntity: {
              '@type': 'LocalBusiness',
              name: 'Flawless DIY',
              image: 'https://flawlessdiy.co.uk/flawlessdiy_logo.png',
              '@id': 'https://flawlessdiy.co.uk',
              url: 'https://flawlessdiy.co.uk',
              telephone: '+44 7513 912686',
              email: 'victor@flawlessdiy.co.uk',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Leamington Spa',
                addressRegion: 'Warwickshire',
                addressCountry: 'GB',
              },
              areaServed: 'Warwickshire',
              sameAs: [
                'https://www.facebook.com/flawlessdiy',
                'https://www.instagram.com/flawlessdiy',
              ],
            },
          }),
        }}
      />
    </div>
  )
}
