import React from "react";
import { IIconProps } from "./CartSolid";

const NextSolid = ({ filledColor, className }: IIconProps) => {
  return (
    <svg
      className={className || "w-10 h-10"}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clip-rule="evenodd"
        d="M15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L9.70711 18.7071C9.31658 19.0976 8.68342 19.0976 8.29289 18.7071C7.90237 18.3166 7.90237 17.6834 8.29289 17.2929L13.5858 12L8.29289 6.70711C7.90237 6.31658 7.90237 5.68342 8.29289 5.29289C8.68342 4.90237 9.31658 4.90237 9.70711 5.29289L15.7071 11.2929Z"
        fill={filledColor || "black"}
        fillRule="evenodd"
      />
    </svg>
  );
};

export default NextSolid;
