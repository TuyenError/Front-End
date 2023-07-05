import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import Sidebar from './Components/Admin/Sidebar';
import Menu from './Components/Admin/Menu';
import Content from './Components/Admin/Content';
import ShowShops from './Components/Admin/ShowShops';
import ShowProducts from './Components/Admin/ShowProducts';
import ShowUsers from './Components/Admin/User';
import AdminPage from './Components/Admin/Adminpage';

import './App.css';
function App() {
  return (
    <div className="App">
      <AdminPage />
    </div>
  );
}

// const queryClient = new QueryClient();

// const App = () => {
//   const [selectedMenu, setSelectedMenu] = useState('');

//   const handleMenuClick = (menu) => {
//     setSelectedMenu(menu);
//   };

//   return (
//     <QueryClientProvider client={queryClient}>
//       <Router>
//         <div className="admin-page">
//           <Sidebar selectedMenu={selectedMenu} />
//              <div className='layout-admin'>
//               <Menu onMenuClick={handleMenuClick} />
//             <div className="admin-content">
//               <Content selectedMenu={selectedMenu} />
//             </div>
//           </div>
//         </div>
//       </Router>
//     </QueryClientProvider>
//   );
// };

export default App;
