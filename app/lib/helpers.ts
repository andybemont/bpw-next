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
}

export { CalculatePrice, SendEmail };
