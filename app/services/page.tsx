import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Leaf, Shovel, Sun, Droplets, Award, Clock, Scissors, TreesIcon as Tree, Palette } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      id: "gardening",
      title: "Gardening",
      description: "Lawn mowing, hedge trimming, fence repairs, and garden care.",
      longDescription:
        "Flawless Diy provides garden services including lawn mowing, hedge trimming, fence repairs, and garden furniture care, along with occasional one-off tasks. Whether it’s regular maintenance or a specific project, we aim to keep your garden looking its best year-round. Our team can help with plant care, garden design, and maintenance to create a beautiful outdoor space for relaxation or entertaining.",
      icon: <Tree className="h-10 w-10 text-green-500" />, // Update icon if needed
      image: "/Gardening.webp",
    },
    {
      id: "carpentry",
      title: "Carpentry",
      description: "Custom woodwork, furniture refurbishing, and door installations.",
      longDescription:
        "With a passion for bespoke carpentry, Flawless Diy offers custom woodwork, furniture refurbishing, door installations, and all your other woodworking needs. From creating beautiful, personalized furniture to installing brand-new doors, our services add value and style to your home. We handle projects of all sizes, always with craftsmanship and attention to detail.",
      icon: <Shovel className="h-10 w-10 text-green-500" />, // Update icon if needed
      image: "/Carpentery.webp",
    },
    {
      id: "kitchens",
      title: "Kitchens",
      description: "Full kitchen installations, repairs, and upgrades for a functional space.",
      longDescription:
        "We provide full kitchen services, from installing new units and replacing taps to fixing dishwashers, washing machines, and broken fixtures. Our team can help with everything from full kitchen renovations to minor repairs and upgrades, ensuring your kitchen is functional, stylish, and a perfect fit for your home. We also ensure that all work is completed to a high standard.",
      icon: <Clock className="h-10 w-10 text-blue-500" />, // Update icon if needed
      image: "/Kitchen fitter.webp",
    },
    {
      id: "flooring",
      title: "Flooring",
      description: "Laminate, tile, and hardwood flooring installation and repairs.",
      longDescription:
        "Flawless Diy takes care of all your flooring needs, including laminate installation, tiling, skirting board repairs, and more. Whether it’s hardwood, tile, or laminate, we ensure that your floors are installed or repaired with the highest quality materials. Our work is designed to last, providing both a sturdy foundation and a beautiful aesthetic to your living spaces.",
      icon: <Award className="h-10 w-10 text-blue-500" />, // Update icon if needed
      image: "/Flooring.webp",
    },
    {
      id: "painting",
      title: "Painting",
      description: "Professional painting and decorating for all surfaces, plus small repairs.",
      longDescription:
        "Flawless Diy excels in painting walls, ceilings, woodwork, doors, and more. We also handle small plaster repairs, wallpaper stripping, and furniture refinishing. Whether you want to freshen up a room with a new color or restore your furniture’s natural beauty, we offer services that bring out the best in your home’s surfaces with a professional and lasting finish.",
      icon: <Scissors className="h-10 w-10 text-green-500" />, // Update icon if needed
      image: "/Painting.webp",
    },
    {
      id: "bathrooms",
      title: "Bathrooms",
      description: "Expert bathroom installations, repairs, and finishing touches for a professional look.",
      longDescription:
        "Relax and leave the hard work to Flawless Diy. We provide expert bathroom installations, including mirror hanging, shelf setup, shower resealing, sink and bath replacements, and fixing leaking taps. We ensure everything is done with precision, leaving you with a professional finish that enhances both functionality and aesthetic appeal.",
      icon: <Leaf className="h-10 w-10 text-green-500" />, // You may want to update icons for each service
      image: "/Bathroom.webp",
    },
    {
      id: "electrical",
      title: "Electrical",
      description: "Safe and efficient electrical repairs and installations.",
      longDescription:
        "Flawless Diy handles electrical jobs like installing security lights, fixing broken fixtures, repairing smoke alarms, or replacing hard-to-reach light bulbs and more. Whether you need minor repairs or full electrical installations, we follow the latest safety protocols to ensure everything is up to code. We prioritize safety, efficiency, and customer satisfaction in every project.",
      icon: <Sun className="h-10 w-10 text-green-500" />, // Update icon if needed
      image: "/Electrical.webp",
    },
    {
      id: "cleaning",
      title: "Cleaning",
      description: "Comprehensive cleaning for homes and businesses, including deep cleans and end-of-tenancy.",
      longDescription:
        "From one-off deep cleans to weekly maintenance, Flawless Diy offers cleaning for all environments, including behind appliances and carpets, plus end-of-tenancy services. We tackle even the toughest cleaning tasks, ensuring every corner is spotless. Our team is equipped to handle both residential and commercial cleaning, delivering a high-standard result tailored to your specific needs.",
      icon: <Droplets className="h-10 w-10 text-blue-500" />, // Update icon if needed
      image: "/Cleaning.webp",
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
