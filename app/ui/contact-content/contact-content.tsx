"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
const bookedDates: string[] = [
  "2027-01-01",
  "2026-12-31",
  "2026-12-30",
  "2026-12-29",
  "2026-12-28",
  "2026-12-27",
  "2026-12-26",
  "2026-12-25",
  "2026-12-24",
  "2026-12-23",
  "2026-10-23",
  "2026-10-16",
  "2026-10-03",
  "2026-09-26",
  "2026-09-19",
  "2026-09-12",
  "2026-09-05",
  "2026-08-29",
  "2026-08-22",
  "2026-07-11",
  "2026-06-27",
  "2026-06-20",
  "2026-04-05",
  "2026-04-04",
  "2026-04-03",
  "2026-04-02",
  "2026-04-01",
  "2026-03-31",
  "2026-03-30",
  "2026-03-29",
  "2026-03-28",
  "2026-03-27",
  "2025-12-31",
  "2026-06-20",
  "2026-03-27",
  "2025-11-22",
  "2025-11-08",
  "2025-11-01",
  "2025-10-25",
  "2025-10-19",
  "2025-10-11",
  "2025-10-04",
  "2025-09-27",
];

function isDateBooked(date: string) {
  return bookedDates.includes(date);
}

type AvailabilityStatus = {
  status: "available" | "unavailable";
  label: string;
  colorClass: string;
  note?: string;
};

const weekdayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function toDateOnly(dateString: string) {
  if (!dateString) {
    return null;
  }
  const parsed = new Date(`${dateString}T00:00:00`);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

function getEasterDate(year: number) {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(year, month - 1, day);
}

function isWithinDays(target: Date, base: Date, days: number) {
  const diff = Math.abs(target.getTime() - base.getTime());
  return diff <= days * 24 * 60 * 60 * 1000;
}

function getThanksgivingWeekend(year: number) {
  const novemberFirst = new Date(year, 10, 1);
  const firstThursdayOffset = (4 - novemberFirst.getDay() + 7) % 7;
  const thanksgiving = new Date(year, 10, 1 + firstThursdayOffset + 21);
  const sunday = new Date(thanksgiving);
  sunday.setDate(thanksgiving.getDate() + 3);
  return { start: thanksgiving, end: sunday };
}

function monthsFromNow(target: Date, now: Date) {
  return (
    target.getFullYear() * 12 +
    target.getMonth() -
    (now.getFullYear() * 12 + now.getMonth())
  );
}

function getAvailabilityStatus(dateString: string): AvailabilityStatus | null {
  const dateValue = toDateOnly(dateString);
  if (!dateValue) {
    return null;
  }

  const today = new Date();
  const todayDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
  );
  const dayOfWeek = weekdayNames[dateValue.getDay()];
  const monthName = monthNames[dateValue.getMonth()];

  if (dateValue < todayDate) {
    return {
      status: "unavailable",
      label: "Unavailable",
      colorClass: "bg-red-600/90",
      note: "We are not time travelers.",
    };
  }

  if (isDateBooked(dateString)) {
    return {
      status: "unavailable",
      label: "Unavailable",
      colorClass: "bg-red-600/90",
    };
  }

  if (dateValue.getMonth() === 11 && dateValue.getDate() > 22) {
    return {
      status: "unavailable",
      label: "Unavailable",
      colorClass: "bg-red-600/90",
      note: "We're so sorry! We wrap up for the year a few days before Christmas",
    };
  }

  const thanksgivingWeekend = getThanksgivingWeekend(dateValue.getFullYear());
  if (
    dateValue >= thanksgivingWeekend.start &&
    dateValue <= thanksgivingWeekend.end
  ) {
    return {
      status: "unavailable",
      label: "Unavailable",
      colorClass: "bg-red-600/90",
      note: "We're so sorry! We spend Thanksgiving weekend with our families",
    };
  }

  const easter = getEasterDate(dateValue.getFullYear());
  if (isWithinDays(dateValue, easter, 10)) {
    return {
      status: "unavailable",
      label: "Unavailable",
      colorClass: "bg-red-600/90",
    };
  }

  const daysAway = Math.ceil(
    (dateValue.getTime() - todayDate.getTime()) / (24 * 60 * 60 * 1000),
  );
  if (daysAway < 30) {
    return {
      status: "available",
      label: "Available",
      colorClass: "bg-orange-500/90",
      note: "We do not normally book weddings on short notice - tell us about your situation below",
    };
  }

  if (daysAway > 730) {
    return {
      status: "available",
      label: "Available",
      colorClass: "bg-orange-500/90",
      note: "We normally do not book weddings more than two years out. Feel free to get in touch anyway!",
    };
  }

  if (dateValue.getDay() >= 1 && dateValue.getDay() <= 4) {
    return {
      status: "available",
      label: "Available",
      colorClass: "bg-orange-500/90",
      note: `This is a ${dayOfWeek}. That's fine, but sometimes indicates a mistake.`,
    };
  }

  const monthsAway = Math.max(0, monthsFromNow(dateValue, todayDate));
  return {
    status: "available",
    label: "Available",
    colorClass: "bg-green-600/90",
    note: `Just to prevent mistakes: this is a ${dayOfWeek} in ${monthsAway} months. If that's right, get in touch!`,
  };
}

