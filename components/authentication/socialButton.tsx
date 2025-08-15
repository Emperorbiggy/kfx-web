"use client"
import { ReactNode } from "react";
import Link from "next/link";
const SocialLoginButtons = ({
  icon,
  text,
  link,
}: {
  icon: ReactNode;
  text: string;
  link: string;
}) => {
  return (
    <Link
      href={link}
      className="cursor-pointer flex items-center justify-center gap-2 border-2 border-primary-grey p-2 rounded-xl"
    >
      <span>{icon}</span>
      <span>{text}</span>
    </Link>
  );
};

export default SocialLoginButtons;
