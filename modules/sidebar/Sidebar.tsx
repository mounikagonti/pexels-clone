import Link from 'next/link'
import React from 'react'
import {IoClose} from 'react-icons/io5'

const Sidebar = ({sidebar, setSidebar}: any) => {
  const handleCloseClick = () => {
    setSidebar(false)
  }

  return (
    <div className={sidebar ? 'sidebar_overlay' : 'sidebar_overlay_hidden'}>
      <div className={sidebar ? 'sidebar' : 'sidebar sidebar-hidden'}>
        <div className='container'>
          <div onClick={handleCloseClick} className='close_icon'>
            <IoClose />
          </div>
          <div className='sidebar_items'>
            <Link href={'/'}>Home</Link>
            <Link href={'/'}>Discover Photos</Link>
            <Link href={'/'}>Popular Searches</Link>
            <Link href={'/'}>Free Videos</Link>
            <Link href={'/'}>Challenges</Link>
            <Link href={'/'}>Leaderboard</Link>
            <Link href={'/'}>Pexels Blog</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
