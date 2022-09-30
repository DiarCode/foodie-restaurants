import React from "react";
import { IIconProps } from "./CartSolid";

const TengeSolid = ({ className, filledColor }: IIconProps) => {
  return (
    <svg
      className={className || "w-10 h-10"}
      viewBox="0 0 384 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={filledColor || "#00000"}
        d="M32 96h320c17.67 0 32-14.31 32-32s-14.33-32-32-32H32C14.33 32 0 46.31 0 64S14.33 96 32 96zM352 160H32C14.33 160 0 174.3 0 192s14.33 32 32 32h128v224c0 17.69 14.33 32 32 32s32-14.31 32-32V224h128c17.67 0 32-14.31 32-32S369.7 160 352 160z"
      />
    </svg>
  );
};

export default TengeSolid;
