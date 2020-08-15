export const calculateSubsidyAmount = (creditAmount, outstandingDebt, daysOfSubsidisation, isBank) => {
  let daysPercentage = 0;

  if (!isBank && creditAmount <= 10000000) {
    if (daysOfSubsidisation > 180) {
      daysPercentage = 180 * 0.25
    } else {
      daysPercentage = daysOfSubsidisation * 0.25
    }
  } else if (creditAmount <= 500000000) {
    if (daysOfSubsidisation > 180) {
      daysPercentage = (90 * 0.06) + (90 * 0.03)
    } else if (daysOfSubsidisation > 90) {
      daysPercentage = (90 * 0.06) + ((daysOfSubsidisation - 90) * 0.03)
    } else {
      daysPercentage = daysOfSubsidisation * 0.06
    }
  } else if (creditAmount <= 10000000000) {
    if (daysOfSubsidisation > 180) {
      daysPercentage = (90 * 0.03) + (90 * 0.02)
    } else if (daysOfSubsidisation > 90) {
      daysPercentage = (90 * 0.03) + ((daysOfSubsidisation - 90) * 0.02)
    } else {
      daysPercentage = daysOfSubsidisation * 0.03
    }
  } else {
    return "Plafon pembiayaan melebihi batas Rp. 10 miliar"
  }

  const result = (daysPercentage * outstandingDebt) / 360
  return `Rp. ${result},-`
}