import BaseInput, { BaseInputProps } from "./base-input";
interface RangeInputProps extends BaseInputProps {
  min: number;
  max: number;
}

export default function RangeInput(props: RangeInputProps) {
  const { controlId, register, defaultValue, min, max } = props;
  return (
    <BaseInput {...props}>
      <input
        className="w-36 float-left w-full h-4 accent-blue-950 pt-1"
        id={controlId}
        defaultValue={defaultValue}
        type="range"
        min={min}
        max={max}
        {...register(controlId)}
      />
    </BaseInput>
  );
}
