import React from 'react'
import SearchBar from '../searchbar/SearchBar'

const Banner = () => {
  return (
    <div className='banner'>
      <div className='banner_wrapper'>
        <div className='searchBar'>
          <SearchBar />
        </div>
      </div>
    </div>
  )
}

export default Banner
