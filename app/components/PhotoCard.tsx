import { useAtom } from "jotai";
import React, { Suspense } from "react";
import { openView, selectPhoto } from "~/store";
import { PhotoCardProps } from "~/types/components";
import { ClientOnly } from "remix-utils/client-only";
const PhotoCard: React.FC<PhotoCardProps> = (props) => {
  const [, setOpen] = useAtom(openView);
  const [, setSelected] = useAtom(selectPhoto);

  return (
    <ClientOnly fallback={<div className="card skeleton max-w-full"></div>}>
      {() => (
        <div
          className="card  max-w-full   justify-center items-center"
          onClick={() => {
            setSelected({
              ...props,
            });
            setOpen(true);

            // !isOpen && onOpen();
          }}
        >
          <img
            className="rounded-none glass  shadow-xl sm:hover:scale-105 sm:after: ease-in-out duration-300 object-scale-down cursor-pointer"
            src={`${props.url}`}
            alt={`${props.url}`}
            loading="lazy"
          />
          {/* <div className=" card-body p-4">
        <p>detail</p>
      </div> */}
        </div>
      )}
    </ClientOnly>
  );
};

export default PhotoCard;
