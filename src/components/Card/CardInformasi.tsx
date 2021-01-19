import React from "react";

interface infoProps {
  id?: string;
  data: any;
  link: any;
}
const CardInformasi = (props: infoProps) => {
  return (
    <div className="border rounded-lg p-4 flex justify-between items-center my-4 border-gray-200 px-2">
      {typeof props.data.title !== "undefined" && (
        <div className="text-sm sm:text-base">{props.data.title}</div>
      )}

      {typeof props.link !== "undefined" && (
        <a
          href={props.link.link}
          className="text-sm sm:text-lg sm:w-40 w-36 rounded-lg transition duration-500 ease-in-out  bg-blue-200 hover:bg-blue-300 text-white flex justify-center items-center p-2"
        >
          {props.link.link === "page" ? "View" : "Download"}
        </a>
      )}
    </div>
  );
};

export default CardInformasi;
