import { useDispatch } from "react-redux"

export default function SearchResultsItem({ item }) {

  const dispatch = useDispatch();

  return (
    <div className="search-result-card">
      <img
        className="search-img"
        src={item.images.downsized.url}
      />
    </div>
  )
}