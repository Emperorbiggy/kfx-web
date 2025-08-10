
import { AppInputProps } from "@/types/AppInterface";
import { ReactElement } from "react";

const AppInput = ({
  leftIcon: LeftIcon = null,
  rightIcon: RightIcon = null,
  placeholder = "",
  topLabel: TopLabel = null,
  bottomLabel: BottomLabel = null,
  type,
  disabled = false,
  name,
  value,
  onChange,
  onBlur,
  error,
  className,
}: AppInputProps): ReactElement => {
  return (
    <div className="flex flex-col gap-2 w-full">
      {TopLabel && typeof TopLabel === "string" ? (
        <span className="text-sm text-primary-black font-semibold">
          {TopLabel}
        </span>
      ) : (
        TopLabel
      )}
      <div
        className={`text-primary-black w-full h-12 bg-none border-2  rounded-xl py-3 px-2 flex justify-between items-center text-sm  ${
          error ? "border-red-500" : "border-primary-grey"
        }  ${className}`}
      >
        {LeftIcon && (
          <LeftIcon className="text-primary-grey text-2xl font-bold" />
        )}
        <input
          className="w-full bg-inherit border-none outline-none mx-2 text-sm placeholder:text-primary-grey"
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
          placeholder={placeholder}
          type={type === "password" ? "password" : type}
        />

        {RightIcon && (
          <RightIcon className="text-primary-grey text-2xl font-bold;" />
        )}
      </div>
      {BottomLabel && typeof BottomLabel === "string" ? (
        <span className="text-sm text-primary-blackLight">{BottomLabel}</span>
      ) : (
        BottomLabel
      )}
      {error && (
        <span className={`text-red-500 text-sm ${error ? "mb-5" : ""}`}>
          {error}
        </span>
      )}
    </div>
  );
};

export default AppInput;
