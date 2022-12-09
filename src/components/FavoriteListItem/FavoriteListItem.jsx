import React from "react";

export default function FavoriteListItem({ item }) {

  return (
    <div className="favorites-container">
      <div className="result-card">
        <img className="result-img" src={item.url} alt={item.title} />
        <p className="result-card-info">{item.title}</p>
      </div>
    </div>
  )
}