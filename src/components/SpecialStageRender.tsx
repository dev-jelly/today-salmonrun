import type { FC } from "react";
import React from "react";
import { shallow } from "zustand/shallow";
import { useSplatoonLocale } from "../store/use-locale";
import { MapName, normalizeMapName } from "../utils/normalize-map-name";

export interface SpecialStageRenderProps {
  id: string;
  mapName: string;
  stage: "grill" | "goldrush";
}

export type YoutubeTimeInfo = Record<MapName, number>;

export type YoutubeInfo = Record<
  "grill" | "goldrush",
  Omit<YoutubeTimeInfo, "url"> & { url: string }
>;

const youtubeInfo: YoutubeInfo = {
  grill: {
    url: "https://youtu.be/HyY0Dqv1Iwg?t=",
    gone_fission_hydroplant: 186,
    sockeye_station: 76,
    spawning_grounds: 120,
    "grill_marooner's_bay": 145,
  },
  goldrush: {
    url: "https://youtu.be/1vmWeYzyTqQ?t=",
    gone_fission_hydroplant: 356,
    sockeye_station: 705,
    spawning_grounds: 933,
    "grill_marooner's_bay": 1115,
  },
};

export const SpecialStageRender: FC<SpecialStageRenderProps> = ({
  id,
  mapName,
  stage,
}) => {
  const locale = useSplatoonLocale((state) => state.locale, shallow);

  const infoKey = normalizeMapName(mapName);

  return (
    <div
      className={
        "flex w-full max-w-full flex-col items-center justify-center py-1  md:gap-1 md:p-2"
      }
    >
      <div className="flex h-64 h-[28rem] max-w-md flex-col gap-4 px-2">
        <img
          className={"h-full object-scale-down p-4"}
          src={"images/special_stages/" + stage + "_" + infoKey + ".png"}
          alt={mapName}
        />
        <h2
          className={
            "text-md flex -translate-y-1/2 items-center rounded-md bg-black px-8 py-4 sm:text-xl md:text-2xl"
          }
        >
          <a
            href={`${youtubeInfo[stage].url}${youtubeInfo[stage][infoKey]}`}
            target={"_blank"}
          >
            <img
              src="images/YouTubeLogo.svg"
              className={"mr-4 w-12"}
              alt="Youtube's Logo"
            />
          </a>
          {locale.stages[id].name} {stage === "grill" ? "그릴" : "빛파리"} 추천
          위치
        </h2>
      </div>
    </div>
  );
};
