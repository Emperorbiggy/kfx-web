import { BORDER_RADIUS } from "../../utils/constants";

function CardLayout({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bg-white !overflow-x-auto flex flex-col w-full h-[350px] min-h-fit min-w-[300px] ${BORDER_RADIUS} gap-2 p-6 items-center justify-between border border-primary-border text-primary-blackMain ${className}`}
    >
      {children}
    </div>
  );
}

export default CardLayout;
