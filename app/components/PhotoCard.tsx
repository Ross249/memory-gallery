import { useAtom } from "jotai";
import React from "react";
import { ClientOnly } from "remix-utils/client-only";
import { openView, selectPhoto } from "~/store";
import { PhotoCardProps } from "~/types/components";
import SkeletonCard from "./SkeletonCard";
const PhotoCard: React.FC<PhotoCardProps> = (props) => {
  const [, setOpen] = useAtom(openView);
  const [, setSelected] = useAtom(selectPhoto);

  return (
    <div
      className="w-84 shadow-md rounded-xl duration-300 sm:hover:scale-105 cursor-pointer "
      key={props.url}
      onClick={() => {
        setSelected({
          ...props,
        });
        setOpen(true);
      }}
    >
      <img
        // className=" w-84 h-63 aspect-[4/3] object-cover rounded-t-xl lg:rounded-xl duration-300 sm:hover:scale-105 sm:hover:shadow-xl cursor-pointer "
        className="w-84 h-63 aspect-[4/3] object-cover rounded-t-xl lg:rounded-xl "
        src={`${props.url}`}
        alt={`${props.url}`}
        loading="lazy"
      />
      <div className="px-4 py-3 w-85 lg:hidden bg-white rounded-b-xl">
        <span className="text-gray-400 mr-3 uppercase text-xs">Date</span>
        <p className="text-lg font-bold  truncate block capitalize">
          {props.customMetadata?.time?.replaceAll(":", "-")}
        </p>
        <div className="flex items-center">
          <p className="text-sm  text-gray-600 cursor-auto my-3">
            {!!props.customMetadata?.iso
              ? "ISO" + props.customMetadata?.iso
              : ""}
          </p>
          <p className="text-sm text-gray-600 cursor-auto ml-2">
            {!!props.customMetadata?.focal_length
              ? props.customMetadata?.focal_length + "mm"
              : ""}
          </p>
          <p className="text-sm text-gray-600 cursor-auto ml-2">
            {!!props.customMetadata?.f_number
              ? "f/" + props.customMetadata?.f_number
              : ""}
          </p>
          <p className="text-sm text-gray-600 cursor-auto ml-2">
            {!!props.customMetadata?.shutter_speed
              ? props.customMetadata?.shutter_speed
              : ""}
          </p>
          <div className="ml-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default PhotoCard;
