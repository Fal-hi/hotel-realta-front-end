import { FC } from "react"

interface OutlineButtonProps {
  title: string
  padding?: string
  textSize?: string
  textColor?: string
  onClick?: () => void
}

export const OutlineButton: FC<OutlineButtonProps> = (props: any) => {
  return (
    <button
      className="font-semibold border-bgPrimary border-solid border-2 outline-none focus:outline-none rounded-md"
      style={{
        padding: props.padding,
        fontSize: props.textSize,
        color: props.textColor,
      }}
      onClick={props.onClick}
    >
      {props.title}
    </button>
  )
}

OutlineButton.defaultProps = {
  title: "Search",
  padding: "0.5rem 1rem",
  textSize: "8px",
  textColor: "#7743DB",
}
