import React from 'react';
import { RiStoreLine, RiShoppingCartLine, RiUserLine, RiFileListLine } from 'react-icons/ri';


const Menu = ({ onMenuClick }) => {
  const handleClick = (menu) => {
    onMenuClick(menu);
  };

  return (
    <div className="menu">
      <ul>
        <li onClick={() => handleClick('Shop')}>
          <RiStoreLine /> Shop
        </li>
        <li onClick={() => handleClick('Product')}>
          <RiShoppingCartLine /> Product
        </li>
        <li onClick={() => handleClick('User')}>
          <RiUserLine /> User
        </li>
      </ul>
    </div>
  );
};

export default Menu;
