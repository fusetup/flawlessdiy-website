"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseclient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { services } from "@/lib/services";
import { Select, SelectItem, SelectTrigger, SelectContent } from "@/components/ui/select";

export default function GalleryUpload({ onSuccess }: { onSuccess?: () => void } = {}) {
  const [files, setFiles] = useState<File[]>([]);
  const [fileStates, setFileStates] = useState<{ title: string; category: string }[]>([]);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  function handleFilesChange(e: React.ChangeEvent<HTMLInputElement>) {
    const selectedFiles = Array.from(e.target.files || []);
    setFiles(selectedFiles);
    setFileStates(
      selectedFiles.map((file) => ({
        title: file.name.replace(/\.[^/.]+$/, ""), // filename without extension
        category: "",
      }))
    );
  }

  function updateFileState(idx: number, key: "title" | "category", value: string) {
    setFileStates((prev) => {
      const next = [...prev];
      next[idx] = { ...next[idx], [key]: value };
      return next;
    });
  }

  async function handleUpload(e: React.FormEvent) {
    e.preventDefault();
    setSuccess(false);
    if (files.length === 0) {
      setMessage("Please select at least one image.");
      return;
    }
    if (fileStates.some((f) => !f.category)) {
      setMessage("Please select a category for each image.");
      return;
    }
    setUploading(true);
    setMessage("");
    let allSuccess = true;
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const { title, category } = fileStates[i];
      const fileExt = file.name.split(".").pop();
      const fileName = `${Date.now()}_${i}.${fileExt}`;
      const { error: storageError } = await supabase.storage
        .from("gallery")
        .upload(fileName, file);
      if (storageError) {
        setMessage(`Upload failed for ${file.name}: ${storageError.message}`);
        allSuccess = false;
        continue;
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
        setMessage(`Database error for ${file.name}: ${dbError.message}`);
        allSuccess = false;
      }
    }
    if (allSuccess) {
      setMessage("All images uploaded successfully!");
      setSuccess(true);
      setFiles([]);
      setFileStates([]);
      if (onSuccess) setTimeout(onSuccess, 1200);
    }
    setUploading(false);
  }

  return (
    <div className="max-w-md mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Upload Gallery Images</h2>
      <form onSubmit={handleUpload} className="space-y-4">
        <Input
          type="file"
          accept="image/*"
          multiple
          onChange={handleFilesChange}
        />
        {files.length > 0 && (
          <div className="space-y-4 max-h-80 overflow-y-auto pr-2">
            {files.map((file, idx) => (
              <div key={file.name + idx} className="border rounded p-3 flex flex-col gap-2 bg-gray-50">
                <div className="font-medium text-sm">{file.name}</div>
                <Input
                  type="text"
                  placeholder="Image title"
                  value={fileStates[idx]?.title || ""}
                  onChange={e => updateFileState(idx, "title", e.target.value)}
                />
                <Select value={fileStates[idx]?.category || ""} onValueChange={val => updateFileState(idx, "category", val)}>
                  <SelectTrigger>Select category</SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service.id} value={service.id.toString()}>
                        {service.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            ))}
          </div>
        )}
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
