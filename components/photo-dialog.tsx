"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { PhotoCardProps } from "@/types/common";

import { Aperture, Calendar, Camera, Wand, X } from "lucide-react";

interface PhotoDialogProps {
  photo: PhotoCardProps | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function PhotoDialog({ photo, open, onOpenChange }: PhotoDialogProps) {
  if (!photo) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTitle className="sr-only">{"Photo Details"}</DialogTitle>
      <DialogDescription className="sr-only">
        Shoot at {photo.customMetadata?.time} by Jim Luo
      </DialogDescription>
      <DialogContent
        className="max-w-full max-h-screen w-screen h-screen p-0 border-none bg-background rounded-none"
        style={{ borderRadius: 0 }}
      >
        <div className="absolute top-4 right-4 z-10">
          <button
            onClick={() => onOpenChange(false)}
            className="rounded-full bg-background/80 backdrop-blur p-2 text-foreground hover:bg-background/90 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Full-screen image */}
        <div
          className="relative w-full h-full"
          onClick={() => onOpenChange(false)}
        >
          {/* <Image
            src={photo.key || "/placeholder.svg"}
            alt={photo.key}
            fill
            className="object-contain"
            sizes="100vw"
          /> */}
          <img
            src={photo.key || "/placeholder.svg"}
            alt={photo.key}
            className="absolute inset-0 w-full h-full object-contain"
            loading="eager"
          />

          {/* Information overlay in bottom left */}
          <div className="absolute bottom-4 left-4 max-w-sm bg-background/50 backdrop-blur rounded-lg p-4 text-sm z-10 shadow-sm">
            <h2 className="text-lg font-bold mb-2">
              {photo.customMetadata?.device_name}
            </h2>
            <p className="text-muted-foreground mb-3 text-xs line-clamp-2">
              ISO{photo.customMetadata?.iso}
            </p>

            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <Aperture className="h-3 w-3" />
                <span className="font-medium">F</span>
                <span>{Number(photo.customMetadata?.f_number).toFixed(1)}</span>
              </div>

              <div className="flex items-center gap-2">
                <Wand className="h-3 w-3" />
                <span className="font-medium">Shutter Speed:</span>
                <span> {photo.customMetadata?.shutter_speed}</span>
              </div>

              <div className="flex items-center gap-2">
                <Camera className="h-3 w-3" />
                <span className="font-medium">Lens:</span>
                <span>{photo.customMetadata?.focal_length}mm</span>
              </div>

              <div className="flex items-center gap-2">
                <Calendar className="h-3 w-3" />
                <span className="font-medium">Date:</span>
                <span>{photo.customMetadata?.time?.replaceAll(":", "-")}</span>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
