import React, { useState } from "react";
import { FaPen } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";

const FirstRefience = () => {

  {/* ------------------Table----------------- */}
  const hotels = [
    {
      id: 1,
      email: "mdkashedul.haque@gmail.com",
      expiredDate: "10-12-2025",
      createdDate: "10-12-2024",
      group: "Not Available",
      status: "ACTIVE",
    },
    {
      id: 2,
      email: "imranahmodkhan@gmail.com",
      expiredDate: "24-11-2025",
      createdDate: "24-11-2024",
      group: "white rose groups",
      status: "ACTIVE",
    },
    {
      id: 3,
      email: "grandbeachr@gmail.com",
      expiredDate: "20-11-2024",
      createdDate: "19-11-2024",
      group: "Not Available",
      status: "ACTIVE",
    },
    
  ];
  {/* ------------------Table----------------- */}

  {/* ------------------Pagination----------------- */}
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(hotels.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = hotels.slice(startIndex, startIndex + itemsPerPage);
  {/* ------------------Pagination----------------- */}

  return (
    <>
      <div className="p-10">
        <div className="">
          {/* ------------------Searchbar----------------- */}
          <form className="max-w-md w-full pl-4">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Mockups, Logos..."
                required
              />
              <button
                type="submit"
                className="text-white absolute right-2.5 bottom-2.5 bg-[#106390] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>
          {/* ------------------Searchbar----------------- */}

          {/* ------------------Table----------------- */}
          <div className="p-4 w-full">
            <div className="text-nowrap">
              <table className="min-w-full border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">Id</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Email</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Expired Date</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Created Date</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Group</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Status</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Update</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Edit</th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems.map((hotel) => (
                    <tr
                      key={hotel.id}
                      className="odd:bg-white even:bg-gray-50"
                    >
                      <td className="border border-gray-300 px-4 py-2">
                        {hotel.id}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {hotel.email}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {hotel.expiredDate}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {hotel.createdDate}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {hotel.group}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-[#106390] font-bold ">
                        {hotel.status}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-[#106390] cursor-pointer ">
                        <span className="flex justify-center items-center">
                          <FaEye />
                        </span>
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-[#106390] cursor-pointer">
                        <span>
                          <FaPen />
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {/* ------------------Table----------------- */}

          {/* ------------------Pagination----------------- */}
          <div className="flex justify-center mt-4">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => handlePageChange(i + 1)}
                className={`px-4 py-2 mx-1 rounded ${
                  currentPage === i + 1
                    ? "bg-[#106390] text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
          {/* ------------------Pagination----------------- */}
        </div>
      </div>
    </>
  );
};

export default FirstRefience;
