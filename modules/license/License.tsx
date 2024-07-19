import React from 'react'
import Features from '../features/Features'
import AllowedFeatures from '../allowedFeatures/AllowedFeatures'
import {FaCheck} from 'react-icons/fa6'
import {IoClose} from 'react-icons/io5'
import PopupModel from '../popupModel/PopupModel'

const License = () => {
  return (
    <div className='license'>
      <div className='conatiner'>
        <div className='license_wrapper'>
          <Features />
          <h1>Legal Simplicity</h1>
          <h4>
            All photos and videos on Pexels can be downloaded and used for free.
          </h4>
          <AllowedFeatures title='What is Allowed?' icon={<FaCheck />} />
          <AllowedFeatures
            title='What is Not Allowed?'
            icon={<IoClose style={{color: 'red'}} />}
          />
        </div>
      </div>
    </div>
  )
}

export default License
