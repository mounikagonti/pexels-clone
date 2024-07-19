import Link from 'next/link'
import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer_wrapper'>
          <div className='footer_items'>
            <Link href={'/'}>Terms of use</Link>
            <Link href={'/'}>Privacy Policy</Link>
            <Link href={'/'}>License</Link>
            <Link href={'/'}>Imports</Link>
            <Link href={'/'}>Cookies policy</Link>
          </div>
          <div className='date'>
            © {currentYear} Pexels All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
