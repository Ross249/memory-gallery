/* eslint-disable jsx-a11y/label-has-associated-control */
import type { MetaFunction } from "@remix-run/node";
import { atom } from "jotai";
import PhotoCard from "~/components/PhotoCard";
import PhotoViewModel from "~/components/PhotoViewModel";

export const meta: MetaFunction = () => {
  return [
    { title: `Jim Luo's Memory` },
    { name: "description", content: "Welcome to Jim Luo's Memory" },
    {
      tagName: "meta",
      name: "keywords",
      content: "gallery,photography,travel",
    },
  ];
};

export const openView = atom<boolean>(false);

export default function Index() {
  return (
    <div className="p-12 gap-4 m-0 w-full">
      <div className="flex justify-between flex-row ">
        <h1 className="text-3xl w-full mb-12">{`Jim Luo's Memory`}</h1>
        <label className="cursor-pointer grid place-items-center">
          <input
            type="checkbox"
            value="black"
            className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
          />
          <svg
            className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <svg
            className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
      </div>

      <div className="grid grid-cols-1 2xl:grid-cols-4 xl:grid-cols-3 gap-4 w-full  ">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
          <PhotoCard key={i} />
        ))}
      </div>
      <PhotoViewModel />
    </div>
  );
}
