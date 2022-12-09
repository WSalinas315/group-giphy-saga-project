import FavoritesList from "../FavoritesList/FavoritesList";
import { useDispatch } from "react-redux";
import React, {useEffect} from "react";

export default function Favorites() {

  return (
    <main>
      <h3>Favorites:</h3>
      <FavoritesList />
    </main>
  )
}