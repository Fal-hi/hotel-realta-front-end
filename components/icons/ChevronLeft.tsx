import { FC } from "react"

interface ChevronRightProps {
  width?: string
  height?: string
  fill?: string
}

const ChevronLeft: FC<ChevronRightProps> = (props: any) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 9 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.16016 1.41L3.58016 6L8.16016 10.59L6.75016 12L0.750156 6L6.75016 0L8.16016 1.41Z"
        fill={props.fill}
      />
    </svg>
  )
}

ChevronLeft.defaultProps = {
  width: "9",
  height: "12",
  fill: "#C4CDD5",
}

export default ChevronLeft
