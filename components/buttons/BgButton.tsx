import { FC } from "react"

interface BgButtonProps {
  title: string
  padding?: string
  textSize?: string
  width?: string
  onClick?: () => any
}

const BgButton: FC<BgButtonProps> = (props: any) => {
  return (
    <button
      className="font-semibold text-white border-bgPrimary bg-bgPrimary border-solid border-2 outline-none focus:outline-none hover:text-white rounded-md hover:bg-bgPrimary"
      style={{
        padding: props.padding,
        fontSize: props.textSize,
        width: props.width,
      }}
      onClick={props.onClick}
    >
      {props.title}
    </button>
  )
}

BgButton.defaultProps = {
  title: "Search",
  padding: "0.5rem 1rem",
  textSize: "12px",
  width: "auto",
}

export default BgButton
