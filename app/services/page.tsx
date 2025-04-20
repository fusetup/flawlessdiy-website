import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Leaf, Shovel, Sun, Droplets, Award, Clock, Scissors, TreesIcon as Tree, Palette } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      id: "garden-maintenance",
      title: "Garden Maintenance",
      description: "Regular maintenance to keep your garden looking its best all year round.",
      longDescription:
        "Our comprehensive garden maintenance service includes lawn mowing, weeding, pruning, fertilizing, and pest control. We create a customized maintenance schedule based on your garden's specific needs to ensure it stays healthy and beautiful throughout the seasons.",
      icon: <Leaf className="h-10 w-10 text-green-500" />,
      image: "/placeholder.svg?height=600&width=800&text=Garden+Maintenance",
    },
    {
      id: "landscape-design",
      title: "Landscape Design",
      description: "Custom landscape design to transform your outdoor space.",
      longDescription:
        "Our landscape design service begins with a thorough consultation to understand your vision, preferences, and requirements. Our experienced designers then create a detailed plan that harmoniously combines plants, hardscaping elements, and features to create a beautiful and functional outdoor space that reflects your style.",
      icon: <Shovel className="h-10 w-10 text-green-500" />,
      image: "/placeholder.svg?height=600&width=800&text=Landscape+Design",
    },
    {
      id: "planting-cultivation",
      title: "Planting & Cultivation",
      description: "Expert planting services to enhance your garden with beautiful plants.",
      longDescription:
        "Our planting and cultivation service includes selecting the right plants for your garden's conditions, preparing the soil, planting, and providing ongoing care instructions. We consider factors such as sunlight, soil type, and water requirements to ensure your plants thrive.",
      icon: <Sun className="h-10 w-10 text-green-500" />,
      image: "/placeholder.svg?height=600&width=800&text=Planting+Cultivation",
    },
    {
      id: "irrigation-systems",
      title: "Irrigation Systems",
      description: "Installation and maintenance of efficient irrigation systems.",
      longDescription:
        "We design and install efficient irrigation systems tailored to your garden's specific needs. Our systems include drip irrigation, sprinklers, and smart controllers to ensure your plants receive the right amount of water while conserving this precious resource. We also provide regular maintenance to keep your system functioning optimally.",
      icon: <Droplets className="h-10 w-10 text-blue-500" />,
      image: "/placeholder.svg?height=600&width=800&text=Irrigation+Systems",
    },
    {
      id: "seasonal-clean-ups",
      title: "Seasonal Clean-ups",
      description: "Thorough seasonal clean-ups to prepare your garden for the changing seasons.",
      longDescription:
        "Our seasonal clean-up service includes removing debris, cutting back perennials, mulching, and preparing your garden for the upcoming season. We provide comprehensive spring and fall clean-ups to ensure your garden transitions smoothly between seasons and remains healthy year-round.",
      icon: <Clock className="h-10 w-10 text-blue-500" />,
      image: "/placeholder.svg?height=600&width=800&text=Seasonal+Cleanups",
    },
    {
      id: "garden-renovation",
      title: "Garden Renovation",
      description: "Complete garden renovation to breathe new life into tired outdoor spaces.",
      longDescription:
        "Our garden renovation service is perfect for transforming neglected or outdated gardens into beautiful, functional spaces. We assess the current condition, develop a comprehensive renovation plan, and implement changes that may include new plantings, updated hardscaping, improved drainage, and more.",
      icon: <Award className="h-10 w-10 text-blue-500" />,
      image: "/placeholder.svg?height=600&width=800&text=Garden+Renovation",
    },
    {
      id: "lawn-care",
      title: "Lawn Care",
      description: "Comprehensive lawn care services to keep your grass lush and healthy.",
      longDescription:
        "Our lawn care service includes mowing, edging, aeration, overseeding, fertilization, and weed control. We develop a customized lawn care program based on your grass type and local conditions to ensure a lush, green lawn that enhances your property's appearance.",
      icon: <Scissors className="h-10 w-10 text-green-500" />,
      image: "/placeholder.svg?height=600&width=800&text=Lawn+Care",
    },
    {
      id: "tree-shrub-care",
      title: "Tree & Shrub Care",
      description: "Expert care for trees and shrubs to maintain their health and appearance.",
      longDescription:
        "Our tree and shrub care service includes pruning, shaping, fertilization, pest management, and disease control. We have the expertise to care for a wide variety of trees and shrubs, ensuring they remain healthy, attractive, and structurally sound.",
      icon: <Tree className="h-10 w-10 text-green-500" />,
      image: "/placeholder.svg?height=600&width=800&text=Tree+Shrub+Care",
    },
    {
      id: "garden-features",
      title: "Garden Features",
      description: "Installation of decorative features to enhance your garden's appeal.",
      longDescription:
        "We design and install a variety of garden features including water features, pergolas, trellises, garden lighting, and decorative elements. These features add character, create focal points, and enhance the overall enjoyment of your outdoor space.",
      icon: <Palette className="h-10 w-10 text-blue-500" />,
      image: "/placeholder.svg?height=600&width=800&text=Garden+Features",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Our Services</h1>
            <p className="text-lg mb-8 text-gray-600">
              Discover our comprehensive range of gardening and landscaping services designed to meet all your outdoor needs.
            </p>
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
                  <div className="mb-4">{service.icon}</div>
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h2>
                  <p className="text-gray-600 mb-6">{service.longDescription}</p>
                  <Button className="bg-green-500 hover:bg-green-600">Get a Quote</Button>
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
            Contact us today to discuss your gardening needs and schedule a consultation.
          </p>
          <Button asChild size="lg" className="bg-white text-green-600 hover:bg-gray-100">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
