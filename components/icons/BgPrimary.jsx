import React from "react"

const BgPrimary = props => {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 1064 108"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_226_12648)">
        <rect width="1064" height="108" rx="10" fill="#7743DB" />
        <circle cx="101.5" cy="269.5" r="238.5" fill="#865DFF" />
        <circle cx="971.5" cy="-175.5" r="238.5" fill="#865DFF" />
      </g>
      <defs>
        <clipPath id="clip0_226_12648">
          <rect width="1064" height="108" rx="10" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

BgPrimary.defaultProps = {
  width: "28",
  height: "24",
  fill: "#82868C",
}

export default BgPrimary
