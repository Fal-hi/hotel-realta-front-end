import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Navbar from '@/components/navbar'
import Sidebar from '@/components/sidebar'

const BaseLayout = ({children}:any) => {
  const [showNav, setShowNav] = useState(true)
  const [screenWidth, setScreenWidth] = useState<number>(0)


  useEffect(() => {
    setScreenWidth(window.innerWidth)
    window.addEventListener('resize', () => setScreenWidth(window.innerWidth))
    return () => window.removeEventListener('resize', () => setScreenWidth(window.innerWidth))
  }, [])

  const closeSidebar = () => {
    setShowNav(false)
  }
  return (
    <>
    <div className='min-h-screen flex flex-col flex-auto flex-shrink-0 antialiase'>
        <Navbar showNav={showNav} setShowNav={setShowNav} screenWidth={screenWidth}/>
        {(showNav && screenWidth >= 768) && (
          <div className="fixed flex flex-col left-0 w-14 hover:w-64 md:w-64 z dark:bg-gray-900 h-full  transition-all duration-300 border-none z-10 sidebar">
            <Sidebar showNav={showNav}   />
          </div>
        )}
        <div className={`h-full mx-10 mb-10 ${showNav && screenWidth >= 768 ? 'md:ml-64' : ''}  `}>
        <main className={`pt-[100px] transition-all duration-[400ms] flex-1`}>
          <div className="px-1 md:px-10">{children}</div>
        </main>
      </div>
    </div>
    </>
  )
}



export default BaseLayout