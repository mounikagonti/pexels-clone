'use client'
import Axios from '@/axiosInstance'
import {createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit'


interface Photo {
  id: number
  src: {
    medium: string
  }
  photographer: string
  alt: string
}

interface SearchState {
  query: string
  photos: Photo[]
  loading: boolean
  error: string | null
  page: number
}

const initialState: SearchState = {
  query: '',
  photos: [],
  loading: false,
  error: null,
  page: 1,
}

export const fetchPhotos = createAsyncThunk(
  'search/fetchPhotos',
  async ({query}: {query: string}) => {
    try {
      const searchParams = new URLSearchParams({
        query,
      })
      const url = `/search?${searchParams}`
      const response = await Axios.get(url)
      return response.data.photos
    } catch (error: any) {
      throw new Error(error.message || 'Failed to fetch photos')
    }
  }
)

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload
      state.page = 1
      state.photos = []
    },
    incrementPage: (state) => {
      state.page += 1
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPhotos.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchPhotos.fulfilled, (state, action) => {
        state.loading = false
        state.photos = [...state.photos, ...action.payload]
      })
      .addCase(fetchPhotos.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to fetch photos'
      })
  },
})

export const {setQuery, incrementPage} = searchSlice.actions
export default searchSlice.reducer
