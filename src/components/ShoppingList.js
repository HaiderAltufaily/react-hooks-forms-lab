import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [newItems, setNewItems] = useState(items);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = newItems.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  function onSearchChange(e) {
    setSearch(e.target.value);
  }
  const newList = itemsToDisplay.filter((item) => {
    if (search === "") return true;
    return item.name.toLowerCase().includes(search.toLowerCase());
  });

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
  function onItemFormSubmit(e) {
    e.preventDefault();
    const newItem = {
      id: [...items].slice(-1)[0].id + 1,
      name: itemName,
      category: itemCategory,
    };
    setItemName("");
    setItemCategory("");

    setNewItems([...itemsToDisplay, newItem]);
  }

  return (
    <div className="ShoppingList">
      <ItemForm
        itemCategory={itemCategory}
        itemName={itemName}
        handleSelectCategory={handleSelectCategory}
        handleInputName={handleInputName}
        onItemFormSubmit={onItemFormSubmit}
      />
      <Filter
        inValue={search}
        onSearchChange={onSearchChange}
        onCategoryChange={handleCategoryChange}
      />
      <ul className="Items">
        {newList.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
