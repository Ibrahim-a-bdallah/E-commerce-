import React from "react";
import logo from "../../assets/img/nav/logo.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import actGetProducts from "../../store/products/actGetProduct";
import { openPopup } from "../../store/popBob/popBobSlice"

export default function Logo() {
  const [items, setItems] = useState(0);
  const [total, setTotal] = useState(0.0);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState([]);

  const dispatch = useDispatch();

  const handleOpenPopup = (id) => {
    dispatch(openPopup(id))}

  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    dispatch(actGetProducts());
  }, [dispatch]);

  useEffect(() => {
    if (search.trim() === "") {
      setFilter([]);
    } else {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      );
      setFilter(filtered);
    }
  }, [search, products]);

  return (
    <div>
      <div className="pt-8 w-full  px-4 xl:px-[150px]">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <a href="/" className="order-1">
            <img
              src={logo}
              alt="Logo"
              className="w-[120px] md:w-[165px] h-auto"
            />
          </a>

          <div className="order-3 md:order-2 w-full relative">
            <div className="bg-[#F3F4F7] py-3 md:py-5 flex gap-3 md:gap-5 px-4 rounded-lg w-full">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search for Products, fruit, meat, eggs .etc..."
                className="font-[400]   w-full text-xl text-black "
              />
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.8261 20.554L18.1301 16.858C18.7541 16.074 19.2341 15.21 19.5701 14.266C19.9381 13.274 20.1221 12.266 20.1221 11.242C20.1221 9.61 19.7141 8.09 18.8981 6.682C18.1141 5.32199 17.0421 4.25 15.6821 3.466C14.2901 2.65 12.7741 2.24199 11.1341 2.24199C9.49407 2.24199 7.97007 2.65 6.56207 3.466C5.21807 4.266 4.14607 5.338 3.34607 6.682C2.53007 8.09 2.12207 9.614 2.12207 11.254C2.12207 12.894 2.53007 14.41 3.34607 15.802C4.13007 17.162 5.20207 18.234 6.56207 19.018C7.97007 19.834 9.49007 20.242 11.1221 20.242C12.1781 20.242 13.1901 20.07 14.1581 19.726C15.1261 19.382 15.9861 18.89 16.7381 18.25L20.4341 21.946C20.5301 22.042 20.6421 22.118 20.7701 22.174C20.8981 22.23 21.0181 22.258 21.1301 22.258C21.2421 22.258 21.3621 22.23 21.4901 22.174C21.6181 22.118 21.7301 22.042 21.8261 21.946C22.0341 21.754 22.1381 21.526 22.1381 21.262C22.1381 20.998 22.0341 20.762 21.8261 20.554ZM4.13807 11.242C4.13807 9.962 4.45007 8.786 5.07407 7.714C5.69807 6.658 6.53807 5.818 7.59407 5.19399C8.66607 4.57 9.84207 4.258 11.1221 4.258C12.4021 4.258 13.5861 4.57 14.6741 5.19399C15.7301 5.818 16.5701 6.662 17.1941 7.726C17.8181 8.79 18.1301 9.962 18.1301 11.242C18.1301 12.17 17.9501 13.066 17.5901 13.93C17.2301 14.794 16.7461 15.53 16.1381 16.138C15.4981 16.794 14.7581 17.294 13.9181 17.638C13.0781 17.982 12.1861 18.154 11.2421 18.154C9.93007 18.186 8.72207 17.89 7.61807 17.266C6.54607 16.674 5.69807 15.842 5.07407 14.77C4.45007 13.698 4.13807 12.522 4.13807 11.242Z"
                  fill="#3E445A"
                />
              </svg>
            </div>
            <div className={` absolute top-16 bg-white w-full z-50 rounded-lg`}>
              {filter.length > 0 && (
                <div className="">
                  <ul className="flex flex-col max-h-96 overflow-y-scroll ">
                    {filter.map((item, index) => (
                      <li key={index} className="p-5 shadow rounded-lg cursor-pointer" onClick={()=>handleOpenPopup(item.id)}>
                        
                          <div className="flex w-full justify-between items-center">
                            <h1 className="font-[600] text-lg">{item.title}</h1>
                            <h1 className="text-[#35afa0]"> ${item.price} </h1>
                          </div>
                          <div className="flex justify-start items-center gap-5">
                            <p className="w-10/12">{item.description}</p>
                            <img src={item.thumbnail} alt="" className="w-20" />
                          </div>
                       
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div className="order-2 md:order-3 flex gap-4 items-center">
            <div
              className="cursor-pointer relative"
              onClick={() => setShowUserMenu((prev) => !prev)}
            >
              <svg
                width="43"
                height="43"
                viewBox="0 0 43 43"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.629883"
                  y="0.75"
                  width="41"
                  height="41"
                  rx="20.5"
                  stroke="#E2E4EC"
                />
                <g clipPath="url(#clip0_1_3007)">
                  <path
                    d="M28.6899 27.28C28.5219 26.356 28.2099 25.492 27.7539 24.688C27.2979 23.884 26.7099 23.194 25.9899 22.618C25.3659 22.078 24.6339 21.646 23.7939 21.322C24.3699 20.878 24.8259 20.329 25.1619 19.675C25.4979 19.021 25.6659 18.322 25.6659 17.578C25.6659 16.714 25.4559 15.919 25.0359 15.193C24.6159 14.467 24.0429 13.894 23.3169 13.474C22.5909 13.054 21.7959 12.844 20.9319 12.844C20.0679 12.844 19.2729 13.054 18.5469 13.474C17.8209 13.894 17.2479 14.467 16.8279 15.193C16.4079 15.919 16.1979 16.714 16.1979 17.578C16.1979 18.322 16.3659 19.021 16.7019 19.675C17.0379 20.329 17.4939 20.878 18.0699 21.322C17.2659 21.658 16.5399 22.09 15.8919 22.618C15.1959 23.194 14.6139 23.878 14.1459 24.67C13.6779 25.462 13.3599 26.302 13.1919 27.19L12.9219 28.612L14.4699 28.918L14.7579 27.514C14.8899 26.782 15.1389 26.104 15.5049 25.48C15.8709 24.856 16.3419 24.307 16.9179 23.833C17.4939 23.359 18.1269 22.999 18.8169 22.753C19.5069 22.507 20.2119 22.384 20.9319 22.384C21.6519 22.384 22.3659 22.51 23.0739 22.762C23.7819 23.014 24.4119 23.368 24.9639 23.824C25.5399 24.304 26.0139 24.865 26.3859 25.507C26.7579 26.149 27.0039 26.83 27.1239 27.55L27.3939 28.954L28.9239 28.648L28.6899 27.28ZM20.9319 14.41C21.5079 14.41 22.0389 14.551 22.5249 14.833C23.0109 15.115 23.3949 15.499 23.6769 15.985C23.9589 16.471 24.0999 17.002 24.0999 17.578C24.0999 18.154 23.9589 18.685 23.6769 19.171C23.3949 19.657 23.0109 20.041 22.5249 20.323C22.0389 20.605 21.5079 20.746 20.9319 20.746C20.3559 20.746 19.8249 20.605 19.3389 20.323C18.8529 20.041 18.4689 19.657 18.1869 19.171C17.9049 18.685 17.7639 18.154 17.7639 17.578C17.7639 17.002 17.9049 16.471 18.1869 15.985C18.4689 15.499 18.8529 15.115 19.3389 14.833C19.8249 14.551 20.3559 14.41 20.9319 14.41Z"
                    fill="#3E445A"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_3007">
                    <rect
                      width="18"
                      height="18"
                      fill="white"
                      transform="matrix(1 0 0 -1 12.1299 30.25)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <div
                className={`absolute top-full left-0 bg-[#F3F4F7] text-black text-[10px] font-[400] w-40 h-20 text-center flex flex-col gap-2 align-center justify-center rounded-md ${
                  showUserMenu ? "block" : "hidden"
                }`}
              >
                <Link to={"./login"} className="text-base font-medium pb-2">
                  Log In
                </Link>
                <Link to={"./signup"} className="text-base font-medium pb-2">
                  Sign Up
                </Link>
              </div>
            </div>
            <div className="flex gap-1 items-center">
              <h1 className="font-[600] text-[16px] text-[#3E445A] dosis">
                ${total.toFixed(2)}
              </h1>
              <div className="relative">
                <div className="absolute top-0 right-0 bg-[#EA2B0F] text-white text-[10px] font-[400] w-4 h-4 rounded-full text-center">
                  {items}
                </div>
                <svg
                  width="42"
                  height="43"
                  viewBox="0 0 42 43"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="0.25"
                    width="42"
                    height="42"
                    rx="21"
                    fill="#FFF1EE"
                  />
                  <g clipPath="url(#clip0_1_3013)">
                    <path
                      d="M21.0342 14.161C20.5242 14.161 20.0511 14.2885 19.6147 14.5435C19.1784 14.7985 18.8327 15.1442 18.5777 15.5805C18.3227 16.0168 18.1952 16.49 18.1952 17H16.7502C16.7502 16.2293 16.9401 15.5182 17.3197 14.8665C17.6994 14.2148 18.2151 13.6992 18.8667 13.3195C19.5184 12.9398 20.2296 12.75 21.0002 12.75C21.7709 12.75 22.4821 12.9398 23.1337 13.3195C23.7854 13.6992 24.3011 14.2148 24.6807 14.8665C25.0604 15.5182 25.2502 16.2293 25.2502 17H28.0382C28.4462 17 28.7919 17.1445 29.0752 17.4335C29.3586 17.7225 29.5002 18.0767 29.5002 18.496C29.5002 18.5867 29.4946 18.6717 29.4832 18.751L27.9022 27.897C27.8116 28.4297 27.5622 28.8717 27.1542 29.223C26.7462 29.5743 26.2759 29.75 25.7432 29.75H16.2572C15.7246 29.75 15.2542 29.5743 14.8462 29.223C14.4382 28.8717 14.1889 28.4297 14.0982 27.897L12.5172 18.768C12.4492 18.36 12.5314 17.986 12.7637 17.646C12.9961 17.306 13.3106 17.0963 13.7072 17.017C13.7866 17.0057 13.8716 17 13.9622 17H23.8732C23.8732 16.49 23.7457 16.0168 23.4907 15.5805C23.2357 15.1442 22.8901 14.7985 22.4537 14.5435C22.0174 14.2885 21.5442 14.161 21.0342 14.161ZM28.0382 18.411H13.9622C13.9509 18.411 13.9339 18.4337 13.9112 18.479V18.513L15.4922 27.659C15.5262 27.8403 15.6056 27.9933 15.7302 28.118C15.8549 28.2427 16.0022 28.3107 16.1722 28.322L16.2572 28.339H25.7432C25.9132 28.339 26.0691 28.2852 26.2107 28.1775C26.3524 28.0698 26.4459 27.9253 26.4912 27.744L28.0892 18.496C28.0892 18.4507 28.0779 18.428 28.0552 18.428L28.0382 18.411Z"
                      fill="#EA2B0F"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_3013">
                      <rect
                        width="17"
                        height="17"
                        fill="white"
                        transform="matrix(1 0 0 -1 12.5 29.75)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
