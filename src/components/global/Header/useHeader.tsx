import { useEffect, useState } from "react";
import { HomepageApi } from "api";

import * as ROUTES from "containers/App/constants";

export default function Api() {
  const [menuData, setMenuData] = useState([]);

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
      obj["route"] = ROUTES.STATISTIK_PAGE;
      obj["children"] = [];
      menudata.push(obj);
      $('li[class="dropdown"]:nth-child(2) > a').each(function (
        i: any,
        element: any
      ) {
        //   Profile
        let datas = $(element).prepend().text();
        const obj = { title: "", route: "", children: [] };
        obj["title"] = datas;
        obj["route"] = ROUTES.PROFIL_PAGE;
        obj["children"] = [];
        menudata.push(obj);
      });
      $('li[class="dropdown"]:nth-child(3) > a').each(function (
        i: any,
        element: any
      ) {
        //   Regulasi
        let datas = $(element).prepend().text();

        const obj = { title: "", route: "", children: [] };
        obj["title"] = datas;
        obj["route"] = ROUTES.REGULASI_PAGE;
        obj["children"] = [];
        menudata.push(obj);
      });
      $('li[class="dropdown"]:nth-child(4) > a').each(function (
        i: any,
        element: any
      ) {
        //   Maklumat
        let datas = $(element).prepend().text();

        const obj = { title: "", route: "", children: [] };
        obj["title"] = datas;
        obj["route"] = ROUTES.MAKLUMAT_PAGE;
        obj["children"] = [];
        menudata.push(obj);
      });
      $('ul[class="nav navbar-nav"] > li:nth-child(5) > a').each(function (
        i: any,
        element: any
      ) {
        let datas = $(element).prepend().text();
        //   Informasi Publik

        let obj: any = { title: "", route: "", children: [] };
        obj["title"] = datas;
        obj["route"] = "#";
        obj["children"] = [
          {
            title:
              "Informasi yang wajib disediakan dan diumumkan secara berkala",
            route: "/informasi-publik",
          },
          {
            title: "Informasi yang wajib diumumkan secara Serta-merta",
            route: ROUTES.INFORMASI_UMUM_PAGE,
          },
          {
            title: "Informasi yang wajib sedia setia saat",
            route: ROUTES.INFORMASI_WAJIB_PAGE,
          },
        ];
        // let child = [

        menudata.push(obj);
      });
      $('ul[class="nav navbar-nav"] > li:nth-child(6) > a').each(function (
        i: any,
        element: any
      ) {
        let datas = $(element).prepend().text();
        // Prosedur Permohonan
        const obj: any = { title: "", route: "", children: [] };
        obj["title"] = datas;
        obj["route"] = "/#";
        obj["children"] = [
          { title: "Prosedur Permohonan", route: ROUTES.PROSEDUR_PAGE },
          { title: "Registrasi Permohonan", route: ROUTES.REGISTRASI_PAGE },
        ];

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
    });
  }, []);

  return {
    menuData,
  };
}

// Old

// const menu = [
// 	{
// 		name: 'Beranda',
// 		route: ROUTES.HOME_PAGE,
// 		children: []
// 	},
// 	{
// 		name: 'Statistik',
// 		route: ROUTES.STATISTIK_PAGE,
// 		children: [
// 			{
// 				name: 'a',
// 				route: '/tes'
// 			},
// 			{
// 				name: 'b',
// 				route: '/tes'
// 			}
// 		]
// 	},
// 	{
// 		name: 'Profile',
// 		route: ROUTES.PROFIL_PAGE,
// 		children: []
// 	},
// 	{
// 		name: 'Regulasi',
// 		route: ROUTES.REGULASI_PAGE,
// 		children: []
// 	},
// 	{
// 		name: 'Maklumat',
// 		route: ROUTES.MAKLUMAT_PAGE,
// 		children: []
// 	},
// 	{
// 		name: 'Layanan Publik',
// 		route: '#',
// 		children: [
// 			{
// 				name: 'Prosedur Permohonan',
// 				route: ROUTES.PROSEDUR_PAGE
// 			}
// 		]
// 	},
// 	{
// 		name: 'Informasi Publik',
// 		route: ROUTES.INFORMASI_PAGE,
// 		children: [
// 			{
// 				name: 'tes',
// 				route: ROUTES.INFORMASI_PAGE
// 			},
// 			{
// 				name: 'tes1',
// 				route: '/tes2'
// 			}
// 		]
// 	}
// ];
