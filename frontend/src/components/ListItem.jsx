import { useState } from "react";

const ListItem = ({ category, name, amount, id, setError }) => {
  const [itemAmount, setItemAmount] = useState(amount);
  const [isDeleteActive, setIsDeleteActive] = useState(null);

  const handleTake = async () => {
    setError(null);
    if (itemAmount > 1) {
      setItemAmount(itemAmount - 1);
      const response = await fetch("http://localhost:4141/items/edit", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, amount: itemAmount - 1 }),
      });
      const json = await response.json();
      if (!response.ok) {
        return setError(json.error);
      }
      return console.log(json.message);
    } else if (itemAmount === 1) {
      checkDelete();
    }
  };

  const handleAdd = async () => {
    setError(null);
    setItemAmount(itemAmount + 1);
    const response = await fetch("http://localhost:4141/items/edit", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, amount: itemAmount + 1 }),
    });
    const json = await response.json();
    if (!response.ok) {
      return setError(json.error);
    }
    return console.log(json.message);
  };

  const checkDelete = () => {
    setIsDeleteActive(true);
  };

  const handleDelete = async () => {
    setError(null);
    const response = await fetch(`http://localhost:4141/items/delete/${id}`, {
      method: "DELETE",
    });
    const json = response.json();
    if (!response.ok) {
      return setError(json.error);
    }
    window.location.reload(false);
    return console.log(json.message);
  };

  return (
    <div className="border-4 border-green-900 bg-green-100 px-4 pb-4 w-full">
      {!isDeleteActive && (
        <div>
          <div className="my-2 text-xs uppercase text-stone-400">
            <p>{category}</p>
          </div>
          <div className="flex justify-between mb-4">
            <p className="font-bold text-green-900">{name}</p>
            <p className="text-stone-700">{itemAmount}</p>
          </div>
          <div className="flex justify-center gap-x-6 px-8 py-2">
            <button
              className="px-2 border-2 border-green-900 hover:bg-green-200 rounded-md"
              onClick={handleTake}
            >
              Take
            </button>
            <button
              className="px-2 py-0 border-2 border-green-900 hover:bg-green-200 rounded-md"
              onClick={handleAdd}
            >
              Add
            </button>
          </div>
          <div className="mt-2 text-xs text-right text-red-600">
            <button className="p-2" onClick={checkDelete}>
              delete
            </button>
          </div>
        </div>
      )}
      {isDeleteActive && (
        <div>
          <div className="my-2 text-xs uppercase text-slate-400">
            <p>{category}</p>
          </div>
          <div className="flex justify-between mb-4">
            <p>
              Are you sure you want to delete{" "}
              <span className="font-bold">{name}</span>?
            </p>
          </div>
          <div className="flex justify-center gap-x-2 px-8 py-2">
            <button className="p-2" onClick={(e) => setIsDeleteActive(null)}>
              cancel
            </button>
            <button className="p-2" onClick={handleDelete}>
              delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListItem;
