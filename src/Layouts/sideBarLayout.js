import React from 'react'
import SideBar from '../Components/SideBar'

const SidebarLayout = ({ children }) => {
  return (
    <>
          <SideBar />
          <div >
              {children}
          </div>
    </>
  )
}

export default SidebarLayout