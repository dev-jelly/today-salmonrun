import { create } from "zustand";

export type SplatoonLocale = {
  weapons: LocaleItem;
  stages: LocaleItem;
  gear: LocaleItem;
};

export type LocaleItem = {
  [key: string]: {
    name: string;
  };
};

export type MapLocaleStore = {
  locale: SplatoonLocale;
  setLocale: (locale: SplatoonLocale) => void;
};

export const useSplatoonLocale = create<MapLocaleStore>((set) => ({
  locale: { weapons: {}, stages: {}, gear: {} },
  setLocale: (locale: SplatoonLocale) => set({ locale }),
}));
