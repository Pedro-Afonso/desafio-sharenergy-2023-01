import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import './Search.css'

export const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [search, setSearch] = useState(searchParams.get('search') ?? '')

  const handleSearchParams = () => {
    if (search.length === 0) {
      searchParams.delete('search')
      setSearchParams(searchParams, {
        replace: true
      })
    } else {
      searchParams.set('search', search)
      setSearchParams(searchParams, {
        replace: true
      })
    }
  }

  return (
    <div className="search-wrapper">
      <input
        className="search-input"
        type="text"
        placeholder="Pesquisar..."
        value={search}
        onKeyDown={e => (e.key === 'Enter' ? handleSearchParams() : undefined)}
        onChange={e => setSearch(e.target.value)}
      />
      <button className="search-button" onClick={handleSearchParams}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="feather feather-search"
          viewBox="0 0 24 24"
        >
          <defs></defs>
          <circle cx="11" cy="11" r="8"></circle>
          <path d="M21 21l-4.35-4.35"></path>
        </svg>
      </button>
    </div>
  )
}
