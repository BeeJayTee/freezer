import { useState } from "react";

import QuantitySelector from "./QuantitySelector";
import { useAddItem } from "../hooks/useAddItem";
import { useAuthContext } from "../hooks/useAuthContext";

const AddItem = () => {
  const [isActive, setIsActive] = useState(null);

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState(0);

  const { addItem, error, setError, isLoading, emptyFields, setEmptyFields } =
    useAddItem();
  const { user } = useAuthContext();

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user) {
      const item = await addItem(category, name, amount);
      if (item.name) {
        setName("");
        setCategory("");
        setAmount(0);
        window.location.reload(false);
      }
    }
  };

  const handleCancel = () => {
    setIsActive(null);
    setError(null);
    setEmptyFields([]);
  };

  return (
    <div className="mb-4">
      {!isActive && (
        <div className="text-center">
          <button
            className="border-4 border-green-900 rounded-md px-4 py-2 text-green-900 bg-green-400 hover:bg-green-500"
            onClick={(e) => setIsActive(true)}
          >
            Add Item
          </button>
        </div>
      )}
      {isActive && (
        <div className="m-auto w-fit pb-8 border-8 border-green-900">
          <button
            className="ml-2 p-2 select-none text-green-900"
            onClick={handleCancel}
          >
            X
          </button>
          {isLoading && <div>Loading</div>}
          {error && <div className="text-red-600 ml-4">{error}</div>}
          <form onSubmit={(e) => handleSubmit(e)} className="mx-16">
            <legend className="font-bold text-stone-900">
              Add an item to the freezer
            </legend>
            <fieldset className="flex flex-col gap-y-4 lg:flex-row gap-x-4 justify-center">
              <select
                name="categories"
                value={category}
                onChange={(e) => handleCategoryChange(e)}
                className={`border ${
                  emptyFields.includes("category")
                    ? "border-red-600"
                    : "border-green-900"
                } bg-green-100 rounded-md px-4 py-2`}
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
                className={`border ${
                  emptyFields.includes("name")
                    ? "border-red-600"
                    : "border-green-900"
                } bg-green-100 rounded-md px-4 py-2`}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <QuantitySelector
                amount={amount}
                setAmount={setAmount}
                emptyFields={emptyFields}
              />
              <button className="border border-green-900 rounded-md px-4 py-2 bg-green-400 hover:bg-green-500">
                Submit
              </button>
            </fieldset>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddItem;
