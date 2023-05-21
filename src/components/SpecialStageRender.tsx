import type { FC } from "react";
import React from "react";
import { shallow } from "zustand/shallow";
import { useSplatoonLocale } from "../store/use-locale";

export interface SpecialStageRenderProps {
  id: string;
  mapName: string;
  stage: "grill" | "goldrush";
}

export const SpecialStageRender: FC<SpecialStageRenderProps> = ({
  id,
  mapName,
  stage,
}) => {
  const locale = useSplatoonLocale((state) => state.locale, shallow);
  return (
    <div
      className={
        "flex w-full max-w-full flex-col items-center justify-center gap-1 p-2"
      }
    >
      <div className="flex max-w-full flex-col gap-4 pt-12">
        <div className="flex gap-2">
          <img
            className={"h-full object-cover"}
            src={
              "/images/special_stages/" +
              stage +
              "_" +
              mapName.toLowerCase().replaceAll(" ", "_") +
              ".png"
            }
            alt={mapName}
          />
        </div>
      </div>
      <h2 className={"-translate-y-1/2 rounded-md bg-black px-8 py-4 text-2xl"}>
        {locale.stages[id].name} {stage === "grill" ? "그릴" : "빛파리"}{" "}
        추천장소
      </h2>
    </div>
  );
};
