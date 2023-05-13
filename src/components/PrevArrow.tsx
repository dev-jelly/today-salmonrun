import type { FC } from "react";

export interface PrevArrowProps {
  className: string;
  onClick: () => void;
}

export const PrevArrow: FC<PrevArrowProps> = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={
        "md:text-md h-12 w-14 rounded rounded-bl-full rounded-tl-full bg-gray-800/20  px-1 py-1 text-xs text-lime-400 md:px-4 " +
        props.className
      }
    >
      이전
    </button>
  );
};
