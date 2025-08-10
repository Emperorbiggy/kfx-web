import { useRouter } from "next/router";
import { ReactNode } from "react";

const SocialLoginButtons = ({
  icon,
  text,
  link,
}: {
  icon: ReactNode;
  text: string;
  link: string;
}) => {
  const router = useRouter();
  return (
    <div
      className="flex items-center justify-center gap-2 border-2 border-primary-grey p-2 rounded-xl"
      onClick={() => router.push(link)}
    >
      <span>{icon}</span>
      <span>{text}</span>
    </div>
  );
};

export default SocialLoginButtons;
