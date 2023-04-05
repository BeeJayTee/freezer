import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useAddItem = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const { user } = useAuthContext();

  const addItem = async (category, name, amount) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch("http://localhost:4141/items/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({
        category,
        name,
        amount,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }
    return json;
  };
  return { addItem, error, setError, isLoading, emptyFields, setEmptyFields };
};
