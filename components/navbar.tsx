"use client"
import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { usePathname } from "next/navigation"
import { Menu, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { useContactDialog } from "@/hooks/use-contact-dialog"
import { useIsMobile } from "@/components/ui/use-mobile"
import { Phone } from "lucide-react"
import { services } from "@/lib/services"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Navbar() {
  const pathname = usePathname()
  const { openContactDialog } = useContactDialog()
  const [sheetOpen, setSheetOpen] = React.useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = React.useState(false);
  // Track if mouse is over button or dropdown
  const [servicesDropdownHover, setServicesDropdownHover] = React.useState(false);
  const isMobile = useIsMobile()

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Gallery", href: "/gallery" },
    { label: "Reviews", href: "/reviews" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <header
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      style={{ paddingTop: "10px" }}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetTitle className="sr-only">Main Menu</SheetTitle>
              <SheetDescription className="sr-only">Navigation menu for FlawlessDIY website</SheetDescription>
              <div className="flex flex-col gap-6 py-6">
                <Link href="/" className="flex items-center gap-2" onClick={() => setSheetOpen(false)}>
                  <img src="/flawlessdiy_logo.png" alt="FlawlessDIY Logo" className="h-16 w-auto" />
                </Link>
                <nav className="flex flex-col gap-4 mt-8">
                  {navItems.map((item) =>
                    item.label === "Services" ? (
                      <div key={item.href} className="flex flex-col">
                        <button
                          className="flex items-center justify-between w-full text-lg font-medium px-2 py-3 rounded hover:bg-muted focus:outline-none"
                          onClick={() => setServicesDropdownOpen((open) => !open)}
                          aria-expanded={servicesDropdownOpen}
                          aria-controls="mobile-services-dropdown"
                          type="button"
                        >
                          <span>Services</span>
                          <ChevronDown className={`h-5 w-5 ml-2 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>
                        <div
                          id="mobile-services-dropdown"
                          className={`flex flex-col pl-4 border-l border-gray-200 transition-all overflow-hidden ${servicesDropdownOpen ? 'max-h-96 py-2' : 'max-h-0 py-0'} duration-300`}
                          style={{background: 'transparent'}}
                        >
                          <Link
                            href="/services"
                            className="block px-2 py-2 font-semibold hover:bg-muted rounded text-primary"
                            onClick={() => setSheetOpen(false)}
                          >
                            All Services
                          </Link>
                          {services.map((service) => (
                            <Link
                              key={service.title}
                              href={`/services/${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                              className="block px-2 py-2 hover:bg-muted rounded"
                              onClick={() => setSheetOpen(false)}
                            >
                              {service.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          "text-lg font-medium transition-colors hover:text-primary px-2 py-3 rounded",
                          pathname === item.href ? "text-primary" : "text-foreground",
                        )}
                        onClick={() => setSheetOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )
                  )}
                </nav>
                <Button
                  className="bg-primary hover:bg-primary/90"
                  onClick={() => {
                    setSheetOpen(false)
                    openContactDialog()
                  }}
                >
                  Contact Us
                </Button>
              </div>
            </SheetContent>
          </Sheet>

          <Link href="/" className="flex items-center gap-2">
            <img src="/flawlessdiy_logo.png" alt="FlawlessDIY Logo" className="h-16 w-auto" />
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) =>
            item.label === "Services" ? (
              <div
                key={item.href}
                className="relative group"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => {
                  // Only close if not hovered
                  setTimeout(() => {
                    if (!servicesDropdownHover) setServicesDropdownOpen(false);
                  }, 40);
                }}
              >
                <Button
                  variant="ghost"
                  className="text-sm font-medium p-0 flex items-center gap-2 group/data [&:not(:focus-visible)]:outline-none px-4 py-2"
                  tabIndex={0}
                  aria-haspopup="true"
                  aria-expanded={servicesDropdownOpen}
                  aria-controls="services-dropdown"
                  onMouseEnter={() => setServicesDropdownHover(true)}
                  onMouseLeave={() => setServicesDropdownHover(false)}
                >
                  Services
                  <ChevronDown className="h-4 w-4 ml-1 transition-transform group-hover:rotate-180" />
                </Button>
                <div
                  id="services-dropdown"
                  className={`absolute left-0 mt-2 w-56 bg-background border border-gray-100 rounded shadow-lg z-50 py-2 ${servicesDropdownOpen ? '' : 'hidden'}`}
                  onMouseEnter={() => setServicesDropdownHover(true)}
                  onMouseLeave={() => {
                    setServicesDropdownHover(false);
                    setServicesDropdownOpen(false);
                  }}
                >
                  <Link
                    href="/services"
                    className="block px-4 py-2 font-semibold hover:bg-muted rounded text-primary"
                  >
                    All Services
                  </Link>
                  {services.map((service) => (
                    <Link
                      key={service.title}
                      href={`/services/${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                      className="block px-4 py-2 hover:bg-muted rounded"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.href ? "text-primary" : "text-foreground",
                )}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-4">
          {isMobile ? (
            <a
              href="tel:+447513912686"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              style={{ whiteSpace: 'nowrap' }}
            >
              Call Us
            </a>
          ) : (
            <Button
              className="md:flex bg-primary hover:bg-primary/90"
              onClick={openContactDialog}
            >
              Contact Us
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}
