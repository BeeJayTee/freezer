import { useState } from "react";

const QuantitySelector = ({ amount, setAmount }) => {
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
      <div className="flex border w-fit rounded-full text-xl">
        <div
          className={`px-6 py-2 border-r rounded-l-full select-none hover:cursor-default ${
            isDownMinus ? "bg-slate-200" : "bg-white"
          }`}
          onClick={(e) => handleClick(e, "minus")}
          onMouseDown={(e) => toggleMouseMinus(e)}
          onMouseUp={(e) => toggleMouseMinus(e)}
        >
          -
        </div>
        <div className="num px-4 py-2">{amount}</div>
        <div
          className={`px-6 py-2 border-l rounded-r-full select-none hover:cursor-default ${
            isDownPlus ? "bg-slate-200" : ""
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
