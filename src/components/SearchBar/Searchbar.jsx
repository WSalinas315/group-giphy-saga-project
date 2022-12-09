import { useDispatch } from "react-redux";
import { useState } from "react";

import './SearchBar.css'

export default function SearchBar() {

  const dispatch = useDispatch();

  const [ searchIn, setSearch ] = useState('')

  const handleSearch = () => {

    dispatch({ type: 'FETCH_SEARCH_RESULTS', payload: searchIn })
    setSearch('')
  }

  return (
    <div className="search-form">
      <input 
        type='text'
        placeholder='Dogs, reactions, etc.'
        value={searchIn}
        onChange={e => setSearch(e.target.value)} 
      />
      <button
        className="material-symbols-outlined"
        onClick={handleSearch}
      >Search</button>

    </div>
  )

}