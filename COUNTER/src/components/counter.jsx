import { useState } from "react";

const Counter = () => {
  const [qty, setQty] = useState(1);

  const increase = () => {
   setQty(prev=>prev+1)
  };

  const decrease = () => {
    if(qty>0){
      setQty(end=>end-1)
    }
    // qty should not go below 1
  };

  const resetQty = () => {
    // reset to 1
    setQty(1)
  };

  return (
    <div className="p-6 bg-gray-200 w-fit rounded">
      <h2 className="text-xl text-center">Quantity: {qty}</h2>

      <div className="flex gap-4 mt-4">
        <button
          onClick={decrease}
          disabled={qty === 1}
          className="bg-gray-400 px-4 py-2 disabled:opacity-40"
        >
          -
        </button>

        <button
          onClick={increase}
          className="bg-green-400 px-4 py-2"
        >
          +
        </button>

        <button
          onClick={resetQty}
          className="bg-red-400 px-4 py-2"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
