import { FC } from "react"

interface AcProps {
  width: string
  height: string
  stroke: string
}

const Ac: FC<AcProps> = (props: any) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 21 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.375 1.5H2.625C2.14175 1.5 1.75 1.89175 1.75 2.375V9.375C1.75 9.85825 2.14175 10.25 2.625 10.25H18.375C18.8582 10.25 19.25 9.85825 19.25 9.375V2.375C19.25 1.89175 18.8582 1.5 18.375 1.5Z"
        stroke={props.stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 4.125H15.75M10.5 12.875V15.5M7 13.75V14.625M14 13.75V14.625M5.25 6.75H15.75V10.25H5.25V6.75Z"
        stroke={props.stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

Ac.defaultProps = {
  width: "21",
  height: "17",
  stroke: "#82868C",
}

export default Ac
