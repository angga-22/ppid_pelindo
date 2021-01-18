import React from "react";

interface infoProps {
  id?: string;
  title: string;
  link: string;
}
const CardInformasi = ({ title, link }: infoProps) => {
  return (
    <div className="border rounded-lg p-4 flex justify-between items-center my-4 border-gray-200 px-2">
      <div className="text-sm sm:text-base">{title}</div>
      <a
        href={link}
        className="text-sm sm:text-lg sm:w-40 w-36 rounded-lg transition duration-500 ease-in-out  bg-blue-200 hover:bg-blue-300 text-white flex justify-center items-center p-2"
      >
        {link === "page" ? "View" : "Download"}
      </a>
    </div>
  );
};

export default CardInformasi;
