import { FC } from "react"

interface ChevronProps {
  width?: string
  height?: string
  stroke?: string
}

const Chevron: FC<ChevronProps> = (props: any) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.25 4.58342L14.6667 11.0001L8.25 17.4167"
        stroke={props.stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

Chevron.defaultProps = {
  width: "24",
  height: "24",
  stroke: "#82868C",
}

export default Chevron
