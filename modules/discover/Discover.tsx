import React from 'react'
import Features from '../features/Features'
import BestPexels from '../bestPexels/BestPexels'

const Discover = () => {
  return (
    <div className='discover'>
      <div className='container'>
        <div className='discover_wrapper'>
          <Features />
          <h1 className='title'>Discover the Best of Pexels</h1>
          <div className='heroes_of_the_week'>
            <h1 className='sub_title'>Heroes of The Week</h1>
            <div className='best_pexels_wrapper'>
              <BestPexels />
              <BestPexels />
              <BestPexels />
            </div>
          </div>
          <div className='heroes_of_the_week'>
            <h1 className='sub_title'>Photography Topics</h1>
            <div className='best_pexels_wrapper'>
              <BestPexels />
              <BestPexels />
              <BestPexels />
            </div>
          </div>
          <div className='heroes_of_the_week'>
            <h1 className='sub_title'>Backgrounds And Cover Photos</h1>
            <div className='best_pexels_wrapper'>
              <BestPexels />
              <BestPexels />
              <BestPexels />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Discover
