// import { useDispatch } from "react-redux";
import React, {useEffect} from "react";

export default function FavoriteListItem({ item }) {

  // dispatch
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   getFavorites();
  // }, []);

  // const getFavorites = () =>{
  //   dispatch({type: 'FETCH_FAVORITES'});
  // }

  return (
    <div className="favorites-container">
      <div className="favorites-card">
        <img className="favorites-img" src={item.url} alt={item.title} />
        <p>{item.title}</p>
      </div>
    </div>
  )
}