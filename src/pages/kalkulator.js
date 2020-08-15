import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TextField from "../components/textField"
import CalculationResult from "../components/calculationResult"

const Calculator = () => {
  const [creditAmount, setCreditAmount] = useState("")
  const [outstandingDebt, setOutstandingDebt] = useState("")
  const [daysOfSubsidisation, setDaysOfSubsidisation] = useState("")

  const validate = (value) => {
    if (value && isNaN(Number(value))) {
      return "Input harus dalam bentuk angka!"
    }
  }

  return (
    <Layout>
      <SEO title="Kalkulator besaran subsidi bunga/margin Usaha Mikro, Kecil, dan Menengah" />
      <h1>Kalkulator</h1>
      <CalculationResult
        creditAmount={creditAmount}
        outstandingDebt={outstandingDebt}
        daysOfSubsidisation={daysOfSubsidisation}
      />
      <TextField
        title="Plafon Pembiayaan"
        placeholder="Dalam jumlah rupiah"
        error={validate(creditAmount)}
        value={creditAmount}
        onChange={setCreditAmount}
      />
      <TextField
        title="Baki Debet"
        placeholder="Dalam jumlah rupiah"
        error={validate(outstandingDebt)}
        value={outstandingDebt}
        onChange={setOutstandingDebt}
      />
      <TextField
        title="Hari Bunga/Margin"
        placeholder="Dalam angka"
        error={validate(daysOfSubsidisation)}
        value={daysOfSubsidisation}
        onChange={setDaysOfSubsidisation}
      />
    </Layout>
  )
}

export default Calculator
