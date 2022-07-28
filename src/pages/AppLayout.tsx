import React from "react";
import "./AppLayout.css";

interface Props {
  children: React.ReactNode;
  header: React.ReactNode;
  contentSrc: string;
  contentAlt: string;
}

export const AppLayout = ({
  children,
  contentSrc,
  contentAlt,
  header,
}: Props) => {
  return (
    <div className="contents-ly">
      <div className="header-ly">{header}</div>
      <div className="img-ly">
        {/*  TODO heightについては後々考えて配置する */}
        <img src={contentSrc} alt={contentAlt} width="100%" height="980" />
      </div>
      <div className="main-ly">
        <main className="main">{children}</main>
      </div>
    </div>
  );
};
