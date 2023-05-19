import { ReactNode } from "react";

export const Sections = ({
  children,
  title,
  width = "700px",
  height = "700px",
}: {
  children: JSX.Element[] | JSX.Element;
  title: string;
  width?: string;
  height?: string;
}) => {
  return (
    <div
      style={{
        width: width,
        height: height,
        marginLeft: "auto",
        marginRight: "auto",
      }}>
      <h1 style={{ textAlign: "left" }}>{title}</h1>
      {children}
    </div>
  );
};
