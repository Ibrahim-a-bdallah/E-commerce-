import React from "react"
import "./home.css"
import poster from "../../assets/img/Home/poster.png"
import img from "../../assets/img/Home/933df39cffb1e5272e9216abaea18d1e2ad18cd9.png"
import img2 from "../../assets/img/Home/Water.png"
const Home = () => {
  return (
    <>
      <div className=" lg:px-[150px] m-auto md:px-[80px] px-[30px]">
        <Top/>
        <Products/>
        <Posters/>
        <Mistakes/>
      </div>
    </>
  )
}

export default Home;
function Top()
{
  return(
    <>
      <div className="bg-[#FBEACF] rounded-[5px] py-[10px] text-center  uppercase my-[20px] md:my-[50px] lg:py-[15px]">
        <p className="tracking-[2px] font-[600] text-[10px] md:text-[15px] md:font-[700] ">Super discount for your first purchase.</p>
      </div>
    </>
  )
}
function Products()
{
  return(
    <>
      <div className="border-[1px] border-[#EDEEF5] rounded-2xl mb-[50px] flex flex-wrap ">
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        
      </div>
    </>
  )
}
function Product()
{
  return(
    <>
      <div className="product  p-[30px] md:p-[15px] lg:flex-1/5 md:flex-1/2     m-auto">
        <div className="img relative">
          <img src={img} alt="product imge" />
          <div className="bg-[#35AFA0] px-[10px] py-[5px] absolute top-0 left-0 rounded-[10px] text-white">25%</div>
        </div>
        <ProductDetails/>
      </div>
    </>
  )
}
function ProductDetails()
{
  return(
    <>
      <div className="text pl-[15px]">
          <p className="my-[15px] ">Zevia Kidz Strawberry Lemonade Zero Calorie…</p>
          <p className="uppercase font-[500] text-[15px] text-[#00B853]">In stock</p>
          <div className="flex gap-[15px] items-center my-[12px]">
            <span>stars</span> 
            <span className="text-gray-500 font-[500]">1 review</span>
          </div>
          <div className="flex gap-[20px] items-center">
            <span className="text-gray-300 text-[15.3px] font-[600] ">$7.95</span>
            <span className="text-[#D51243] font-[600] text-[18px]">$5.95</span>
          </div>
        </div>
    </>
  )
}

function Posters()
{
  return(
    <>
      <div className="flex mb-[50px] m-auto gap-[20px] flex-wrap ">
        <Poster/>
        <Poster/>
        <Poster/>
      </div>
    </>
  )
}
function Poster()
{
  return(
    <>
      <div className="relative rounded-2xl overflow-hidden md:flex-1/3  lg:flex-1/4 lg:max-w-[400px] ">
        <img src={poster} alt="poster image"/>
         <div className="absolute top-[20px] lg:top-[28px] left-0  p-[20px] ">
          <p className="text-[#00B853] md:font-[500] md:text-[14px] ">Weekend Discount 40%</p>
          <p className="text-[#3E445A] font-[600] text-[24px]">Natural Eggs</p>
          <p className="text-[#9B9BB4] font-[400] text-[12px]">Eat one every day</p>
          <button className="rounded-2xl my-[10px] bg-[#C2C2D3] px-[15px] py-[10px] text-white cursor-pointer">Shop Now</button>
         </div>
      </div>
    </>
  )
}

function Mistakes()
{
  return(
    <>
      <div className="flex gap-[20px] flex-wrap mb-[100px]">
        <Mistake/>
        <Mistake/>
        <Mistake/>
      </div>
    </>
  )
}
function Mistake()
{
  return(
    <>
      <div className="relative rounded-2xl overflow-hidden md:flex-1/3  lg:flex-1/4 lg:max-w-[400px] ">
        <div className="mb-[10px] rounded-b-2xl overflow-hidden">
          <img src={img2} alt="water photo" />
        </div>
        <div>
          <p className="text-[#9B9BB4] text-[13px] font-[300] uppercase my-[10px]">Grocery</p>
          <p className="text-[#202435] font-[600] text-[17px] ">But I must explain to you how all this mistaken idea</p>
          <p className="text-[#71778E] font-[500] text-[14px] mt-[6px]">Jan 13 2025</p>
        </div>
      </div>
    </>
  )
}