// import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { useState } from 'react';
// import MenuItems from './Components/MenuItem/MenuItems';
// import Homepage from './Components/Homepage/Homepage';
// import Calendar from './Components/Calender/Calender';
// import UserList from './Components/Users/UserList';
// import CreatePackage from './Components/Package/CreatePackage';
// import Charts from './Components/Charts/Charts';
// import Header from './Components/Header/Header';
// import AllSubscriber from './Components/Subscribtion/AllSubscriber';
// import RegisterMember from './Components/RegisterMember/RegisterMember';
// import ServicePackage from './Components/Package/ServicePackage';
// import LoginPage from './Pages/LoginPage/LoginPage';
// import CreateUsers from './Components/Users/CreateUsers';

// function App() {
//   const [theme, setTheme] = useState('light'); // 'light' or 'dark'

//   // Toggle theme between light and dark
//   const toggleTheme = () => {
//     const newTheme = theme === 'light' ? 'dark' : 'light';
//     setTheme(newTheme);
//     document.documentElement.classList.toggle('dark', newTheme === 'dark'); // Toggle dark mode class
//   };

//   return (
//     <div className={theme}>
//       <Router>
//         <div className="container">
//           {/* Fixed Header */}
//           <div className="header">
//             <Header toggleTheme={toggleTheme} />
//           </div>

//           <div className="content">
//             {/* Fixed Sidebar */}
//             <div className="menu mt-4">
//               <MenuItems theme={theme} toggleTheme={toggleTheme} />
//             </div>

//             {/* Scrollable Main Content */}
//             <div className="main">
//               <Routes>
//                 <Route path="/" element={<Homepage />} />
//                 <Route path="/calendar" element={<Calendar />} />
//                 <Route path="/registerMember" element={<RegisterMember />} />
//                 <Route path="/users" element={<UserList />} />
//                 <Route path="/createUsers" element={<CreateUsers />} />
//                 <Route path="/package/create" element={<CreatePackage />} />
//                 <Route path="/servicePackage" element={<ServicePackage />} />
//                 <Route path="/allSubscriber" element={<AllSubscriber />} />
//                 <Route path="/chart" element={<Charts />} />
//                 <Route path="/tables" element={<div className="text-5xl font-bold text-center flex justify-center items-center min-h-screen">Tables Content</div>} />
//               </Routes>
//             </div>
//           </div>
//         </div>
//       </Router>
//     </div>
//   );
// }

// export default App;

import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import MenuItems from './Components/MenuItem/MenuItems';
import Homepage from './Components/Homepage/Homepage';
import Calendar from './Components/Calender/Calender';
import UserList from './Components/Users/UserList';
import CreatePackage from './Components/Package/CreatePackage';
import Charts from './Components/Charts/Charts';
import Header from './Components/Header/Header';
import AllSubscriber from './Components/Subscribtion/AllSubscriber';
import RegisterMember from './Components/RegisterMember/RegisterMember';
import ServicePackage from './Components/Package/ServicePackage';
import CreateUsers from './Components/Users/CreateUsers';
import LoginPage from './Pages/LoginPage/LoginPage';
import SignUp from './Pages/SignUp/SignUp';
import ForgotPassword from './Pages/ForgotPassword/ForgotPassword';
import Message from './Components/Message/Message';
import Notification from './Components/Notification/Notification';


function App() {
  const [theme, setTheme] = useState('light'); // 'light' or 'dark'
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Authentication state

  const STATIC_EMAIL = 'admin@example.com';
  const STATIC_PASSWORD = '1234';

  const handleLogin = (email, password) => {
    if (email === STATIC_EMAIL && password === STATIC_PASSWORD) {
      setIsAuthenticated(true);
    } else {
      alert('Invalid email or password');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <div className={theme}>
      <Router>
        <Routes>
          {!isAuthenticated && (
            <>
              <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/sign-up" element={<SignUp />} />
            </>
          )}

          {isAuthenticated && (
            <Route
              path="/*"
              element={
                <div className="container">
                  <div className="header">
                    <Header toggleTheme={toggleTheme} onLogout={handleLogout} />
                  </div>
                  <div className="content">
                    <div className="menu mt-4">
                      <MenuItems theme={theme} toggleTheme={toggleTheme} />
                    </div>
                    <div className="main">
                      <Routes>
                        <Route path="/homepage" element={<Homepage />} />
                        <Route path="/calendar" element={<Calendar />} />
                        <Route path="/registerMember" element={<RegisterMember />} />
                        <Route path="/users" element={<UserList />} />
                        <Route path="/createUsers" element={<CreateUsers />} />
                        <Route path="/package/create" element={<CreatePackage />} />
                        <Route path="/servicePackage" element={<ServicePackage />} />
                        <Route path="/allSubscriber" element={<AllSubscriber />} />
                        <Route path="/chart" element={<Charts />} />
                        <Route path="/messages" element={<Message />} />
                        <Route path="/notifications" element={<Notification />} />
                        <Route path="/tables" element={<div className="text-5xl font-bold text-center flex justify-center items-center min-h-screen">Tables Content</div>} />
                        <Route path="*" element={<Navigate to="/homepage" />} />
                      </Routes>
                    </div>
                  </div>
                </div>
              }
            />
          )}

          {!isAuthenticated && <Route path="*" element={<Navigate to="/" />} />}
        </Routes>
      </Router>
    </div>
  );
}

export default App;








