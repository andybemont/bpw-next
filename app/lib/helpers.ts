import emailjs from "@emailjs/browser";

function SendEmail(
  name: string,
  phone: string,
  email: string,
  message: string
) {
  try {
    emailjs
      .send(
        process.env.NEXT_PUBLIC_REACT_APP_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          name: name,
          phone: phone,
          email: email,
          message: message,
        },
        { publicKey: process.env.NEXT_PUBLIC_REACT_APP_EMAILJS_PUBLIC_KEY }
      )
      .then(
        () => {
          return true;
        },
        (error: any) => {
          console.error(JSON.stringify(error));
        }
      );
  } catch (error) {
    console.error(JSON.stringify(error));
  }
  return false;
}

function CalculatePrice(
  distance: number,
  duration: number,
  engagementSession: boolean,
  photographers: number,
  priorityEditing: boolean
) {
  const hourlyRate = 300;

  var priorityEditingCost = priorityEditing ? 500 : 0;
  var photographerCost = (photographers - 1) * 400;
  var engagementSessionCost = engagementSession ? 300 : 0;

  var durationCostForNormalPackage =
    duration <= 8
      ? 2400
      : duration <= 10
      ? 2800
      : 2800 + (duration - 10) * hourlyRate;
  var durationCostForHourlyPackage =
    duration < 6 ? duration * hourlyRate : durationCostForNormalPackage;

  var distanceInHours = (distance * 15.0) / 60.0;
  var distanceCostForHourlyPackage = distanceInHours * hourlyRate;
  var distanceCostForNormalPackage =
    distanceInHours <= 0.75
      ? 0
      : distanceInHours <= 2.0
      ? 150
      : distanceInHours <= 3.0
      ? 300
      : 800;

  var hourlyPackageCost =
    engagementSessionCost +
    priorityEditingCost +
    photographerCost +
    durationCostForHourlyPackage +
    distanceCostForHourlyPackage;
  var normalPackageCost =
    engagementSessionCost / 2 +
    priorityEditingCost +
    photographerCost +
    durationCostForNormalPackage +
    distanceCostForNormalPackage;

  return Math.min(hourlyPackageCost, normalPackageCost);
}

export { CalculatePrice, SendEmail };
