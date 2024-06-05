import React, { useEffect, useState } from 'react'
import { debounce } from '../utils/debounce'

export default function Search({onSearch}) {
  const [search, setSearch] = useState('')

const handleSearch = () => {
  const value = search.target.value 
  onSearch(value)
}

useEffect(() => {
  if(!search) return
  const debouncedHandle = debounce(handleSearch, 5000);
  debouncedHandle()

},[search])
  return (
    <div>
      <input type='text' onChange={ setSearch }/>
    </div>
  )
}
