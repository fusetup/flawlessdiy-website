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

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      date: "March 15, 2023",
      review:
        "Monarch Gardens transformed our backyard into a beautiful oasis. The team was professional, punctual, and the results exceeded our expectations. We now have a garden that we can enjoy year-round and that has become the envy of our neighbors.",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100&text=SJ",
    },
    {
      id: 2,
      name: "David Thompson",
      date: "April 3, 2023",
      review:
        "We've been using Flawless DIY for our regular garden maintenance for over a year now, and we couldn't be happier with their service. The team is always thorough, and they genuinely care about the health and appearance of our garden.",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100&text=DT",
    },
    {
      id: 3,
      name: "Emma Wilson",
      date: "May 22, 2023",
      review:
        "The landscape design service was excellent. They listened to our ideas and created a garden that perfectly suits our lifestyle. The attention to detail and knowledge of plants was impressive.",
      rating: 4,
      image: "/placeholder.svg?height=100&width=100&text=EW",
    },
    {
      id: 4,
      name: "Michael Brown",
      date: "June 10, 2023",
      review:
        "I hired Flawless DIY to install an irrigation system in my garden, and I'm very pleased with the results. The system is efficient and has made maintaining my garden so much easier. The team was knowledgeable and completed the work on schedule.",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100&text=MB",
    },
    {
      id: 5,
      name: "Jennifer Clark",
      date: "July 5, 2023",
      review:
        "Flawless DIY did a complete renovation of our front garden, and the transformation is remarkable. They took a neglected space and turned it into a beautiful, low-maintenance garden that enhances our home's curb appeal.",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100&text=JC",
    },
    {
      id: 6,
      name: "Robert Davis",
      date: "August 18, 2023",
      review:
        "The seasonal clean-up service is fantastic. The team is thorough and leaves our garden looking immaculate. It's great to have professionals taking care of the heavy lifting at the change of seasons.",
      rating: 4,
      image: "/placeholder.svg?height=100&width=100&text=RD",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Client Reviews</h1>
            <p className="text-lg mb-8 text-gray-600">
              Read what our clients have to say about our gardening and landscaping services.
            </p>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <Card
                key={review.id}
                className="border border-gray-200 hover:shadow-md transition-shadow duration-300 rounded-lg"
              >
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden">
                    <Image src={review.image || "/placeholder.svg"} alt={review.name} fill className="object-cover" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{review.name}</CardTitle>
                    <CardDescription>{review.date}</CardDescription>
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
      </section>

      {/* Write a Review Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
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

                  <Button type="submit" className="w-full bg-green-500 hover:bg-green-600">
                    Submit Review
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
