import React from "react"
import Typography from "../Typography"
import variants from "../Typography/textcss"

interface Props {
  from: number
  to: number
  totalData: number
}

const ShowingResult = ({ from, to, totalData }: Props) => {
  return (
    <div className="sm:flex-1 sm:items-center sm:justify-start">
      <Typography variant={variants.smregular} color={"text-[#ABABAB]"}>
        <p className="text-sm">
          Showing <span className="font-medium">{from}</span> to{" "}
          <span className="font-medium">{to}</span> of{" "}
          <span className="font-medium">{totalData}</span> results
        </p>
      </Typography>
    </div>
  )
}

export default ShowingResult
