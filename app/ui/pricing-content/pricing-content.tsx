"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import CheckboxInput from "./checkbox-input";
import { CalculatePrice } from "@/app/lib/helpers";
import RangeInput from "./range-input";
import Link from "next/link";
import DateInput from "./date-input";
import { isDateBooked } from "../../lib/booked-dates";
import PartialPanel from "../shared/partialPanel";

const googleMapUrl =
  "https://www.google.com/maps/dir/Rochester,+New+York//@42.8955153,-77.9863505,9.25z/data=!4m9!4m8!1m5!1m1!1s0x89d6b3059614b353:0x5a001ffc4125e61e!2m2!1d-77.6088465!2d43.1565779!1m0!3e0!5m1!1e4?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D";

export default function PricingContent() {
  const {
    register,
    getValues,
    formState: { errors },
  } = useForm();

  const [photographers, setPhotographers] = useState(2);
  const [priorityEditing, setPriorityEditing] = useState(false);
  const [engagementSession, setEngagementSession] = useState(true);
  const [distance, setDistance] = useState(3);
  const [duration, setDuration] = useState(8);
  const [totalCost, setTotalCost] = useState(0);
  const [date, setDate] = useState("2025-01-01");
  const [dateBooked, setDateBooked] = useState(false);

  const onChange = () => {
    var currentValues = getValues();
    if (!currentValues) {
      return;
    }

    setPhotographers(currentValues.photographers);
    setDistance(currentValues.distance);
    setDuration(currentValues.duration);
    setDate(currentValues.date);
    setDateBooked(isDateBooked(currentValues.date));
  };

  useEffect(() => {
    setTotalCost(
      CalculatePrice(
        distance,
        duration,
        engagementSession,
        photographers,
        priorityEditing
      )
    );
  }, [distance, duration, engagementSession, photographers, priorityEditing]);

  return (
    <PartialPanel>
      <h3 className="text-right text-5xl">Price Calculator</h3>
      <p className="text-right text-4xl">
        Estimate: ${Number.isNaN(totalCost) ? "" : totalCost}
      </p>
      <div className="text-lg w-full">
        <form onChange={onChange}>
          <div className="">
            <DateInput
              controlId="date"
              register={register}
              isDateBooked={dateBooked}
            />
            <RangeInput
              caption="Duration"
              currentValueText={`${duration} hours`}
              controlId="duration"
              register={register}
              defaultValue={duration}
              min={3}
              max={14}
              explanation={
                <span>
                  Time from when we arrive until we leave. Eight hours is
                  usually enough, but every wedding is different! You can always
                  add hours - so when in doubt, go low!
                </span>
              }
            />
            <RangeInput
              caption="Team"
              currentValueText={`${
                photographers === 1
                  ? "1 photographer"
                  : photographers + " photographers"
              }`}
              controlId="photographers"
              register={register}
              defaultValue={photographers}
              min={1}
              max={3}
              explanation={
                <span>
                  How many photographers do you want? We recommend two, but
                  we'll do fine with one... and three will get you the most
                  pictures!
                </span>
              }
            />
            <RangeInput
              caption="Distance"
              currentValueText={
                distance > 12
                  ? ">3 hours"
                  : //: `~${(distance * 15.0) / 60.0} hours`
                    `${Math.floor((distance * 15) / 60)}:${(
                      (distance * 15) %
                      60
                    )
                      .toString()
                      .padStart(2, "0")}`
              }
              controlId="distance"
              register={register}
              defaultValue={distance}
              min={1}
              max={13}
              explanation={
                <span>
                  <Link
                    className="underline"
                    href={googleMapUrl}
                    target="_blank"
                  >
                    Driving distance from Rochester, NY
                  </Link>{" "}
                  - if there are multiple locations, choose the farthest.
                </span>
              }
            />
            <CheckboxInput
              caption="Engagement Session"
              currentValueText={engagementSession ? "Yes" : "No"}
              controlId="engagementSession"
              register={register}
              defaultValue={engagementSession}
              onClick={() => setEngagementSession(!engagementSession)}
              explanation={
                <span>
                  Engagement sessions are great, and not just because you get
                  great pictures. We get a chance to meet each other, and you'll
                  get some practice in front of the camera ahead of your wedding
                  day.
                </span>
              }
            />
            <CheckboxInput
              caption="Priority Editing"
              currentValueText={priorityEditing ? "Yes" : "No"}
              controlId="priorityEditing"
              register={register}
              defaultValue={priorityEditing}
              onClick={() => setPriorityEditing(!priorityEditing)}
              explanation={
                <span>
                  We always deliver pictures within a month, but with this
                  option we will get your pictures back to you within one week!
                </span>
              }
            />
          </div>
        </form>
      </div>
    </PartialPanel>
  );
}
