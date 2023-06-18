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

export type YoutubeTimeInfo = Record<
  MapName,
  {
    time: number;
    url: string;
  }
>;

export type YoutubeInfo = Record<"grill" | "goldrush", YoutubeTimeInfo>;
const youtubeInfo: YoutubeInfo = {
  grill: {
    gone_fission_hydroplant: {
      time: 186,
      url: "https://youtu.be/HyY0Dqv1Iwg?t=",
    },
    sockeye_station: {
      time: 76,
      url: "https://youtu.be/HyY0Dqv1Iwg?t=",
    },
    spawning_grounds: {
      time: 120,
      url: "https://youtu.be/HyY0Dqv1Iwg?t=",
    },
    "marooner's_bay": {
      time: 145,
      url: "https://youtu.be/HyY0Dqv1Iwg?t=",
    },
    "jammin'_salmon_junction": {
      time: 0,
      url: "",
    },
  },
  goldrush: {
    gone_fission_hydroplant: {
      time: 356,
      url: "https://youtu.be/1vmWeYzyTqQ?t=",
    },
    sockeye_station: {
      time: 705,
      url: "https://youtu.be/1vmWeYzyTqQ?t=",
    },
    spawning_grounds: {
      time: 933,
      url: "https://youtu.be/1vmWeYzyTqQ?t=",
    },
    "marooner's_bay": {
      time: 1115,
      url: "https://youtu.be/1vmWeYzyTqQ?t=",
    },
    "jammin'_salmon_junction": {
      time: 0,
      url: "",
    },
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
            "flex min-w-fit -translate-y-12 items-center rounded-md bg-black px-8 py-4 text-base sm:text-xl md:text-xl"
          }
        >
          <a
            href={`${youtubeInfo[stage][infoKey].url}${youtubeInfo[stage][infoKey].time}`}
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
