/* eslint-disable react/prop-types */
import { Modal, ModalContent, ModalBody, ModalFooter } from "@nextui-org/modal";
import { useAtom } from "jotai";
import { openView, selectPhoto, themes } from "~/store";
import { ClientOnly } from "remix-utils/client-only";
const PhotoViewModel = () => {
  const [open, setOpen] = useAtom(openView);
  const [theme] = useAtom(themes);
  const [selected] = useAtom(selectPhoto);

  return (
    <Modal
      size="full"
      role="dialog"
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
                  src={`${selected.url}`}
                  alt={selected.key}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </ModalBody>
            {!!selected.customMetadata && !!selected.customMetadata.time && (
              <ModalFooter>
                <div className="absolute bottom-4 left-4">
                  <p className="text-lg font-bold text-cyan-300">
                    {selected.customMetadata?.device_name}
                  </p>
                  <div className="flex flex-row gap-2">
                    <p className="text-lg font-bold text-cyan-300">
                      ISO{selected.customMetadata?.iso}
                    </p>
                    <p className="text-lg font-bold text-cyan-300">
                      F{selected.customMetadata?.f_number}
                    </p>
                    <p className="text-lg font-bold text-cyan-300">
                      {selected.customMetadata?.shutter_speed}
                    </p>
                    <p className="text-lg font-bold text-cyan-300">
                      {selected.customMetadata?.focal_length}mm
                    </p>
                  </div>
                  <p className="text-lg font-bold text-cyan-300">
                    {selected.customMetadata?.time.replaceAll(":", "-")}
                  </p>
                </div>
              </ModalFooter>
            )}
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default PhotoViewModel;
