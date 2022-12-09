import { useSelector } from "react-redux"

import FavoriteListItem from "../FavoriteListItem/FavoriteListItem";

export default function FavoritesList() {

  const favoriteGifs = useSelector(store => store.favoriteGifs);

  console.log('THIS IS FAVORITES GIFS: ', favoriteGifs);

  const favoritesList = [favoriteGifs].map(item => {
    return (
      <FavoriteListItem key={item.id} item={item} />
    )
  })

  return (
    <div>
      <p>List of favorites:</p>
      <div className="favorites-display">
        {favoritesList}
      </div>
    </div>
  )
}