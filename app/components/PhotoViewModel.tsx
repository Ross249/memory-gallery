/* eslint-disable react/prop-types */
import { useAtom } from "jotai";
import React from "react";
import { openView, selectPhoto } from "~/routes/_index";

const PhotoViewModel = () => {
  const [open, setOpen] = useAtom(openView);
  const [selected] = useAtom(selectPhoto);

  return (
    <dialog id="my_modal_2" className="modal" open={open}>
      <div className="modal-box p-0  max-w-[64rem] flex flex-1 justify-center items-center ">
        <img
          className="object-scale-down relative "
          src={`${selected.Key}`}
          alt=""
          loading="lazy"
        />
      </div>
      <div className="absolute bottom-4 left-4">
        <p className="text-lg font-bold text-cyan-300">detail</p>
      </div>
      <form
        method="dialog"
        className="modal-backdrop bg-gradient-to-r from-slate-50 to-neutral-200"
      >
        <button onClick={() => setOpen(false)}>close</button>
      </form>
    </dialog>
  );
};

export default React.memo(PhotoViewModel);
