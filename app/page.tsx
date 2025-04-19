import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Leaf, Shovel, Sun, Droplets, Award, Clock } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] w-full overflow-hidden">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Beautiful garden landscape"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center">
            <div className="max-w-2xl text-white">
              <h2 className="text-green-300 font-medium mb-2 tracking-wider">PROFESSIONAL GARDENING SERVICES</h2>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Transform Your Outdoor Space</h1>
              <p className="text-lg mb-8 text-gray-100">
                Monarch Gardens provides expert gardening and landscaping services in Leamington Spa and surrounding
                areas.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-green-500 hover:bg-green-600">
                  <Link href="/contact">Get in Touch</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Welcome to Monarch Gardens</h2>
              <p className="text-gray-600 mb-4">
                With over 10 years of experience, we specialize in creating and maintaining beautiful gardens that
                enhance your property and provide a peaceful retreat for you and your family.
              </p>
              <p className="text-gray-600 mb-6">
                Our team of skilled gardeners and landscapers are passionate about plants and dedicated to delivering
                exceptional service tailored to your specific needs and preferences.
              </p>
              <Button asChild className="bg-green-500 hover:bg-green-600">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="md:w-1/2 relative h-[400px] w-full rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=1200"
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
              We offer a comprehensive range of gardening and landscaping services to meet all your outdoor needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Garden Maintenance",
                description: "Regular maintenance to keep your garden looking its best all year round.",
                icon: <Leaf className="h-10 w-10 text-green-500" />,
              },
              {
                title: "Landscape Design",
                description: "Custom landscape design to transform your outdoor space.",
                icon: <Shovel className="h-10 w-10 text-green-500" />,
              },
              {
                title: "Planting & Cultivation",
                description: "Expert planting services to enhance your garden with beautiful plants.",
                icon: <Sun className="h-10 w-10 text-green-500" />,
              },
              {
                title: "Irrigation Systems",
                description: "Installation and maintenance of efficient irrigation systems.",
                icon: <Droplets className="h-10 w-10 text-blue-500" />,
              },
              {
                title: "Seasonal Clean-ups",
                description: "Thorough seasonal clean-ups to prepare your garden for the changing seasons.",
                icon: <Clock className="h-10 w-10 text-blue-500" />,
              },
              {
                title: "Garden Renovation",
                description: "Complete garden renovation to breathe new life into tired outdoor spaces.",
                icon: <Award className="h-10 w-10 text-blue-500" />,
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="border border-gray-200 hover:shadow-md transition-shadow duration-300 rounded-lg overflow-hidden"
              >
                <CardHeader>
                  <div className="mb-2">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full text-green-600 border-green-600 hover:bg-green-50"
                  >
                    <Link href={`/services#${service.title.toLowerCase().replace(/\s+/g, "-")}`}>Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-green-500 hover:bg-green-600">
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
              Take a look at some of our recent gardening and landscaping projects.
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
            <Button asChild size="lg" className="bg-green-500 hover:bg-green-600">
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
            {[
              {
                name: "Sarah Johnson",
                review:
                  "Monarch Gardens transformed our backyard into a beautiful oasis. The team was professional, punctual, and the results exceeded our expectations.",
                rating: 5,
              },
              {
                name: "David Thompson",
                review:
                  "We've been using Monarch Gardens for our regular garden maintenance for over a year now, and we couldn't be happier with their service.",
                rating: 5,
              },
              {
                name: "Emma Wilson",
                review:
                  "The landscape design service was excellent. They listened to our ideas and created a garden that perfectly suits our lifestyle.",
                rating: 4,
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="border border-gray-200 hover:shadow-md transition-shadow duration-300 rounded-lg"
              >
                <CardHeader>
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill={i < testimonial.rating ? "currentColor" : "none"}
                        stroke={i < testimonial.rating ? "none" : "currentColor"}
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
                  <CardTitle>{testimonial.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">"{testimonial.review}"</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-green-500 hover:bg-green-600">
              <Link href="/reviews">Read All Reviews</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-500 to-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Garden?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to schedule a consultation and take the first step towards creating your dream garden.
          </p>
          <Button asChild size="lg" className="bg-white text-green-600 hover:bg-gray-100">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
