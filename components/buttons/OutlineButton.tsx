import { FC } from "react"

interface OutlineButtonProps {
  title: string
  px?: string
  py?: string
  textSize?: string
}

export const OutlineButton: FC<OutlineButtonProps> = (props: any) => {
  return (
    <button
      className={`px-${props.px} py-${props.py} font-semibold text-${props.textSize} text-text border-bgPrimary border-solid border-2 outline-none focus:outline-none hover:text-white rounded-md hover:bg-bgPrimary`}
    >
      {props.title}
    </button>
  )
}

OutlineButton.defaultProps = {
  title: "Search",
  px: "1",
  py: "1",
  textSize: "[8px]",
}
