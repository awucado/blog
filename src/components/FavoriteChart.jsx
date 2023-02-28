import React from "react";

export const Chart = ({ children, title }) => {
  return (
    <div>
      <div className="text-center py-2 px-4 bg-blue-600 uppercase font-bold">
        {title}
      </div>
      <div className=" justify-items-center bg-white flex-col flex p-4 gap-4 max-h-40 flex-wrap">
        {children}
      </div>
    </div>
  );
};

export const ChartItem = ({ name, author, textCentered }) => {
  return (
    <div className={textCentered && "text-center"}>
      <p className="leading-5 font-semibold uppercase text-blue-600 text-base">
        {name}
      </p>
      <p className="leading-5 text-black text-base ">{author}</p>
    </div>
  );
};
