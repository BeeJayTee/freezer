import { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

import ListItem from "./ListItem";

const List = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [filteredResults, setFilteredResults] = useState([]);

  const { user } = useAuthContext();

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch(
        "https://freezer-inventory-app.onrender.com/items",
        {
          headers: { Authorization: `Bearer ${user.token}` },
        }
      );
      const json = await response.json();
      setItems(json);
      setFilteredResults(json);
    };
    if (user) {
      fetchItems();
    }
  }, []);

  const handleCategoryChange = (e) => {
    if (e.target.value === "") {
      return setFilteredResults(items);
    }
    let results = items.filter((item) => {
      return item.category === e.target.value;
    });
    setFilteredResults(results);
  };

  return (
    <div>
      <div className="flex justify-center">
        <form>
          <p>filter results:</p>
          <select
            name="categories"
            onChange={(e) => handleCategoryChange(e)}
            className="border border-green-900 bg-stone-100 rounded-md px-4 py-2 mb-8"
          >
            <option value="">All Items</option>
            <option value="meat">Meat</option>
            <option value="fish">Fish</option>
            <option value="general">General</option>
          </select>
        </form>
      </div>
      {error && <p>{error}</p>}
      <table className="table-auto w-full md:w-3/4 md:m-auto text-center">
        <thead>
          <tr>
            <th className="">Category</th>
            <th>Item</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredResults.map((item, index) => (
            <ListItem
              category={item.category}
              name={item.name}
              amount={item.amount}
              id={item._id}
              key={index}
              setError={setError}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
