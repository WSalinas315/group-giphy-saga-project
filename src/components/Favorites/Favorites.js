import FavoritesList from "../FavoritesList/FavoritesList";
import { useDispatch } from "react-redux";
import React, {useEffect} from "react";

export default function Favorites() {

    // dispatch
    const dispatch = useDispatch();

    useEffect(() => {
      getFavorites();
    }, []);
  
    const getFavorites = () =>{
      dispatch({type: 'FETCH_FAVORITES'});
    }


  return (
    <div>
      <h3>Favorites:</h3>
      {/* <FavoritesList /> */}
    </div>
  )
}