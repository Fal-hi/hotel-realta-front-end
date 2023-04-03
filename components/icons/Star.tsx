import { FC } from "react"

interface StarProps {
  width?: string
  height?: string
  fill?: string
}

const Star: FC<StarProps> = (props: any) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 0L12.0593 4.9091L18 6.11146L13.95 10.3478L14.5623 16L9 13.7091L3.43769 16L4.05 10.3478L0 6.11146L5.94073 4.9091L9 0Z"
        fill={props.fill}
      />
    </svg>
  )
}

Star.defaultProps = {
  width: "18",
  height: "16",
  fill: "#DFB300",
}

export default Star
