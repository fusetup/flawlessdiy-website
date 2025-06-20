"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { TreeDeciduous, Hammer, Utensils, Layers, Paintbrush, ShowerHead, Zap, Sparkles } from "lucide-react"
import { services } from "@/lib/services"
import { reviews } from "@/lib/reviews"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { useRef, useEffect, useState } from "react"
import { supabase } from "@/lib/supabaseclient"

const iconMap = {
  TreeDeciduous,
  Hammer,
  Utensils,
  Layers,
  Paintbrush,
  ShowerHead,
  Zap,
  Sparkles,
}

function MobileAutoGalleryCarouselHome({ images }: { images: any[] }) {
  const [api, setApi] = useState<any>(null)
  useEffect(() => {
    if (!api) return
    const interval = setInterval(() => {
      api.scrollNext()
    }, 2500)
    return () => clearInterval(interval)
  }, [api])
  return (
    <Carousel setApi={setApi} opts={{ loop: true }}>
      <CarouselContent>
        {images.map((img) => (
          <CarouselItem key={img.id}>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src={img.url}
                alt={img.title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}

function MobileAutoReviewCarousel({ reviews }: { reviews: any[] }) {
  const [api, setApi] = useState<any>(null)
  useEffect(() => {
    if (!api) return
    const interval = setInterval(() => {
      api.scrollNext()
    }, 3000)
    return () => clearInterval(interval)
  }, [api])
  return (
    <Carousel setApi={setApi} opts={{ loop: true }}>
      <CarouselContent>
        {reviews.map((review) => (
          <CarouselItem key={review.id}>
            <Card className="border border-gray-200 hover:shadow-md transition-shadow duration-300 rounded-lg">
              <CardHeader>
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
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-.181h4.914a1 1 0 00.951-.69l1.519-4.674z"
                      />
                    </svg>
                  ))}
                </div>
                <CardTitle>{review.name}</CardTitle>
                <CardDescription>{review.location}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">"{review.review}"</p>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}

export default function Home() {
  const [galleryImages, setGalleryImages] = useState<any[]>([])
  useEffect(() => {
    (async () => {
      const { data, error } = await supabase
        .from("gallery_images")
        .select("id, url, title, category_id")
        .order("id", { ascending: false })
      if (!error && data) setGalleryImages(data)
    })()
  }, [])

  return (
    <div className="flex flex-col">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Flawless DIY',
            url: 'https://flawlessdiy.co.uk',
            potentialAction: {
              '@type': 'SearchAction',
              target: 'https://flawlessdiy.co.uk/?s={search_term_string}',
              'query-input': 'required name=search_term_string',
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
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
            description: 'Professional handyman, gardening, and home improvement services in Leamington Spa and Warwickshire.',
            sameAs: [
              'https://www.facebook.com/flawlessdiy',
              'https://www.instagram.com/flawlessdiy',
            ],
          }),
        }}
      />
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Mobile: Image on top, Desktop: Image on right */}
            <div className="block md:hidden mb-8">
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg shadow-xl flex items-center justify-center bg-transparent">
                <Image
                  src="/flawlessdiy_logo.png"
                  alt="Flawless DIY Logo"
                  fill
                  className="object-contain object-center w-full h-full p-8"
                  priority
                />
              </div>
            </div>
            <div className="max-w-2xl order-2 md:order-1 flex flex-col items-center text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-800 leading-tight md:leading-snug lg:leading-snug">
                Flawless DIY: Handyman & Gardening Services in Warwickshire
              </h1>
              <h2 className="text-primary font-medium mb-2 tracking-wider">
                PROFESSIONAL DIY SERVICES
              </h2>
              <p className="text-lg mb-8 text-gray-600">
                Delivering high-quality handyman, gardening, and home improvement services in Leamington Spa and across Warwickshire. We ensure every project is completed to perfection, transforming your needs with expert craftsmanship.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-white hover:bg-primary/90"
                >
                  <Link href="/services">Explore All Services</Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:block relative order-1 md:order-2">
              <div className="relative h-[500px] w-full overflow-hidden rounded-lg shadow-xl flex items-center justify-center bg-transparent">
                <Image
                  src="/flawlessdiy_logo.png"
                  alt="Flawless DIY Logo"
                  fill
                  className="object-contain object-center w-full h-full p-16"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-green-500 rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500 rounded-full opacity-20 blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 relative h-[400px] w-full rounded-lg overflow-hidden order-1 md:order-none">
              <Image
                src="/home garden.webp"
                alt="Flawless DIY gardening team in Leamington Spa, Warwickshire"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="md:w-1/2 order-2 md:order-none">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">About Flawless DIY</h2>
              <p className="text-gray-600 mb-4">
                Flawless DIY is a family-run business dedicated to delivering outstanding handyman, gardening, and home improvement results for customers across Warwickshire. We pride ourselves on our commitment to quality and craftsmanship, treating each project as if it were our own.
              </p>
              <p className="text-gray-600 mb-4">
                With a keen eye for detail, we work to the highest standards and won’t stop until the job is completed to perfection. Explore the wide range of services we offer, and get in touch with us today to see how we can bring your vision to life!
              </p>
              <Link href="/reviews" className="text-primary underline font-medium">Read customer reviews</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Services in Warwickshire</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive range of handyman, gardening, and home improvement services available throughout Leamington Spa, Warwick, Kenilworth, Stratford-upon-Avon, and all of Warwickshire.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.filter(service => service.title !== "Electricals" && service.title !== "Bathrooms").slice(0, 6).map((service, index) => {
              return (
                <Link
                  key={service.id}
                  href={`/services/${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100 overflow-hidden flex flex-col h-full"
                  style={{ textDecoration: 'none' }}
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title + ' in Warwickshire by Flawless DIY'}
                      fill
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-1 flex flex-col p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 flex-1">{service.description}</p>
                  </div>
                </Link>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/services">View All Services in Warwickshire</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Recent Work in Warwickshire</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our portfolio of completed handyman, gardening, and home improvement projects in Leamington Spa, Warwick, Kenilworth, Stratford-upon-Avon, and across Warwickshire. Every project is completed with care and attention to detail.
            </p>
          </div>

          {/* Mobile carousel */}
          <div className="block md:hidden">
            <MobileAutoGalleryCarouselHome images={galleryImages} />
          </div>
          {/* Desktop grid */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.slice(0, 6).map((img) => (
              <div key={img.id} className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src={img.url}
                  alt={img.title + ' in Warwickshire by Flawless DIY'}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/gallery">View Full Gallery of Warwickshire Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">What Our Warwickshire Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Read genuine reviews from customers in Leamington Spa, Warwick, Kenilworth, Stratford-upon-Avon, and across Warwickshire who trust Flawless DIY for handyman, gardening, and home improvement services.
            </p>
          </div>
          {/* Mobile carousel */}
          <div className="block md:hidden">
            <MobileAutoReviewCarousel reviews={reviews} />
          </div>
          {/* Desktop grid */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.slice(0, 3).map((review) => (
              <Card
                key={review.id}
                className="border border-gray-200 hover:shadow-md transition-shadow duration-300 rounded-lg"
              >
                <CardHeader>
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
                          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-.181h4.914a1 1 0 00.951-.69l1.519-4.674z"
                        />
                      </svg>
                    ))}
                  </div>
                  <CardTitle>{review.name}</CardTitle>
                  <CardDescription>{review.location}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">"{review.review}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/reviews">Read All Warwickshire Reviews</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-500 to-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Time for a Refresh?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to schedule a consultation and start bringing your vision to life!
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
