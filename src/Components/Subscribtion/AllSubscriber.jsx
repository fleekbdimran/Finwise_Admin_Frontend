import React, { useState } from 'react';

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
    <div className="p-6 bg-gradient-to-b from-white to-gray-100 min-h-screen font-poppins">
      {/* Action Buttons */}
      <div className="flex space-x-2 justify-end">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 shadow text-xs">
          Print
        </button>
      </div>

      {/* Search Controls */}
      <div className="flex gap-2 justify-start items-center mb-4 bg-white shadow-md p-4 rounded-md">
        {/* Date Search */}
        <div className="flex items-center space-x-1">
          <label className="text-gray-700 text-sm font-semibold">From Date</label>
          <input
            type="date"
            value={fromDate}
            onChange={e => setFromDate(e.target.value)}
            className="border rounded px-2 py-1 text-sm shadow-sm focus:ring focus:ring-blue-300"
          />
          <span className="text-gray-500 text-sm">To Date</span>
          <input
            type="date"
            value={toDate}
            onChange={e => setToDate(e.target.value)}
            className="border rounded px-2 py-1 text-sm shadow-sm focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Keyword and Payment Method */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1">
            <label className="text-gray-700 text-sm font-semibold">Keyword</label>
            <input
              type="text"
              value={keyword}
              onChange={e => setKeyword(e.target.value)}
              placeholder="Enter keyword"
              className="border rounded px-2 py-1 text-sm shadow-sm focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="flex items-center space-x-1">
            <label className="text-gray-700 text-sm font-semibold">Payment Method</label>
            <select
              value={paymentMethod}
              onChange={e => setPaymentMethod(e.target.value)}
              className="border rounded px-2 py-1 text-sm shadow-sm focus:ring focus:ring-blue-300"
            >
              <option value="All">All</option>
              <option value="Paid">Paid</option>
              <option value="Unpaid">Unpaid</option>
            </select>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto bg-white shadow-md rounded-md">
        <table className="w-full text-xs text-left text-gray-500 border">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100">
            <tr>
              <th className="px-3 py-2 border">ID</th>
              <th className="px-3 py-2 border">Subscriber Name</th>
              <th className="px-3 py-2 border">Subscriber Phone</th>
              <th className="px-3 py-2 border">Package Start Time</th>
              <th className="px-3 py-2 border">Package Expired Time</th>
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
                <td className="px-3 py-2 border">{subscriber.startTime}</td>
                <td className="px-3 py-2 border">{subscriber.endTime}</td>
                <td className="px-3 py-2 border">{subscriber.duration}</td>
                <td className="px-3 py-2 border">{subscriber.paymentTime}</td>
                <td className="px-3 py-2 border">{subscriber.amount}</td>
                <td className="px-3 py-2 border text-center">
                  <button className="text-blue-600 hover:underline text-xs">View</button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-gray-100 font-semibold">
              <td colSpan="7" className="px-3 py-2 text-right border text-xs">
                Total Amount
              </td>
              <td className="px-3 py-2 border font-bold text-center text-xs">
                {filteredSubscribers.reduce((acc, subscriber) => acc + subscriber.amount, 0).toFixed(2)}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default AllSubscriber;
