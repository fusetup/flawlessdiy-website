"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { useContactDialog } from "@/hooks/use-contact-dialog"

export default function ContactDialog() {
  const { toast } = useToast()
  const { isOpen, closeContactDialog } = useContactDialog()
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const form = e.currentTarget
    const formData = new FormData(form)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    }
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        toast({
          title: "Message Sent",
          description: "Thank you for your message! We'll get back to you as soon as possible.",
        })
        form.reset()
        closeContactDialog()
      } else {
        toast({
          title: "Error",
          description: "There was a problem sending your message. Please try again later.",
          variant: "destructive",
        })
      }
    } catch {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={closeContactDialog}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Contact Us</DialogTitle>
          <DialogDescription>Fill out the form below and we'll get back to you as soon as possible.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="popup-name">Name</Label>
            <Input id="popup-name" name="name" placeholder="Your name" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="popup-email">Email</Label>
            <Input id="popup-email" name="email" type="email" placeholder="Your email address" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="popup-phone">Phone Number</Label>
            <Input id="popup-phone" name="phone" type="tel" placeholder="Your phone number" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="popup-subject">Subject</Label>
            <Input id="popup-subject" name="subject" placeholder="Subject of your message" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="popup-message">Message</Label>
            <Textarea id="popup-message" name="message" placeholder="How can we help you?" className="min-h-[100px]" required />
          </div>

          <Button type="submit" className="w-full bg-green-500 hover:bg-green-600" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
