import "./App.css";
import React, { FC, useEffect, useState } from "react";
import { SalmonRunInfo } from "./types/salmon-run-info";
import { SalmonRunList } from "./components/SalmonRunList";

const App: FC = () => {
  const [salmons, setSalmons] = useState<SalmonRunInfo[]>([]);
  const [weaponLocale, setWeaponLocale] = useState<WeaponLocale>({});
  useEffect(() => {
    (async () => {
      const infos = await parsingAboutSalmonRun();
      setSalmons(infos);
      const weapons = await parsingKoreanLocaleWeapons();
      setWeaponLocale(weapons);
    })();
  }, []);
  if (salmons.length === 0) return <></>;
  return <SalmonRunList salmons={salmons} weaponLocale={weaponLocale} />;
};

export const parsingAboutSalmonRun = async (): Promise<SalmonRunInfo[]> => {
  const response = await fetch("https://splatoon3.ink/data/schedules.json");
  const body = await response.json();

  return body.data.coopGroupingSchedule.regularSchedules.nodes;
};

export type WeaponLocale = {
  [key: string]: {
    name: string;
  };
};

export const parsingKoreanLocaleWeapons = async (): Promise<WeaponLocale> => {
  const response = await fetch("https://splatoon3.ink/data/locale/ko-KR.json");
  const locales = await response.json();

  return locales.weapons as WeaponLocale;
};

export default App;
