import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { HomepageApi } from "../../../api";

const Header = (props: any) => {
  //   const menu = [
  //     {
  //       name: "Beranda",
  //       route: "/",
  //     },
  //     {
  //       name: "Statistik",
  //       route: "/statistik",
  //     },
  //     {
  //       name: "Profile",
  //       route: "/profile",
  //     },
  //   ];
  const [open, setOpen] = useState(false);
  const [beranda, setBeranda] = useState([]);
  const [profil, setProfil] = useState([]);
  const [regulasi, setRegulasi] = useState([]);
  const [maklumat, setMaklumat] = useState([]);

  const toggleMenu = () => {
    setOpen(!open);
  };

  useEffect(() => {
    HomepageApi(($: any) => {
      let beranda: any = [];
      let profil: any = [];
      let regulasi: any = [];
      let maklumat: any = [];

      $('li[class="dropdown"]:nth-child(1) > a').each(function (
        i: any,
        element: any
      ) {
        let datas = $(element).prepend().text();
        beranda.push(datas);
      });
      $('li[class="dropdown"]:nth-child(2) > a').each(function (
        i: any,
        element: any
      ) {
        let datas = $(element).prepend().text();
        profil.push(datas);
      });
      $('li[class="dropdown"]:nth-child(3) > a').each(function (
        i: any,
        element: any
      ) {
        let datas = $(element).prepend().text();
        regulasi.push(datas);
      });
      $('li[class="dropdown"]:nth-child(4) > a').each(function (
        i: any,
        element: any
      ) {
        let datas = $(element).prepend().text();
        maklumat.push(datas);
      });
      setBeranda(beranda);
      setProfil(profil);
      setRegulasi(regulasi);
      setMaklumat(maklumat);
    });
  }, []);

  return (
    <div className="fixed w-full shadow-md z-40">
      <nav className="flex items-center sm:justify-start justify-between flex-wrap  mx-auto container p-6 ">
        <div className="flex mr-6">
          <NavLink to="/" className="text-lg">
            <img
              src={require("../../../assets/img/logo-pelindo.png").default}
              alt="pelindo"
              className="w-1/4"
            />
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
            <NavLink
              to="/"
              className="block sm:inline-block text-right p-4 text-lg transition duration-500 ease-in-out  hover:text-red-600 transform"
            >
              {beranda}
            </NavLink>

            <NavLink
              to="/profile"
              className="block sm:inline-block text-right p-4 text-lg transition duration-500 ease-in-out  hover:text-red-600 transform"
            >
              {profil}
            </NavLink>

            <NavLink
              to="/regulasi"
              className="block sm:inline-block text-right p-4 text-lg transition duration-500 ease-in-out  hover:text-red-600 transform"
            >
              {regulasi}
            </NavLink>

            <NavLink
              to="/maklumat"
              className="block sm:inline-block text-right p-4 text-lg transition duration-500 ease-in-out  hover:text-red-600 transform"
            >
              {maklumat}
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
