import type { FC } from "react";
import React from "react";
import { useSplatoonLocale } from "../store/use-locale";
import { shallow } from "zustand/shallow";

export interface MapRenderProps {
  id: string;
  name: string;
  thumbnailImage: {
    url: string;
  };
  image: {
    url: string;
  };
}

export const MapRender: FC<MapRenderProps> = (props) => {
  const { id, name, image } = props;
  const locale = useSplatoonLocale((state) => state.locale, shallow);
  return (
    <div
      className={
        "flex h-full w-full flex-col items-center justify-center gap-1 p-2"
      }
    >
      <div className="flex flex-col gap-4 pt-12 ">
        <div className="flex gap-2">
          <img src={image.url} alt={name} className={"object-scale-down"} />
        </div>
      </div>
      <h2
        className={
          "text-md -translate-y-1/2 rounded-md bg-black px-8 py-4  md:text-2xl"
        }
      >
        {locale.stages[id].name}
      </h2>
    </div>
  );
};
