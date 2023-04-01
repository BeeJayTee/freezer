import { useEffect, useState } from "react";

import ListItem from "./ListItem";

const List = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch("http://localhost:4141/items");
      const json = await response.json();
      setItems(json);
    };
    fetchItems();
  }, []);

  const handleCategoryChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <div className="flex justify-center">
        <select
          name="categories"
          value={category}
          onChange={(e) => handleCategoryChange(e)}
          className="border border-green-900 bg-green-100 rounded-md px-4 py-2"
        >
          <option value="" disabled>
            Select a Category
          </option>
          <option value="meat">Meat</option>
          <option value="fish">Fish</option>
          <option value="general">General</option>
        </select>
      </div>
      {error && <p>{error}</p>}
      <div className="grid grid-cols-6 gap-x-8 auto-rows-fr">
        {items.map((item, index) => (
          <ListItem
            category={item.category}
            name={item.name}
            amount={item.amount}
            id={item._id}
            key={index}
            setError={setError}
          />
        ))}
      </div>
    </div>
  );
};

export default List;
