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

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="Login" element={<Login />} />
          <Route path="Register" element={<Register />} />

          {/* shop */}
          <Route path="shops" element={<Shops/>} />
          <Route path="shopDetails/:id" element={<ShopDetails/>} />

          <Route path="cart" element={<Cart/>} />
        </Routes>
        <Footer />
      </Router>
    </QueryClientProvider>
  );
}

export default App;
