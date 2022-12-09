import React from "react";

export default function FavoriteListItem({ item }) {

  return (
    <div className="favorites-container">
      {console.log('ATTEMPTED to display favorite list item.', item.title)}
      {console.log('Item is:', item)}
      <div className="favorites-card">
        <img className="favorites-img" src={item.url} alt={item.title} />
        <p>{item.title}</p>
      </div>
    </div>
  )
}