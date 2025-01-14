import { Input, Button } from 'antd';


const CreatePackage = () => {
  return (
    <div className="flex flex-col justify-center items-center px-4 font-poppins">
    <h2 className="text-4xl text-center mb-4 mt-10 font-semibold text-[#106390] underline">Create Package</h2>
  
    <div className="w-full max-w-4xl space-y-6">  {/* Adjust max-width here */}
      <div>
        <p>Name:</p>
        <Input className="h-12 text-lg px-4 w-full" placeholder="Name" />
      </div>
      <div>
        <p>Amount:</p>
        <Input className="h-12 text-lg px-4 w-full" placeholder="Amount" />
      </div>
      <div>
        <p>Duration:</p>
        <Input className="h-12 text-lg px-4 w-full" placeholder="Duration" />
      </div>
    </div>
  
    <button className="px-6 py-2 bg-[#106390] text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mt-6 w-[200px]">
      Create Package
    </button>
  </div>
  
  
  );
};

export default CreatePackage;
