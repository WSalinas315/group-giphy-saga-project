import { useState } from "react";
import { useDispatch } from "react-redux"

export default function SearchResultsItem({ item }) {

  const dispatch = useDispatch();

  const handleClickFav = () => {
    console.log('fav button clicked');


    dispatch({
      type: 'ADD_TO_FAVORITES',
      payload: {url: item.images.downsized.url, title: item.title}
    })
  }

  return (
    <div className="result-container">

      <div className="result-card">
        
        <img
          className="result-img"
          src={item.images.downsized.url} 
          alt={item.title} />
        
        <button
          className="material-symbols-outlined fav-btn"
          onClick={handleClickFav}
          >
          favorite
        </button>
        
        <div className="result-card-info">

        </div>
      </div>
    </div>
  )
}