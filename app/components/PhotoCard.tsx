import { useAtom } from "jotai";
import React from "react";
import { selectPhoto } from "~/store";
import { PhotoCardProps } from "~/types/components";
const PhotoCard: React.FC<PhotoCardProps> = (props) => {
  const [, setSelected] = useAtom(selectPhoto);

  const handleClick = () => {
    setSelected({
      ...props,
    });
    document?.getElementById("dislog-modal")?.showModal();
    // setOpen(true);
  };

  return (
    <div
      className="w-84 shadow-md rounded-xl duration-300 sm:hover:scale-105 cursor-pointer "
      role="button"
      onClick={handleClick}
    >
      <img
        // className=" w-84 h-63 aspect-[4/3] object-cover rounded-t-xl lg:rounded-xl duration-300 sm:hover:scale-105 sm:hover:shadow-xl cursor-pointer "
        className="aspect-[4/3] object-cover rounded-t-xl lg:rounded-xl "
        width={336}
        height={252}
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
              ? "f/" + Number(props.customMetadata?.f_number).toFixed(1)
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
