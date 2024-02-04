import { useAtom } from "jotai";
import React from "react";
import { openView, selectPhoto } from "~/routes/_index";
import { PhotoCardProps } from "~/types/components";

const PhotoCard: React.FC<PhotoCardProps> = (props) => {
  const [, setOpen] = useAtom(openView);

  const [, setSelected] = useAtom(selectPhoto);

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      className="card  cursor-pointer  justify-center items-center"
      onClick={() => {
        setSelected({
          Key: props.Key,
          ETag: props.ETag,
          LastModified: props.LastModified,
          Size: props.Size,
          StorageClass: props.StorageClass,
        });
        setOpen(true);
      }}
    >
      <img
        className="rounded-none glass  shadow-xl hover:scale-105 after: ease-in-out duration-300 object-scale-down"
        src={`${props.Key}`}
        alt={`${props.Key}`}
        loading="lazy"
      />
      {/* <div className=" card-body p-4">
        <p>detail</p>
      </div> */}
    </div>
  );
};

export default PhotoCard;
