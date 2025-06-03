"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";

import { Calendar, Camera, MapPin, User, X } from "lucide-react";
import Image from "next/image";

interface Photo {
  id: number;
  src: string;
  title: string;
  description: string;
  photographer: string;
  location: string;
  dateTaken: string;
  camera: string;
  tags: string[];
}

interface PhotoDialogProps {
  photo: Photo | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function PhotoDialog({ photo, open, onOpenChange }: PhotoDialogProps) {
  if (!photo) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-full max-h-screen w-screen h-screen p-0 border-none bg-background">
        <div className="absolute top-4 right-4 z-10">
          <button
            onClick={() => onOpenChange(false)}
            className="rounded-full bg-background/80 backdrop-blur p-2 text-foreground hover:bg-background/90 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Full-screen image */}
        <div className="relative w-full h-full">
          <Image
            src={photo.src || "/placeholder.svg"}
            alt={photo.title}
            fill
            className="object-contain"
            sizes="100vw"
          />

          {/* Information overlay in bottom left */}
          <div className="absolute bottom-4 left-4 max-w-sm bg-background/90 backdrop-blur rounded-lg p-4 text-sm">
            <h2 className="text-lg font-bold mb-2">{photo.title}</h2>
            <p className="text-muted-foreground mb-3 text-xs line-clamp-2">
              {photo.description}
            </p>

            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <User className="h-3 w-3" />
                <span className="font-medium">Photographer:</span>
                <span>{photo.photographer}</span>
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="h-3 w-3" />
                <span className="font-medium">Location:</span>
                <span>{photo.location}</span>
              </div>

              <div className="flex items-center gap-2">
                <Calendar className="h-3 w-3" />
                <span className="font-medium">Date:</span>
                <span>{photo.dateTaken}</span>
              </div>

              <div className="flex items-center gap-2">
                <Camera className="h-3 w-3" />
                <span className="font-medium">Camera:</span>
                <span>{photo.camera}</span>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
