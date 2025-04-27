"use client";

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useIsMobile } from "@/components/ui/use-mobile"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabaseclient"
import { services as serviceList } from "@/lib/services"

export default function GalleryPage() {
  const categories = [
    { id: "all", name: "All Services" },
    ...serviceList.map(s => ({ id: s.id.toString(), name: s.title }))
  ];
  const [galleryImages, setGalleryImages] = useState<any[]>([]);
  const isMobile = useIsMobile();

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase
        .from("gallery_images")
        .select("id, url, title, category_id")
        .order("id", { ascending: false });
      if (!error && data) setGalleryImages(data);
    })();
  }, []);

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
                      items={galleryImages.filter(
                        (img) => category.id === "all" || img.category_id?.toString() === category.id
                      )}
                    />
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {galleryImages
                        .filter(
                          (img) => category.id === "all" || img.category_id?.toString() === category.id
                        )
                        .map((img) => (
                          <div key={img.id} className="group relative overflow-hidden rounded-lg">
                            <div className="relative h-64 w-full overflow-hidden rounded-lg">
                              <Image
                                src={img.url}
                                alt={img.title}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                              />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                              <h3 className="text-white font-medium">{img.title}</h3>
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
                  src={item.url}
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
