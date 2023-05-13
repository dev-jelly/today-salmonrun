import { create } from "zustand";

export interface PageState {
  page: number;
  setPage: (page: number) => void;
}
export const usePage = create<PageState>((set) => ({
  page: 0,
  setPage: (page: number) => set({ page: page > 4 ? 4 : page < 0 ? 0 : page }),
}));
