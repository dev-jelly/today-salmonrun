import type { FC } from "react";
import React from "react";
import { useSplatoonLocale } from "../store/use-locale";
import { WeaponImage } from "../types/weapon";

export interface IntroRenderProps {
  id: string;
  name: string;
  thumbnailImage: {
    url: string;
  };
  image: {
    url: string;
  };
  boss: string;
  weapons: WeaponImage[];
}

export const IntroRender: FC<IntroRenderProps> = (props) => {
  return (
    <div
      className={
        "flex h-full w-full flex-col md:flex-row items-center justify-center gap-1 md:p-2 md:gap-4"
      }
    >
      <MapRender {...props} />
      <WeaponAndBossRender weapons={props.weapons} boss={props.boss} />
    </div>
  );
};

function MapRender(props: Omit<IntroRenderProps, "weapons", "boss">) {
  const { id, image, name } = props;
  const { locale } = useSplatoonLocale();
  return (
    <div
      className={"flex flex-col items-center justify-center w-full md:w-1/2"}
    >
      <div className="flex justify-center items-center flex-col gap-4 pt-12 ">
        <div className="flex justify-center gap-2">
          <img src={image.url} alt={name} className={"object-scale-down"} />
        </div>
      </div>
      <h2
        className={
          "-translate-y-1/2 lg:w-3/4  rounded-md bg-black px-8 py-4 text-xl  md:text-2xl text-center"
        }
      >
        {locale.stages[id].name}
      </h2>
    </div>
  );
}

function WeaponAndBossRender(props: Pick<IntroRenderProps, "weapons", "boss">) {
  return (
    <div
      className={
        "flex gap-2 rounded-xl bg-black bg-opacity-70 p-8 shadow md:max-w-md lg:max-w-xl w-full min-w-fit md:w-1/2"
      }
    >
      <div className="flex min-w-fit h-full w-52 flex-col items-stretch rounded border border-white p-2">
        <h2 className={"text-center text-orange-400"}>{"{오늘의 무기}"}</h2>
        <div className="grid grid-cols-2  gap-2 ">
          {props.weapons.map((weapon) => (
            <img
              key={weapon.name}
              className={
                "h-12 w-12 md:h-24 md:w-24 justify-center object-cover hover:scale-125"
              }
              src={weapon.imageUrl}
              alt={weapon.name}
            />
          ))}
        </div>
      </div>
      <div className="flex h-full w-full flex-col items-center rounded border border-white p-2">
        <h2 className={"text-center text-orange-400"}>{"{오늘의 두목!}"}</h2>
        <div className="py-5 w-16 md:w-40 h-full ">
          <img
            className={"hover:scale-125 object-cover mx-auto"}
            src={`images/boses/${props.boss}_icon.png`}
            alt={props.boss}
          />
        </div>
      </div>
    </div>
  );
}
