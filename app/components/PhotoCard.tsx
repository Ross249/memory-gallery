import { useAtom } from "jotai";
import React from "react";
import { openView } from "~/routes/_index";
import { PhotoCardProps } from "~/types/components";

const PhotoCard: React.FC<PhotoCardProps> = () => {
  const [, setOpen] = useAtom(openView);
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      className="card rounded-none glass  shadow-xl cursor-pointer hover:scale-105 after: ease-in-out duration-300 "
      onClick={() => {
        setOpen(true);
      }}
    >
      <figure>
        <img
          className="object-contain "
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="car!"
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
