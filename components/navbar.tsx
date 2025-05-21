"use client"
import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { useContactDialog } from "@/hooks/use-contact-dialog"
import { useIsMobile } from "@/components/ui/use-mobile"
import { Phone } from "lucide-react"

export default function Navbar() {
  const pathname = usePathname()
  const { openContactDialog } = useContactDialog()
  const [sheetOpen, setSheetOpen] = React.useState(false)
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
                <nav className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "text-lg font-medium transition-colors hover:text-primary",
                        pathname === item.href ? "text-primary" : "text-foreground",
                      )}
                      onClick={() => setSheetOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
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
          {navItems.map((item) => (
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
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {isMobile ? (
            <a
              href="tel:+447513912686"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              style={{ whiteSpace: 'nowrap' }}
            >
              <Phone className="h-5 w-5 mr-1" />
              Contact Us
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
