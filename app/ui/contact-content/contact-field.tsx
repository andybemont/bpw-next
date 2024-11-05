"use client";
import React from "react";
import { UseFormRegister } from "react-hook-form";

interface ContactFieldProps {
  id: string;
  caption: string;
  required: boolean;
  register: UseFormRegister<any>;
  children?: React.ReactElement;
  grow?: boolean;
}

const sharedInputStyle =
  "px-1 bg-transparent border-blue-950 border-0 border-b-blue-950 border-b-2 w-full font-text text-normal border-transparent focus:border-transparent focus:ring-0 focus:border-b-blue-950 focus:border-b-2";

function BaseContactField(props: ContactFieldProps) {
  const { id, caption, children, grow, required } = props;

  return (
    <div className={`pt-2 ${grow && "grow"} flex flex-col`}>
      <label htmlFor={id} className="text-2xl font-normal">
        {caption + (required ? "*" : " (optional)")}
      </label>
      <div className="grow">{children}</div>
    </div>
  );
}

export function ContactTextField(props: ContactFieldProps) {
  const { id, required, register } = props;
  return (
    <BaseContactField {...props}>
      <div className="w-full">
        <input
          id={id}
          className={sharedInputStyle}
          type="text"
          required={required}
          aria-required={required}
          placeholder=""
          aria-invalid="true"
          {...register(id, {
            required: required ? "This is required" : undefined,
          })}
        />
      </div>
    </BaseContactField>
  );
}

export function ContactTextAreaField(props: ContactFieldProps) {
  const { id, required, register } = props;

  return (
    <BaseContactField {...props} grow>
      <div className="w-full bb-2 mb-2 h-full">
        <textarea
          id={id}
          className={sharedInputStyle + " h-full resize-none"}
          required={required}
          aria-required={required}
          aria-invalid="true"
          {...register(id, {
            required: required ? "This is required" : undefined,
          })}
        />
      </div>
    </BaseContactField>
  );
}
