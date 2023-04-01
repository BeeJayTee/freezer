import { useState } from "react";

import QuantitySelector from "./QuantitySelector";
import { useAddItem } from "../hooks/useAddProduct";

const AddItem = ({ size }) => {
  const [isActive, setIsActive] = useState(null);

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState(0);

  const { addItem, error, isLoading } = useAddItem();

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const item = await addItem(category, name, amount);
    if (item.name) {
      setName("");
      setCategory("");
      setAmount(0);
      window.location.reload(false);
    }
  };

  const handleCancel = () => {};

  return (
    <div>
      {!isActive && (
        <div className="text-center">
          <button
            className="border px-4 py-2"
            onClick={(e) => setIsActive(true)}
          >
            Add Item
          </button>
        </div>
      )}
      {isActive && (
        <div className="m-auto w-fit bg-slate-100">
          <button className="ml-2 p-2" onClick={handleCancel}>
            X
          </button>
          {isLoading && <div>Loading</div>}
          {error && <div>{error}</div>}
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="flex justify-center mx-16"
          >
            <select
              name="categories"
              value={category}
              onChange={(e) => handleCategoryChange(e)}
              className="border px-4 py-2"
            >
              <option value="" disabled>
                Select a Category
              </option>
              <option value="meat">Meat</option>
              <option value="fish">Fish</option>
              <option value="general">General</option>
            </select>
            <input
              type="text"
              name="name"
              placeholder="i.e. ground beef"
              className="border px-4 py-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <QuantitySelector amount={amount} setAmount={setAmount} />
            <button className="border px-4 py-2">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddItem;
