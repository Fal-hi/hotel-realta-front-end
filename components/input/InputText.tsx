import { FC } from "react"
import { any } from "prop-types"

interface InputTextProps {
  placeholder: string
  width?: string
  value?: any
  onChange?: (e?: any) => void
  disabled?: boolean
}

const InputText: FC<InputTextProps> = (props: any) => {
  return (
    <input
      type="text"
      className="bg-white border-[#D0D5DD] text-[#667085] text-xs px-3 py-2 rounded-md font-normal border-2 focus:outline-none"
      placeholder={props.placeholder}
      required
      value={props.value}
      onChange={props.onChange}
      disabled={props.disabled}
      style={{
        width: props.width,
      }}
    />
  )
}

InputText.defaultProps = {
  width: "auto",
  placeholder: "Input text...",
  disabled: false,
}

export default InputText
