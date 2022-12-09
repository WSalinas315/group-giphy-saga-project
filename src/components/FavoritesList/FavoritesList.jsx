import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import React, {useEffect} from "react";
import FavoriteListItem from "../FavoriteListItem/FavoriteListItem";

export default function FavoritesList() {

  // dispatch
  const dispatch = useDispatch();

  useEffect(() => {
    getFavorites();
  }, []);

  const getFavorites = () => {
    dispatch({ type: 'FETCH_FAVORITES' });
  }

  const favoriteGifs = useSelector(store => store.favoriteGifs);

  console.log('THIS IS FAVORITES GIFS: ', favoriteGifs);
  console.log('favoritegifs.data: ', favoriteGifs.data);

  const favoritesList = favoriteGifs.data.map(item => {
    return (
      <FavoriteListItem key={item.id} item={item} />
    )
  })

  return (
    <div>
      <div className="results-display">
        {favoritesList}
      </div>
    </div>
  )
}