import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Navbar from '@/components/navbar'
import Sidebar from '@/components/sidebar'

const BaseLayout = ({children}:any) => {
const [showNav, setShowNav]= useState(true)

  return (
    <div>
        <Navbar showNav={showNav} setShowNav={setShowNav}/>
        <div className="flex">
        <Sidebar />
        <main className={`pt-[100px] transition-all duration-[400ms] flex-1`}>
          <div className="px-1 md:px-10">{children}</div>
        </main>
      </div>
    </div>
  )
}



export default BaseLayout