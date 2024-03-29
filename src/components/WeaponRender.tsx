import React, { FC } from "react";
import { Weapon, WeaponImage } from "../types/weapon";
import { weaponInfos } from "../const/weapon-info";

export const WeaponRender: FC<Weapon & { locale: string }> = (props) => {
  const { name, image, locale } = props;
  return (
    <div
      className={
        "flex h-full w-full items-center justify-center py-1 md:gap-1 md:p-2"
      }
    >
      <div className="min-h-[28rem] min-w-[22rem] overflow-hidden rounded-lg bg-black bg-opacity-70 p-8 shadow md:max-w-md lg:max-w-xl">
        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            <WeaponImageRender
              imageUrl={image.url}
              name={name}
              locale={locale}
            />
            <div className="h-40 w-full rounded border border-white p-2 outline-1 outline-white">
              <h2 className={"text-center text-orange-400"}>
                {"{잡기 쉬운 거물}"}
              </h2>
              <MonsterRender monster={weaponInfos[name]?.monster} />
            </div>
          </div>
          <div className="throughout w-30  h-full rounded border border-white p-2 outline-1 outline-white">
            <h2 className={"text-center text-orange-400"}>{"{상대법}"}</h2>
            <p
              className={"p-2 text-sm"}
              dangerouslySetInnerHTML={{
                __html: weaponInfos[name]?.walkthrough ?? "작성필요",
              }}
            />
          </div>
          <WarningRender warning={weaponInfos[name]?.warning} />
        </div>
      </div>
    </div>
  );
};

const WeaponImageRender: FC<WeaponImage> = ({ imageUrl, name, locale }) => {
  return (
    <div className="flex h-40 w-full flex-col items-center rounded border border-white p-2">
      <h2 className={"z-10 text-center  text-orange-400"}>{"{무기}"}</h2>
      <img
        className={"h-24 w-24 justify-center object-cover hover:scale-125"}
        src={imageUrl}
        alt={name}
      />
      <p className="text-xs">{locale}</p>
    </div>
  );
};

const WarningRender: FC<{ warning: string }> = ({
  warning,
}: {
  warning: string;
}) => {
  const textClass = warning === "없음" || !warning ? "" : "";

  return (
    <div
      className={
        "w-full rounded border border-white p-2 outline-1 outline-white"
      }
    >
      <h2 className={"text-center text-orange-400"}>{"{유의할 점}"}</h2>
      <div
        className={`prose break-normal p-2 text-sm text-white ${textClass}`}
        dangerouslySetInnerHTML={{
          __html: warning ?? "작성필요",
        }}
      ></div>
    </div>
  );
};

type MonsterRenderProps = {
  monster: string;
};

export const MonsterRender: FC<MonsterRenderProps> = ({ monster }) => {
  if (monster === "?") {
    return <div className={"mt-2 text-center text-2xl"}>{monster}</div>;
  }
  if (["all"].includes(monster) || !monster) {
    return <div className={"mt-10 text-center text-2xl"}>전부</div>;
  }
  if (!monster.match(/[A-Z]/gi)) {
    return (
      <div className={"mt-2 break-keep text-center text-2xl"}>{monster}</div>
    );
  }

  const monsters = monster.split(",");

  const monsterSizeClassName =
    monsters.length < 3 ? " mt-4 w-20 h-20" : " w-14 h-14";

  const className =
    monsters.length == 1
      ? " grid-cols-1"
      : monsters.length < 5
      ? " grid-cols-2"
      : " grid-cols-3";

  return (
    <div
      className={`col-end-auto row-end-auto grid grid-flow-row-dense items-center justify-center gap-2 ${className}`}
    >
      {monsters.map((monster) => {
        return (
          <img
            key={monster}
            src={"images/boses/" + monster + "_Icon.webp"}
            className={
              "mx-auto object-cover hover:scale-125" + monsterSizeClassName
            }
            alt={monster}
          />
        );
      })}
    </div>
  );
};
