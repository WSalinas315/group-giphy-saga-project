import { useDispatch } from "react-redux";


export default function FavoriteListItem({ item }) {

  const dispatch = useDispatch();

  return (
    <div>
      <p>Favorite list item placeholder. Gif URL: {item.url}</p>
    </div>
  )
}