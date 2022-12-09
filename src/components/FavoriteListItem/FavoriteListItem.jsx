import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

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
      {console.log('ATTEMPTED to display favorite list item.', item.title)}
      {console.log('Item is:', item)}
      <div className="favorites-card">
        <img className="favorites-img" src={item.url} alt={item.title} />
        <p>{item.title}</p>
        {console.log('Categories: ',categories)}

        <form>
          <label>Set Category</label>
          <select id="category" name="category" onChange={(event) => updateCategory(event.target.key)}>
            {categoriesList}
          </select> 
        </form>

      </div>
    </div>
  )
}