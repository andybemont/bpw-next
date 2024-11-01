"use client";
import React, { useEffect, useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import CheckboxInput from "./checkbox-input";
import { CalculatePrice } from "@/app/lib/helpers";
import RangeInput from "./range-input";
// import { pricingSectionContent } from "./pricing-text";

export default function PricingContent() {
  const {
    register,
    getValues,
    formState: { errors },
  } = useForm();

  const [photographers, setPhotographers] = useState(2);
  const [priorityEditing, setPriorityEditing] = useState(true);
  const [engagementSession, setEngagementSession] = useState(true);
  const [distance, setDistance] = useState(3);
  const [duration, setDuration] = useState(8);
  const [totalCost, setTotalCost] = useState(0);

  const onChange = () => {
    var currentValues = getValues();
    if (!currentValues) {
      return;
    }

    setPhotographers(currentValues.photographers);
    setPriorityEditing(currentValues.priorityEditing);
    setEngagementSession(currentValues.engagementSession);
    setDistance(currentValues.distance);
    setDuration(currentValues.duration);
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
    <div className="text-blue-950 tracking-wider m-2">
      <h3 className="text-right text-5xl">Price Calculator</h3>
      <p className="text-right text-4xl">
        Estimate: ${Number.isNaN(totalCost) ? "" : totalCost}
      </p>
      <div className="text-lg">
        <form onChange={onChange}>
          <div className="">
            <RangeInput
              caption="Duration"
              currentValueText={`${duration} hours`}
              controlId="duration"
              register={register}
              defaultValue={duration}
              min={3}
              max={14}
              explanation="Time from when we arrive until we leave. Generally, eight hours is enough for a wedding day. But every wedding day is different! You can always add hours - so when in doubt, go low!"
            />
            <RangeInput
              caption="Team"
              currentValueText={`${photographers} photographers`}
              controlId="photographers"
              register={register}
              defaultValue={photographers}
              min={1}
              max={3}
              explanation="How many photographers do you want? We recommend two, but we'll do fine with one... and three will get you the most pictures!"
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
              explanation="Driving distance from Rochester, NY - if there are multiple locations, choose the farthest."
            />
            <CheckboxInput
              caption="Engagement Session"
              currentValueText={engagementSession ? "Yes" : "No"}
              controlId="engagementSession"
              register={register}
              defaultValue={engagementSession}
              onClick={() => setEngagementSession(!engagementSession)}
              explanation="Engagement sessions are great, and not just because you get great pictures. We get a chance to meet each other, and you'll get some practice in front of the camera ahead of your wedding day."
            />
            <CheckboxInput
              caption="Priority Editing"
              currentValueText={priorityEditing ? "Yes" : "No"}
              controlId="priorityEditing"
              register={register}
              defaultValue={priorityEditing}
              onClick={() => setPriorityEditing(!priorityEditing)}
              explanation="We always deliver pictures within a month, but with this option we will get your pictures back to you within one week!"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
