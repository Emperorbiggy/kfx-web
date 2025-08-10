import { ChangeEvent, JSX, ReactElement } from "react";
import { TextInputType } from "./enum";
import { IconBaseProps } from "react-icons/lib";


export interface AppInputProps {
  leftIcon?: IconType | null;
  rightIcon?: IconType | null;
  placeholder?: string;
  topLabel?: string | null | ReactElement;
  bottomLabel?: string | null | ReactElement;
  type: TextInputType;
  disabled?: boolean;
  name: string;
  value: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string | null;
  className?: string | null;
}

export type IconType = (props: IconBaseProps) => React.ReactNode;
export declare function IconBase(
  props: IconBaseProps & {
    attr?: Record<string, string>;
  }
): JSX.Element;
