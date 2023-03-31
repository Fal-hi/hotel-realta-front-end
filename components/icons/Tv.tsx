import { FC } from "react"

interface TvProps {
  width: string
  height: string
  fill: string
}

const Tv: FC<TvProps> = (props: any) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 20 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.4999 3.50002H11.1749L13.9166 0.758354L13.3333 0.166687L9.99992 3.50002L6.66659 0.166687L6.07492 0.758354L8.82492 3.50002H2.49992C2.05789 3.50002 1.63397 3.67561 1.32141 3.98818C1.00885 4.30074 0.833252 4.72466 0.833252 5.16669V15.1667C0.833252 16.0834 1.58325 16.8334 2.49992 16.8334H17.4999C18.4166 16.8334 19.1666 16.0834 19.1666 15.1667V5.16669C19.1666 4.72466 18.991 4.30074 18.6784 3.98818C18.3659 3.67561 17.9419 3.50002 17.4999 3.50002ZM17.4999 15.1667H2.49992V5.16669H17.4999V15.1667ZM7.49992 6.83335V13.5L13.3333 10.1667L7.49992 6.83335Z"
        fill={props.fill}
      />
    </svg>
  )
}

Tv.defaultProps = {
  width: "17",
  height: "20",
  fill: "#82868C",
}

export default Tv
