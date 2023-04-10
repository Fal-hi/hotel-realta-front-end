import { FC } from "react"

interface CardSaldoProps {
  width?: string
  height?: string

}

const CardSaldo: FC<CardSaldoProps> = (props: any) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 457 171"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_336_12715)">
        <rect width="457" height="171" rx="10" fill="#7743DB" />
        <circle cx="72.5" cy="328.5" r="238.5" fill="#865DFF" />
      </g>
      <defs>
        <clipPath id="clip0_336_12715">
          <rect width="457" height="171" rx="10" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

CardSaldo.defaultProps = {
  width: "457",
  height: "171",

}

export default CardSaldo
