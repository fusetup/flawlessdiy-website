import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Leaf, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Leaf className="h-6 w-6 text-green-400" />
              <span className="font-bold text-xl text-white">Monarch Gardens</span>
            </Link>
            <p className="mb-4">
              Professional gardening and landscaping services in Leamington Spa and surrounding areas.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-green-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-green-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-green-400 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:text-green-400 transition-colors">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-green-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-green-400 mt-0.5" />
                <span>
                  Monarch Gardens
                  <br />
                  Leamington Spa
                  <br />
                  Warwickshire, CV31 3LX
                  <br />
                  England
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-green-400" />
                <a href="tel:+447513912686" className="hover:text-green-400">
                  +44 7513 912686
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-green-400" />
                <a href="mailto:victor@flawlessdiy.co.uk" className="hover:text-green-400">
                  victor@flawlessdiy.co.uk
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Newsletter</h3>
            <p className="mb-4">Subscribe to our newsletter for gardening tips and updates.</p>
            <div className="flex gap-2">
              <Input type="email" placeholder="Your email" className="bg-gray-800 border-gray-700 text-white" />
              <Button className="bg-green-500 hover:bg-green-600">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Monarch Gardens. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
