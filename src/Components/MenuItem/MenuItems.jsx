
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
import { FaFirstAid } from "react-icons/fa";
import { GiPodiumSecond } from "react-icons/gi";
import { FaDrupal } from "react-icons/fa";
import { PiContactlessPaymentFill } from "react-icons/pi";
import { MdCastConnected } from "react-icons/md";

const items = [
  {
    key: '1',
    icon: <AiFillHome style={{ color: '#106390' }}/>,
    label: <Link to="/">Homepage</Link>,
  },
  {
    key: 'sub1',
    label: 'Users',
    icon: <FaUsers style={{ color: '#106390' }}/>,
    children: [
      {
        key: '5',
        icon: <FaUsers style={{ color: '#106390' }}/>,
        label: <Link to="/users">User List</Link>,
      },
      {
        key: '10',
        icon: <FaUsers style={{ color: '#106390' }}/>,
        label: <Link to="/createUsers">Create User</Link>,
      },
    ],
  },
  {
    key: 'sub2',
    label: 'Package',
    icon: <GoPackageDependents style={{ color: '#106390' }}/>,
    children: [
      {
        key: '6',
        icon: <GoPackageDependents style={{ color: '#106390' }}/>,
        label: <Link to="/package/create">Create Package</Link>,
      },
      {
        key: '9',
        icon: <GoPackageDependents style={{ color: '#106390' }}/>,
        label: <Link to="/servicePackage">Service Package</Link>,
      },
    ],
  },
  {
    key: 'sub3',
    label: 'Subscriber',
    icon: <MdUnsubscribe style={{ color: '#106390' }}/>,
    children: [
      {
        key: '7',
        icon: <MdUnsubscribe style={{ color: '#106390' }}/>,
        label: <Link to="/allSubscriber">All Subscriber List</Link>,
      },
    ],
  },
  {
    key: '8',
    icon: <FaRegistered style={{ color: '#106390' }}/>,
    label: <Link to="/registerMember">Registered Member</Link>,
  },
  // {
  //   key: '2',
  //   icon: <SlCalender style={{ color: '#106390' }}/>,
  //   label: <Link to="/calendar">Calendar</Link>,
  // },
  // {
  //   key: '3',
  //   icon: <FaChartLine style={{ color: '#106390' }}/>,
  //   label: <Link to="/chart">Chart</Link>,
  // },
 
  {
    key: '4',
    icon: <FaFirstAid  style={{ color: '#106390' }} />,
    label: <Link to="/firstRefience">First Refience</Link>,
  },
  {
    key: '11',
    icon: <GiPodiumSecond style={{ color: '#106390' }} />,
    label: <Link to="/secondRefience">Second Refience</Link>,
  },
  {
    key: '12',
    icon: <FaDrupal style={{ color: '#106390' }} />,
    label: <Link to="/upasList">UPAS List</Link>,
  },
  {
    key: 'sub4',
    label: 'Payment',
    icon: <PiContactlessPaymentFill style={{ color: '#106390' }}/>,
    children: [
      {
        key: '13',
        icon: <PiContactlessPaymentFill style={{ color: '#106390' }}/>,
        label: <Link to="/wallet">Wallet</Link>,
      },
      {
        key: '15',
        icon: <PiContactlessPaymentFill style={{ color: '#106390' }}/>,
        label: <Link to="/subscriber">Subscribtion Method</Link>,
      },
    ],
  },
  {
    key: '14',
    icon: <MdCastConnected style={{ color: '#106390' }} />,
    label: <Link to="/connectedList">Connected List</Link>,
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
                  selectedKey === item.key ? 'scale-125 text-custom-blue' : ''
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






