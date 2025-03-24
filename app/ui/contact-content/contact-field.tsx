"use client";
import React from "react";
import { UseFormRegister } from "react-hook-form";

interface ContactFieldProps {
  id: string;
  caption: string;
  required: boolean;
  register: UseFormRegister<any>;
  children?: React.ReactElement;
  isDateBooked?: boolean;
}

function Label(props: ContactFieldProps) {
  const { caption, id, required } = props;

  return (
    <label htmlFor={id} className="text-sm font-bold">
      {caption + (required ? "*" : "")}
    </label>
  );
}

const noBorderOnFocus = "focus:ring-0 focus:border-transparent";

export function ContactTextField(props: ContactFieldProps) {
  const { id, required, register } = props;
  return (
    <div className={`grow pt-2 px-2 w-1/4 min-w-[190px]`}>
      <Label {...props} />
      <div className={`${noBorderOnFocus} border-b-primary-900 border-b-2`}>
        <input
          id={id}
          className={`w-full mx-1 p-0 bg-transparent text-normal border-transparent  ${noBorderOnFocus}`}
          type="text"
          required={required}
          autoComplete="false"
          aria-required={required}
          placeholder=""
          aria-invalid="true"
          {...register(id, {
            required: required ? "This is required" : undefined,
          })}
        />
      </div>
    </div>
  );
}

export function ReferenceField(props: ContactFieldProps) {
  const { id, required, register } = props;
  return (
    <div className={`grow pt-2 px-2 w-1/4 min-w-[190px]`}>
      <Label {...props} />
      <div className={``}>
        <select
          id={id}
          className={`bg-transparent p-0 text-normal w-full border-primary-900 focus:border-primary-900 focus:ring-0`}
          required={required}
          autoComplete="false"
          aria-required={required}
          aria-invalid="true"
          {...register(id, {
            required: required ? "This is required" : undefined,
          })}
        >
          <option value=""></option>
          <option value="Social Media">Social Media</option>
          <option value="The Knot">The Knot</option>
          <option value="Wedding Wire">Wedding Wire</option>
          <option value="Google/Web Search">Google/Web</option>
          <option value="Word of Mouth">Word of Mouth</option>
          <option value="Other">Other</option>
        </select>
      </div>
    </div>
  );
}

export function ContactTextAreaField(props: ContactFieldProps) {
  const { id, required, register } = props;

  return (
    <div className={`h-[calc(100%-20px)] pt-2 px-2`}>
      <Label {...props} />
      <div className={`${noBorderOnFocus} w-full h-full p-0 m-0`}>
        <textarea
          id={id}
          className={`bg-transparent text-normal h-full resize-none w-full focus:ring-0 border-primary-900 focus:border-primary-900`}
          required={required}
          autoComplete="false"
          aria-required={required}
          aria-invalid="true"
          {...register(id, {
            required: required ? "This is required" : undefined,
          })}
        />
      </div>
    </div>
  );
}

export function AvailabilityField(props: ContactFieldProps) {
  const { id, register, isDateBooked } = props;

  return (
    <div className={`grow pt-2 px-2 w-1/4 min-w-[190px]`}>
      <Label {...props} />
      <div className={`flex flex-row`}>
        <input
          className="grow p-0 pl-1 m-0 bg-transparent"
          id={id}
          type="date"
          defaultValue={"2026-01-01"}
          {...register(id)}
        />
        <p className="text-sm min-w-[120px] text-center pt-1">
          {isDateBooked && (
            <span className="px-2 py-1 text-primary-950 bg-orange-600">
              Not Available
            </span>
          )}
          {!isDateBooked && (
            <span className="px-2 py-1 text-primary-950 bg-green-700/70">
              Available
            </span>
          )}
        </p>
      </div>
    </div>
  );
}
