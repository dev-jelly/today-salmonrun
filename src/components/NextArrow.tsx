import type { FC } from "react";

export interface NextArrowProps {
  className: string;
  onClick: () => void;
}

export const NextArrow: FC<NextArrowProps> = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={
        "md:text-md h-12 w-14 rounded rounded-br-full rounded-tr-full bg-gray-800/20  px-1 py-1 text-xs text-lime-400 md:px-4" +
        props.className
      }
    >
      다음
    </button>
  );
};
