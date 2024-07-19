import React from 'react'
import {MdFileUpload} from 'react-icons/md'

const Upload = () => {
  return (
    <div className='upload'>
      <div className='container'>
        <div className='upload_wrapper'>
          <h1>Free Upload Photos</h1>
          <div className='btn_wrapper'>
            <div className='icon'>
              <MdFileUpload />
            </div>
            <div className='text'>Upload photos and videos</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Upload
