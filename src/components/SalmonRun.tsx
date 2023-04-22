import React, { FC } from "react";
import { SalmonRunInfo } from "../types/salmon-run-info";
import { useSpringCarousel } from "react-spring-carousel";
import { WeaponRender } from "./WeaponRender";
import { WeaponLocale } from "../App";

export const SalmonRun: FC<{
  salmons: SalmonRunInfo[];
  weaponLocale: WeaponLocale;
}> = ({ salmons, weaponLocale }) => {
  console.log(salmons[0].setting.weapons);
  console.log(weaponLocale);

  const { carouselFragment, slideToPrevItem, slideToNextItem } =
    useSpringCarousel({
      withLoop: true,
      items: salmons[0].setting.weapons.map((w) => ({
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
    <div className={"h-screen w-screen bg-splatoon-salmonRun"}>
      <h1
        className={"h-12 pt-3 text-center text-xl text-orange-600 text-white"}
      >
        오늘 연어 한판
      </h1>
      <div className="salmonrun-background flex h-screen w-screen flex-col justify-center gap-4 overflow-hidden bg-opacity-70 p-2 text-white">
        <button onClick={slideToPrevItem} className={"absolute left-4 z-10"}>
          {" <<"}
        </button>
        <div className={"w-[calc(100%)]"}>{carouselFragment}</div>
        <button onClick={slideToNextItem} className={"absolute right-4"}>
          {">> "}
        </button>
      </div>
    </div>
  );
};
