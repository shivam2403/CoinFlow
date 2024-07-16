import { SearchRounded } from '@mui/icons-material'
import './styles.css'
import { useState } from 'react'

const Search = ({search,onSearchChange}) => {

  return (
    <div className='search-flex'>
        <SearchRounded/>
        <input placeholder='Search' type='text' value={search} onChange={(e)=>onSearchChange(e)}/>
    </div>
  )
}

export default Search