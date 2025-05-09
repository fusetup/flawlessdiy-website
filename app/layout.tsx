import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import ContactDialog from "@/components/contact-dialog"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Professional DIY Services | Flawless DIY",
  description:
    "Comprehensive DIY, home improvement, and handyman services in Leamington Spa, Warwickshire. Based at 46 Monarch Gardens, CV31 3LX.",
  openGraph: {
    title: "Professional DIY Services | Flawless DIY",
    description:
      "Comprehensive DIY, home improvement, and handyman services in Leamington Spa, Warwickshire.",
    url: "https://flawlessdiy.co.uk/",
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
    title: "Professional DIY Services | Flawless DIY",
    description:
      "Comprehensive DIY, home improvement, and handyman services in Leamington Spa, Warwickshire.",
    images: ["/flawlessdiy_logo.png"],
    site: "@flawlessdiy",
  },
  metadataBase: new URL("https://flawlessdiy.co.uk"),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <ContactDialog />
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
