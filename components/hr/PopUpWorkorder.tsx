import React from "react"
import { Menu } from "@headlessui/react"
import DotsVertical from "../icons/DotsVertical"
import Link from "next/link"

interface Iprops {
  active?: boolean
  handleEdit: () => void
}

const PopUpWorkorder = ({ onEditClick, idWorkOrder }: any) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="px-5 ">
        <DotsVertical />
      </Menu.Button>
      <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <Menu.Item
          as="div"
          className="py-2 px-2 cursor-pointer"
          onClick={onEditClick}
        >
          Edit
        </Menu.Item>
        <Menu.Item as="div" className="py-2 px-2 cursor-pointer">
          <Link href={`/hr/workorder/${idWorkOrder}`}>Workorder Detail</Link>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  )
}

export default PopUpWorkorder
