import React from 'react'
import PropTypes from 'prop-types'

import { calculateSubsidyAmount } from "../helpers/subsidy"

import "./styles/calculationResult.css"

const CalculationResult = ({
  creditAmount,
  outstandingDebt,
  daysOfSubsidisation
}) => {
  return (
    <div className="wrapper">
      <div className="description">
        Jumlah subsidi bunga/margin:
      </div>
      <div className="total">
        {calculateSubsidyAmount(creditAmount, outstandingDebt, daysOfSubsidisation)}
      </div>
    </div>
  )
}

CalculationResult.propTypes = {
  creditAmount: PropTypes.string.isRequired,
  outstandingDebt: PropTypes.string.isRequired,
  daysOfSubsidisation: PropTypes.string.isRequired,
}

export default CalculationResult