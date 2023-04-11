import { FC } from "react"

interface InputCheckboxProps {
  width?: string
  height?: string
  checked?: boolean
  onChange?: () => void
  onClick?: () => void
  disabled?: any
}

const InputCheckbox: FC<InputCheckboxProps> = (props: any) => {
  return (
    <input
      type="checkbox"
      name="checkbox"
      id="checkbox"
      className="rounded-lg cursor-pointer"
      style={{
        width: props.width,
        height: props.height,
      }}
      onChange={props.onChange}
      onClick={props.onClick}
      checked={props.checked}
      disabled={props.disabled}
    />
  )
}

InputCheckbox.defaultProps = {
  width: "25px",
  height: "25px",
}

export default InputCheckbox
