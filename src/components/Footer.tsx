import type { FC } from "react";

export interface FooterProps {}

export const Footer: FC<FooterProps> = () => {
  return (
    <footer className=" bg-splatoon-salmonRun ">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-10 sm:py-12 lg:px-8">
        <p className="text-center text-xs leading-5 text-gray-200">
          &copy; 2023{" "}
          <a href="https://github.com/dev-jelly" className={"text-lime-300"}>
            DevJelly
          </a>
          . All rights reserved. Inspired By{" "}
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
    </footer>
  );
};
