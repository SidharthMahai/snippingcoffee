/* eslint-disable react/jsx-no-duplicate-props */
import * as React from "react";

export default function Navbar() {
  return (
    <>
      <nav className="fixed flex inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
          <svg
            width="40px"
            height="40px"
            viewBox="0 0 1024 1024"
            className="ml-10 icon space-x-6"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M736.7 1007.6H287.9l-79.8-860.7h608.4z" fill="#E2B97F" />
            <path
              d="M736.7 1018.6H287.9c-5.7 0-10.4-4.3-11-10L197.1 148c-0.3-3.1 0.7-6.1 2.8-8.4 2.1-2.3 5-3.6 8.1-3.6h608.4c3.1 0 6 1.3 8.1 3.6 2.1 2.3 3.1 5.3 2.8 8.4l-79.8 860.6c-0.3 5.6-5.1 10-10.8 10z m-438.8-22h428.8L804.5 158H220.2l77.7 838.6z"
              fill="#1C1C1C"
            />
            <path d="M760.8 748.2h-497l-34.5-372.3h566z" fill="#26AEEA" />
            <path
              d="M760.8 759.2h-497c-5.7 0-10.4-4.3-11-10l-34.5-372.4c-0.3-3.1 0.7-6.1 2.8-8.4 2.1-2.3 5-3.6 8.1-3.6h566c3.1 0 6 1.3 8.1 3.6 2.1 2.3 3.1 5.3 2.8 8.4l-34.5 372.4c-0.4 5.7-5.1 10-10.8 10z m-486.9-22h476.9l32.5-350.4H241.4l32.5 350.4z"
              fill="#1C1C1C"
            />
            <path
              d="M512 562.1m-109.7 0a109.7 109.7 0 1 0 219.4 0 109.7 109.7 0 1 0-219.4 0Z"
              fill="#F75708"
            />
            <path
              d="M512 682.8c-66.6 0-120.7-54.2-120.7-120.7 0-66.6 54.2-120.7 120.7-120.7 66.6 0 120.7 54.2 120.7 120.7S578.6 682.8 512 682.8z m0-219.5c-54.4 0-98.7 44.3-98.7 98.7 0 54.4 44.3 98.7 98.7 98.7 54.4 0 98.7-44.3 98.7-98.7 0-54.4-44.2-98.7-98.7-98.7z"
              fill="#1C1C1C"
            />
            <path d="M888 165.5H136.6l61.1-136.7h629.2z" fill="#E2B97F" />
            <path
              d="M888 176.5H136.6c-3.7 0-7.2-1.9-9.2-5-2-3.1-2.3-7.1-0.8-10.5l61.1-136.8c1.8-4 5.7-6.5 10-6.5h629.2c4.3 0 8.3 2.6 10 6.5L898 161.1c1.5 3.4 1.2 7.3-0.8 10.5-2 3.1-5.5 4.9-9.2 4.9z m-734.4-22H871L819.8 39.8h-615l-51.2 114.7z"
              fill="#1C1C1C"
            />
          </svg>
          <h1 className="text-2xl text-gray-800 font-bold ml-3 mt-1">
            Snipping Coffee
          </h1>
          <div className="ml-10 flex items-center">
            <ul className="flex items-end space-x-10">
              <li className="font-semibold text-gray-700">Home</li>
              <li className="font-semibold text-gray-700">
                View Snippets {"</>"}
              </li>
              <li className="font-semibold text-gray-700">
                Add a New Snippet {"</>"}
              </li>
              <li className="ml-5 font-semibold text-gray-700">About Me</li>
            </ul>
          </div>
      </nav>
    </>
  );
}
