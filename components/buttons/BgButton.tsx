import { FC } from "react"
import { useRouter } from "next/router"; // mengimpor useRouter dari next/router

interface BgButtonProps {
  title: string
  px?: string
  py?: string
  textSize?: string
  onClick?: () => void; // menambahkan properti onClick ke dalam definisi BgButtonProps
}

const BgButton: FC<BgButtonProps> = (props: any) => {
  const router = useRouter(); // menambahkan penggunaan useRouter
  
  return (
    <button
      className={`px-${props.px} py-${props.py} font-semibold text-${props.textSize} text-white border-bgPrimary bg-bgPrimary border-solid border-2 outline-none focus:outline-none hover:text-white rounded-md hover:bg-bgPrimary`}
      onClick={props.onClick} // menambahkan onClick pada button
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
