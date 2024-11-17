function CalculatePrice(
  distance: number,
  duration: number,
  engagementSession: boolean,
  photographers: number,
  priorityEditing: boolean
) {
  const distanceInHours = (distance * 15.0) / 60.0;
  const baseCost = 0;
  const photographerCost = (photographers - 1) * 400;
  const engagementSessionCost = engagementSession ? 300 : 0;
  const priorityEditingCost = priorityEditing ? 500 : 0;
  const durationCost =
    duration <= 6
      ? duration * 300
      : duration <= 8
      ? 1800 + 500
      : duration <= 10
      ? 1800 + 500 + 450
      : 1800 + 500 + 500 + (duration - 10) * 300;
  const travelCost =
    distanceInHours <= 0.75
      ? 0
      : distanceInHours <= 1.5
      ? 150
      : distanceInHours <= 2.25
      ? 300
      : distanceInHours <= 3
      ? 450
      : 1000;

  return (
    baseCost +
    photographerCost +
    engagementSessionCost +
    priorityEditingCost +
    durationCost +
    travelCost
  );

  /*
  const hourlyRate = 300;


  var durationCostForNormalPackage =
    duration <= 8
      ? 2400
      : duration <= 10
      ? 2800
      : 2800 + (duration - 10) * hourlyRate;
  var durationCostForHourlyPackage = duration * hourlyRate;

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
  */
}

export { CalculatePrice };
