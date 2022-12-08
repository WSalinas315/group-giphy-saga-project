import { useDispatch } from "react-redux";
import { useState } from "react";

export default function SearchBar() {

  const dispatch = useDispatch();

  const [ searchIn, setSearch ] = useState('')

  const handleSearch = () => {

    dispatch({ type: 'FETCH_SEARCH_RESULTS', payload: searchIn })
    setSearch('')
  }

  return (
    <div>
      <input 
        type='text'
        value={searchIn}
        onChange={e => setSearch(e.target.value)} 
      />
      <button
        onClick={handleSearch}
      >Search</button>

    </div>
  )

}