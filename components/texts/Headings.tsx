import { HeadingType } from "@/types/enum";
import React from "react";

const AppHeading = ({
  text,
  type = HeadingType.MAIN,
  className = null,
}: {
  text: string;
  type: HeadingType;
  className?: string | null;
}) => {
  return <h1 className={`${type} ${className}`}>{text}</h1>;
};

export default AppHeading;
