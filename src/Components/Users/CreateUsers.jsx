import { useState } from 'react';

const CreateUsers = () => {
    const [usersName, setUsersName] = useState('');
    const [usersEmail, setUsersEmail] = useState('');
    const [usersPhone, setUsersPhone] = useState('');
    const [password, setPassword] = useState('');
    const [retypePassword, setRetypePassword] = useState('');
    const [adminType, setAdminType] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showRetypePassword, setShowRetypePassword] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // You can add validation or form submission logic here
    };

  return (
    <div className="block mx-auto p-8 w-full max-w-5xl font-poppins">
    <div className="bg-white p-8 rounded-lg shadow-lg w-full">
      <h3 className="text-4xl font-semibold mb-6 text-black-600 text-start text-[#106390]  ">
        Create User
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          <div className="w-full">
            <label className="block text-gray-700 font-medium mb-1" htmlFor="usersName">
              User Name *
            </label>
            <input
              type="text"
              id="usersName"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter User Name"
              value={usersName}
              onChange={e => setUsersName(e.target.value)}
              required
            />
          </div>

          <div className="w-full">
            <label className="block text-gray-700 font-medium mb-1" htmlFor="usersEmail">
              User Email *
            </label>
            <input
              type="email"
              id="usersEmail"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter User Email"
              value={usersEmail}
              onChange={e => setUsersEmail(e.target.value)}
              required
            />
          </div>

          <div className="w-full">
            <label className="block text-gray-700 font-medium mb-1" htmlFor="usersPhone">
              User Phone *
            </label>
            <input
              type="tel"
              id="usersPhone"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter User Phone"
              value={usersPhone}
              onChange={e => setUsersPhone(e.target.value)}
              required
            />
          </div>

          <div className="w-full">
            <label className="block text-gray-700 font-medium mb-1" htmlFor="password">
              Password *
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-600"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>

          <div className="w-full">
            <label className="block text-gray-700 font-medium mb-1" htmlFor="retypePassword">
              Re-type Password *
            </label>
            <div className="relative">
              <input
                type={showRetypePassword ? 'text' : 'password'}
                id="retypePassword"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Re-type Password"
                value={retypePassword}
                onChange={e => setRetypePassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowRetypePassword(!showRetypePassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-600"
              >
                {showRetypePassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>

          <div className="w-full">
            <label className="block text-gray-700 font-medium mb-1" htmlFor="adminType">
              Admin Type <span className="text-black-500">*</span>
            </label>
            <select
              id="adminType"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={adminType}
              onChange={e => setAdminType(e.target.value)}
              required
            >
              <option value="">Select Admin Type</option>
              <option value="admin">Admin</option>
              <option value="super-admin">Super Admin</option>
            </select>
          </div>

        </div>

        <div className="mt-8 flex justify-center">
          <button
            type="submit"
            className="w-full sm:w-[200px] px-5 py-3 bg-[#106390] text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default CreateUsers
