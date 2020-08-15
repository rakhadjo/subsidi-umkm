import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TextField from "../components/textField"

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
      <h1>Formulir</h1>
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
        value={outstandingDebt}
        onChange={setOutstandingDebt}
      />
      <TextField
        title="Hari Bunga/Margin"
        placeholder="Dalam angka"
        value={daysOfSubsidisation}
        onChange={setDaysOfSubsidisation}
      />
    </Layout>
  )
}

export default Calculator
