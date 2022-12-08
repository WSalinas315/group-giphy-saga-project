import { useSelector } from "react-redux"

import FavoriteListItem from "../FavoriteListItem/FavoriteListItem";

export default function FavoritesList() {

  const favoriteGifs = useSelector(store => store.favoriteGifs)

  const favoritesList = favoriteGifs.map(item => {
    return (
      <FavoriteListItem item={item} />
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