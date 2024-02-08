import { FiAlertCircle } from "react-icons/fi/index";
import { FiCheck } from "react-icons/fi/index";

import { DirectionEnum } from "./enums";

export interface InputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  isValid?: boolean;
  hint?: string;
}

export function InputField({
  hint,
  isValid,
  ...props
}: InputFieldProps): JSX.Element {
  const getValidationPaddingClass = () => {
    switch (isValid) {
      case true:
        return props.dir === DirectionEnum.RTL ? "pr-4 pl-10" : "pl-4 pr-10";
      case false:
        return props.dir === DirectionEnum.RTL ? "pr-4 pl-10" : "pl-4 pr-10";
      default:
        return "px-4";
    }
  };

  const getValidationClass = () => {
    switch (isValid) {
      case true:
        return "border-transparent outline-none ring-2 ring-success text-success";
      case false:
        return "border-transparent outline-none ring-2 ring-danger text-danger";
      default:
        return "";
    }
  };

  const getValidationIcon = () => {
    switch (isValid) {
      case true:
        return <FiCheck className="text-success text-xl" />;
      case false:
        return <FiAlertCircle className="text-danger text-xl" />;
      default:
        return;
    }
  };

  const getHintClass = () => {
    switch (isValid) {
      case true:
        return "text-success";
      case false:
        return "text-danger";
      default:
        return "text-muted";
    }
  };

  return (
    <div dir={props.dir} className="mb-4 w-full">
      {props["aria-label"] && (
        <label className="text-primary-700 mb-2 block text-base">
          {props["aria-label"]}
        </label>
      )}

      <div className="relative">
        <input
          {...props}
          className={`border-muted mb-2 h-14 w-full rounded-lg border border-opacity-20 py-5 px-4 text-base
          ${getValidationClass()}
          disabled:bg-muted disabled:border-muted dark:bg-dark-700
          focus:ring-primary leading-7 focus:border-transparent focus:outline-none focus:ring-2 disabled:border-opacity-40 disabled:bg-opacity-20 dark:text-white dark:placeholder:text-white/80 ${
            props.className ?? ""
          }${getValidationPaddingClass()}`}
        />
        <div
          className={`absolute top-5 flex items-center justify-center space-x-1 ${
            props.dir === DirectionEnum.RTL ? "left-3" : "right-3"
          }`}
        >
          {props.type !== "date" && getValidationIcon()}
        </div>
      </div>
      {hint && <p className={getHintClass()}>{hint}</p>}
    </div>
  );
}
