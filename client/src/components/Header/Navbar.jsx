import React, { useEffect, useState } from "react";
import {
  DownOutlined,
  MenuOutlined,
  PhoneFilled,
  PhoneOutlined,
  PlusOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/Auth/AuthContext";
import Logo from "../../assets/images/logo.png";
import {} from "@ant-design/icons";
const Navbar = () => {
  const [isHover, setIsHover] = useState(0);
  const [isMobileHover, setIsMobileHover] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const { isAuth, handleLogout } = useAuthContext();
  const changeHoverState = (value) => {
    setIsHover(value);
  };
  const changeMobileHoverState = (value) => {
    if (isMobileHover == value) return setIsMobileHover(0);
    setIsMobileHover(value);
  };

  return (
    <div className="p-3 bg-white shadow-black/30 shadow-md">
      <div className="flex d-container items-center justify-between ">
        <div className="md:hidden block">
          <PhoneFilled className="text-3xl text-primary" />
        </div>
        <div className="text-3xl">
          <img src={Logo} alt="Logo" className="h-16" />
        </div>
        <div className="md:flex hidden gap-10">
          <div
            className="relative"
            onMouseEnter={() => changeHoverState(1)}
            onMouseLeave={() => changeHoverState(0)}
          >
            <div className="flex items-center gap-1">
              <p
                className={`cursor-pointer text-lg transition-300 ${isHover == 1 && "text-primary"}`}
              >
                ABOUT
              </p>
              <DownOutlined
                className={`text-[10px] transition-500 pt-1 ${isHover == 1 && "text-primary rotate-180"} `}
              />
            </div>
            <div
              className={`nav-smooth transition-500 px-3 ${isHover == 1 ? "max-h-[500px] p-3" : "max-h-0"}`}
            >
              <p className="animation">About Testo</p>
              <p className="animation">Meet The Team</p>
              <p className="animation">Images Gallery</p>
              <p className="animation">Gift Cards</p>
              <p className="animation">F.A.Q.s</p>
              <p className="animation">Terms And Privacy</p>
            </div>
          </div>
          <div
            className="relative gap-10"
            onMouseEnter={() => changeHoverState(2)}
            onMouseLeave={() => changeHoverState(0)}
          >
            <div className="flex items-center gap-1">
              <p
                className={`cursor-pointer text-lg transition-300 ${isHover == 2 && "text-primary"}`}
              >
                OUR MENU
              </p>
              <DownOutlined
                className={`text-[10px] transition-500 pt-1 ${isHover == 2 && "text-primary rotate-180"} `}
              />
            </div>
            <div
              className={`nav-smooth transition-500 px-3 ${isHover == 2 ? "max-h-[500px] p-3" : "max-h-0"}`}
            >
              <p className="animation">Fast Foods</p>
              <p className="animation">Deserts</p>
              <p className="animation">Drinks</p>
            </div>
          </div>{" "}
          <div
            className="relative gap-10"
            onMouseEnter={() => changeHoverState(3)}
            onMouseLeave={() => changeHoverState(0)}
          >
            <div className="flex items-center gap-1">
              <p
                className={`cursor-pointer text-lg transition-300 ${isHover == 3 && "text-primary"}`}
              >
                BLOGS
              </p>
              <DownOutlined
                className={`text-[10px] transition-300 pt-1 ${isHover == 3 && "text-primary rotate-180"} `}
              />
            </div>
            <div
              className={`nav-smooth transition-500 px-3 ${isHover == 3 ? "max-h-[500px] p-3" : "max-h-0"}`}
            >
              <p className="animation">Blog Listing</p>
              <p className="animation">Single Post</p>
            </div>
          </div>
          <div
            className="relative gap-10"
            onMouseEnter={() => changeHoverState(4)}
            onMouseLeave={() => changeHoverState(0)}
          >
            <div className="flex items-center gap-1">
              <p
                className={`cursor-pointer text-lg transition-300 ${isHover == 4 && "text-primary"}`}
              >
                HOURS & LOCATIONS
              </p>
              <DownOutlined
                className={`text-[10px] transition-300 pt-1 ${isHover == 4 && "text-primary rotate-180"} `}
              />
            </div>

            <div
              className={`nav-smooth transition-300 px-3 ${isHover == 4 ? "p-3" : "max-h-0"}`}
            >
              <p className="animation">Book A Table</p>
              <p className="animation">Our Locations</p>
              <p className="animation">Contact Us</p>
            </div>
          </div>
          <div className="gap-10">
            <a className="text-2xl text-yellow-400 " href="tel:03078244507">
              03078244507
            </a>
          </div>
          <div className="gap-10">
            <ShoppingCartOutlined className=" cursor-pointer text-4xl" />
          </div>
        </div>

        {/* Mobile Menu */}

        <div className={`md:hidden absolute left-0 top-22 right-0`}>
          <div
            className={`flex flex-col overflow-hidden gap-10  bg-white  transition-all duration-300 ${
              showMenu ? " p-3 pt-5" : "p-0 max-h-0"
            }`}
          >
            <div className="flex items-center flex-col gap-2">
              <div
                className="relative w-full"
                onClick={() => changeMobileHoverState(1)}
              >
                <div className=" flex justify-center bg-gray-50 p-3">
                  <p
                    className={`cursor-pointer text-lg ${isMobileHover == 1 && "text-primary"}`}
                  >
                    ABOUT
                  </p>
                  <PlusOutlined
                    className={`text-xl absolute right-3 transition-700 pt-1 ${isMobileHover == 1 && "rotate-45"} `}
                  />
                </div>
                <div
                  className={`mob-smooth text-center transition-700 ${isMobileHover == 1 ? "max-h-[500px]" : "max-h-0"}`}
                >
                  <p className="animation bg-gray-50 p-3">About Testo</p>
                  <p className="animation bg-gray-50 p-3">Meet The Team</p>
                  <p className="animation bg-gray-50 p-3">Images Gallery</p>
                  <p className="animation bg-gray-50 p-3">Gift Cards</p>
                  <p className="animation bg-gray-50 p-3">F.A.Q.s</p>
                  <p className="animation bg-gray-50 p-3">Terms And Privacy</p>
                </div>
              </div>
              <div
                className="relative w-full "
                onClick={() => changeMobileHoverState(2)}
              >
                <div className=" flex justify-center bg-gray-50 p-3 w-full">
                  <p
                    className={`cursor-pointer text-lg ${isMobileHover == 2 && "text-primary"}`}
                  >
                    OUR MENU
                  </p>
                  <PlusOutlined
                    className={`text-xl absolute right-3  transition-700 pt-1 ${isMobileHover == 2 && "rotate-45"} `}
                  />
                </div>
                <div
                  className={`mob-smooth text-center transition-700 ${isMobileHover == 2 ? "max-h-[500px]" : "max-h-0"}`}
                >
                  <p className="animation bg-gray-50 p-3">Fast Foods</p>
                  <p className="animation bg-gray-50 p-3">Deserts</p>
                  <p className="animation bg-gray-50 p-3">Drinks</p>
                </div>
              </div>
              <div
                className="relative w-full gap-10"
                onClick={() => changeMobileHoverState(3)}
              >
                <div className=" flex justify-center p-3 bg-gray-50">
                  <p
                    className={`cursor-pointer text-lg ${isMobileHover == 3 && "text-primary"}`}
                  >
                    BLOGS
                  </p>
                  <PlusOutlined
                    className={`text-xl absolute right-3 transition-700 pt-1 ${isMobileHover == 3 && "rotate-45"} `}
                  />
                </div>
                <div
                  className={`mob-smooth text-center transition-700 ${isMobileHover == 3 ? "max-h-[500px]" : "max-h-0"}`}
                >
                  <p className="animation bg-gray-50 p-3">Blog Listing</p>
                  <p className="animation bg-gray-50 p-3">Single Post</p>
                </div>
              </div>
              <div
                className="relative w-full "
                onClick={() => changeMobileHoverState(4)}
              >
                <div className=" flex justify-center bg-gray-50 p-3">
                  <p
                    className={`cursor-pointer text-lg ${isMobileHover == 4 && "text-primary"}`}
                  >
                    HOURS & LOCATIONS
                  </p>
                  <PlusOutlined
                    className={`text-xl absolute right-3 transition-700 pt-1 ${isMobileHover == 4 && "rotate-45"} `}
                  />
                </div>

                <div
                  className={`mob-smooth text-center transition-700 ${isMobileHover == 4 ? "max-h-[500px]" : "max-h-0"}`}
                >
                  <p className="animation bg-gray-50 p-3">Book A Table</p>
                  <p className="animation bg-gray-50 p-3">Our Locations</p>
                  <p className="animation bg-gray-50 p-3">Contact Us</p>
                </div>
              </div>
              <div className="flex items-center justify-between w-full gap-10">
                <a className="text-2xl text-yellow-400 " href="tel:03078244507">
                  <PhoneOutlined /> 03078244507
                </a>
                <ShoppingCartOutlined className=" cursor-pointer text-4xl" />
              </div>
            </div>
          </div>
        </div>
        <div className="text-2xl md:hidden">
          <div className="px-5 py-2 rounded">
            <MenuOutlined
              className={`transition-all duration-300 ${
                showMenu && "rotate-90"
              }`}
              onClick={() => setShowMenu(!showMenu)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
