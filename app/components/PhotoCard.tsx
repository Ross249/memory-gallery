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
      className="card    justify-center items-center"
      onClick={() => {
        setSelected({
          ...props,
        });
        setOpen(true);

        // !isOpen && onOpen();
      }}
    >
      <img
        className="rounded-none glass  shadow-xl hover:scale-105 after: ease-in-out duration-300 object-scale-down cursor-pointer"
        src={`${props.url}`}
        alt={`${props.url}`}
        loading="lazy"
      />
      {/* <div className=" card-body p-4">
        <p>detail</p>
      </div> */}
    </div>
  );
};

export default React.memo(PhotoCard);
