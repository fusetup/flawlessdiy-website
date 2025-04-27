"use client";

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useIsMobile } from "@/components/ui/use-mobile"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { useState, useEffect } from "react"

export default function GalleryPage() {
  // Use hardcoded placeholder images for gallery
  const categories = [
    { id: "all", name: "All Services" },
    { id: "gardening", name: "Gardening" },
    { id: "carpentry", name: "Carpentry" },
    { id: "kitchens", name: "Kitchens" },
    { id: "flooring", name: "Flooring" },
    { id: "painting", name: "Painting" },
    { id: "bathrooms", name: "Bathrooms" },
    { id: "electrical", name: "Electrical" },
    { id: "cleaning", name: "Cleaning" },
  ];

  const galleryItems = [
    {
      id: 1,
      title: "Contemporary Garden Design",
      category: "gardens",
      image: "/placeholder.svg?height=800&width=1200&text=Contemporary+Garden",
    },
    {
      id: 2,
      title: "Cottage Garden Renovation",
      category: "gardens",
      image: "/placeholder.svg?height=800&width=1200&text=Cottage+Garden",
    },
    {
      id: 3,
      title: "Modern Landscape Design",
      category: "landscapes",
      image: "/placeholder.svg?height=800&width=1200&text=Modern+Landscape",
    },
    {
      id: 4,
      title: "Seasonal Garden Maintenance",
      category: "maintenance",
      image: "/placeholder.svg?height=800&width=1200&text=Garden+Maintenance",
    },
    {
      id: 5,
      title: "Water Feature Installation",
      category: "features",
      image: "/placeholder.svg?height=800&width=1200&text=Water+Feature",
    },
    {
      id: 6,
      title: "Japanese Garden Design",
      category: "gardens",
      image: "/placeholder.svg?height=800&width=1200&text=Japanese+Garden",
    },
    {
      id: 7,
      title: "Patio Garden Transformation",
      category: "landscapes",
      image: "/placeholder.svg?height=800&width=1200&text=Patio+Garden",
    },
    {
      id: 8,
      title: "Lawn Renovation Project",
      category: "maintenance",
      image: "/placeholder.svg?height=800&width=1200&text=Lawn+Renovation",
    },
    {
      id: 9,
      title: "Pergola and Trellis Installation",
      category: "features",
      image: "/placeholder.svg?height=800&width=1200&text=Pergola+Trellis",
    },
    {
      id: 10,
      title: "Wildlife Garden Creation",
      category: "gardens",
      image: "/placeholder.svg?height=800&width=1200&text=Wildlife+Garden",
    },
    {
      id: 11,
      title: "Terraced Garden Design",
      category: "landscapes",
      image: "/placeholder.svg?height=800&width=1200&text=Terraced+Garden",
    },
    {
      id: 12,
      title: "Garden Lighting Installation",
      category: "features",
      image: "/placeholder.svg?height=800&width=1200&text=Garden+Lighting",
    },
  ];

  const isMobile = useIsMobile();
  if (isMobile === undefined) return <div />;

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-gradient-to-r from-green-50 to-blue-50 text-center">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Project Showcase</h1>
            <p className="text-lg mb-8 text-gray-600">
              Explore our portfolio of completed projects, highlighting a wide range of professional maintenance and improvement services.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-gray-100">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="data-[state=active]:bg-green-500 data-[state=active]:text-white"
                  >
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                <div>
                  {isMobile ? (
                    <MobileAutoGalleryCarousel
                      items={galleryItems.filter(
                        (item) => category.id === "all" || item.category === category.id
                      )}
                    />
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {galleryItems
                        .filter(
                          (item) =>
                            category.id === "all" || item.category === category.id
                        )
                        .map((item) => (
                          <div key={item.id} className="group relative overflow-hidden rounded-lg">
                            <div className="relative h-64 w-full overflow-hidden rounded-lg">
                              <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                              />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                              <h3 className="text-white font-medium">{item.title}</h3>
                            </div>
                          </div>
                        ))}
                    </div>
                  )}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-500 to-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Inspired by Our Work?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to schedule a consultation and start bringing your vision to life!
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <a href="/contact">Get in Touch</a>
          </Button>
        </div>
      </section>
    </div>
  )
}

function MobileAutoGalleryCarousel({ items }: { items: any[] }) {
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
        {items.map((item) => (
          <CarouselItem key={item.id}>
            <div className="group relative overflow-hidden rounded-lg">
              <div className="relative h-64 w-full overflow-hidden rounded-lg">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <h3 className="text-white font-medium">{item.title}</h3>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
