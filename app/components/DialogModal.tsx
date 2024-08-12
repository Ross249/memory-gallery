import { useAtom } from "jotai";
import React, { useMemo } from "react";
import { openView, selectPhoto, themes } from "~/store";

const DialogModal = () => {
  const [open, setOpen] = useAtom(openView);
  const [theme] = useAtom(themes);
  const [selected] = useAtom(selectPhoto);
  const backgroundClass = useMemo(
    () =>
      theme === "wireframe"
        ? "bg-gradient-to-r from-slate-50 to-neutral-200"
        : "bg-gradient-to-r from-slate-700 via-slate-950 to-gray-950",
    [theme]
  );

  const MetadataFooter = useMemo(() => {
    if (!selected.customMetadata || !selected.customMetadata.time) return null;
    return (
      <div className="absolute bottom-[0.1rem] md:bottom-4 left-4">
        <p className="text-lg font-bold text-cyan-300">
          {selected.customMetadata?.device_name}
        </p>
        <div className="flex flex-row gap-2">
          <p className="text-lg font-bold text-cyan-300">
            ISO{selected.customMetadata?.iso}
          </p>
          <p className="text-lg font-bold text-cyan-300">
            F{Number(selected.customMetadata?.f_number).toFixed(1)}
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
    );
  }, [selected.customMetadata]);
  return (
    <dialog id="dislog-modal" className={`modal`}>
      <div className="absolute">
        <img
          className="max-w-[90vw]  max-h-[calc(95vh-3em)] object-scale-down relative  bg-transparent shadow-2xl"
          src={`${selected.url}`}
          alt={selected.key}
          loading="lazy"
          decoding="async"
        />
      </div>
      {MetadataFooter}

      <form
        method="dialog"
        className={backgroundClass + ` modal-backdrop w-screen h-screen`}
      >
        <button>close</button>
      </form>
    </dialog>
  );
};

export default DialogModal;
