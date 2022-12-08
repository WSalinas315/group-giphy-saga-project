import { useDispatch } from "react-redux"

export default function SearchResultsItem({ item }) {

  const dispatch = useDispatch();

  return (
    <div className="search-result-card">
      
      <img
        className="search-img"
        src={item.images.downsized.url} 
        alt={item.title} />
      
      <button className="material-symbols-outlined fav-btn">
        favorite
      </button>
      
      <div className="search-card-info">

      </div>
    </div>
  )
}