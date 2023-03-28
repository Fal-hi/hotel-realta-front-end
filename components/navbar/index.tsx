import React from "react"
import navbarCss from "./navbarcss"
import Typography from "../Typography"
import variants from "../Typography/textcss"
import Image from "next/image"
import Avatar from "../../assets/image/avatar.png"
import Menualt from "@/components/icons/MenuAlt"

const Navbar = ({ showNav, setShownav }: any) => {
  return (
    <div className={`${navbarCss.navbar}`}>
      <div className={"flex justify-center items-center"}>
        <div
          onClick={() => setShownav(!showNav)}
          className={"relative inline-block ml-8 cursor-pointer"}
        >
          <Menualt />
        </div>
      </div>
      <div className={`${navbarCss.navbarbody}`}>
        <div className={"text-right"}>
          <Typography variant={variants.smregular} color={"text-textPrimary"}>
            Muhammad Ikrar
          </Typography>
          <Typography variant={variants.xsregular} color={"text-textGray"}>
            administrator
          </Typography>
          <p></p>
        </div>
        <div className="pl-[15px]">
          <Image className="w-9 h-9" src={Avatar} alt="tes" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
