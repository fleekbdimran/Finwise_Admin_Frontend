import React, { useState } from 'react';
import { FaEye } from "react-icons/fa";

const AllSubscriber = () => {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [keyword, setKeyword] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('All');
  const [subscribers, setSubscribers] = useState([
    {
      id: '#101',
      name: 'John Doe',
      phone: '+8801712345678',
      startTime: '2024-12-01 10:00 AM',
      endTime: '2024-12-15 10:00 AM',
      duration: '14 Days',
      paymentTime: '2024-12-01 09:00 AM',
      amount: 15000,
      status: 'Paid',
    },
    // Add more sample data as needed
  ]);

  // Handle the search functionality
  const filteredSubscribers = subscribers.filter(subscriber => {
    const isDateInRange =
      (!fromDate || new Date(subscriber.startTime) >= new Date(fromDate)) &&
      (!toDate || new Date(subscriber.endTime) <= new Date(toDate));
    const isKeywordMatch = subscriber.name.toLowerCase().includes(keyword.toLowerCase());
    const isPaymentMethodMatch =
      paymentMethod === 'All' || subscriber.status.toLowerCase() === paymentMethod.toLowerCase();

    return isDateInRange && isKeywordMatch && isPaymentMethodMatch;
  });

  return (
    <div className="p-6 from-white to-gray-100  text-nowrap font-poppins">
      {/* -----------------Print Buttons------------------ */}
      <div className="flex space-x-2 justify-end">
        <button className="bg-[#106390] text-white px-4 py-2 rounded hover:bg-[#106390] shadow text-xs">
          Print
        </button>
      </div>
      {/* -----------------Print Buttons------------------ */}

      {/* ----------------------Search & Dropdown Controls-------------------------- */}
      <div className="flex gap-3 justify-start mb-6">

           {/* ------------------Searchbar----------------- */}
           <form className="max-w-md w-full">
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
       
       {/* -------------------------Dropdown-------------------------- */}
       <div className="flex items-center space-x-1">
            <label className="text-black text-sm font-semibold">Payment Method</label>
            <select
              value={paymentMethod}
              onChange={e => setPaymentMethod(e.target.value)}
              className="border rounded px-3 py-2 text-sm shadow-md  focus:ring-[#106390]"
            >
              <option value="All">Gold</option>
              <option value="Paid">Silver</option>
              <option value="Unpaid">Platinum</option>
            </select>
        </div>
       {/* -------------------------Dropdown-------------------------- */}

    
      </div>

      {/* ----------------------Search & Dropdown Controls-------------------------- */}

       {/* -----------------Table Section------------------- */}
      <div className=" bg-white shadow-md rounded-md ">
        <table className="w-full text-xs text-left text-black border">
          <thead className="text-xs  uppercase bg-gray-100">
            <tr>
              <th className="px-3 py-2 border">ID</th>
              <th className="px-3 py-2 border">Subscriber Name</th>
              <th className="px-3 py-2 border">Subscriber Phone</th>
              {/* <th className="px-3 py-2 border">Package Start Time</th>
              <th className="px-3 py-2 border">Package Expired Time</th> */}
              <th className="px-3 py-2 border">Package Duration</th>
              <th className="px-3 py-2 border">Payment Time</th>
              <th className="px-3 py-2 border">Paid Amount</th>
              <th className="px-3 py-2 border text-center">View</th>
            </tr>
          </thead>
          <tbody>
            {filteredSubscribers.map((subscriber, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-3 py-2 border">{subscriber.id}</td>
                <td className="px-3 py-2 border">{subscriber.name}</td>
                <td className="px-3 py-2 border">{subscriber.phone}</td>
                {/* <td className="px-3 py-2 border">{subscriber.startTime}</td>
                <td className="px-3 py-2 border">{subscriber.endTime}</td> */}
                <td className="px-3 py-2 border">{subscriber.duration}</td>
                <td className="px-3 py-2 border">{subscriber.paymentTime}</td>
                <td className="px-3 py-2 border">{subscriber.amount}</td>
                <td className="px-3 py-2 border text-center">
                  <button className="text-blue-600 hover:underline text-xs">
                     <span className="flex justify-center items-center"> <FaEye /></span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className=" font-semibold">
              <td colSpan="5" className="px-3 py-2 text-right border text-xs">
                Total Amount
              </td>
              <td className="px-3 py-2 border font-bold text-center text-xs">
                {filteredSubscribers.reduce((acc, subscriber) => acc + subscriber.amount, 0).toFixed(2)}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      {/* -----------------Table Section------------------- */}

      
    </div>
  );
};

export default AllSubscriber;
