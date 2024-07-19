import Link from 'next/link'
import React from 'react'

const Features = () => {
  return (
    <div className='features'>
      <div className='container'>
        <div className='features_wrapper'>
          <Link href={'/'}>Home</Link>
          <Link href={'/'}>Videos</Link>
          <Link href={'/'}>Leaderboard</Link>
          <Link href={'/'}>Challenges</Link>
        </div>
      </div>
    </div>
  )
}

export default Features
