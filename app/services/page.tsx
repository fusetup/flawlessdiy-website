import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { services } from "@/lib/services"
import {
  Trees,
  Shovel,
  Clock,
  Award,
  Scissors,
  Leaf,
  Sun,
  Droplets,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Our Services | Flawless DIY – Handyman, Gardening & Home Improvement in Warwickshire",
  description: "Explore our range of professional handyman, gardening, and home improvement services in Leamington Spa, Warwick, Kenilworth, Stratford-upon-Avon, and across Warwickshire.",
  keywords: [
    // Gardening priority keywords
    "gardening Warwickshire",
    "gardening Royal Leamington Spa",
    "gardening Warwick",
    "gardening Kenilworth",
    "gardening Stratford-upon-Avon",
    "gardening Rugby",
    "gardening Nuneaton",
    "gardening Bedworth",
    "gardening Atherstone",
    "gardening Southam",
    "gardening Alcester",
    "gardening Shipston-on-Stour",
    "gardening Coleshill",
    "gardening Polesworth",
    "gardening Whitnash",
    "gardening Wellesbourne",
    "gardening Studley",
    "gardening Henley-in-Arden",
    "gardening Bulkington",
    "gardening Kineton",
    "gardening Dunchurch",
    "gardening Bishop's Tachbrook",
    // All other locations
    "gardening Newbold Pacey",
    "gardening Bearley",
    "gardening Butlers Marston",
    "gardening Bidford-on-Avon",
    "gardening Baddesley Ensor",
    "gardening Baginton",
    "gardening Broadwell",
    "gardening Brinklow",
    "gardening Barton",
    "gardening Wolston",
    "gardening Barford",
    "gardening Bishop's Itchington",
    "gardening Budbrooke",
    "gardening Beausale",
    "gardening Burton Dassett",
    "gardening Bubbenhall",
    "gardening Long Itchington",
    "gardening Gaydon",
    "gardening Brailes",
    "gardening Baxterley",
    "gardening Barton-on-the-Heath",
    "gardening Burmington",
    "gardening Barcheston",
    "gardening Walcote",
    "gardening Cherington",
    "gardening Birdingbury",
    "gardening Bourton on Dunsmore",
    "gardening Burton Green",
    "gardening Binley Woods",
    "gardening Billesley",
    "gardening Burton Hastings",
    // General and service keywords
    "our services Flawless DIY",
    "handyman services Warwickshire",
    "gardening services Leamington Spa",
    "home improvement Warwick",
    "property maintenance Kenilworth",
    "DIY services Stratford-upon-Avon",
    "local handyman near me",
    "Warwickshire handyman services",
    "flawlessdiy services",
    "trusted handyman Warwickshire",
    "flawlessdiy"
  ],
  openGraph: {
    title: "Our Services | Flawless DIY – Handyman, Gardening & Home Improvement in Warwickshire",
    description: "Explore our range of professional handyman, gardening, and home improvement services in Leamington Spa, Warwick, Kenilworth, Stratford-upon-Avon, and across Warwickshire.",
    url: "https://flawlessdiy.co.uk/services",
    siteName: "Flawless DIY",
    images: [
      {
        url: "/flawlessdiy_logo.png",
        width: 800,
        height: 600,
        alt: "Flawless DIY Logo",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | Flawless DIY – Handyman, Gardening & Home Improvement in Warwickshire",
    description: "Explore our range of professional handyman, gardening, and home improvement services in Leamington Spa, Warwick, Kenilworth, Stratford-upon-Avon, and across Warwickshire.",
    images: ["/flawlessdiy_logo.png"],
    site: "@flawlessdiy",
  },
};

const iconMap = {
  Trees,
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
            {services.filter(service => service.title !== "Electricals" && service.title !== "Bathrooms").map((service, index) => (
              <Link
                key={service.id}
                href={`/services/${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center scroll-mt-24 group bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100 overflow-hidden h-full`}
                style={{ textDecoration: 'none' }}
              >
                <div className="md:w-1/2 relative h-[400px] w-full rounded-lg overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="md:w-1/2 flex flex-col p-6">
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h2>
                  <p className="text-gray-600 mb-6">{service.longDescription}</p>
                </div>
              </Link>
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

      {/* LocalBusiness Structured Data for SEO */}
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
            description: 'Professional DIY, handyman, and home improvement services in Leamington Spa and Warwickshire.',
            sameAs: [
              'https://www.facebook.com/flawlessdiy',
              'https://www.instagram.com/flawlessdiy',
            ],
          }),
        }}
      />
    </div>
  )
}
