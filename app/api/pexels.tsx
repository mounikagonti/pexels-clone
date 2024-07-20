import {NextApiRequest, NextApiResponse} from 'next'
import Axios from '@/axiosInstance'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {query} = req
  const {NEXT_PUBLIC_PEXELS_API_KEY} = process.env

  try {
    const response = await Axios.get('/curated', {
      headers: {
        Authorization: NEXT_PUBLIC_PEXELS_API_KEY!,
      },
      params: {
        ...query,
      },
    })

    res.status(200).json(response.data)
  } catch (error: any) {
    res.status(error.response?.status || 500).json({
      message: error.message,
    })
  }
}
