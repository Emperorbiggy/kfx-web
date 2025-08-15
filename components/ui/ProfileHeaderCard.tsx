// components/ui/ProfileHeaderCard.tsx
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { FiChevronLeft } from "react-icons/fi";
import { cn } from "@/lib/utils";

const profileHeaderCardVariants = cva(
  "bg-white border-b border-gray-200 shadow-sm px-6 py-4 rounded-lg",
  {
    variants: {
      variant: {
        default: "",
        noBorder: "border-b-0",
        elevated: "shadow-md",
      },
      size: {
        default: "px-6 py-4",
        compact: "px-4 py-3",
        wide: "px-8 py-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ProfileHeaderCardProps
  extends VariantProps<typeof profileHeaderCardVariants> {
  asChild?: boolean;
  onBack?: () => void;
  className?: string;
  children?: React.ReactNode;
}

export function ProfileHeaderCard({
  asChild = false,
  variant,
  size,
  className,
  onBack,
  children,
}: ProfileHeaderCardProps) {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp className={cn(profileHeaderCardVariants({ variant, size, className }))}>
      <div className="flex items-center gap-2">
        {onBack && (
          <button
            onClick={onBack}
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <FiChevronLeft className="mr-1" />
          </button>
        )}
        {children}
      </div>
    </Comp>
  );
}
