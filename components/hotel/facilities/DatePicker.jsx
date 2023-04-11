import React, { useState } from "react"
import Datepicker from "react-tailwindcss-datepicker"

const Datepicker = () => {
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  })

  const handleValueChange = newValue => {
    setValue(newValue)
  }

  return <Datepicker value={value} onChange={handleValueChange} />
}
export default Datepicker
