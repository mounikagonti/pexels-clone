'use client'
import {useSearchContext} from '@/app/context/SearchContext'
import {curatedResponse} from '@/hooks/useCuratedPhotos'
import {useSearchApiResults} from '@/hooks/useSearchApiResults'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import useMeasure from 'react-use-measure'



const Hero = () => {
  const {query} = useSearchContext()
  const {loading, data} = useSearchApiResults({query})
  const [ref, bounds] = useMeasure()

  console.log('data', data)

  return (
    <div className='hero'>
      <div className='container'>
        <div className='hero_wrapper'>
          <div className='hero_top'>
            <Link href={'/'}>Home</Link>
            <Link href={'/'}>Videos</Link>
            <Link href={'/'}>Leaderboard</Link>
            <Link href={'/'}>Challenges</Link>
          </div>
          <div className='hero_middle'>
            <h2>Free Stock Photos</h2>
            <div className='trending'>
              <select name='' id=''>
                <option value='Trending'>Trending</option>
                <option value='New'>New</option>
              </select>
            </div>
          </div>
          <div className='photo_grid' ref={ref}>
            {loading ? (
              <p>Loading...</p>
            ) : (
              (data as curatedResponse).photos?.map((photo: any) => (
                <div key={photo?.id} className='img_container'>
                  <Image
                    src={photo?.src.medium}
                    alt={photo?.alt}
                    width={bounds.width}
                    height={bounds.height}
                    className='photo-item'
                  />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
