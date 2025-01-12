import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

function App() {
  const [theme, setTheme] = useState('light'); // 'light' or 'dark'

  // Toggle theme between light and dark
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark'); // Toggle dark mode class
  };

  return (
    <div className={theme}>
      <Router>
        <div className="container">
          {/* Fixed Header */}
          <div className="header">
            <Header toggleTheme={toggleTheme} />
          </div>

          <div className="content">
            {/* Fixed Sidebar */}
            <div className="menu mt-4">
              <MenuItems theme={theme} toggleTheme={toggleTheme} />
            </div>

            {/* Scrollable Main Content */}
            <div className="main">
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/registerMember" element={<RegisterMember />} />
                <Route path="/users" element={<UserList />} />
                <Route path="/package/create" element={<CreatePackage />} />
                <Route path="/servicePackage" element={<ServicePackage />} />
                <Route path="/allSubscriber" element={<AllSubscriber />} />
                <Route path="/chart" element={<Charts />} />
                <Route path="/tables" element={<div className="text-5xl font-bold text-center flex justify-center items-center min-h-screen">Tables Content</div>} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;



