import React from 'react';
import { RiStoreLine, RiShoppingCartLine, RiUserLine, RiFileListLine } from 'react-icons/ri';

const Sidebar = ({ selectedMenu }) => {
  const renderIcon = () => {
    switch (selectedMenu) {
      case 'Shop':
        return <RiStoreLine />;
      case 'Product':
        return <RiShoppingCartLine />;
      case 'User':
        return <RiUserLine />;
      default:
        return null;
    }
  };

  return (
    <div className="sidebar">
      <div className="icon">{renderIcon()}</div>
      <h2>{selectedMenu}</h2>
    </div>
  );
};

export default Sidebar;
