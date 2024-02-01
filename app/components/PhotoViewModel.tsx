/* eslint-disable react/prop-types */
import { useAtom } from "jotai";
import { openView } from "~/routes/_index";
import { PhotoViewModalProps } from "~/types/components";

const PhotoViewModel: React.FC<PhotoViewModalProps> = () => {
  const [open, setOpen] = useAtom(openView);
  return (
    <dialog id="my_modal_2" className="modal" open={open}>
      <div className="modal-box p-0 ">
        <figure>
          <img
            className="object-scale-down"
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="car!"
            loading="lazy"
          />
        </figure>
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

export default PhotoViewModel;
