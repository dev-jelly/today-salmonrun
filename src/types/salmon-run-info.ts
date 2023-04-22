import {Weapon} from "./weapon";
export type SalmonRunInfo = {
  startTime: string;
  endTime: string;
  setting: {
    __typename: string;
    __isCoopSetting: string;
    coopStage: {
      id: string;
      name: string;
      thumbnailImage: {
        url: string;
      }
      image: {
        url: string;
      }
    },
    weapons: Weapon[],
  }
  __splatoon3ink_king_salmonid_guess: string;

}
