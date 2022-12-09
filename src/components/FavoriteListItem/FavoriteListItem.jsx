import React from "react";

export default function FavoriteListItem({ item }) {

  return (
    <div className="favorites-container">
      <div className="favorites-card">
        <img className="favorites-img" src={item.url} alt={item.title} />
        <p>{item.title}</p>
      </div>
    </div>
  )
}