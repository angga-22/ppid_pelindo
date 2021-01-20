import { useState } from "react";
import { NavLink } from "react-router-dom";

import logoPelindo from "../../../assets/img/logo-pelindo.png";

import useHeader from "./useHeader";

const Header = (props: any) => {
  const [open, setOpen] = useState(false);
  const { menuData } = useHeader();

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="fixed w-full shadow-md z-40 bg-white">
      <nav className="flex items-center justify-between flex-wrap  mx-auto container p-6 ">
        <div className="flex mr-6 w-1/5">
          <NavLink to="/" className="text-lg">
            <img src={logoPelindo} alt="pelindo" className="w-none sm:w-2/4" />
          </NavLink>
        </div>
        <div className="block lg:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white"
            onClick={toggleMenu}
          >
            <svg
              className="h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div
          className={`w-full  lg:flex lg:items-center lg:w-auto ${
            open ? "block sm:none" : "hidden sm:block "
          } transition duration-500 ease-in-out transform`}
        >
          <div className="text-sm sm:flex sm:w-full justify-end">
            {menuData.map((list: any) => (
              <NavLink
                to={list.children.length > 0 ? "#" : list.route}
                className="group relative text-blue-100 block sm:inline-block text-right p-4 text-md transition duration-500 ease-in-out  hover:text-blue-300  transform"
              >
                {list.title}

                {list.children.length > 0 && (
                  <div className="dropdown-menu absolute hidden text-gray-700 pt-1 group-hover:block left-0 shadow-lg mt-1 w-full sm:w-80">
                    {list.children.map((child: any) => {
                      return (
                        <NavLink
                          to={child.route}
                          className="text-gray-700 pt-1 group-hover:block hover:bg-blue-300 bg-blue-100 text-white text-right p-4 text-lg transition duration-500 ease-in-out  hover:text-red-600 transform"
                        >
                          {child.title}
                        </NavLink>
                      );
                    })}
                  </div>
                )}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

//
