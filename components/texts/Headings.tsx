import { HeadingType } from "@/types/enum";
import React from "react";

const AppHeading = ({
  text,
  type = HeadingType.H1,
  className = null,
}: {
  text: string;
  type: HeadingType;
  className?: string | null;
}) => {
  return <h1 className={`${type} ${className} `}>{text}</h1>;
};

export default AppHeading;
