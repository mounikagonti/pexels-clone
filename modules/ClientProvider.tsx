'use client'

import {Provider} from 'react-redux'
import {ReactNode} from 'react'
import store from '../redux/store' 

interface Props {
  children: ReactNode
}

const ClientProvider = ({children}: Props) => {
  return <Provider store={store}>{children}</Provider>
}

export default ClientProvider
