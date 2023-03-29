import React from 'react'
import { FC } from 'react'

interface MenuProps {
  icon?: any
}

const Menu: FC<MenuProps> = ({ icon}) => {

  const IconMenu = icon
  return (
    <div className="items-center flex justify-centeR">
      <IconMenu/>
    </div>
  )
}

export default Menu
