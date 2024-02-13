import { atom } from "jotai";
import { PhotoCardProps } from "./types/components";

export const openView = atom<boolean>(false);
export const selectPhoto = atom<PhotoCardProps>({
  key: "",
  etag: "",
  customMetadata: {},
  size: 0,
  uploaded: "",
  url: "",
});

export const themes = atom<"wireframe" | "black">("wireframe");
