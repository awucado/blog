import React from "react"

export const CenteredGrid = ({ children, ...rest }) => {
  return (
    <article
      className="max-w-2xl flex justify-center"
      {...rest}
    >
      {children}
    </article>
  );
}
