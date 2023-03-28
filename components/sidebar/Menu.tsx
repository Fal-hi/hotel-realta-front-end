import React from 'react'
import { FC } from 'react'

interface MenuProps {
  icon?: any
  isActive?: boolean
}

const Menu: FC<MenuProps> = ({ icon, isActive }) => {
  const fill = isActive ? '#5600E8' : '#757575'
  const IconMenu = icon
  return (
    <div className="items-center flex justify-centeR">
      <IconMenu color={fill} />
    </div>
  )
}

export default Menu