export default function ContactContent() {
  const [submitted, setSubmitted] = useState(false);
  const [formHasInfo, setFormHasInfo] = useState(false);
  const [availabilityStatus, setAvailabilityStatus] =
    useState<AvailabilityStatus | null>(null);
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

    if (currentValues.website) {
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
          },
        )
        .then(
          function (response) {
            reset();
            setFormHasInfo(false);
            setSubmitted(true);
          },
          function (error) {
            console.error(error);
          },
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
        (currentValues.message && currentValues.message.length > 0),
    );

    setAvailabilityStatus(getAvailabilityStatus(currentValues.date));
  };

  return (
    <section className="space-y-6 text-left">
      <form
        onChange={handleChange}
        onSubmit={handleSubmit}
        className="space-y-4 text-left"
      >
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input
            id="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            {...register("website")}
          />
        </div>
        <div className="space-y-1">
          <label className="text-sm font-medium" htmlFor="date">
            When's Your Wedding?
            <span className="ml-1 text-primary-600">*</span>
          </label>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <input
              id="date"
              className="w-full sm:w-[12rem] rounded-md border border-primary-200 bg-white px-3 py-2 text-sm focus:border-primary-900 focus:outline-none"
              type="date"
              required
              {...register("date", { required: "This is required" })}
            />
            {availabilityStatus && (
              <span className="text-xs font-medium">
                <span
                  className={`inline-flex items-center rounded-full px-3 py-1 text-primary-950 ${availabilityStatus.colorClass}`}
                >
                  {availabilityStatus.label}
                </span>
              </span>
            )}
          </div>
          <p className="text-xs text-primary-700 min-h-[1.5rem]">
            {availabilityStatus
              ? (availabilityStatus.note ??
                "We're so sorry! Please get in touch if you have flexibility or have general questions.")
              : "Enter a date to see if we're available."}
          </p>
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium" htmlFor="name">
            Name
            <span className="ml-1 text-primary-600">*</span>
          </label>
          <input
            id="name"
            className="w-full rounded-md border border-primary-200 bg-white px-3 py-2 text-sm focus:border-primary-900 focus:outline-none"
            type="text"
            required
            {...register("name", { required: "This is required" })}
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium" htmlFor="email">
            Email Address
            <span className="ml-1 text-primary-600">*</span>
          </label>
          <input
            id="email"
            className="w-full rounded-md border border-primary-200 bg-white px-3 py-2 text-sm focus:border-primary-900 focus:outline-none"
            type="email"
            required
            {...register("email", { required: "This is required" })}
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium" htmlFor="phone">
            Phone
          </label>
          <input
            id="phone"
            className="w-full rounded-md border border-primary-200 bg-white px-3 py-2 text-sm focus:border-primary-900 focus:outline-none"
            type="text"
            {...register("phone")}
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium" htmlFor="reference">
            How Did You Find Us?
          </label>
          <select
            id="reference"
            className="w-full rounded-md border border-primary-200 bg-white px-3 py-2 text-sm focus:border-primary-900 focus:outline-none"
            {...register("reference")}
          >
            <option value=""></option>
            <option value="Social Media">Social Media</option>
            <option value="Zola">Zola</option>
            <option value="The Knot">The Knot</option>
            <option value="Wedding Wire">Wedding Wire</option>
            <option value="Google/Web Search">Google/Web</option>
            <option value="Word of Mouth">Word of Mouth</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium" htmlFor="message">
            Write a message
            <span className="ml-1 text-primary-600">*</span>
          </label>
          <textarea
            id="message"
            className="w-full min-h-[160px] rounded-md border border-primary-200 bg-white px-3 py-2 text-sm focus:border-primary-900 focus:outline-none"
            required
            {...register("message", { required: "This is required" })}
          />
        </div>

        <div className="pt-2">
          <div aria-disabled="true" className="w-full sm:w-auto">
            {submitted && !formHasInfo && (
              <button
                className="bg-primary-900 text-primary-50 rounded-md w-full sm:w-40 h-11 text-base"
                disabled
              >
                Thank You!
              </button>
            )}
            {(!submitted || formHasInfo) && (
              <button
                className="bg-primary-900 text-primary-50 rounded-md w-full sm:w-40 h-11 text-base disabled:bg-gray-600"
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
    </section>
  );
}
