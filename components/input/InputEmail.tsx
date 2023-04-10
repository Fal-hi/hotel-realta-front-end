import { FC } from "react"

interface InputEmailProps {
  width?: string
  placeholder: string
}

const InputEmail: FC<InputEmailProps> = (props: any) => {
  return (
    <input
      type="email"
      className="bg-white border-[#D0D5DD] text-[#667085] text-xs px-3 py-2 rounded-md font-normal border-2 focus:outline-none"
      placeholder={props.placeholder}
      required
      style={{
        width: props.width,
      }}
    />
  )
}

InputEmail.defaultProps = {
  width: "auto",
  placeholder: "Input Email...",
}

export default InputEmail
