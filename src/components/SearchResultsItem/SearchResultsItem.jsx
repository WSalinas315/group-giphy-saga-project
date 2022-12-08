import { useDispatch } from "react-redux"

export default function SearchResultsItem({ item }) {

  const dispatch = useDispatch();

  return (
    <div width="200px" height="200px">
      Gif item placeholder. Gif url: {item.url}
    </div>
  )
}