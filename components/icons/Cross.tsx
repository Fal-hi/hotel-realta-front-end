import React from "react"

interface Iprops {
  className?: string
}

const Cross = ({ className }: Iprops) => {
  return (
    <div className={className}>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 1.98621L2 14.0138"
          stroke="#9E9E9E"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 1.98621L14 14.0138"
          stroke="#9E9E9E"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

export default Cross
