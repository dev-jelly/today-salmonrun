import type { FC } from "react";
import { weaponInfos } from "../const/weapon-info";
import React from "react";
import { MonsterRender } from "./WeaponRender";

export interface MapRenderProps {
  id: string;
  name: string;
  thumbnailImage: {
    url: string;
  };
  image: {
    url: string;
  };
  locale: string;
}

export const MapRender: FC<MapRenderProps> = (props) => {
  const { name, image, locale } = props;
  return (
    <div className={"flex h-full w-full items-center justify-center gap-1 p-2"}>
      <div className="flex flex-col gap-4">
        <div className="flex gap-2">
          <img src={image.url} alt={name} />
        </div>
        <h2>{locale}</h2>
      </div>
    </div>
  );
};
