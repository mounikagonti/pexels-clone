'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, {useEffect, useState} from 'react'
import {MdKeyboardArrowDown} from 'react-icons/md'
import {IoMenuSharp} from 'react-icons/io5'
import useResponsive from '@/hooks/useResponsive'
import Popover from '../popover/Popover'
import {useRouter} from 'next/navigation'
import PopupModel from '../popupModel/PopupModel'
import Sidebar from '../sidebar/Sidebar'

const Header = () => {
  const {isMobile, isTablet, isDesktop} = useResponsive()
  const router = useRouter()
  const [joinModel, setJoinModel] = useState(false)
  const [sidebar, setSidebar] = useState(false)

  const handleExploreClick = () => {
    router.push('/discover')
  }
  const handleLicenseClick = () => {
    router.push('/license')
  }
  const handleUploadClick = () => {
    router.push('/upload')
  }
  const handleJoinClick = () => {
    setJoinModel(true)
  }
  const handleMenuClick = () => {
    setSidebar(true)
  }
  const handleLogoClick = () => {
    router.push('/')
  }

  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className='container'>
        <div className='header_wrapper'>
          <div className='header_left'>
            <div className='logo'>
              <Image
                onClick={handleLogoClick}
                src={
                  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAATlBMVEVSr6JJq55FqJtMrJ+r083Z6ujF4NyDwLg+p5nI4d3////x9/fd7Oojmo09pJhCppmn0MqLw7zP5eLk8O/3+vput62+29hRrKCgy8Yyn5Me7Ro9AAAAd0lEQVR4Ac3RNQKAQAxE0Qg6uMP9D4qEkqTnt2996bexvLE6lqRvWV58UEpUFlCLg01rJai7L7ZktT0GddEUo4TYTVMXYjunIXKOnl1kLhbMwWmztQaWzcUNmNdNKcD9EKII7SwONl3RGkYPbxh+2aDkaWeZ/bYLl/kGyCkv4QgAAAAASUVORK5CYII='
                }
                alt='logo'
                height={50}
                width={50}
                style={{borderRadius: '10px'}}
              />
              <h3 onClick={handleLogoClick}>Pexels</h3>
            </div>
          </div>
          <div className='header_right'>
            {isDesktop && (
              <nav>
                <Popover
                  content={
                    <div>
                      <p>Discover</p>
                      <p>Popular searches</p>
                      <p>Leaderboard</p>
                      <p>Challenges</p>
                      <p>Free videos</p>
                      <p>Pexel blog</p>
                    </div>
                  }
                >
                  <Link onClick={handleExploreClick} href={'/discover'}>
                    Explore <MdKeyboardArrowDown />
                  </Link>
                </Popover>
                <Link onClick={handleLicenseClick} href={'/license'}>
                  License
                </Link>
                <Link onClick={handleUploadClick} href={'/upload'}>
                  Upload
                </Link>
                <Popover
                  content={
                    <div>
                      <p>Login</p>
                      <p>Join</p>
                      <p>Change Language</p>
                      <p>Image & Video API</p>
                      <p>Apps & plugins</p>
                      <p>FAQ</p>
                      <p>Report content</p>
                    </div>
                  }
                >
                  <Link className='more' href={'/'}>
                    ...
                  </Link>
                </Popover>
              </nav>
            )}
            <button onClick={handleJoinClick} className='join_btn'>
              Join
            </button>
            {(isMobile || isTablet) && (
              <button onClick={handleMenuClick} className='menu'>
                <IoMenuSharp />
              </button>
            )}
          </div>
        </div>
        <div>
          {joinModel ? (
            <PopupModel joinModel={joinModel} setJoinModel={setJoinModel} />
          ) : null}
        </div>
        <div>
          {sidebar ? (
            <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
          ) : null}
        </div>
      </div>
    </header>
  )
}

export default Header
