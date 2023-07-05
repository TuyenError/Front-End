import React from 'react';
import ShowProducts from './ShowProducts';
import ShowShops from './ShowShops';
import ShowUsers from './User';


const Content = ({ selectedMenu }) => {
  return (
    <div className="content">
      {selectedMenu === 'Shop' && <ShowShops />}
      {selectedMenu === 'Product' && <ShowProducts />}
      {selectedMenu === 'User' && <ShowUsers/>}
    </div>
  );
};

export default Content;
