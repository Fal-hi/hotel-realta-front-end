import { FC } from "react"

interface SeacrhProps {
  width?: string
  height?: string
  stroke?: string
  color?: string
}

const Search: FC<SeacrhProps> = (props: any) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      style={{ color: props.color }}
      viewBox="0 0 31 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26.4892 25.7214L21.6648 21.0825M24.2711 15.0574C24.2711 19.7691 20.2988 23.5886 15.3987 23.5886C10.4986 23.5886 6.52631 19.7691 6.52631 15.0574C6.52631 10.3458 10.4986 6.52631 15.3987 6.52631C20.2988 6.52631 24.2711 10.3458 24.2711 15.0574Z"
        stroke={props.stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

Search.defaultProps = {
  width: "31",
  height: "31",
  stroke: "#667085",
}

export default Search
