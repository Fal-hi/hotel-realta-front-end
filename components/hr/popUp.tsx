import React from "react"
import { Menu } from "@headlessui/react"
import DotsVertical from "../icons/DotsVertical"

interface Iprops {
  active?: boolean
  handleEdit: () => void
}

const PopUp = ({ handleEdit }: Iprops) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button>
        <DotsVertical />
      </Menu.Button>
      <Menu.Items className="absolute right-0 mt-2 w-56 z-10 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <Menu.Item
          as="div"
          className="py-2 px-2 cursor-pointer"
          onClick={handleEdit}
        >
          Edit
        </Menu.Item>
        <Menu.Item as="div" className="py-2 px-2 cursor-pointer">
          Salary History
        </Menu.Item>
        <Menu.Item as="div" className="py-2 px-2 cursor-pointer">
          Department History
        </Menu.Item>
      </Menu.Items>
    </Menu>
  )
}

export default PopUp
