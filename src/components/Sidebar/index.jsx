import React from 'react'

function Sidebar() {
  return (
    <aside className="w-full lg:w-1/4 bg-white p-6 border border-gray-200 rounded-lg shadow-md">
      <div>
        <h2>Product Categories</h2>
        <ul className="list-none p-0">
          <li className='text[#71778E]'>
            <input
            type="radio"
            id="Beverages"
            name="category"
            value={''}
          />
          <label htmlFor="Beverages">Beverages</label>
          </li>
          <li className='text[#71778E]'>
            <input
            type="radio"
            id="Biscuits & Snacks"
            name="category"
            value={''}
          />
          <label htmlFor="Biscuits & Snacks">Biscuits & Snacks</label>
          </li>
          <li className='text[#71778E]'>
            <input
            type="radio"
            id="Breads & Bakery"
            name="category"
            value={''}
          />
          <label htmlFor="Breads & Bakery">Breads & Bakery</label>
          </li>
          <li className='text[#71778E]'>
            <input
            type="radio"
            id="Breakfast & Dairy"
            name="category"
            value={''}
          />
          <label htmlFor="Breakfast & Dairy">Breakfast & Dairy</label>
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar
