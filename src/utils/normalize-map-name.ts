export const normalizeMapName = (name: string): MapName => {
  return name.toLowerCase().replaceAll(" ", "_") as MapName;
};
export type MapName =
  | "gone_fission_hydroplant"
  | "sockeye_station"
  | "spawning_grounds"
  | "marooner's_bay"
  | "jammin'_salmon_junction";
