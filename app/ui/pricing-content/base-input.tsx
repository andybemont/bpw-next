import { ReactElement } from "react";

export interface BaseInputProps {
  caption: string;
  currentValueText: string;
  controlId: string;
  register: (id: string) => any;
  defaultValue: any;
  explanation: ReactElement;
  children?: React.ReactElement;
  clickable?: boolean;
  onClick?: () => void;
}

export default function BaseInput(props: BaseInputProps) {
  const {
    caption,
    currentValueText,
    controlId,
    children,
    explanation,
    onClick,
  } = props;
  return (
    <div
      onClick={onClick}
      className={`w-96 transition-all ease-in-out outline outline-1 outline-blue-950 rounded-xl hover:outline-2 hover:outline-white ${
        onClick ? "cursor-pointer" : ""
      }`}
    >
      <div className="font-title w-full px-4">
        <div className="flex flex-row">
          <p className="text-left w-48">
            <label
              className={`"font-semibold ${onClick ? "cursor-pointer" : ""}`}
              htmlFor={controlId}
            >
              {caption}:{" "}
            </label>
            <span>{currentValueText}</span>
          </p>
          <div className="w-36">{children}</div>
        </div>
      </div>
      <div className="mx-auto mb-2 w-full px-4 text-center text-justify text-sm">
        {explanation}
      </div>
    </div>
  );
}
