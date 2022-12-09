import SearchBar from '../SearchBar/Searchbar'
import SearchResultsList from '../SearchResultsList/SearchResultsList'

import './Search.css'

export default function Search() {


  return (
  <main>
    <h3>Find your favorite Gifs!</h3>
    <SearchBar />
    <SearchResultsList />
  </main>
  )
}