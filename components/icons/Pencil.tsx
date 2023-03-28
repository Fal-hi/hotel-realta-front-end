import { FC } from "react"

interface PencilProps {
  width?: string
  height?: string
  stroke?: string
}

const Pencil: FC<PencilProps> = (props: any) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.1667 2.50005C14.3855 2.28118 14.6454 2.10756 14.9313 1.98911C15.2173 1.87066 15.5238 1.80969 15.8333 1.80969C16.1429 1.80969 16.4494 1.87066 16.7353 1.98911C17.0213 2.10756 17.2811 2.28118 17.5 2.50005C17.7189 2.71892 17.8925 2.97875 18.0109 3.26472C18.1294 3.55069 18.1904 3.85719 18.1904 4.16671C18.1904 4.47624 18.1294 4.78274 18.0109 5.06871C17.8925 5.35468 17.7189 5.61451 17.5 5.83338L6.25001 17.0834L1.66667 18.3334L2.91667 13.75L14.1667 2.50005Z"
        stroke={props.stroke}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

Pencil.defaultProps = {
  width: "20",
  height: "20",
  stroke: "#667085",
}

export default Pencil
