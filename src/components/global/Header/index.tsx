import { useState } from "react";

import { NavLink } from "react-router-dom";

const Header = () => {
  const menu = [
    {
      name: "Beranda",
      route: "/",
    },
    {
      name: "Statistik",
      route: "/statistik",
    },
    {
      name: "Profile",
      route: "/profile",
    },
  ];
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };
  return (
    <div className="fixed w-full shadow-md">
      <nav className="flex items-center sm:justify-start justify-between flex-wrap  mx-auto container p-6 ">
        <div className="flex mr-6">
          <NavLink to="/" className="text-lg">
            PELINDO III
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
            {menu.map((list) => (
              <NavLink
                to={list.route}
                className="block sm:inline-block text-right p-4 text-lg transition duration-500 ease-in-out  hover:text-red-600 transform"
              >
                {list.name}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
