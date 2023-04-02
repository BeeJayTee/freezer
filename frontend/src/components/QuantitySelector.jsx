import { useState } from "react";

const QuantitySelector = ({ amount, setAmount, emptyFields }) => {
  const [isDownMinus, setIsDownMinus] = useState(false);
  const [isDownPlus, setIsDownPlus] = useState(false);

  const handleClick = (e, op) => {
    if (op === "minus" && amount >= 1) {
      setAmount(amount - 1);
    } else if (op === "plus") {
      setAmount(amount + 1);
    }
  };

  const toggleMousePlus = () => {
    setIsDownPlus(!isDownPlus);
  };
  const toggleMouseMinus = () => {
    setIsDownMinus(!isDownMinus);
  };

  return (
    <div className="QuantitySelector">
      <div
        className={`flex border ${
          emptyFields.includes("amount") ? "border-red-600" : "border-green-900"
        } w-fit rounded-md text-xl`}
      >
        <div
          className={`px-6 py-2 border-r border-r-green-900 rounded-l-md select-none hover:cursor-default ${
            isDownMinus ? "bg-green-200" : "bg-green-100"
          }`}
          onClick={(e) => handleClick(e, "minus")}
          onMouseDown={(e) => toggleMouseMinus(e)}
          onMouseUp={(e) => toggleMouseMinus(e)}
        >
          -
        </div>
        <div className="num px-4 py-2">{amount}</div>
        <div
          className={`px-6 py-2 border-l  border-l-green-900 rounded-r-md select-none hover:cursor-default ${
            isDownPlus ? "bg-green-200" : "bg-green-100"
          }`}
          onClick={(e) => handleClick(e, "plus")}
          onMouseDown={(e) => toggleMousePlus(e)}
          onMouseUp={(e) => toggleMousePlus(e)}
        >
          +
        </div>
      </div>
    </div>
  );
};

export default QuantitySelector;
