'use client'

import {useSearchContext} from '@/app/context/SearchContext'
import React, {useState} from 'react'
import {BiImage} from 'react-icons/bi'
import {IoPlaySharp} from 'react-icons/io5'
import {IoSearchOutline} from 'react-icons/io5'

const SearchBar = () => {
  const [inputText, setInputText] = useState<string>('')
  const {setQuery} = useSearchContext()
  const [selectedOption, setSelectedOption] = useState('photos')

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value)
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value
    setInputText(query)
    setQuery(query)
  }

  return (
    <div className='searchBar'>
      <div className='container'>
        <div className='searchBar_wrapper'>
          <h2>
            The best free stock photos, royalty free images & videos shared by
            creators.
          </h2>
          <div className='search_section'>
            <div className='search_bar'>
              <div className='photos'>
                <select value={selectedOption} onChange={handleSelectChange}>
                  <option value='photos'>
                    <BiImage style={{marginRight: '5px'}} />
                    Photos
                  </option>
                  <option value='videos'>
                    <IoPlaySharp style={{marginRight: '5px'}} />
                    Videos
                  </option>
                </select>
              </div>
              <input
                type='text'
                placeholder='search for free photos'
                value={inputText}
                onChange={handleInputChange}
              />
            </div>

            <div className='search_icon'>
              <IoSearchOutline />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchBar
