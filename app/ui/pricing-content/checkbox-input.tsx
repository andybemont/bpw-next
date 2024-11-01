import BaseInput, { BaseInputProps } from "./base-input";

export default function CheckboxInput(props: BaseInputProps) {
  const { controlId, register, defaultValue } = props;
  return (
    <BaseInput {...props}>
      <input
        className="float-left hidden"
        id={controlId}
        type="checkbox"
        defaultValue={defaultValue}
        {...register(controlId)}
      />
    </BaseInput>
  );
}
