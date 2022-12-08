import { useSelector } from "react-redux"
import SearchResultsItem from "../SearchResultsItem/SearchResultsItem"


export default function SearchResultsList() {

  const searchResults = useSelector(store => store.searchResults)

  const resultsList = searchResults.map(item => {
    return (
      <SearchResultsItem item={item} />
    )
  })

  return (
    <div className="search-results-display">
      <p>Search Results:</p>
      {resultsList}
    </div>
  )
}