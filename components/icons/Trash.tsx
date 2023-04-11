import { FC } from "react"

interface TrashProps {
  width?: string
  height?: string
  stroke?: string
}

const Trash: FC<TrashProps> = (props: any) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.5 4.99999H3.16667M3.16667 4.99999H16.5M3.16667 4.99999V16.6667C3.16667 17.1087 3.34226 17.5326 3.65482 17.8452C3.96738 18.1577 4.39131 18.3333 4.83333 18.3333H13.1667C13.6087 18.3333 14.0326 18.1577 14.3452 17.8452C14.6577 17.5326 14.8333 17.1087 14.8333 16.6667V4.99999H3.16667ZM5.66667 4.99999V3.33332C5.66667 2.8913 5.84226 2.46737 6.15482 2.15481C6.46738 1.84225 6.89131 1.66666 7.33333 1.66666H10.6667C11.1087 1.66666 11.5326 1.84225 11.8452 2.15481C12.1577 2.46737 12.3333 2.8913 12.3333 3.33332V4.99999M7.33333 9.16666V14.1667M10.6667 9.16666V14.1667"
        stroke={props.stroke}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

Trash.defaultProps = {
  width: "20",
  height: "20",
  stroke: "#667085",
}

export default Trash
