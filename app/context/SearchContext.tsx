// app/context/SearchContext.tsx
'use client'

import React, {createContext, useState, ReactNode, useContext} from 'react'

interface SearchContextProps {
  query: string
  setQuery: (query: string) => void
}

const SearchContext = createContext<SearchContextProps | undefined>(undefined)

export const SearchProvider = ({children}: {children: ReactNode}) => {
  const [query, setQuery] = useState<string>('')

  return (
    <SearchContext.Provider value={{query, setQuery}}>
      {children}
    </SearchContext.Provider>
  )
}

export const useSearchContext = () => {
  const context = useContext(SearchContext)
  if (context === undefined) {
    throw new Error('useSearchContext must be used within a SearchProvider')
  }
  return context
}
