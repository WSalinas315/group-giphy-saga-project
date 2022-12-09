import { useSelector } from "react-redux"
import SearchResultsItem from "../SearchResultsItem/SearchResultsItem"

import './SearchResultsList.css'

export default function SearchResultsList() {

  const searchResults = useSelector(store => store.searchResults)

  const resultsList = searchResults.map(item => {
    return (
      <SearchResultsItem
        key={item.id}
        item={item} />
    )
  })

  return (
    <div>
      <div className="results-display">
        {resultsList}
      </div>
    </div>
  )
}