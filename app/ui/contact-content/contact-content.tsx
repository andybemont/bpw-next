"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { ContactTextAreaField, ContactTextField } from "./contact-field";

export default function ContactContent() {
  const [submitted, setSubmitted] = useState(false);
  const [formHasInfo, setFormHasInfo] = useState(false);
  const {
    register,
    getValues,
    reset,
    formState: { isValid },
  } = useForm();

  const handleSubmit = (event: any) => {
    event.preventDefault(); // Prevents the default form submission behavior
    var currentValues = getValues();
    if (!currentValues) {
      return;
    }

    try {
      emailjs
        .send(
          process.env.NEXT_PUBLIC_REACT_APP_EMAILJS_SERVICE_ID || "",
          process.env.NEXT_PUBLIC_REACT_APP_EMAILJS_TEMPLATE_ID || "",
          {
            name: currentValues.name,
            phone: currentValues.phone,
            email: currentValues.email,
            message: currentValues.message,
          },
          {
            publicKey:
              process.env.NEXT_PUBLIC_REACT_APP_EMAILJS_PUBLIC_KEY || "",
          }
        )
        .then(
          function (response) {
            reset();
            setFormHasInfo(false);
            setSubmitted(true);
          },
          function (error) {
            console.error(error);
          }
        );
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = () => {
    var currentValues = getValues();
    if (currentValues) {
      setFormHasInfo(false);
    }
    setSubmitted(false);
    setFormHasInfo(
      (currentValues.name && currentValues.name.length > 0) ||
        (currentValues.email && currentValues.email.length > 0) ||
        (currentValues.phone && currentValues.phone.length > 0) ||
        (currentValues.message && currentValues.message.length > 0)
    );
  };

  return (
    <div className="mx-auto p-2 h-full w-full flex flex-col">
      <div className="m-0">
        <h2 className="text-5xl">Contact Us</h2>
      </div>
      <div className="formContainer grow">
        <form
          onChange={handleChange}
          onSubmit={handleSubmit}
          className="h-full flex flex-col"
        >
          <ContactTextField
            id="name"
            caption="Name"
            required
            register={register}
          />
          <ContactTextField
            id="phone"
            caption="Phone Number"
            required={false}
            register={register}
          />
          <ContactTextField
            id="email"
            caption="Email Address"
            required
            register={register}
          />
          <ContactTextAreaField
            id="message"
            caption="Write a message"
            required
            grow
            register={register}
          />
          <div aria-disabled="true" className="flex mx-auto w-36 mt-4">
            {submitted && !formHasInfo && (
              <button
                className="bg-blue-950 text-white rounded-3xl w-36 h-12 text-2xl"
                disabled
              >
                Thank You!
              </button>
            )}
            {(!submitted || formHasInfo) && (
              <button
                className="bg-blue-950 text-white rounded-3xl w-36 h-12 text-2xl disabled:bg-gray-600"
                disabled={!isValid}
                onClick={handleSubmit}
              >
                {submitted && !formHasInfo && "Thank You!"}
                {(!submitted || formHasInfo) && "send it!"}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
