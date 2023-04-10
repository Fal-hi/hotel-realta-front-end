interface InputRangeProps {
  heightOut?: string
  heightIn?: string
  widthOut?: string
  widthIn?: string
}

const InputRange = (props: any) => {
  return (
    <div
      className="border border-yellow-500 rounded-md h-2 w-[30rem]"
      style={{
        height: props.heightOut,
        width: props.widthOut,
      }}
    >
      <div
        className="bg-yellow-500 rounded-md h-2 w-[25rem]"
        style={{
          height: props.heightIn,
          width: props.widthIn,
        }}
      ></div>
    </div>
  )
}

InputRange.defaultProps = {
  heightOut: "0.5rem",
  heightIn: "7px",
  widthOut: "30rem",
  widthIn: "25rem",
}

export default InputRange
