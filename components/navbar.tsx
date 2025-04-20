"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { useContactDialog } from "@/hooks/use-contact-dialog"

export default function Navbar() {
  const pathname = usePathname()
  const { openContactDialog } = useContactDialog()

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
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col gap-6 py-6">
                <Link href="/" className="flex items-center gap-2">
                  <img src="/flawlessdiy_logo.png" alt="FlawlessDIY Logo" className="h-16 w-auto" />
                </Link>
                <nav className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "text-lg font-medium transition-colors hover:text-green-500",
                        pathname === item.href ? "text-green-500" : "text-foreground",
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Link href="/dashboard" className="text-lg font-medium transition-colors hover:text-green-500">
                    Dashboard
                  </Link>
                </nav>
                <Button
                  className="bg-green-500 hover:bg-green-600"
                  onClick={openContactDialog}
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
                "text-sm font-medium transition-colors hover:text-green-500",
                pathname === item.href ? "text-green-500" : "text-foreground",
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/dashboard" className="text-sm font-medium transition-colors hover:text-green-500">
            Dashboard
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button
            className="md:flex bg-green-500 hover:bg-green-600"
            onClick={openContactDialog}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </header>
  )
}
