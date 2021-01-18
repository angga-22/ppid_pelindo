import { useState, useEffect, Children } from "react";
import { NavLink } from "react-router-dom";
import { HomepageApi } from "../../../api";
import logoPelindo from "../../../assets/img/logo-pelindo.png";

import * as ROUTES from "containers/App/constants";

const Header = (props: any) => {
  const [open, setOpen] = useState(false);
  const [menudata, setMenuData] = useState([]);

  const toggleMenu = () => {
    setOpen(!open);
  };
  const menu = [
    {
      name: "Beranda",
      route: ROUTES.HOME_PAGE,
      children: [],
    },
    {
      name: "Statistik",
      route: ROUTES.STATISTIK_PAGE,
      children: [
        {
          name: "a",
          route: ROUTES.STATISTIK_PAGE,
        },
        {
          name: "b",
          route: "/tes",
        },
      ],
    },
    {
      name: "Profile",
      route: ROUTES.PROFIL_PAGE,
      children: [],
    },
    {
      name: "Regulasi",
      route: ROUTES.REGULASI_PAGE,
      children: [],
    },
    {
      name: "Maklumat",
      route: ROUTES.MAKLUMAT_PAGE,
      children: [],
    },
    {
      name: "Layanan Publik",
      route: "#",
      children: [
        {
          name: "Prosedur Permohonan",
          route: ROUTES.PROSEDUR_PAGE,
        },
      ],
    },
    {
      name: "Informasi Publik",
      route: ROUTES.INFORMASI_PAGE,
      children: [
        {
          name: "tes",
          route: ROUTES.INFORMASI_PAGE,
        },
        {
          name: "tes1",
          route: "/tes2",
        },
      ],
    },
  ];

  useEffect(() => {
    HomepageApi(($: any) => {
      let menudata: any = [];

      $('li[class="dropdown"]:nth-child(1) > a').each(function (
        i: any,
        element: any
      ) {
        let datas = $(element).prepend().text();
        const obj = { title: "", route: "", children: [] };
        obj["title"] = datas;
        obj["route"] = "/";
        obj["children"] = [];
        menudata.push(obj);
      });

      const obj = { title: "", route: "", children: [] };
      obj["title"] = "STATISTIK";
      obj["route"] = "/statistik";
      obj["children"] = [];
      menudata.push(obj);
      $('li[class="dropdown"]:nth-child(2) > a').each(function (
        i: any,
        element: any
      ) {
        let datas = $(element).prepend().text();
        const obj = { title: "", route: "", children: [] };
        obj["title"] = datas;
        obj["route"] = "/profile";
        obj["children"] = [];
        menudata.push(obj);
      });
      $('li[class="dropdown"]:nth-child(3) > a').each(function (
        i: any,
        element: any
      ) {
        let datas = $(element).prepend().text();

        const obj = { title: "", route: "", children: [] };
        obj["title"] = datas;
        obj["route"] = "/regulasi";
        obj["children"] = [];
        menudata.push(obj);
      });
      $('li[class="dropdown"]:nth-child(4) > a').each(function (
        i: any,
        element: any
      ) {
        let datas = $(element).prepend().text();

        const obj = { title: "", route: "", children: [] };
        obj["title"] = datas;
        obj["route"] = "/maklumat";
        obj["children"] = [];
        menudata.push(obj);
      });
      $('ul[class="nav navbar-nav"] > li:nth-child(5) > a').each(function (
        i: any,
        element: any
      ) {
        let datas = $(element).prepend().text();

        const obj = { title: "", route: "", children: [] };
        obj["title"] = datas;
        obj["route"] = "/informasi-publik";
        obj["children"] = [];
        menudata.push(obj);
      });
      $('ul[class="nav navbar-nav"] > li:nth-child(6) > a').each(function (
        i: any,
        element: any
      ) {
        let datas = $(element).prepend().text();

        const obj = { title: "", route: "", children: [] };
        obj["title"] = datas;
        obj["route"] = "/layanan-publik";
        obj["children"] = [];
        menudata.push(obj);
      });
      $('ul[class="nav navbar-nav"] > li:nth-child(7) > a').each(function (
        i: any,
        element: any
      ) {
        let datas = $(element).prepend().text();

        const obj = { title: "", route: "", children: [] };
        obj["title"] = datas;
        obj["route"] = "/agenda";
        obj["children"] = [];
        menudata.push(obj);
      });
      $('ul[class="nav navbar-nav"] > li:nth-child(8) > a').each(function (
        i: any,
        element: any
      ) {
        let datas = $(element).prepend().text();

        const obj = { title: "", route: "", children: [] };
        obj["title"] = datas;
        obj["route"] = "/faq";
        obj["children"] = [];
        menudata.push(obj);
      });

      setMenuData(menudata);
      console.log(menudata, "menu di header");
    });
  }, []);

  return (
    <div className="fixed w-full shadow-md z-40 bg-white">
      <nav className="flex items-center justify-between flex-wrap  mx-auto container p-6 ">
        <div className="flex mr-6 w-1/4">
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
            {menu.map((list) => (
              <NavLink
                to={list.children.length > 0 ? "#" : list.route}
                className="group relative text-blue-100 block sm:inline-block text-right p-4 text-lg transition duration-500 ease-in-out  hover:text-white hover:bg-blue-100 transform"
              >
                {list.name}

                {list.children.length > 0 && (
                  <div className="dropdown-menu absolute hidden text-gray-700 pt-1 group-hover:block w-full left-0 shadow-lg mt-1">
                    {list.children.map((child) => {
                      return (
                        <NavLink
                          to={child.route}
                          className="text-gray-700 pt-1 group-hover:block hover:bg-blue-300 bg-blue-100 text-white text-right p-4 text-lg transition duration-500 ease-in-out  hover:text-red-600 transform"
                        >
                          {child.name}
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

//punya angga
// {/* <div
// className={`w-full  lg:flex lg:items-center lg:w-auto ${
//   open ? "block sm:none" : "hidden sm:block "
// } transition duration-500 ease-in-out transform`}
// >
// <nav className="text-sm sm:flex sm:w-full justify-end">
//   <div className="flex mr-6 w-1/4">
//     <NavLink to="/" className="text-lg">
//       <img
//         src={require("../../../assets/img/logo-pelindo.png").default}
//         alt="pelindo"
//         className="w-1/4"
//       />
//     </NavLink>
//   </div>
//   <div className="block lg:hidden">
//     <button
//       className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white"
//       onClick={toggleMenu}
//     >
//       <svg
//         className="h-3 w-3"
//         viewBox="0 0 20 20"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <title>Menu</title>
//         <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
//       </svg>
//     </button>
//   </div>

//   <div
//     className={`w-full  lg:flex lg:items-center lg:w-auto ${
//       open ? "block sm:none" : "hidden sm:block "
//     } transition duration-500 ease-in-out transform`}
//   >
//     <div className="text-sm sm:flex sm:w-full justify-end">
//       {menudata.map((item: any) => (
//         <NavLink
//           to={item.route}
//           className="block sm:inline-block text-right p-4 text-lg transition duration-500 ease-in-out  hover:text-red-600 transform"
//         >
//           {item.title}
//         </NavLink>
//       ))}
//     </div>
//   </div>
// </nav>
// </div>
// ); */}
