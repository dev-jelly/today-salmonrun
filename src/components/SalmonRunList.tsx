import React, { FC } from "react";
import { SalmonRunInfo } from "../types/salmon-run-info";
import { useSpringCarousel } from "react-spring-carousel";
import { WeaponRender } from "./WeaponRender";
import { WeaponLocale } from "../App";
import { compareAsc, format } from "date-fns";
import { ko } from "date-fns/locale";

export const SalmonRunList: FC<{
  salmons: SalmonRunInfo[];
  weaponLocale: WeaponLocale;
}> = ({ salmons, weaponLocale }) => {
  return (
    <div className={"h-screen w-screen overflow-scroll bg-splatoon-salmonRun"}>
      <h1
        className={
          "fixed z-20 mb-12 h-12 w-full bg-splatoon-salmonRun pt-3 text-center  text-xl text-white"
        }
      >
        오늘 연어 한판
      </h1>
      <div className={"pt-12"}>
        {salmons.map((salmon, index) => {
          return (
            <SalmonRun
              salmon={salmon}
              key={index}
              weaponLocale={weaponLocale}
              current={index === 0}
            />
          );
        })}
      </div>
    </div>
  );
};

type SalmonRunProps = {
  salmon: SalmonRunInfo;
  weaponLocale: WeaponLocale;
  current: boolean;
};

export const SalmonRun: FC<SalmonRunProps> = ({
  salmon,
  weaponLocale,
  current,
}) => {
  const { carouselFragment, slideToPrevItem, slideToNextItem } =
    useSpringCarousel({
      withLoop: true,
      items: salmon.setting.weapons.map((w) => ({
        id: w.name,
        renderItem: (
          <WeaponRender
            {...w}
            locale={weaponLocale[w.__splatoon3ink_id]?.name ?? w.name}
          />
        ),
      })),
    });
  return (
    <div className={"flex w-screen flex-col items-center justify-center"}>
      <h1
        className={`w-full bg-gray-800 bg-opacity-20 p-4 text-center text-xl ${
          current ? "text-lime-400" : "text-white"
        }`}
      >
        {format(new Date(salmon.startTime), "M. dd. a h:mm", {
          locale: ko,
        })}{" "}
        ~{" "}
        {format(new Date(salmon.endTime), "M. dd. a h:mm", {
          locale: ko,
        })}
      </h1>
      <div className="salmonrun-background relative flex w-screen flex-col justify-center gap-4 overflow-hidden bg-opacity-70 p-2 pb-16 text-white">
        <button
          onClick={slideToPrevItem}
          className={"absolute left-0 z-10 h-full p-4"}
        >
          {" <<"}
        </button>
        <div className={"w-[calc(100%)]"}>{carouselFragment}</div>
        <button
          onClick={slideToNextItem}
          className={"absolute right-0 z-10 h-full p-4"}
        >
          {">> "}
        </button>
      </div>
    </div>
  );
};
