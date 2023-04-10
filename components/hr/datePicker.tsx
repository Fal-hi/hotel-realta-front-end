import React, { forwardRef } from "react"
import ReactDatePicker from "react-datepicker"
import CalendarOutline from "../icons/CalendarOutline"
import { getMonth, getYear } from "date-fns"

const DatePickerHr = ({ value, onChange, isHeader }: any) => {
  const startYear = 1990
  const endYear = getYear(new Date()) + 1
  const years = Array.from(
    { length: endYear - startYear },
    (_, i) => startYear + i
  )
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]
  const headerDate = ({
    date,
    changeYear,
    changeMonth,
    decreaseMonth,
    increaseMonth,
    prevMonthButtonDisabled,
    nextMonthButtonDisabled,
  }: any) => (
    <div className="flex m-2 justify-center">
      <button
        className="p-1 rounded-md m-2"
        onClick={decreaseMonth}
        disabled={prevMonthButtonDisabled}
      >
        {"<"}
      </button>
      <select
        className="p-1 rounded-md m-2"
        value={getYear(date)}
        onChange={({ target: { value } }) => changeYear(value)}
      >
        {years.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <select
        className="p-1 rounded-md m-2"
        value={months[getMonth(date)]}
        onChange={({ target: { value } }) => changeMonth(months.indexOf(value))}
      >
        {months.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <button
        className="p-1 rounded-md m-2"
        onClick={increaseMonth}
        disabled={nextMonthButtonDisabled}
      >
        {">"}
      </button>
    </div>
  )

  // eslint-disable-next-line react/display-name
  const ExampleCustom: any = forwardRef(({ value, onClick }: any, ref: any) => (
    <div className="flex cursor-pointer" onClick={onClick}>
      <button
        className="border rounded-l-md p-1.5 block w-full mb-3 bg-gray-100 focus:outline-none"
        ref={ref}
      >
        {value}
      </button>
      <div className="w-1/12 border rounded-r-md p-1.5 block mb-3 bg-gray-100 focus:outline-none">
        <CalendarOutline />
      </div>
    </div>
  ))

  return (
    <ReactDatePicker
      selected={value}
      onChange={onChange}
      customInput={<ExampleCustom />}
      renderCustomHeader={isHeader ? headerDate : undefined}
    />
  )
}

export default DatePickerHr
