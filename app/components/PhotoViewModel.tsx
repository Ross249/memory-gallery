/* eslint-disable react/prop-types */
import { Modal, ModalContent, ModalBody, ModalFooter } from "@nextui-org/modal";
import { useAtom } from "jotai";
import React from "react";
import { openView, selectPhoto, themes } from "~/routes/_index";

const PhotoViewModel = () => {
  const [open, setOpen] = useAtom(openView);
  const [theme] = useAtom(themes);
  const [selected] = useAtom(selectPhoto);

  return (
    <Modal
      size="full"
      isOpen={open}
      onClose={() => {
        setOpen(false);
      }}
      className={`${
        theme === "wireframe"
          ? "bg-gradient-to-r from-slate-50 to-neutral-200"
          : "bg-gradient-to-r  from-slate-700  via-slate-950 to-gray-950 "
      }`}
      closeButton={<div className="opacity-0"></div>}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalBody
              onClick={onClose}
              className="flex justify-center items-center relative "
            >
              <div className="w-[90vw]  max-h-[calc(95vh-3em)] bg-transparent flex items-center justify-center relative ">
                <img
                  className="object-scale-down relative  bg-transparent  w-auto h-full shadow-2xl"
                  src={`${selected.Key}`}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </ModalBody>
            <ModalFooter>
              <div className="absolute bottom-4 left-4">
                <p className="text-lg font-bold text-cyan-300">detail</p>
              </div>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default React.memo(PhotoViewModel);
