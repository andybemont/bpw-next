"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { isDateBooked } from "../../lib/booked-dates";
import {
  ContactTextAreaField,
  ContactTextField,
  ReferenceField,
  AvailabilityField,
} from "./contact-field";
import PartialPanel from "../shared/partialPanel";

export default function ContactContent() {
  const [submitted, setSubmitted] = useState(false);
  const [formHasInfo, setFormHasInfo] = useState(false);
  const [date, setDate] = useState("2025-01-01");
  const [dateBooked, setDateBooked] = useState(false);
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
            date: currentValues.date,
            reference: currentValues.reference,
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

    setDate(currentValues.date);
    setDateBooked(isDateBooked(currentValues.date));
  };

  return (
    <PartialPanel className="h-full bg-primary-50/90">
      <section className="pb-2 h-full flex flex-col">
        <div className="m-0 p-2">
          <h2 className="text-xl font-bold">
            Contact Your Wedding Photographers
          </h2>
          <h3 className="text-lg text-primary-700">
            Check our availability and get in touch today!
          </h3>
        </div>
        <div className="formContainer grow">
          <form
            onChange={handleChange}
            onSubmit={handleSubmit}
            className="h-full flex flex-col"
          >
            <div className="w-full flex flex-row flex-wrap">
              <ContactTextField
                id="name"
                caption="Name"
                required
                register={register}
              />
              <ContactTextField
                id="phone"
                caption="Phone"
                required={false}
                register={register}
              />
              <ContactTextField
                id="email"
                caption="Email Address"
                required
                register={register}
              />
              <ReferenceField
                id="reference"
                required={false}
                caption="How Did You Find Us?"
                register={register}
              />
              <AvailabilityField
                id="date"
                required={false}
                caption="When's Your Wedding?"
                register={register}
                isDateBooked={dateBooked}
              />
            </div>
            <div className="grow flex flex-col">
              <ContactTextAreaField
                id="message"
                caption="Write a message"
                required
                register={register}
              />
            </div>
            <div className="max-h-16">
              <div aria-disabled="true" className="mx-auto w-36 mt-4">
                {submitted && !formHasInfo && (
                  <button
                    className="bg-primary-900 text-primary-50 rounded-3xl w-36 h-12 text-2xl"
                    disabled
                  >
                    Thank You!
                  </button>
                )}
                {(!submitted || formHasInfo) && (
                  <button
                    className="bg-primary-900 text-primary-50 rounded-3xl w-36 h-12 text-xl disabled:bg-gray-600"
                    disabled={!isValid}
                    onClick={handleSubmit}
                  >
                    {submitted && !formHasInfo && "Thank You!"}
                    {(!submitted || formHasInfo) && "Send It!"}
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </section>
    </PartialPanel>
  );
}
