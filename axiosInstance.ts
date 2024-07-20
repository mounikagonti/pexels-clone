// import axios from 'axios'

// const Axios = axios.create({
//   baseURL: '/api',
// })

// export default Axios

import axios from 'axios'

const Axios = axios.create({
  baseURL: 'https://api.pexels.com/v1',
  headers: {
    Authorization: process.env.NEXT_PUBLIC_PEXELS_API_KEY,
    // 'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Headers': '*',
  },
})

// Add a request interceptor
Axios.interceptors.request.use(
  function (config) {
    console.log(config)
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
