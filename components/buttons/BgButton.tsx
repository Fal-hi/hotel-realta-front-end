import { FC } from "react"

interface BgButtonProps {
  title: string
  px?: string
  py?: string
  textSize?: string
}

const BgButton: FC<BgButtonProps> = (props: any) => {
  return (
    <button
      className={`px-${props.px} py-${props.py} font-semibold text-${props.textSize} text-white border-bgPrimary bg-bgPrimary border-solid border-2 outline-none focus:outline-none hover:text-white rounded-md hover:bg-bgPrimary`}
    >
      {props.title}
    </button>
  )
}

BgButton.defaultProps = {
  title: "Search",
  px: "4",
  py: "2",
  textSize: "xs",
}

export default BgButton
