import React from 'react'
import {IoClose} from 'react-icons/io5'
import {MdOutlineFileDownload} from 'react-icons/md'
import {IoMdShare} from 'react-icons/io'

const PopupModel = ({joinModel, setJoinModel}: any) => {
  const handleCloseClick = () => {
    setJoinModel(false)
  }

  return (
    <div className='layer_wrapper'>
      <div className='popup_model'>
        <div className='container'>
          <div className='popup_model_wrapper'>
            <div onClick={handleCloseClick} className='close_icon'>
              <IoClose />
            </div>
            <h1>What are you mainly using Pexels for?</h1>
            <p>
              You will always be able to do both things. This simply helps us
              create a better experience for you.
            </p>
            <div className='btn_wrapper'>
              <div className='icon'>
                <MdOutlineFileDownload />
              </div>
              <div className='text'>Download content</div>
            </div>
            <div className='btn_wrapper'>
              <div className='icon'>
                <IoMdShare />
              </div>
              <div className='text'>Share photos and videos</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopupModel
