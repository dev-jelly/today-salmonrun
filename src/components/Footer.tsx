import type { FC } from "react";
import { GithubIcon } from "./icons/GithubIcon";

export interface FooterProps {}

export const Footer: FC<FooterProps> = () => {
  return (
    <footer className=" bg-splatoon-salmonRun py-4 sm:py-12 ">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 pb-4 lg:px-8">
        <p className="text-center text-xs leading-5 text-gray-200">
          &copy; 2023 Developed by
          <a href="https://github.com/dev-jelly" className={"text-lime-300"}>
            DevJelly
          </a>
          . Inspired By{" "}
          <a
            href="https://www.youtube.com/@kae3208"
            className={"text-lime-300"}
          >
            @Kae
          </a>
          {". "}
          This website is not affiliated with Nintendo
        </p>
      </div>
      <a
        href={"https://github.com/dev-jelly/today-salmonrun"}
        className={
          "flex cursor-pointer justify-center fill-black text-center hover:fill-gray-700"
        }
      >
        <GithubIcon />
      </a>
    </footer>
  );
};
