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
      className="card rounded-none glass  shadow-xl cursor-pointer hover:scale-105 after: ease-in-out duration-300 "
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
      <figure>
        <img
          className="object-contain "
          src={`${props.Key}`}
          alt={`${props.Key}`}
          loading="lazy"
        />
      </figure>
      {/* <div className=" card-body p-4">
        <p>detail</p>
      </div> */}
    </div>
  );
};

export default PhotoCard;
