import React from "react";

interface Props {
  children: React.ReactNode;
  contentSrc: string;
  contentAlt: string;
}

export const AppLayout = ({ children, contentSrc, contentAlt }: Props) => {
  return (
    <div>
      <img src={contentSrc} alt={contentAlt} />
      <main>{children}</main>
    </div>
  );
};
