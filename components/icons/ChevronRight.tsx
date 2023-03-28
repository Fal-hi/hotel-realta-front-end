import { FC } from "react"

interface ChevronRightProps {
  width?: string
  height?: string
  fill?: string
}

const ChevronRight: FC<ChevronRightProps> = (props: any) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 9 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.839844 1.41L5.41984 6L0.839844 10.59L2.24984 12L8.24984 6L2.24984 0L0.839844 1.41Z"
        fill={props.fill}
      />
    </svg>
  )
}

ChevronRight.defaultProps = {
  width: "9",
  height: "12",
  fill: "#C4CDD5",
}

export default ChevronRight
