"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ThemeToggle } from "../components/theme-toggle";
import { PhotoDialog } from "../components/photo-dialog";
import { Card, CardContent } from "@/components/ui/card";
import { PhotoSkeleton } from "../components/photo-skeleton";

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

const photos: Photo[] = [
  {
    id: 1,
    src: "/placeholder.svg?height=400&width=400",
    title: "Mountain Sunrise",
    description:
      "A breathtaking sunrise over the mountain peaks, captured during a hiking expedition in the early morning hours.",
    photographer: "Alex Johnson",
    location: "Rocky Mountains, Colorado",
    dateTaken: "March 15, 2024",
    camera: "Canon EOS R5",
    tags: ["landscape", "sunrise", "mountains", "nature"],
  },
  {
    id: 2,
    src: "/placeholder.svg?height=400&width=400",
    title: "City Lights",
    description:
      "The vibrant nightlife of the city captured from a rooftop, showcasing the beautiful urban landscape.",
    photographer: "Sarah Chen",
    location: "New York City, NY",
    dateTaken: "February 28, 2024",
    camera: "Sony A7R IV",
    tags: ["cityscape", "night", "urban", "lights"],
  },
  {
    id: 3,
    src: "/placeholder.svg?height=400&width=400",
    title: "Ocean Waves",
    description:
      "Powerful waves crashing against the rocky coastline during a stormy evening at the beach.",
    photographer: "Mike Rodriguez",
    location: "Big Sur, California",
    dateTaken: "January 12, 2024",
    camera: "Nikon D850",
    tags: ["seascape", "waves", "storm", "coast"],
  },
  {
    id: 4,
    src: "/placeholder.svg?height=400&width=400",
    title: "Forest Path",
    description:
      "A mysterious path winding through an ancient forest, dappled with morning sunlight filtering through the canopy.",
    photographer: "Emma Thompson",
    location: "Olympic National Park, WA",
    dateTaken: "April 3, 2024",
    camera: "Fujifilm X-T5",
    tags: ["forest", "path", "trees", "sunlight"],
  },
  {
    id: 5,
    src: "/placeholder.svg?height=400&width=400",
    title: "Desert Dunes",
    description:
      "Golden sand dunes stretching endlessly under a clear blue sky, creating mesmerizing patterns and shadows.",
    photographer: "David Kim",
    location: "Sahara Desert, Morocco",
    dateTaken: "November 20, 2023",
    camera: "Canon EOS R6",
    tags: ["desert", "dunes", "sand", "patterns"],
  },
  {
    id: 6,
    src: "/placeholder.svg?height=400&width=400",
    title: "Autumn Reflection",
    description:
      "A perfect mirror reflection of colorful autumn trees in a calm lake during peak fall foliage season.",
    photographer: "Lisa Park",
    location: "Vermont, USA",
    dateTaken: "October 8, 2023",
    camera: "Sony A7 III",
    tags: ["autumn", "reflection", "lake", "foliage"],
  },
  {
    id: 7,
    src: "/placeholder.svg?height=400&width=400",
    title: "Northern Lights",
    description:
      "The spectacular aurora borealis dancing across the night sky in brilliant greens and purples.",
    photographer: "James Wilson",
    location: "Iceland",
    dateTaken: "December 5, 2023",
    camera: "Nikon Z9",
    tags: ["aurora", "night sky", "iceland", "northern lights"],
  },
  {
    id: 8,
    src: "/placeholder.svg?height=400&width=400",
    title: "Flower Field",
    description:
      "A vast field of wildflowers in full bloom, creating a colorful carpet stretching to the horizon.",
    photographer: "Maria Garcia",
    location: "Tuscany, Italy",
    dateTaken: "May 18, 2024",
    camera: "Canon EOS R",
    tags: ["flowers", "field", "spring", "colorful"],
  },
  {
    id: 9,
    src: "/placeholder.svg?height=400&width=400",
    title: "Waterfall Mist",
    description:
      "A powerful waterfall cascading down moss-covered rocks, creating a fine mist that catches the sunlight.",
    photographer: "Tom Anderson",
    location: "Yosemite National Park, CA",
    dateTaken: "June 22, 2024",
    camera: "Fujifilm GFX 100S",
    tags: ["waterfall", "mist", "rocks", "nature"],
  },
];

export default function Home() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handlePhotoClick = (photo: Photo) => {
    setSelectedPhoto(photo);
    setDialogOpen(true);
  };

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="pt-8">
          <div className="container mx-auto px-1 py-4 flex items-center justify-between">
            <h1
              className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-300 tracking-wider"
              style={{
                fontFamily: "Slabo 27px, serif",
              }}
            >
              Jim Luo's Memory
            </h1>
            <ThemeToggle />
          </div>
        </header>

        {/* Gallery */}
        <main className="max-w-screen mx-auto px-4 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {isLoading
              ? Array.from({ length: 12 }).map((_, index) => (
                  <PhotoSkeleton key={index} />
                ))
              : photos.map((photo) => (
                  <Card
                    key={photo.id}
                    className="cursor-pointer overflow-hidden rounded-none py-0"
                    onClick={() => handlePhotoClick(photo)}
                  >
                    <CardContent className="p-0">
                      <div className="relative aspect-square overflow-hidden">
                        <Image
                          src={photo.src || "/placeholder.svg"}
                          alt={photo.title}
                          fill
                          className="object-cover"
                          quality={60}
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                        />
                      </div>
                      <div className="p-4 lg:hidden">
                        <h3 className="font-semibold text-lg mb-2">
                          {photo.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                          {photo.description}
                        </p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>by {photo.photographer}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
          </div>
        </main>

        {/* Photo Dialog */}
        <PhotoDialog
          photo={selectedPhoto}
          open={dialogOpen}
          onOpenChange={setDialogOpen}
        />
      </div>
    </>
  );
}
