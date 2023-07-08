import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Menu from './Menu';
import Content from './Content';

const AdminPage = () => {
  const [selectedMenu, setSelectedMenu] = useState('Statistics');

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  };

  return (
    <div className="admin-page">
      <Sidebar selectedMenu={selectedMenu} />
      <div className='layout-admin'>
      <Menu onMenuClick={handleMenuClick} />
       <div className="admin-content">
      <Content selectedMenu={selectedMenu} />
    </div>
    </div>
    </div>
  );
};

export default AdminPage;
