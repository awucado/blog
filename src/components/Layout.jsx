import React from "react";
import { transition } from "../data/theme";

export const Hr = (props) => {
  return (
    <hr
      className={`my-[3px] border-none h-[1px] transition ${transition}`}
      //background="borderSubtle"
      {...props}
    />
  );
};

