'use client'
import Axios from '@/axiosInstance'
import {useEffect, useState} from 'react'
import {curatedResponse} from './useCuratedPhotos'

export const useSearchApiResults = ({query}: {query: string}) => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<curatedResponse | {}>({})

  useEffect(() => {
    const getPhotos = async () => {
      try {
        setLoading(true)
        let response
        if (query) {
          response = await Axios.get(`/search?query=${query}`)
        } else {
          response = await Axios.get('/curated?per_page=15')
        }
        setData(response.data)
      } catch (error: any) {
        console.log(error.message)
      } finally {
        setLoading(false)
      }
    }

    getPhotos()
  }, [query])

  return {loading, data}
}
