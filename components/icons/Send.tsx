import { FC } from "react"

interface SendProps {
  width?: string
  height?: string
  stroke?: string
}

const Send: FC<SendProps> = (props: any) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 81 81"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_281_12823)">
        <path
          d="M29.0132 52.504L41.5259 70.473L54.7442 24.5412L10.0678 41.5257L29.0132 52.504ZM29.0132 52.504L41.8787 38.5226"
          stroke={props.stroke}
          stroke-width="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_281_12823">
          <rect
            width="57"
            height="57"
            fill="white"
            transform="translate(38.5967) rotate(42.6199)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

Send.defaultProps = {
  width: "30",
  height: "30",
  stroke: "#7743DB",
}

export default Send
