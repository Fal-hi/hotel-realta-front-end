import { FC } from "react"

interface ChevronDownProps {
  width?: string
  height?: string
  stroke?: string
  className?: any
}

const ChevronDown: FC<ChevronDownProps> = (props: any) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 9.99854L12 16.9985L5 9.99854"
        stroke={props.stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

ChevronDown.defaultProps = {
  width: "24",
  height: "25",
  stroke: "#000000",
}

export default ChevronDown
