import React, { useEffect, useState } from "react";
import axios from "axios";


const ShowProducts = () => {
  const [products, setProducts] = useState([]);
  // Sử dụng useState để tạo state "products" và hàm "setProducts" để thay đổi state này

  useEffect(() => {
    // Sử dụng useEffect để thực hiện các thao tác sau khi component được render

    const fetchProducts = async () => {
      // Tạo hàm "fetchProducts" để gửi yêu cầu lấy dữ liệu từ API

      try {
        // Thử gửi yêu cầu

        const response = await axios.get("http://127.0.0.1:8000/api/get-products");
        // Gửi yêu cầu GET đến URL "http://127.0.0.1:8000/api/get-products" để lấy dữ liệu

        console.log("Data received from API:", response.data);
        // In ra console dữ liệu nhận được từ API

        setProducts(response.data);
        // Cập nhật state "products" với dữ liệu nhận được từ API
      } catch (error) {
        // Xử lý lỗi nếu có

        console.error("Error retrieving products:", error);
        // In ra console thông báo lỗi khi không thể lấy dữ liệu sản phẩm
      }
    };

    fetchProducts();
    // Gọi hàm "fetchProducts" để lấy dữ liệu sản phẩm từ API khi component được render
  }, []);
  // Dùng mảng rỗng [] như dependency để useEffect chỉ chạy một lần khi component được render

  return (
    <div className="show-products">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Image</th>
            <th>Promotion Price</th>
            <th>Active</th>
            <th>Category ID</th>
            <th>Shop ID</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.image}</td>
              <td>{product.promotion_price}</td>
              <td>{product.isActive}</td>
              <td>{product.category_id}</td>
              <td>{product.shop_id}</td>
            </tr>
          ))}
          {/* Dùng hàm map để tạo các dòng trong bảng, hiển thị thông tin của từng sản phẩm */}
        </tbody>
      </table>
    </div>
  );
};

export default ShowProducts;
// Xuất component ShowProducts để có thể sử dụng trong các component khác
