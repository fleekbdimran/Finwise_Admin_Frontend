// import { useState } from 'react';
// import { Menu, Layout } from 'antd';
// import { AiFillHome } from "react-icons/ai";
// import { AppstoreOutlined, CalendarOutlined } from '@ant-design/icons';
// import { FaChartLine } from "react-icons/fa";
// import { SlCalender } from "react-icons/sl";
// import { GoPackageDependents } from "react-icons/go";
// import { FaUsers } from "react-icons/fa";
// import { Link } from 'react-router-dom';
// import { TbTableShortcut } from "react-icons/tb";
// import { MdUnsubscribe } from "react-icons/md";

// const items = [
//   {
//     key: '1',
//     icon: <AiFillHome />,
//     label: <Link to="/">Homepage</Link>,
//   },
//   {
//     key: 'sub1',
//     label: 'Users',
//     icon: <FaUsers />,
//     children: [
//       {
//         key: '5',
//         icon: <FaUsers />,
//         label: <Link to="/users">User List</Link>,
//       },
//     ],
//   },
//   {
//     key: 'sub2',
//     label: 'Package',
//     icon: <GoPackageDependents />,
//     children: [
//       {
//         key: '6',
//         icon: <GoPackageDependents />,
//         label: <Link to="/package/create">Create Package</Link>,
//       },
//     ],
//   },
//   {
//     key: 'sub3',
//     label: 'Subscriber',
//     icon: <MdUnsubscribe />,
//     children: [
//       {
//         key: '7',
//         icon: <MdUnsubscribe />,
//         label: <Link to="/allSubscriber">All Subscriber List</Link>,
//       },
//     ],
//   },
//   {
//     key: '2',
//     icon: <SlCalender />,
//     label: <Link to="/calendar">Calendar</Link>,
//   },
//   {
//     key: '3',
//     icon: <FaChartLine />,
//     label: <Link to="/chart">Chart</Link>,
//   },
//   {
//     key: '4',
//     icon: <TbTableShortcut />,
//     label: <Link to="/tables">Tables</Link>,
//   },
// ];

// const MenuItems = ({ theme, toggleTheme }) => {
//   const [selectedKey, setSelectedKey] = useState('1');
//   const [openKeys, setOpenKeys] = useState([]);

//   const handleMenuClick = (e) => {
//     setSelectedKey(e.key);
//   };

//   const handleOpenChange = (keys) => {
//     setOpenKeys(keys.length ? [keys[keys.length - 1]] : []);
//   };

//   return (
//     <Layout style={{ minHeight: '100vh', overflow: 'hidden' }}>
//       <Layout.Sider
//         width={256}
//         theme={theme}
//         style={{
//           background: theme === 'dark' ? '#001529' : '#fff',
//           transition: 'all 0.3s ease-in-out',
//           position: 'sticky',  // Changed to sticky for fixing it at to
//           height: '100vh',     
//           overflowY: 'auto',
          
            
//         }}
//       >
//         {/* Menu with items */}
//         <Menu
//           mode="inline"
//           theme={theme}
//           selectedKeys={[selectedKey]}
//           openKeys={openKeys}
//           onOpenChange={handleOpenChange}
//           items={items.map((item) => ({
//             ...item,
//             icon: (
//               <div
//                 className={`transition-transform duration-300 flex justify-center items-center ${
//                   selectedKey === item.key ? 'scale-125 text-blue-500' : ''
//                 }`}
//                 style={{ fontSize: '20px' }}
//               >
//                 {item.icon}
//               </div>
//             ),
//           }))}
//           onClick={handleMenuClick}
//         />
//       </Layout.Sider>

     
//     </Layout>
//   );
// };

// export default MenuItems;



import { useState } from 'react';
import { Menu, Layout } from 'antd';
import { AiFillHome } from "react-icons/ai";
import { FaChartLine } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { GoPackageDependents } from "react-icons/go";
import { FaUsers } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { TbTableShortcut } from "react-icons/tb";
import { MdUnsubscribe } from "react-icons/md";
import { FaRegistered } from "react-icons/fa6";

const items = [
  {
    key: '1',
    icon: <AiFillHome />,
    label: <Link to="/">Homepage</Link>,
  },
  {
    key: 'sub1',
    label: 'Users',
    icon: <FaUsers />,
    children: [
      {
        key: '5',
        icon: <FaUsers />,
        label: <Link to="/users">User List</Link>,
      },
    ],
  },
  {
    key: 'sub2',
    label: 'Package',
    icon: <GoPackageDependents />,
    children: [
      {
        key: '6',
        icon: <GoPackageDependents />,
        label: <Link to="/package/create">Create Package</Link>,
      },
      {
        key: '11',
        icon: <GoPackageDependents />,
        label: <Link to="/servicePackage">Service Package</Link>,
      },
    ],
  },
  {
    key: 'sub3',
    label: 'Subscriber',
    icon: <MdUnsubscribe />,
    children: [
      {
        key: '7',
        icon: <MdUnsubscribe />,
        label: <Link to="/allSubscriber">All Subscriber List</Link>,
      },
    ],
  },
  {
    key: '8',
    icon: <FaRegistered />,
    label: <Link to="/registerMember">Registered Member</Link>,
  },
  {
    key: '2',
    icon: <SlCalender />,
    label: <Link to="/calendar">Calendar</Link>,
  },
  {
    key: '3',
    icon: <FaChartLine />,
    label: <Link to="/chart">Chart</Link>,
  },
  {
    key: '4',
    icon: <TbTableShortcut />,
    label: <Link to="/tables">Tables</Link>,
  },
];

const MenuItems = ({ theme, toggleTheme }) => {
  const [selectedKey, setSelectedKey] = useState('1'); // Store the selected menu key
  const [openKeys, setOpenKeys] = useState([]); // Store the open submenu keys

  const handleMenuClick = (e) => {
    setSelectedKey(e.key); // Update the selected menu key
  };

  const handleOpenChange = (keys) => {
    // If keys are empty, close all submenus
    if (keys.length === 0) {
      setOpenKeys([]);
    } else {
      // Open the last clicked submenu and close others
      setOpenKeys([keys[keys.length - 1]]);
    }
  };

  return (
    <Layout style={{ minHeight: '100vh', overflow: 'hidden' }}>
      <Layout.Sider
        width={256}
        theme={theme}
        style={{
          background: theme === 'dark' ? '#001529' : '#fff',
          transition: 'all 0.3s ease-in-out',
          position: 'sticky',
          height: '100vh',
          overflowY: 'auto',
        }}
      >
        {/* Menu with items */}
        <Menu
          mode="inline"
          theme={theme}
          selectedKeys={[selectedKey]} // Keep the selected item highlighted
          openKeys={openKeys} // Manage which submenus are open
          onOpenChange={handleOpenChange} // Handle submenu toggle
          items={items.map((item) => ({
            ...item,
            icon: (
              <div
                className={`transition-transform duration-300 flex justify-center items-center ${
                  selectedKey === item.key ? 'scale-125 text-blue-500' : ''
                }`}
                style={{ fontSize: '20px' }}
              >
                {item.icon}
              </div>
            ),
          }))}
          onClick={handleMenuClick} // Handle item click to change selection
        />
      </Layout.Sider>
    </Layout>
  );
};

export default MenuItems;






