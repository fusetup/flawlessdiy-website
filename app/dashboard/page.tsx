"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useToast } from "@/hooks/use-toast"
import { Trash2, Edit, Plus, Upload } from "lucide-react"
import GalleryUpload from "./gallery/upload"
import { supabase } from "@/lib/supabaseclient"

export default function DashboardPage() {
  const { toast } = useToast()
  const [services, setServices] = useState([
    {
      id: 1,
      title: "Garden Maintenance",
      description: "Regular maintenance to keep your garden looking its best all year round.",
      image: "/placeholder.svg?height=600&width=800&text=Garden+Maintenance",
    },
    {
      id: 2,
      title: "Landscape Design",
      description: "Custom landscape design to transform your outdoor space.",
      image: "/placeholder.svg?height=600&width=800&text=Landscape+Design",
    },
    {
      id: 3,
      title: "Planting & Cultivation",
      description: "Expert planting services to enhance your garden with beautiful plants.",
      image: "/placeholder.svg?height=600&width=800&text=Planting+Cultivation",
    },
  ])

  const [galleryImages, setGalleryImages] = useState<any[]>([])
  const [loadingImages, setLoadingImages] = useState(true)

  const [editingService, setEditingService] = useState<any>(null)
  const [editingImage, setEditingImage] = useState<any>(null)

  // Fetch gallery images from Supabase
  useEffect(() => {
    async function fetchImages() {
      setLoadingImages(true)
      const { data, error } = await supabase
        .from("gallery_images")
        .select("id, url, title, category_id")
        .order("id", { ascending: false })
      if (!error && data) setGalleryImages(data)
      setLoadingImages(false)
    }
    fetchImages()
  }, [])

  const handleAddService = (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const formData = new FormData(form)

    const newService = {
      id: services.length + 1,
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      image: "/placeholder.svg?height=600&width=800&text=New+Service",
    }

    setServices([...services, newService])
    toast({
      title: "Service Added",
      description: "The new service has been added successfully.",
    })
    form.reset()
  }

  const handleUpdateService = (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const formData = new FormData(form)

    const updatedService = {
      ...editingService,
      title: formData.get("title") as string,
      description: formData.get("description") as string,
    }

    setServices(services.map((service) => (service.id === editingService.id ? updatedService : service)))

    toast({
      title: "Service Updated",
      description: "The service has been updated successfully.",
    })
    setEditingService(null)
  }

  const handleDeleteService = (id: number) => {
    setServices(services.filter((service) => service.id !== id))
    toast({
      title: "Service Deleted",
      description: "The service has been deleted successfully.",
    })
  }

  const handleAddImage = (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const formData = new FormData(form)

    const newImage = {
      id: galleryImages.length + 1,
      title: formData.get("title") as string,
      image: "/placeholder.svg?height=800&width=1200&text=New+Image",
    }

    setGalleryImages([...galleryImages, newImage])
    toast({
      title: "Image Added",
      description: "The new image has been added to the gallery.",
    })
    form.reset()
  }

  const handleUpdateImage = (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const formData = new FormData(form)

    const updatedImage = {
      ...editingImage,
      title: formData.get("title") as string,
    }

    setGalleryImages(galleryImages.map((image) => (image.id === editingImage.id ? updatedImage : image)))

    toast({
      title: "Image Updated",
      description: "The image has been updated successfully.",
    })
    setEditingImage(null)
  }

  // Delete image from Supabase
  async function handleDeleteImage(id: number, url: string) {
    const { error: dbError } = await supabase.from("gallery_images").delete().eq("id", id)
    if (!dbError) {
      // Try both possible file path extractions for Supabase Storage
      let filePath = url.split("/object/public/gallery/")[1]
      if (!filePath) {
        // fallback: try splitting by '/gallery/'
        filePath = url.split("/gallery/")[1]
      }
      if (filePath) {
        const { error: storageError } = await supabase.storage.from("gallery").remove([filePath])
        if (storageError) {
          toast({ title: "Storage Error", description: storageError.message })
        }
      } else {
        toast({ title: "Error", description: "Could not determine file path for storage deletion." })
      }
      // Refetch images after delete
      const { data } = await supabase
        .from("gallery_images")
        .select("id, url, title, category_id")
        .order("id", { ascending: false })
      setGalleryImages(data || [])
      toast({ title: "Image Deleted", description: "The image has been deleted from the gallery." })
    } else {
      toast({ title: "Error", description: dbError.message })
    }
  }

  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-r from-green-500 to-blue-500 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white">Dashboard</h1>
          <p className="text-white/80">Manage your services and gallery images</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="services" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="services">Services</TabsTrigger>
              <TabsTrigger value="gallery">Gallery</TabsTrigger>
            </TabsList>

            <TabsContent value="services" className="space-y-8">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Manage Services</h2>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-green-500 hover:bg-green-600">
                      <Plus className="mr-2 h-4 w-4" /> Add Service
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl min-h-[400px] rounded-2xl py-10 px-8 shadow-2xl overflow-auto">
                    <DialogHeader>
                      <DialogTitle>Add New Service</DialogTitle>
                      <DialogDescription>Add a new service to your website.</DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleAddService} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="title">Service Title</Label>
                        <Input id="title" name="title" placeholder="Enter service title" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                          id="description"
                          name="description"
                          placeholder="Enter service description"
                          className="min-h-[100px]"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="image">Image</Label>
                        <div className="flex items-center gap-2">
                          <Input id="image" name="image" type="file" className="hidden" />
                          <Button
                            type="button"
                            variant="outline"
                            className="w-full"
                            onClick={() => document.getElementById("image")?.click()}
                          >
                            <Upload className="mr-2 h-4 w-4" /> Upload Image
                          </Button>
                        </div>
                        <p className="text-sm text-gray-500">Recommended size: 800x600px</p>
                      </div>
                      <DialogFooter>
                        <Button type="submit" className="bg-green-500 hover:bg-green-600">
                          Add Service
                        </Button>
                      </DialogFooter>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service) => (
                  <Card key={service.id} className="rounded-lg overflow-hidden">
                    <div className="relative h-48 w-full">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        fill
                        className="object-cover"
                        priority={service.id === 1}
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600">{service.description}</CardDescription>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" size="icon" onClick={() => setEditingService(service)}>
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="destructive" size="icon" onClick={() => handleDeleteService(service.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="gallery" className="space-y-8">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Manage Gallery</h2>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-green-500 hover:bg-green-600">
                      <Plus className="mr-2 h-4 w-4" /> Add Image
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl min-h-[400px] rounded-2xl py-10 px-8 shadow-2xl overflow-auto">
                    <DialogHeader>
                      <DialogTitle>Add New Image</DialogTitle>
                      <DialogDescription>Add a new image to your gallery.</DialogDescription>
                    </DialogHeader>
                    <GalleryUpload
                      onSuccess={() => {
                        ;(async () => {
                          const { data } = await supabase
                            .from("gallery_images")
                            .select("id, url, title, category_id")
                            .order("id", { ascending: false })
                          setGalleryImages(data || [])
                        })()
                      }}
                    />
                  </DialogContent>
                </Dialog>
              </div>
              {loadingImages ? (
                <div>Loading images...</div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {galleryImages.map((image) => (
                    <Card key={image.id} className="rounded-lg overflow-hidden">
                      <div className="relative h-48 w-full">
                        <Image
                          src={image.url || "/placeholder.svg"}
                          alt={image.title || "Gallery image"}
                          fill
                          className="object-cover"
                          priority={image.id === (galleryImages[0]?.id || 1)}
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>{image.title}</CardTitle>
                      </CardHeader>
                      <CardFooter className="flex justify-between">
                        <Button
                          variant="destructive"
                          size="icon"
                          onClick={() => handleDeleteImage(image.id, image.url)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Edit Service Dialog */}
      {editingService && (
        <Dialog open={!!editingService} onOpenChange={(open) => !open && setEditingService(null)}>
          <DialogContent className="max-w-2xl min-h-[400px] rounded-2xl py-10 px-8 shadow-2xl overflow-auto">
            <DialogHeader>
              <DialogTitle>Edit Service</DialogTitle>
              <DialogDescription>Make changes to the selected service.</DialogDescription>
            </DialogHeader>
            <form onSubmit={handleUpdateService} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="edit-title">Service Title</Label>
                <Input id="edit-title" name="title" defaultValue={editingService.title} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-description">Description</Label>
                <Textarea
                  id="edit-description"
                  name="description"
                  defaultValue={editingService.description}
                  className="min-h-[100px]"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-image">Image</Label>
                <div className="relative h-48 w-full mb-2 rounded-md overflow-hidden">
                  <Image
                    src={editingService.image || "/placeholder.svg"}
                    alt={editingService.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Input id="edit-image" name="image" type="file" className="hidden" />
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full"
                    onClick={() => document.getElementById("edit-image")?.click()}
                  >
                    <Upload className="mr-2 h-4 w-4" /> Change Image
                  </Button>
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" className="bg-green-500 hover:bg-green-600">
                  Save Changes
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      )}

      {/* Edit Image Dialog */}
      {editingImage && (
        <Dialog open={!!editingImage} onOpenChange={(open) => !open && setEditingImage(null)}>
          <DialogContent className="max-w-2xl min-h-[400px] rounded-2xl py-10 px-8 shadow-2xl overflow-auto">
            <DialogHeader>
              <DialogTitle>Edit Image</DialogTitle>
              <DialogDescription>Make changes to the selected gallery image.</DialogDescription>
            </DialogHeader>
            <form onSubmit={handleUpdateImage} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="edit-image-title">Image Title</Label>
                <Input id="edit-image-title" name="title" defaultValue={editingImage.title} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-gallery-image">Image</Label>
                <div className="relative h-48 w-full mb-2 rounded-md overflow-hidden">
                  <Image
                    src={editingImage.image || "/placeholder.svg"}
                    alt={editingImage.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Input id="edit-gallery-image" name="image" type="file" className="hidden" />
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full"
                    onClick={() => document.getElementById("edit-gallery-image")?.click()}
                  >
                    <Upload className="mr-2 h-4 w-4" /> Change Image
                  </Button>
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" className="bg-green-500 hover:bg-green-600">
                  Save Changes
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}
