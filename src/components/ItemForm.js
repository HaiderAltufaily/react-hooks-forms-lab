import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({
  onItemFormSubmit,
  itemName,
  itemCategory,
  handleInputName,
  handleSelectCategory,
}) {
  return (
    <form onSubmit={onItemFormSubmit} className="NewItem">
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
