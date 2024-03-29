import React, { FC, useEffect } from "react";
import { SalmonRunInfo } from "../types/salmon-run-info";
import { useSpringCarousel } from "react-spring-carousel";
import { WeaponRender } from "./WeaponRender";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import Header from "./Header";
import { usePage } from "../store/use-page";
import { Footer } from "./Footer";
import { NextArrow } from "./NextArrow";
import { PrevArrow } from "./PrevArrow";
import { IntroRender } from "./IntroRender";
import { useSplatoonLocale } from "../store/use-locale";
import { animated, useSpring } from "react-spring";
import { SpecialStageRender } from "./SpecialStageRender";
import { normalizeMapName } from "../utils/normalize-map-name";

export const SalmonRunList: FC<{
  salmons: SalmonRunInfo[];
}> = ({ salmons }) => {
  return (
    <div className={"h-screen w-screen overflow-scroll bg-splatoon-salmonRun"}>
      <Header />
      {salmons.map((salmon, index) => {
        return (
          <SalmonRun
            salmon={salmon}
            key={index}
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
  current: boolean;
  index: number;
};

const maps = [
  "gone_fission_hydroplant",
  "sockeye_station",
  "spawning_grounds",
  "marooner's_bay",
  "jammin'_salmon_junction",
];

export const SalmonRun: FC<SalmonRunProps> = ({ salmon, current, index }) => {
  const { page, setPage } = usePage();
  const locale = useSplatoonLocale((state) => state.locale);
  const mapItem = {
    id: salmon.setting.coopStage.name,
    renderItem: (
      <IntroRender
        name={salmon.setting.coopStage.name}
        image={salmon.setting.coopStage.image}
        id={salmon.setting.coopStage.id}
        thumbnailImage={salmon.setting.coopStage.thumbnailImage}
        boss={salmon.__splatoon3ink_king_salmonid_guess}
        weapons={salmon.setting.weapons.map((w) => ({
          ...w,
          imageUrl: w.image.url,
          locale: locale.weapons[w.__splatoon3ink_id]?.name ?? w.name,
        }))}
      />
    ),
  };
  const weaponItems = salmon.setting.weapons.map((w) => ({
    id: w.name,
    renderItem: (
      <WeaponRender
        {...w}
        locale={locale.weapons[w.__splatoon3ink_id]?.name ?? w.name}
      />
    ),
  }));

  const grillStage = {
    id: "Griller",
    renderItem: (
      <SpecialStageRender
        id={salmon.setting.coopStage.id}
        mapName={salmon.setting.coopStage.name}
        stage={"grill"}
      />
    ),
  };

  const goldrushStage = {
    id: "Goldrush",
    renderItem: (
      <SpecialStageRender
        id={salmon.setting.coopStage.id}
        mapName={salmon.setting.coopStage.name}
        stage={"goldrush"}
      />
    ),
  };

  const map = normalizeMapName(salmon.setting.coopStage.name);

  const { carouselFragment, slideToPrevItem, slideToNextItem, slideToItem } =
    useSpringCarousel({
      withLoop: true,
      items: maps.includes(map)
        ? [mapItem, ...weaponItems, grillStage, goldrushStage]
        : [mapItem, ...weaponItems],
    });

  const [animationStyle] = useSpring(
    () => ({
      from: { opacity: 0 },
      to: { opacity: 1 },
      reset: true,
    }),
    [page]
  );

  useEffect(() => {
    slideToItem(0);
    return () => {
      slideToItem(0);
    };
  }, [page]);

  return (
    <div
      className={`flex w-screen flex-col items-center justify-center bg-gray-800/10 ${
        index !== page ? "hidden" : ""
      }`}
    >
      <div className={"flex w-full items-center justify-around py-2"}>
        <PrevArrow
          className={`${index === 0 ? "w-0 opacity-0" : ""}`}
          onClick={() => {
            setPage(page - 1);
          }}
        />
        <h1
          className={`p-2 text-center text-sm md:p-4  md:text-xl ${
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
      <animated.div
        style={animationStyle}
        className="salmonrun-background relative flex w-screen flex-col justify-center  overflow-hidden bg-opacity-70 text-white"
      >
        <div className={"w-screen"}>{carouselFragment}</div>
        <button
          onClick={slideToPrevItem}
          className={
            "absolute left-0 z-10 h-full p-4 sm:bg-gray-800/10 sm:hover:bg-gray-800/40"
          }
        >
          {" <<"}
        </button>
        <button
          onClick={slideToNextItem}
          className={
            "absolute right-0 z-10 h-full p-4 sm:bg-gray-800/10 sm:hover:bg-gray-800/40"
          }
        >
          {">> "}
        </button>
      </animated.div>
    </div>
  );
};
