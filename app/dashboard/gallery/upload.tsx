"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseclient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { services } from "@/lib/services";
import { Select, SelectItem, SelectTrigger, SelectContent } from "@/components/ui/select";

export default function GalleryUpload({ onSuccess }: { onSuccess?: () => void } = {}) {
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  async function handleUpload(e: React.FormEvent) {
    e.preventDefault();
    setSuccess(false);
    if (!file || !category) {
      setMessage("Please select a file and category.");
      return;
    }
    setUploading(true);
    setMessage("");
    const fileExt = file.name.split(".").pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const { data: storageData, error: storageError } = await supabase.storage
      .from("gallery")
      .upload(fileName, file);
    if (storageError) {
      setMessage("Upload failed: " + storageError.message);
      setUploading(false);
      return;
    }
    const url = supabase.storage.from("gallery").getPublicUrl(fileName).data.publicUrl;
    const { error: dbError } = await supabase.from("gallery_images").insert([
      {
        url,
        title,
        category_id: parseInt(category, 10),
      },
    ]);
    if (dbError) {
      setMessage("Database error: " + dbError.message);
    } else {
      setMessage("Image uploaded successfully!");
      setSuccess(true);
      setFile(null);
      setTitle("");
      setCategory("");
      if (onSuccess) setTimeout(onSuccess, 1200);
    }
    setUploading(false);
  }

  return (
    <div className="max-w-md mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Upload Gallery Image</h2>
      <form onSubmit={handleUpload} className="space-y-4">
        <Input
          type="file"
          accept="image/*"
          onChange={e => setFile(e.target.files?.[0] || null)}
        />
        <Input
          type="text"
          placeholder="Image title (optional)"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger>Select category</SelectTrigger>
          <SelectContent>
            {services.map((service) => (
              <SelectItem key={service.id} value={service.id.toString()}>
                {service.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button type="submit" disabled={uploading}>
          {uploading ? "Uploading..." : "Upload"}
        </Button>
        {message && (
          <div className={`text-sm mt-2 ${success ? "text-green-600" : "text-red-600"}`}>{message}</div>
        )}
      </form>
    </div>
  );
}
