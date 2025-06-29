import React from 'react'
import imgShop from '../../assets/img/shop/aeb9763b1145b3dd6e2fadd6c2b27941d3d7b0fa.png';
function Sidebar() {
  return (
    <aside className="w-full lg:w-1/4  ">
      <div>
        <h2 className='text-[#202435] font-semibold text-[15px] uppercase dosis pb-4' >Product Categories</h2>
        <ul className="list-none p-0  ">
          <li className="py-2 px-2">
            <div className="relative">
              <input
                type="radio"
                id="Beverages"
                name="category"
                value=""
                className="peer hidden"
              />
              <label
                htmlFor="Beverages"
                className="pl-6 text-[15px] cursor-pointer text-[#71778E]"
              >
                Beverages
              </label>
              <span
                className="absolute w-4 h-4 left-0 top-1/2 -translate-y-1/2 bg-[#f2f3f4] border-1 border-[#71778ec5] peer-checked:bg-[#35AFA0] pointer-events-none"
              ></span>
            </div>
          </li>
          <li className="py-2 px-2">
            <div className="relative">
              <input
                type="radio"
                id="Biscuits & Snacks"
                name="category"
                value=""
                className="peer hidden"
              />
              <label
                htmlFor="Biscuits & Snacks"
                className="pl-6 text-[15px] cursor-pointer text-[#71778E]"
              >
                Biscuits & Snacks
              </label>
              <span
                className="absolute w-4 h-4 left-0 top-1/2 -translate-y-1/2 bg-[#f2f3f4] border-1 border-[#71778ec5] peer-checked:bg-[#35AFA0] pointer-events-none"
              ></span>
            </div>
          </li>
          <li className="py-2 px-2">
            <div className="relative">
              <input
                type="radio"
                id="Breads & Bakery"
                name="category"
                value=""
                className="peer hidden"
              />
              <label
                htmlFor="Breads & Bakery"
                className="pl-6 text-[15px] cursor-pointer text-[#71778E]"
              >
                Breads & Bakery
              </label>
              <span
                className="absolute w-4 h-4 left-0 top-1/2 -translate-y-1/2 bg-[#f2f3f4] border-1 border-[#71778ec5] peer-checked:bg-[#35AFA0] pointer-events-none"
              ></span>
            </div>
          </li>
          <li className="py-2 px-2">
            <div className="relative">
              <input
                type="radio"
                id="Breakfast & Dairy"
                name="category"
                value=""
                className="peer hidden"
              />
              <label
                htmlFor="Breakfast & Dairy"
                className="pl-6 text-[15px] cursor-pointer text-[#71778E]"
              >
                Breakfast & Dairy
              </label>
              <span
                className="absolute w-4 h-4 left-0 top-1/2 -translate-y-1/2 bg-[#f2f3f4] border-1 border-[#71778ec5] peer-checked:bg-[#35AFA0] pointer-events-none"
              ></span>
            </div>
          </li>
          <li className="py-2 px-2">
            <div className="relative">
              <input
                type="radio"
                id="Frozen Foods"
                name="category"
                value=""
                className="peer hidden"
              />
              <label
                htmlFor="Frozen Foods"
                className="pl-6 text-[15px] cursor-pointer text-[#71778E]"
              >
                Frozen Foods
              </label>
              <span
                className="absolute w-4 h-4 left-0 top-1/2 -translate-y-1/2 bg-[#f2f3f4] border-1 border-[#71778ec5] peer-checked:bg-[#35AFA0] pointer-events-none"
              ></span>
            </div>
          </li>
          <li className="py-2 px-2">
            <div className="relative">
              <input
                type="radio"
                id="Fruits & Vegetables"
                name="category"
                value=""
                className="peer hidden"
              />
              <label
                htmlFor="Fruits & Vegetables"
                className="pl-6 text-[15px] cursor-pointer text-[#71778E]"
              >
                Fruits & Vegetables
              </label>
              <span
                className="absolute w-4 h-4 left-0 top-1/2 -translate-y-1/2 bg-[#f2f3f4] border-1 border-[#71778ec5] peer-checked:bg-[#35AFA0] pointer-events-none"
              ></span>
            </div>
          </li>
          <li className="py-2 px-2">
            <div className="relative">
              <input
                type="radio"
                id="Grocery & Staples"
                name="category"
                value=""
                className="peer hidden"
              />
              <label
                htmlFor="Grocery & Staples"
                className="pl-6 text-[15px] cursor-pointer text-[#71778E]"
              >
                Grocery & Staples
              </label>
              <span
                className="absolute w-4 h-4 left-0 top-1/2 -translate-y-1/2 bg-[#f2f3f4] border-1 border-[#71778ec5] peer-checked:bg-[#35AFA0] pointer-events-none"
              ></span>
            </div>
          </li>
          <li className="py-2 px-2">
            <div className="relative">
              <input
                type="radio"
                id="Household Needs"
                name="category"
                value=""
                className="peer hidden"
              />
              <label
                htmlFor="Household Needs"
                className="pl-6 text-[15px] cursor-pointer text-[#71778E]"
              >
                Household Needs
              </label>
              <span
                className="absolute w-4 h-4 left-0 top-1/2 -translate-y-1/2 bg-[#f2f3f4] border-1 border-[#71778ec5] peer-checked:bg-[#35AFA0] pointer-events-none"
              ></span>
            </div>
          </li>
          <li className="py-2 px-2">
            <div className="relative">
              <input
                type="radio"
                id="Meats & Seafood"
                name="category"
                value=""
                className="peer hidden"
              />
              <label
                htmlFor="Meats & Seafood"
                className="pl-6 text-[15px] cursor-pointer text-[#71778E]"
              >
                Meats & Seafood
              </label>
              <span
                className="absolute w-4 h-4 left-0 top-1/2 -translate-y-1/2 bg-[#f2f3f4] border-1 border-[#71778ec5] peer-checked:bg-[#35AFA0] pointer-events-none"
              ></span>
            </div>
          </li>
        </ul>
      </div>
      <div className='pt-6'>
        <h2 className='text-[#202435] font-semibold text-[15px] uppercase dosis pb-4' >Brands</h2>
        <ul>
          <li className="py-2 px-2 flex items-center justify-between">
            <div className="relative">
              <input
                type="radio"
                id="FritoLay"
                name="category"
                value=""
                className="peer hidden"
              />
              <label
                htmlFor="FritoLay"
                className="pl-6 text-[15px] cursor-pointer text-[#71778E]"
              >
                Frito Lay
              </label>
              <span
                className="absolute w-4 h-4 left-0 top-1/2 -translate-y-1/2 bg-[#f2f3f4] border-1 border-[#71778ec5] peer-checked:bg-[#35AFA0] pointer-events-none"
              ></span>
            </div>
            <span className='text-[#71778E] text-[14px]'> (10)</span>
          </li>
          <li className="py-2 px-2 flex items-center justify-between">
            <div className="relative">
              <input
                type="radio"
                id="Quaker"
                name="category"
                value=""
                className="peer hidden"
              />
              <label
                htmlFor="Quaker"
                className="pl-6 text-[15px] cursor-pointer text-[#71778E]"
              >
                Quaker
              </label>
              <span
                className="absolute w-4 h-4 left-0 top-1/2 -translate-y-1/2 bg-[#f2f3f4] border-1 border-[#71778ec5] peer-checked:bg-[#35AFA0] pointer-events-none"
              ></span>
            </div>
            <span className='text-[#71778E] text-[14px]'> (36)</span>
          </li>
          <li className="py-2 px-2 flex items-center justify-between">
            <div className="relative">
              <input
                type="radio"
                id="Cola"
                name="category"
                value=""
                className="peer hidden"
              />
              <label
                htmlFor="Cola"
                className="pl-6 text-[15px] cursor-pointer text-[#71778E]"
              >
                Cola
              </label>
              <span
                className="absolute w-4 h-4 left-0 top-1/2 -translate-y-1/2 bg-[#f2f3f4] border-1 border-[#71778ec5] peer-checked:bg-[#35AFA0] pointer-events-none"
              ></span>
            </div>
            <span className='text-[#71778E] text-[14px]'> (1)</span>
          </li>
          <li className="py-2 px-2 flex items-center justify-between">
            <div className="relative">
              <input
                type="radio"
                id="Welch's"
                name="category"
                value=""
                className="peer hidden"
              />
              <label
                htmlFor="Welch's"
                className="pl-6 text-[15px] cursor-pointer text-[#71778E]"
              >
                Welch's
              </label>
              <span
                className="absolute w-4 h-4 left-0 top-1/2 -translate-y-1/2 bg-[#f2f3f4] border-1 border-[#71778ec5] peer-checked:bg-[#35AFA0] pointer-events-none"
              ></span>
            </div>
            <span className='text-[#71778E] text-[14px]'> (1)</span>
          </li>
          <li className="py-2 px-2 flex items-center justify-between">
            <div className="relative">
              <input
                type="radio"
                id="Oreo"
                name="category"
                value=""
                className="peer hidden"
              />
              <label
                htmlFor="Oreo"
                className="pl-6 text-[15px] cursor-pointer text-[#71778E]"
              >
                Oreo
              </label>
              <span
                className="absolute w-4 h-4 left-0 top-1/2 -translate-y-1/2 bg-[#f2f3f4] border-1 border-[#71778ec5] peer-checked:bg-[#35AFA0] pointer-events-none"
              ></span>
            </div>
            <span className='text-[#71778E] text-[14px]'> (16)</span>
          </li>
        </ul>
      </div>
      <div className='pt-6'>
        <h2 className='text-[#202435] font-semibold text-[15px] uppercase dosis pb-4' >Price</h2>
        <div className="flex align-center justify-between gap-4">
          <div className="flex flex-col w-full">
            <label htmlFor="priceFrom" className="text-sm text-[#71778E] mb-1">
              From
            </label>
            <input
              type="number"
              id="priceFrom"
              placeholder="0"
              className="w-full border border-[#ccc] rounded px-4 py-4 text-sm focus:outline-none bg-[#F3F4F7] "
            />
          </div>
          <div className="flex items-center justify-center"><span className="text-[#71778E] text-sm">-</span></div>
          <div className="flex flex-col w-full">
            <label htmlFor="priceFrom" className="text-sm text-[#71778E] mb-1">
              To
            </label>
            <input
              type="number"
              id="priceFrom"
              placeholder="0"
              className="w-full border border-[#ccc] rounded px-4 py-4 text-sm focus:outline-none bg-[#F3F4F7]"
            />
          </div>
        </div>
      </div>
      <div className='pt-6'>
        <h2 className='text-[#202435] font-semibold text-[15px] uppercase dosis pb-4' >Availability</h2>
        <ul>
          <li className="py-2 px-2 flex items-center justify-between">
            <div className="relative">
              <input
                type="radio"
                id="Instock"
                name="category"
                value=""
                className="peer hidden"
              />
              <label
                htmlFor="Instock"
                className="pl-6 text-[15px] cursor-pointer text-[#71778E]"
              >
                In stock
              </label>
              <span
                className="absolute w-4 h-4 left-0 top-1/2 -translate-y-1/2 bg-[#f2f3f4] border-1 border-[#71778ec5] peer-checked:bg-[#35AFA0] pointer-events-none"
              ></span>
            </div>
            <span className='text-[#71778E] text-[14px]'> (62)</span>
          </li>
          <li className="py-2 px-2 flex items-center justify-between">
            <div className="relative">
              <input
                type="radio"
                id="Outofstock"
                name="category"
                value=""
                className="peer hidden"
              />
              <label
                htmlFor="Outofstock"
                className="pl-6 text-[15px] cursor-pointer text-[#71778E]"
              >
                Out of stock
              </label>
              <span
                className="absolute w-4 h-4 left-0 top-1/2 -translate-y-1/2 bg-[#f2f3f4] border-1 border-[#71778ec5] peer-checked:bg-[#35AFA0] pointer-events-none"
              ></span>
            </div>
            <span className='text-[#71778E] text-[14px]'> (0)</span>
          </li>
        </ul>
      </div>
      <div>
        <img src={imgShop} alt="Shop Banner" className='w-[270px] h-[368.69px] mt-6' />
      </div>
    </aside>
  )
}

export default Sidebar
