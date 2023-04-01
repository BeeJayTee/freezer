import { useEffect, useState } from "react";

import ListItem from "./ListItem";

const List = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch("http://localhost:4141/items");
      const json = await response.json();
      setItems(json);
    };
    fetchItems();
  }, []);
  return (
    <div>
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
