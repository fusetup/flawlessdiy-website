import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { TreeDeciduous, Hammer, Utensils, Layers, Paintbrush, ShowerHead, Zap, Sparkles } from "lucide-react"
import { services } from "@/lib/services"
import { reviews } from "@/lib/reviews"

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

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="max-w-2xl">
              <h2 className="text-primary font-medium mb-2 tracking-wider">PROFESSIONAL DIY SERVICES</h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-800">
                Turning every task into a Flawless finish
              </h1>
              <p className="text-lg mb-8 text-gray-600">
                Delivering high-quality services and maintenance with attention to detail. We ensure every project is completed to perfection, transforming your needs with expert craftsmanship.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">Get in Touch</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary/10 hover:text-primary"
                >
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-[500px] w-full overflow-hidden rounded-lg shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-b from-green-500/10 to-blue-500/10 rounded-lg z-10"></div>
                <Image
                  src="/handyman.webp"
                  alt="Professional gardener"
                  fill
                  className="object-contain object-center"
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
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Welcome to Flawless DIY</h2>
              <p className="text-gray-600 mb-4">
                At Flawless Diy, we’re a family-run business dedicated to delivering outstanding results and ensuring 100% customer satisfaction. We pride ourselves on our commitment to quality and craftsmanship, treating each project as if it were our own.
              </p>
              <p className="text-gray-600 mb-4">
                With a keen eye for detail, we work to the highest standards and won’t stop until the job is completed to perfection. Explore the wide range of services we offer, and get in touch with us today to see how we can bring your vision to life!
              </p>
            </div>
            <div className="md:w-1/2 relative h-[400px] w-full rounded-lg overflow-hidden">
              <Image
                src="/home garden.webp"
                alt="Our gardening team"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive range of services designed to meet all your DIY, home improvement, and maintenance needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service, index) => {
              const Icon = iconMap[service.icon]
              return (
                <Card
                  key={service.id}
                  className="border border-gray-200 hover:shadow-md transition-shadow duration-300 rounded-lg overflow-hidden"
                >
                  <CardHeader>
                    <div className="mb-2">{Icon && <Icon className="h-10 w-10 text-primary" />}</div>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">{service.description}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full text-primary border-primary hover:bg-primary/10 hover:text-primary"
                    >
                      <Link href={`/services#${service.id}`}>Learn More</Link>
                    </Button>
                  </CardFooter>
                </Card>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Recent Work</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We take pride in every project we complete, ensuring quality and attention to detail in all our work. Take a look at some of our recent gardening and landscaping projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src={`/placeholder.svg?height=600&width=800&text=Garden+Project+${item}`}
                  alt={`Garden project ${item}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/gallery">View Full Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear what our satisfied clients have to say about our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <Link href="/reviews">Read All Reviews</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-500 to-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Time for a Refresh?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us today to schedule a consultation and start bringing your vision to life!          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
