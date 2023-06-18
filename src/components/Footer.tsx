import type { FC } from "react";
import React from "react";
import { LinkIcon } from "@heroicons/react/20/solid";
import { TwitterIcon } from "./icons/TwitterIcon";
import { FacebookIcon } from "./icons/FacebookIcon";

export interface FooterProps {}

export const Footer: FC<FooterProps> = () => {
  return (
    <footer className=" bg-splatoon-salmonRun py-4 sm:py-12 ">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 pb-4 lg:px-8">
        <p className="text-center text-xs leading-5 text-gray-200">
          &copy; 2023 Developed by{" "}
          <a href="https://github.com/dev-jelly" className={"text-lime-300"}>
            @DevJelly
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

      <SocialShare />
    </footer>
  );
};

const SocialShare = () => {
  const url = "https://dev-jelly.github.io/today-salmonrun";
  const title = "초코야! 오늘 연어한판?!";

  const twitterShareUrl = `https://twitter.com/share?url=${encodeURIComponent(
    url
  )}&text=${encodeURIComponent(title)}`;
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    url
  )}`;

  const copyLink = () => {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        alert("Link copied to clipboard");
      })
      .catch((err) => {
        console.error("Could not copy text: ", err);
      });
  };

  return (
    <div className={"p-4"}>
      <h3 className={"text-center text-white"}>Share</h3>
      <div className="flex justify-center space-x-4 pt-2">
        <a href={twitterShareUrl} target="_blank" rel="noopener noreferrer">
          <TwitterIcon className="h-6 w-6 fill-blue-500" />
        </a>
        <a href={facebookShareUrl} target="_blank" rel="noopener noreferrer">
          <FacebookIcon className="h-6 w-6 fill-blue-600" />
        </a>
        <button onClick={copyLink}>
          <LinkIcon className="h-6 w-6 fill-white" />
        </button>
      </div>
    </div>
  );
};
