import { useDispatch } from "react-redux"

export default function SearchResultsItem({ item }) {

  const dispatch = useDispatch();

  const handleClickFav = () => {
    console.log('fav button clicked');

    dispatch({
      type: 'ADD_TO_FAVORITES',
      payload: item.images.downsized.url
    })
  }

  return (
    <div className="search-container">

      <div className="search-result-card">
        
        <img
          className="search-img"
          src={item.images.downsized.url} 
          alt={item.title} />
        
        <button 
          className="material-symbols-outlined fav-btn"
          onClick={handleClickFav}>
          favorite
        </button>
        
        <div className="search-card-info">

        </div>
      </div>
    </div>
  )
}