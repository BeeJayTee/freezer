import { useEffect, useState } from "react";

import ListItem from "./ListItem";

const List = () => {
  const [items, setItems] = useState([]);

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
      {items.map((item, index) => (
        <ListItem name={item.name} amount={item.amount} key={index} />
      ))}
    </div>
  );
};

export default List;
