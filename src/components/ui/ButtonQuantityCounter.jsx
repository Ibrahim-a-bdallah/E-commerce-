import React, { useState } from 'react'

function ButtonQuantityCounter() {
  const [quantity, setQuantity] = useState(0);
  // Function to handle increment
  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };
  // Function to handle decrement
  const handleDectement =() =>{
    setQuantity(prevQuantity => (prevQuantity > 0 ? prevQuantity - 1 : 0));
  }
  return (
    <div className=" flex items-center rounded-5xl py-2 ">
      <button className=" bg-gray-200 hover:bg-gray-300 text-gray-800 px-3 py-1 rounded-l-lg cursor-pointer" onClick={handleDectement}>
        -
      </button>
      <span className="bg-white px-4 py-1 text-gray-800 ps-8 pe-8">
        {quantity}
      </span>
      <button className="bg-amber-400 hover:bg-amber-500 text-gray-800 px-3 py-1 rounded-r-lg cursor-pointer" onClick={handleIncrement}>
        +
      </button>
    </div>
  )
}

export default ButtonQuantityCounter;
