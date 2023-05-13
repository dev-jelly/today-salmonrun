import React, { FC } from "react";
import { SalmonRunInfo } from "../types/salmon-run-info";
import { useSpringCarousel } from "react-spring-carousel";
import { WeaponRender } from "./WeaponRender";
import { WeaponLocale } from "../App";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import Header from "./Header";
import { usePage } from "../store/use-page";
import { Footer } from "./Footer";
import { NextArrow } from "./NextArrow";
import { PrevArrow } from "./PrevArrow";

export const SalmonRunList: FC<{
  salmons: SalmonRunInfo[];
  weaponLocale: WeaponLocale;
}> = ({ salmons, weaponLocale }) => {
  return (
    <div className={"h-screen w-screen overflow-scroll bg-splatoon-salmonRun"}>
      <Header />
      {salmons.map((salmon, index) => {
        return (
          <SalmonRun
            salmon={salmon}
            key={index}
            weaponLocale={weaponLocale}
            current={index === 0}
            index={index}
          />
        );
      })}
      <Footer />
    </div>
  );
};

type SalmonRunProps = {
  salmon: SalmonRunInfo;
  weaponLocale: WeaponLocale;
  current: boolean;
  index: number;
};

export const SalmonRun: FC<SalmonRunProps> = ({
  salmon,
  weaponLocale,
  current,
  index,
}) => {
  const { page, setPage } = usePage();
  const mapItem = {
    id: salmon.setting.coopStage.name,
  };
  const items = salmon.setting.weapons.map((w) => ({
    id: w.name,
    renderItem: (
      <WeaponRender
        {...w}
        locale={weaponLocale[w.__splatoon3ink_id]?.name ?? w.name}
      />
    ),
  }));
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
  console.log(
    "page: ",
    page,
    "index: ",
    index,
    "current: ",
    current,
    "salmon: ",
    salmon
  );

  return (
    <div
      className={`flex w-screen flex-col items-center justify-center bg-gray-800/10 ${
        index !== page ? "hidden" : ""
      }`}
    >
      <div className={"flex w-full items-center justify-around"}>
        <PrevArrow
          className={`${index === 0 ? "w-0 opacity-0" : ""}`}
          onClick={() => {
            setPage(page - 1);
          }}
        />
        <h1
          className={`p-4 text-center md:text-xl ${
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
        <NextArrow
          className={`${index === 4 ? "w-0 opacity-0" : ""}`}
          onClick={() => {
            setPage(page + 1);
          }}
        />
      </div>
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
