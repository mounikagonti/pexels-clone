import axios from 'axios'

const Axios = axios.create({
  baseURL: 'https://api.pexels.com/v1',
  timeout: 5000,
  headers: {Authorization: process.env.NEXT_PUBLIC_PEXELS_API_KEY},
})

// Add a request interceptor
Axios.interceptors.request.use(
  function (config) {
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

// Add a response interceptor
Axios.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default Axios
