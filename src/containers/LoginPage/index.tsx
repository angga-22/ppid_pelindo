import React from "react";
import { NavLink } from "react-router-dom";
import logoPelindo from "../../assets/img/logo-pelindo.png";
import bgChart from "../../assets/img/bgChart.jpg";

const index = () => {
  return (
    <div>
      <div className="min-h-screen mx-6 relative">
        <img
          src={bgChart}
          className="absolute opacity-5 -z-10 top-0 right-0"
          alt=""
        />
        <form className="flex flex-col space-y-8 items-center mt-16 lg:w-1/3  mx-auto rounded">
          <img src={logoPelindo} alt="pelindo" className="w-1/2" />
          <h5 className="text-lg font-bold text-blue-100">Selamat Datang!</h5>
          <div className="flex flex-col w-full">
            <label
              className=" text-blue-100 text-opacity-50"
              htmlFor="username"
            >
              Username
            </label>
            <input
              id="username"
              className="border-blue-100 border-b-2 border-opacity-40 focus:border-opacity-100 focus:outline-none"
              type="text"
              placeholder="Enter your username"
            />
          </div>
          <div className="flex flex-col w-full">
            <label
              className=" text-blue-100 text-opacity-50"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              className="border-blue-100  border-b-2 border-opacity-40 focus:border-opacity-100 focus:outline-none"
              type="text"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex flex-col space-y-4">
            <button className="w-full bg-blue-100 bg-opacity-30 focus:outline-none text-blue-100 text-opacity-80 py-1 rounded">
              Masuk
            </button>
            <div className="w-full h-px bg-gray-900 bg-opacity-20"></div>
            <NavLink
              to="#"
              className="text-sm text-center text-blue-100 focus:outline-none text-opacity-50 px-12 py-1 rounded"
            >
              Anda belum memiliki akun? Daftar akun sekarang
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default index;
