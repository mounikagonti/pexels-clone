
import React, {ReactNode} from 'react'

interface PopoverProps {
  children: ReactNode
  content: ReactNode
}

const Popover: React.FC<PopoverProps> = ({children, content}) => {
  return (
    <div className='popover'>
      <div className='trigger'>{children}</div>
      <div className='popoverContent'>{content}</div>
    </div>
  )
}

export default Popover
