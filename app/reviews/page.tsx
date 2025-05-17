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
import { StarIcon } from "lucide-react"
import { reviews } from "@/lib/reviews"
import Link from "next/link"

export default function ReviewsPage() {
  const { toast } = useToast()
  const [rating, setRating] = useState(0)
  const [hoveredRating, setHoveredRating] = useState(0)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Review Submitted",
      description: "Thank you for your feedback! Your review has been submitted successfully.",
    })
    // Reset form
    setRating(0)
    e.currentTarget.reset()
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-gradient-to-r from-green-50 to-blue-50 text-center">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Customer Reviews for Flawless DIY in Warwickshire</h1>
            <p className="text-lg mb-8 text-gray-600">
              Read real testimonials from customers in Leamington Spa, Warwick, Kenilworth, Stratford-upon-Avon, and across Warwickshire who trust Flawless DIY for handyman, gardening, and home improvement services.
            </p>
          </div>
        </div>
      </section>

      {/* Reviews Section - Two Columns */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">What Warwickshire Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See what our customers from Leamington Spa, Warwick, Kenilworth, Stratford-upon-Avon, and across Warwickshire say about Flawless DIY’s handyman, gardening, and home improvement services.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Submission Form - Sticky on large screens */}
            <div className="lg:sticky lg:top-24">
              <div className="max-w-xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">Share Your Experience</h2>
                <Card className="rounded-lg">
                  <CardHeader>
                    <CardTitle>Write a Review</CardTitle>
                    <CardDescription>
                      We value your feedback. Please share your experience with our services.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Your Name</Label>
                        <Input id="name" placeholder="Enter your name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" placeholder="Enter your email" required />
                      </div>
                      <div className="space-y-2">
                        <Label>Rating</Label>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              key={star}
                              type="button"
                              className="text-2xl focus:outline-none"
                              onClick={() => setRating(star)}
                              onMouseEnter={() => setHoveredRating(star)}
                              onMouseLeave={() => setHoveredRating(0)}
                            >
                              <StarIcon
                                className={`w-8 h-8 ${
                                  star <= (hoveredRating || rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                                }`}
                              />
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="review">Your Review</Label>
                        <Textarea
                          id="review"
                          placeholder="Share your experience with our services..."
                          className="min-h-[150px]"
                          required
                        />
                      </div>
                      <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                        Submit Review
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
            {/* Reviews List - Scrollable */}
            <div className="max-h-[900px] overflow-y-auto pr-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {reviews.map((review) => (
                  <Card
                    key={review.id}
                    className="border border-gray-200 hover:shadow-md transition-shadow duration-300 rounded-lg"
                  >
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                      <div className="relative h-12 w-12 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center">
                        <span className="text-primary text-xl font-bold">{review.name[0]}</span>
                      </div>
                      <div>
                        <CardTitle className="text-lg">{review.name}</CardTitle>
                        <CardDescription>{review.location}</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex text-yellow-400 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill={i < review.rating ? "currentColor" : "none"}
                            stroke={i < review.rating ? "none" : "currentColor"}
                            className="w-5 h-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                            />
                          </svg>
                        ))}
                      </div>
                      <p className="text-gray-600">"{review.review}"</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/contact">Contact Our Warwickshire Team</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Review',
            itemReviewed: {
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
            reviewBody: 'Read customer reviews and testimonials for Flawless DIY’s handyman, gardening, and home improvement services in Leamington Spa, Warwick, Kenilworth, Stratford-upon-Avon, and across Warwickshire.',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5',
              bestRating: '5',
              worstRating: '1',
            },
            author: {
              '@type': 'Organization',
              name: 'Flawless DIY Customers',
            },
          }),
        }}
      />
    </div>
  )
}
