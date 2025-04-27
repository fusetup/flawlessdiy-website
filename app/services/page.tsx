import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { services } from "@/lib/services"
import {
  Tree,
  Shovel,
  Clock,
  Award,
  Scissors,
  Leaf,
  Sun,
  Droplets,
} from "lucide-react"

const iconMap = {
  Tree,
  Shovel,
  Clock,
  Award,
  Scissors,
  Leaf,
  Sun,
  Droplets,
}

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-gradient-to-r from-green-50 to-blue-50 text-center">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Our Services</h1>
            <p className="text-lg mb-8 text-gray-600">
              At Flawless DIY, we focus on delivering exceptional quality with every project. Our attention to detail and commitment to excellence ensure flawless results that transform your needs.            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center scroll-mt-24`}
              >
                <div className="md:w-1/2 relative h-[300px] w-full rounded-lg overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="md:w-1/2">
                  <div className="mb-4">
                    {(() => {
                      const Icon = iconMap[service.icon];
                      return Icon && <Icon className="h-10 w-10 text-green-500" />;
                    })()}
                  </div>
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h2>
                  <p className="text-gray-600 mb-6">{service.longDescription}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-500 to-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to schedule a consultation and start bringing your vision to life!
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
