'use client'

export interface Photo {
  id: number
  width: number
  height: number
  url: string
  photographer: string
  photographer_url: string
  photographer_id: number
  avg_color: string
  src: {
    original: string
    large2x: string
    large: string
    medium: string
    small: string
    portrait: string
    landscape: string
    tiny: string
  }
  liked: boolean
  alt: string
}

export interface curatedResponse {
  page: number
  per_page: number
  total_results: number
  photos: Photo[]
  next_page: string
}

import Axios from '../axiosInstance'
import {useEffect, useState} from 'react'
export const useCuratedPhotos = () => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<curatedResponse | {}>({})

  const getCuratedPhotos = async () => {
    try {
      setLoading(true)
      const response = await Axios.get('/curated')
      setData(response?.data)
    } catch (error: any) {
      console.log(error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getCuratedPhotos()
  }, [])

  return {loading, data}
}
