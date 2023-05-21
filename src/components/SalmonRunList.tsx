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
import { MapRender } from "./MapRender";
import { useSplatoonLocale } from "../store/use-locale";
import { animated, useSpring, useTransition } from "react-spring";
import { SpecialStageRender } from "./SpecialStageRender";

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

export const SalmonRun: FC<SalmonRunProps> = ({ salmon, current, index }) => {
  const { page, setPage } = usePage();
  const locale = useSplatoonLocale((state) => state.locale);
  const mapItem = {
    id: salmon.setting.coopStage.name,
    renderItem: (
      <MapRender
        name={salmon.setting.coopStage.name}
        image={salmon.setting.coopStage.image}
        id={salmon.setting.coopStage.id}
        thumbnailImage={salmon.setting.coopStage.thumbnailImage}
      />
    ),
  };
  const items = salmon.setting.weapons.map((w) => ({
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

  const { carouselFragment, slideToPrevItem, slideToNextItem, slideToItem } =
    useSpringCarousel({
      withLoop: true,
      items: [mapItem, ...items, grillStage, goldrushStage],
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
        className="salmonrun-background relative flex w-screen flex-col justify-center gap-2 overflow-hidden bg-opacity-70 py-2 text-white md:pb-16"
      >
        <div className={"w-screen"}>{carouselFragment}</div>
        <button
          onClick={slideToPrevItem}
          className={"absolute left-0 z-10 h-full p-4"}
        >
          {" <<"}
        </button>
        <button
          onClick={slideToNextItem}
          className={"absolute right-0 z-10 h-full p-4"}
        >
          {">> "}
        </button>
      </animated.div>
    </div>
  );
};
