import React from 'react'


const AllowedFeatures = ({title, icon}: any) => {
  return (
    <div className='allowed_features'>
      <div className='container'>
        <div className='allowed_wrapper'>
          <h1>{title}</h1>
          <div className='feature_wrapper'>
            <div className='icon'>{icon}</div>
            <div className='feature_text'>
              All photos and videos on Pexels are free to use.
            </div>
          </div>
          <div className='feature_wrapper'>
            <div className='icon'>{icon}</div>
            <div className='feature_text'>
              All photos and videos on Pexels are free to use.
            </div>
          </div>
          <div className='feature_wrapper'>
            <div className='icon'>{icon}</div>
            <div className='feature_text'>
              All photos and videos on Pexels are free to use.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllowedFeatures
