import { useState } from "react"
import { format } from "date-fns"

interface InputDateProps {
  name: string
  value: any
  onClick: (e: React.ChangeEvent<HTMLInputElement>) => void
  onChange: (value: Date | null) => void
}

const InputDate: React.FC<InputDateProps> = (props: any) => {
  const [focused, setFocused] = useState(false)

  const handleFocus = () => {
    setFocused(true)
  }

  const handleBlur = () => {
    setFocused(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const date = value ? new Date(value) : null
    props.onChange(date)
  }

  return (
    <div className={`input-date ${focused ? "focused" : ""}`}>
      <input
        type="date"
        id={props.name}
        name={props.name}
        value={props.value ? format(props.value, "yyyy-MM-dd") : ""}
        onClick={props.onClick}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
      />
    </div>
  )
}

export default InputDate
