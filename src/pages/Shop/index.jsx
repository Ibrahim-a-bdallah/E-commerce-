
import React from 'react'
import Sidebar from '../../components/Sidebar';
import bgShop from '../../assets/img/shop/bgShop.png';

function Shop() {
  return (
    <section className='my-20'>
      <div className='container mx-auto px-10'>
        <div className='flex flex-col lg:flex-row gap-6 '>
          <Sidebar />
          <div className="bg-cover bg-center h-64 w-full"
            style={{ backgroundImage: `url(${bgShop})` }}>
            <div className='  flex flex-col justify-center items-center h-full text-center'>
              <p className='text-2xl font-light mb-0.5 font-inter text-[20px]'>Organic Meals Prepared</p>
              <h1 className='text-gray-700 mb-2 font-bold text-[30px]'>Delivered to <span className='text-[#00B853]'> your Home</span>.</h1>
              <p className='text-[#9B9BB4] text-[12px]'>Fully prepared & delivered nationwide.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Shop;
