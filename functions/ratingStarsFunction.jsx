import { RatingStart } from "@/components/icons"

const RatingStars = ({ count }) => {
  let ratingNumber =
    count?.length > 0 &&
    100 + parseInt(count.toString().slice(0, 3).replace(".", "") + "0")

  const ratings = Array.from({ length: 5 }, (_, index) => {
    if (count <= 0) {
      return <RatingStart rating={100} key={index} />
    }
    ratingNumber = ratingNumber >= 100 ? ratingNumber - 100 : 100 - ratingNumber
    const test = parseInt(count.toString().slice(1, 4).replace(".", ""))
    const angkaDepan = parseInt(count.toString().slice(0, 1).replace(".", ""))

    if (index + 1 > angkaDepan + 1) {
      return <RatingStart rating={0} key={index} />
    } else {
      return <RatingStart rating={ratingNumber > 99 ? 100 : test} key={index} />
    }
  })

  return <div className="flex justify-center">{ratings}</div>
}

export default RatingStars
