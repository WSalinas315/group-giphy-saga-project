import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import './FavoriteListItem.css'

export default function FavoriteListItem({ item }) {

  const dispatch = useDispatch();

   const categories = useSelector(store => store.categories);

  const categoriesList = categories.data.map(category => {
    return (
      <option value={category.name} key={category.id}>{category.name}</option>
    )
  })

  const updateCategory = (event) => {
    dispatch({type: 'SET_CATEGORY', payload: {id: item.id, category_id: event}});
  }

  return (
    <div className="favorites-container">
      <div className="result-card">
        <img className="result-img" src={item.url} alt={item.title} />
        <div className="result-card-info">

        <p>{item.title}</p>
        {console.log('Categories: ',categories)}

        </div>
        <form id="category-form">
          <label>Set Category:{' '}
            <select id="category" name="category" onChange={(event) => updateCategory(event.target.key)}>
              {categoriesList}
            </select> 
          </label>
        </form>

      </div>
    </div>
  )
}