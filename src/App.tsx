import "./App.css";
import React, { FC, useEffect, useState } from "react";
import { SalmonRunInfo } from "./types/salmon-run-info";
import { SalmonRunList } from "./components/SalmonRunList";
import { SplatoonLocale, useSplatoonLocale } from "./store/use-locale";
import { shallow } from "zustand/shallow";

const App: FC = () => {
  const [salmons, setSalmons] = useState<SalmonRunInfo[]>([]);
  const setLocale = useSplatoonLocale((state) => state.setLocale, shallow);
  useEffect(() => {
    (async () => {
      const locales = await parsingKoreanLocaleWeapons();
      setLocale(locales);
      const infos = await parsingAboutSalmonRun();
      setSalmons(infos);
    })();
  }, []);
  if (salmons.length === 0) return <></>;
  return <SalmonRunList salmons={salmons} />;
};

export const parsingAboutSalmonRun = async (): Promise<SalmonRunInfo[]> => {
  const response = await fetch("https://splatoon3.ink/data/schedules.json");
  const body = await response.json();

  return body.data.coopGroupingSchedule.regularSchedules.nodes;
};

export const parsingKoreanLocaleWeapons = async (): Promise<SplatoonLocale> => {
  const response = await fetch("https://splatoon3.ink/data/locale/ko-KR.json");
  const locales = await response.json();

  return locales as SplatoonLocale;
};

export default App;
