export const calculateSubsidyAmount = (creditAmount, outstandingDebt, daysOfSubsidisation) => {
  let subsidyPercentage = 0;
  if (creditAmount <= 500000000) {
    subsidyPercentage = 0.2
  } else if (creditAmount <= 10000000000) {
    subsidyPercentage = 0.3
  } else {
    return "Plafon pembiayaan melebihi batas Rp. 10 miliar"
  }

  const result = (outstandingDebt * daysOfSubsidisation) / 360
  return result
}