import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "./Components/Home/Header";
import Content from "./Components/Home/Content";
import Footer from "./Components/Home/Footer";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Shops from "./Components/Shops/Shops";
import ShopDetails from "./Components/Shops/ShopDetails";
import Cart from "./Components/Cart/Cart";
import { QueryClient, QueryClientProvider } from "react-query";
import ProductDetail from "./Components/Shops/ProductDetail";
import AdminShow from "./Components/AdminShop/AdminShow";
import AddProduct from "./Components/AdminShop/AddProduct";
import Navbar from "./Components/AdminShop/navbar";
import Thankfull from "./Components/ThankPage/Thankfull";
import Order from "./Components/AdminShop/Order";
import Chinhsach from "./Components/ortherPage/chinhsach";
// import AdminPage from "./Components/Admin/Adminpage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>

          <Route exact path="/" element={<Header/>}>
            <Route path="/" element={<Content />} />
            <Route path="Login" element={<Login />} />
            <Route path="Register" element={<Register />} />

            {/* shop */}
            <Route path="shops" element={<Shops/>} />
            <Route path="shopDetails/:id" element={<ShopDetails/>} />
            <Route path="ProductDetail/:id" element={<ProductDetail/>}/>
            <Route path="cart" element={<Cart/>} />
            <Route path="thankfull" element={<Thankfull/>} />
            <Route path="chinhsach" element={<Chinhsach/>} />
          </Route>

          {/* <Route path="admin" element={<AdminPage/>} /> */}

          {/* Admin shops */}
          <Route exact path="/" element={<Navbar/>}> 
            <Route path="adminShow" element={<AdminShow/>} />
            <Route path="addProduct" element={<AddProduct/>} />
            <Route path="order" element={<Order/>} />
          </Route>

        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
