import { FC } from "react"

interface XProps {
  width?: string
  height?: string
  stroke?: string
}

const X: FC<XProps> = (props: any) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1L13 13M1 13L13 1L1 13Z"
        stroke={props.stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

X.defaultProps = {
  width: "14",
  height: "14",
  stroke: "#000000",
}

export default X
