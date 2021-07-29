import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("");

  function handleInputName(e) {
    setItemName(e.target.value);
    console.log(itemName);
  }
  function handleSelectCategory(e) {
    setItemCategory(e.target.value);
  }
  let x;
  function onSubmit(e) {
    e.preventDefault();
    const newItem = {
      id: uuid(),
      name: itemName,
      category: itemCategory,
    };
    onItemFormSubmit(newItem);
  }
  return (
    <form onSubmit={onSubmit} className="NewItem">
      <label>
        Name:
        <input
          value={itemName}
          onChange={handleInputName}
          type="text"
          name="name"
        />
      </label>

      <label>
        Category:
        <select
          onChange={handleSelectCategory}
          value={itemCategory}
          name="category"
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
