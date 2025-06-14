"use client";

import { useState, useEffect, use } from "react";
import Image from "next/image";
import { ThemeToggle } from "../components/theme-toggle";
import { PhotoDialog } from "../components/photo-dialog";
import { Card, CardContent } from "@/components/ui/card";
import { PhotoSkeleton } from "../components/photo-skeleton";
import useSWR from "swr";
import { PhotoCardProps } from "@/types/common";

const fetcher = async (url: string) => {
  const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
    headers: {
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST,GET",
      "Content-Security-Policy": "script-src 'self' *.cloudflareinsights.com;",
    },
    next: { revalidate: 43200 },
    method: "GET",
  });

  const res = await resp.json();

  return res;
};

export default function Home() {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoCardProps | null>(
    null
  );
  const [dialogOpen, setDialogOpen] = useState(false);

  const homePagePhotos = useSWR<{ photos: PhotoCardProps[]; success: boolean }>(
    "/list_photos",
    () => fetcher("/list_photos")
  );

  const handlePhotoClick = (photo: PhotoCardProps) => {
    setSelectedPhoto(photo);
    setDialogOpen(true);
  };

  return (
    <>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="pt-8">
          <div className="container mx-auto px-1 py-4 flex items-center justify-between">
            <h1
              className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-300 tracking-wider "
              style={{
                fontFamily: "var(--font-slabo)",
              }}
            >
              Jim Luo's Memory
            </h1>
            <ThemeToggle />
          </div>
        </header>

        {/* Gallery */}
        <main className="max-w-screen mx-auto px-4 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {!homePagePhotos.data
              ? Array.from({ length: 12 }).map((_, index) => (
                  <PhotoSkeleton key={index} />
                ))
              : homePagePhotos.data?.photos.map((photo, index) => (
                  <Card
                    key={photo.key}
                    className="cursor-pointer overflow-hidden rounded-none  py-0"
                    onClick={() => handlePhotoClick(photo)}
                  >
                    <CardContent className="p-0">
                      <div className="relative aspect-square overflow-hidden">
                        <Image
                          src={photo.key}
                          alt={photo.key}
                          priority={index < 3} // Prioritize first 3 images
                          fill
                          className="object-cover lg:hover:scale-105 lg:transition-transform lg:duration-300"
                          quality={60}
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                        />
                      </div>
                      <div className="px-4 py-3 w-85 lg:hidden ">
                        <span className="text-gray-600 mr-3 uppercase text-xs dark:text-gray-100">
                          Date
                        </span>
                        <p className="text-lg font-bold  truncate block capitalize dark:text-gray-100">
                          {photo.customMetadata?.time?.replaceAll(":", "-")}
                        </p>
                        <div className="flex items-center ">
                          <p className="text-sm  text-gray-600 cursor-auto dark:text-gray-100">
                            {!!photo.customMetadata?.iso
                              ? "ISO" + photo.customMetadata?.iso
                              : ""}
                          </p>
                          <p className="text-sm text-gray-600 cursor-auto ml-2 dark:text-gray-100">
                            {!!photo.customMetadata?.focal_length
                              ? photo.customMetadata?.focal_length + "mm"
                              : ""}
                          </p>
                          <p className="text-sm text-gray-600 cursor-auto ml-2 dark:text-gray-100">
                            {!!photo.customMetadata?.f_number
                              ? "f/" +
                                Number(photo.customMetadata?.f_number).toFixed(
                                  1
                                )
                              : ""}
                          </p>
                          <p className="text-sm text-gray-600 cursor-auto ml-2 dark:text-gray-100">
                            {!!photo.customMetadata?.shutter_speed
                              ? photo.customMetadata?.shutter_speed
                              : ""}
                          </p>
                          <div className="ml-auto"></div>
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
