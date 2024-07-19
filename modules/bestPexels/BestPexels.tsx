import Image from 'next/image'
import React from 'react'

const BestPexels = () => {
  return (
    <div className='bestpexels'>
      <div className='container'>
        <div className='bestpexels_wrapper'>
          <div className='one'>
            <Image
              className='top_img'
              src={
                'https://images.pexels.com/photos/1115191/pexels-photo-1115191.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=400&h=250&fit=crop&crop=focalpoint'
              }
              alt='img'
              width={310}
              height={150}
            />
          </div>

          <div className='two'>
            <Image
              className='top_img'
              src={
                'https://images.pexels.com/photos/11022402/pexels-photo-11022402.jpeg?auto=compress&cs=tinysrgb&h=100&w=140&fit=crop&crop=focalpoint&dpr=2'
              }
              alt='img'
              width={100}
              height={100}
            />
            <Image
              className='top_img'
              src={
                'https://images.pexels.com/photos/9484212/pexels-photo-9484212.jpeg?auto=compress&cs=tinysrgb&h=100&w=140&fit=crop&crop=focalpoint&dpr=2'
              }
              alt='img'
              width={100}
              height={100}
            />
            <Image
              className='top_img'
              src={
                'https://images.pexels.com/photos/1115191/pexels-photo-1115191.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=400&h=250&fit=crop&crop=focalpoint'
              }
              alt='img'
              width={100}
              height={100}
            />
          </div>
          <h2>Pexels hero: Brett sayles</h2>
        </div>
      </div>
    </div>
  )
}

export default BestPexels
