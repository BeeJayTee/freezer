import { useState } from "react";

import QuantitySelector from "./QuantitySelector";
import { useAddItem } from "../hooks/useAddItem";
import { useAuthContext } from "../hooks/useAuthContext";

const AddItem = () => {
  const [isActive, setIsActive] = useState(null);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState(1);

  const [meatSelect, setMeatSelect] = useState(null);
  const [fishSelect, setFishSelect] = useState(null);
  const [generalSelect, setGeneralSelect] = useState(null);

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

  const handleClick = (e) => {
    setCategory(e.target.innerText);
    switch (e.target.innerText) {
      case "meat":
        setMeatSelect(true);
        setFishSelect(null);
        setGeneralSelect(null);
        break;
      case "fish":
        setMeatSelect(null);
        setFishSelect(true);
        setGeneralSelect(null);
        break;
      case "general":
        setMeatSelect(null);
        setFishSelect(null);
        setGeneralSelect(true);
        break;
    }
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
          {isLoading && <div className="ml-4 text-stone-500">Loading...</div>}
          {error && <div className="text-red-600 ml-4">{error}</div>}
          <form onSubmit={(e) => handleSubmit(e)} className="mx-16">
            <legend className="font-bold text-stone-900 mb-2">
              Add an item to the freezer
            </legend>
            <fieldset className="flex flex-col gap-y-4 lg:flex-row gap-x-4 justify-center">
              {/* <select
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
              </select> */}
              {/* custom radio buttons */}
              <div className="flex justify-around gap-2">
                <div
                  className={`border w-fit p-2 cursor-pointer ${
                    meatSelect ? "bg-green-300 border-green-900" : ""
                  }`}
                  onClick={handleClick}
                >
                  meat
                </div>
                <div
                  className={`border w-fit p-2 cursor-pointer ${
                    fishSelect ? "bg-green-300 border-green-900" : ""
                  }`}
                  onClick={handleClick}
                >
                  fish
                </div>
                <div
                  className={`border w-fit p-2 cursor-pointer ${
                    generalSelect ? "bg-green-300 border-green-900" : ""
                  }`}
                  onClick={handleClick}
                >
                  general
                </div>
              </div>
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
