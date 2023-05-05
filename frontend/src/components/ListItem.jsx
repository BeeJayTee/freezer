import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

const ListItem = ({ category, name, amount, id, setError }) => {
  const [itemAmount, setItemAmount] = useState(amount);
  const [isDeleteActive, setIsDeleteActive] = useState(null);

  const { user } = useAuthContext();

  const handleTake = async () => {
    setError(null);
    if (itemAmount > 1) {
      setItemAmount(itemAmount - 1);
      const response = await fetch(
        "https://freezer-inventory-app.onrender.com/items/edit",
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
          body: JSON.stringify({ id, amount: itemAmount - 1 }),
        }
      );
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
    const response = await fetch(
      "https://freezer-inventory-app.onrender.com/items/edit",
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({ id, amount: itemAmount + 1 }),
      }
    );
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
    const response = await fetch(
      `https://freezer-inventory-app.onrender.com/items/delete/${id}`,
      {
        method: "DELETE",
        headers: { Authorization: `Bearer ${user.token}` },
      }
    );
    const json = response.json();
    if (!response.ok) {
      return setError(json.error);
    }
    window.location.reload(false);
    return console.log(json.message);
  };
  return (
    <tr className="border border-green-900 odd:bg-green-100 even:bg-stone-50 w-full">
      <td className="py-4 ml-4 text-xs md:text-base">{category}</td>
      <td className="py-4 w-32 md:w-fit font-bold text-md">{name}</td>
      <td className="py-4 text-stone-700 font-bold">{itemAmount}</td>
      {!isDeleteActive && (
        <td className="py-4 pr-4 flex justify-center gap-x-[5px] md:gap-x-4 text-sm md:text-base">
          <button className="p-2" onClick={handleTake}>
            Take
          </button>
          <button className="p-2" onClick={handleAdd}>
            Add
          </button>
          <button className="p-2 text-red-600" onClick={checkDelete}>
            delete
          </button>
        </td>
      )}
      {isDeleteActive && (
        <td className="flex flex-col">
          <div>
            Delete <span className="font-bold">{name}</span>?
          </div>
          <div>
            <button className="p-2" onClick={(e) => setIsDeleteActive(null)}>
              cancel
            </button>
            <button className="p-2 text-red-600" onClick={handleDelete}>
              delete
            </button>
          </div>
        </td>
      )}
    </tr>
  );
};

export default ListItem;
