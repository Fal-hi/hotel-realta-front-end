import React from "react"

function PlusPhoto(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      className="w-full max-w-full object-cover p-16 border-4 border-#1C2434 border-dashed cursor-pointer opacity-80"
      viewBox="0 0 60.249 62.184"
    >
      <g id="Group_43" data-name="Group 43" transform="translate(2.5 2.5)">
        <line
          id="Line_1"
          data-name="Line 1"
          y2="57.184"
          transform="translate(27.624)"
          fill="none"
          stroke="#1C2434"
          stroke-linecap="round"
          stroke-width="5"
        />
        <line
          id="Line_2"
          data-name="Line 2"
          y2="55.249"
          transform="translate(55.249 28.592) rotate(90)"
          fill="none"
          stroke="#1C2434"
          stroke-linecap="round"
          stroke-width="5"
        />
      </g>
    </svg>
  )
}

PlusPhoto.defaultProps = {
  width: "24",
  height: "24",
  stroke: "#FFFFFF",
}

export default PlusPhoto
