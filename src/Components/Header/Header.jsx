import { useState, useEffect, useRef } from 'react';
import { MdNotificationsActive, MdDarkMode } from "react-icons/md";
import { FaMessage } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import myImage from '../../image/Logo Container.png';

const Header = ({ toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // -------------Message-------------
  const navigate = useNavigate();

  const goToMessages = () => {
    navigate("/messages"); // Replace '/messages' with your message page route
  };
  // -------------Message-------------

  // -------------Notification-------------


  const goToNotifications = () => {
    navigate("/notifications"); // Replace '/notifications' with your notification page route
  };
  // -------------Notification-------------

  return (
    <header
      className={`flex items-center justify-between p-5 shadow-md font-poppins ${document.documentElement.classList.contains('dark') ? 'bg-[#001529] text-white' : 'bg-white text-black'
        }`}
    >
      <div className="flex-1">
        {/* Add any search bar or other elements here */}
        <img src={myImage} alt="My Local Image" />
      </div>

      <div className="flex items-center space-x-4 ml-4">
        {/* Dark Mode Toggle */}
        <button
          onClick={toggleTheme}
          className="p-3 bg-gray-200 rounded-full hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
        >
          <MdDarkMode
            className={`text-[#106390] dark:text-[#f7941d]`} // Dark mode icon color
          />
        </button>

        {/* Messages Icon */}
        <button
          onClick={goToMessages}
          className="p-3 bg-gray-200 rounded-full hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
        >
          <FaMessage className="text-[#106390] dark:text-[#f7941d]" />
        </button>

        {/* Notifications Icon */}
        <button
          onClick={goToNotifications}
          className="relative p-3 bg-gray-200 rounded-full hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
        >
          <MdNotificationsActive className="text-[#106390] dark:text-[#f7941d]" />
        </button>

        {/* Profile Menu */}
        <div className="relative cursor-pointer" ref={menuRef}>
          <div className="flex items-center space-x-2" onClick={toggleMenu}>
            <img
              src="/src/image/man-with-photo-camera-his-holidays.jpg"
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h2 className="text-sm font-medium text-gray-700 dark:text-white">Chowdhury JOY</h2>
              <p className="text-xs text-gray-500 dark:text-gray-400">Full Stack Developer</p>
            </div>
          </div>

          {/* Dropdown menu */}
          {isMenuOpen && (
            <div className="absolute bg-[#1f2937] shadow-lg rounded-lg p-7 mt-5 right-4">
              <ul>
                <li className="p-2 text-white cursor-pointer">My Profile</li>
                <li className="p-2 text-white cursor-pointer">Setting</li>
                <li className="p-2 text-white cursor-pointer">Logout</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;


// import { useState, useEffect, useRef } from 'react';
// import { MdNotificationsActive, MdDarkMode } from "react-icons/md";
// import { FaMessage } from "react-icons/fa6";
// import { useNavigate } from "react-router-dom";
// import myImage from '../../image/Logo Container.png';

// const Header = ({ toggleTheme }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const menuRef = useRef(null);

//   const toggleMenu = () => {
//     setIsMenuOpen((prev) => !prev);
//   };

//   const handleClickOutside = (event) => {
//     if (menuRef.current && !menuRef.current.contains(event.target)) {
//       setIsMenuOpen(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   // -------------Message-------------
//   const navigate = useNavigate();

//   const goToMessages = () => {
//     navigate("/messages"); // Replace '/messages' with your message page route
//   };
//   // -------------Message-------------

//   // -------------Notification-------------


//   const goToNotifications = () => {
//     navigate("/notifications"); // Replace '/notifications' with your notification page route
//   };
//   // -------------Notification-------------

//   return (
//     <header
//     className={`flex items-center justify-between p-5 shadow-md font-poppins ${document.documentElement.classList.contains('dark') ? 'bg-[#001529] text-white' : 'bg-white text-black'}`}
//   >
//     <div className="flex-1 flex justify-start"> {/* flex justify-center */}
//       <img 
//         src={myImage} 
//         alt="My Local Image" 
//         className="w-[200px] max-h-[50px] object-contain" // ইমেজের আকার সীমাবদ্ধ করা
//       />
//     </div>
  
//     <div className="flex items-center space-x-4 ml-4">
//       {/* Dark Mode Toggle */}
//       <button
//         onClick={toggleTheme}
//         className="p-3 bg-gray-200 rounded-full hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
//       >
//         <MdDarkMode
//           className={`text-[#106390] dark:text-[#f7941d]`} // Dark mode icon color
//         />
//       </button>
  
//       {/* Messages Icon */}
//       <button
//         onClick={goToMessages}
//         className="p-3 bg-gray-200 rounded-full hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
//       >
//         <FaMessage className="text-[#106390] dark:text-[#f7941d]" />
//       </button>
  
//       {/* Notifications Icon */}
//       <button
//         onClick={goToNotifications}
//         className="relative p-3 bg-gray-200 rounded-full hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
//       >
//         <MdNotificationsActive className="text-[#106390] dark:text-[#f7941d]" />
//       </button>
  
//       {/* Profile Menu */}
//       <div className="relative cursor-pointer" ref={menuRef}>
//         <div className="flex items-center space-x-2" onClick={toggleMenu}>
//           <img
//             src="/src/image/man-with-photo-camera-his-holidays.jpg"
//             alt="Profile"
//             className="w-10 h-10 rounded-full"
//           />
//           <div>
//             <h2 className="text-sm font-medium text-gray-700 dark:text-white">Chowdhury JOY</h2>
//             <p className="text-xs text-gray-500 dark:text-gray-400">Full Stack Developer</p>
//           </div>
//         </div>
  
//         {/* Dropdown menu */}
//         {isMenuOpen && (
//           <div className="absolute bg-[#1f2937] shadow-lg rounded-lg p-7 mt-5 right-4">
//             <ul>
//               <li className="p-2 text-white cursor-pointer">My Profile</li>
//               <li className="p-2 text-white cursor-pointer">Setting</li>
//               <li className="p-2 text-white cursor-pointer">Logout</li>
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   </header>
  
  
  
//   );
// };

// export default Header;


