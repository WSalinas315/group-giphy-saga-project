import { useState } from "react";
import { useDispatch } from "react-redux"

export default function SearchResultsItem({ item }) {

  const [btnIsDisabled, setBtnIsDisabled] = useState(false);
  const dispatch = useDispatch();

  const handleClickFav = () => {
    console.log('fav button clicked');
    setBtnIsDisabled(true);
    console.log(btnIsDisabled);
    dispatch({
      type: 'ADD_TO_FAVORITES',
      payload: {url: item.images.downsized.url, title: item.title}
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
          onClick={handleClickFav}
          disabled={btnIsDisabled}
          >
          favorite
        </button>
        
        <div className="search-card-info">

        </div>
      </div>
    </div>
  )
}