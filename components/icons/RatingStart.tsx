import { FC } from "react"

interface SeacrhProps {
  width?: string
  height?: string
  stroke?: string
  rating: number
}

const RatingStart: FC<SeacrhProps> = (props: any) => {
  const rating = 100 - props.rating
  return (
    <div className="stars relative  whitespace-nowrap w-fit">
      <svg className=" fill-yellow-400" viewBox="0 0 576 512" width="20px">
        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
      </svg>

      <div
        className="cover overflow-hidden absolute top-0 right-0 bg-white mix-blend-color h-full "
        style={{ width: `${rating}%` }}
      ></div>
    </div>
  )
}

RatingStart.defaultProps = {
  width: "31",
  height: "31",
  stroke: "#667085",
}

export default RatingStart
