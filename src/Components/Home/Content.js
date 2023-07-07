import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Content = () => {
    const [products, setProducts] = useState([]); // State lưu trữ danh sách sản phẩm
    const [categories, setCategories] = useState([]); // State lưu trữ danh sách danh mục
    const [searchQuery, setSearchQuery] = useState(""); // State lưu trữ từ khóa tìm kiếm
    const [selectedCategory, setSelectedCategory] = useState(""); // State lưu trữ danh mục được chọn
    const [filteredProducts, setFilteredProducts] = useState([]); // State lưu trữ danh sách sản phẩm đã được lọc

    useEffect(() => {
        // Gọi API để lấy danh sách sản phẩm
        fetch('http://127.0.0.1:8000/api/get-products')
            .then((response) => response.json())
            .then((data) => {
                setProducts(data); // Cập nhật state products với dữ liệu lấy từ API
                setFilteredProducts(data); // Gán tất cả sản phẩm vào state filteredProducts khi trang được tải lần đầu
            })
            .catch((error) => {
                console.log(error);
            });
        // Gọi API để lấy danh sách danh mục
        fetch('http://127.0.0.1:8000/api/get-categories')
            .then((response) => response.json())
            .then((data) => {
                setCategories(data); // Cập nhật state categories với dữ liệu lấy từ API
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    // Lọc danh sách sản phẩm dựa trên từ khóa tìm kiếm và danh mục được chọn
    const handleSearchChange = (event) => {
        const newSearchQuery = event.target.value;
        setSearchQuery(newSearchQuery); // Cập nhật giá trị searchQuery khi người dùng thay đổi nội dung tìm kiếm

        //const filteredProducts khai báo một biến mới có tên là filteredProducts để lưu trữ danh sách sản phẩm đã được lọc.
        const updatedFilteredProducts = products.filter((product) =>
            product.name.toLowerCase().includes(newSearchQuery.toLowerCase()));
        setFilteredProducts(updatedFilteredProducts);
    };

    // Lọc danh sách sản phẩm dựa trên từ khóa tìm kiếm và danh mục được chọn
    const handleCategoryChange = (category_id, category_name) => {
        setSelectedCategory(category_id);
        setSearchQuery(category_name); // Thay đổi giá trị của searchQuery thành tên danh mục
        const updatedFilteredProducts = products.filter((product) =>
            (category_id === "" || product.category_id === category_id)
        );
        setFilteredProducts(updatedFilteredProducts);
    };

    return (
        <div>
            <section className="main__banner">
                <div className="main__banner--content" style={{ flex: 9 }}>
                    <div className="main__banner--search" style={{ flex: 4 }}>
                        <h1>Đặt Đồ ăn, giao hàng từ 20'...</h1>
                        <h3 className="my-20">Có 12126 Địa Điểm Ở Đà Nẵng Từ 00:00 - 23:59</h3>
                        <div className="main__banner--input">
                            <input
                                type="text"
                                placeholder="Tìm địa điểm, món ăn, địa chỉ..."
                                value={searchQuery}
                                onChange={handleSearchChange}
                            />
                            <button className="btn-primary" style={{marginBottom: 0}} type="button">
                                <i className="fas fa-search" />
                            </button>
                        </div>
                        <div className="main__list--search">
                            {categories.map((category) => (
                                <div
                                    key={category.id}
                                    className={`main__list--item ${selectedCategory === category.id ? "active" : ""}`}
                                    onClick={() => handleCategoryChange(category.id, category.name)}
                                >
                                    <h3>{category.name}</h3>
                                </div>  
                            ))}
                        </div>
                        <h3 className="my-20">
                            Sử dụng App ShopeeFood để có nhiều giảm giá và trải nghiệm tốt hơn
                        </h3>
                        <div className="main__banner--app">
                            <div>
                                <a href="#!"><img className="app" src="images/AppStore-vn.png" alt="appstore" /></a>
                            </div>
                            <div>
                                <a href="#!"><img className="app" src="images/PlayStore-vn.png" alt="playstore" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="main__banner--restaurant">
                        <div className="main__banner--endow">
                            <h5>Ưu đãi</h5>
                            <a href="#!"><i className="fas fa-th-large" />Xem Tất Cả</a>
                        </div>
                        {filteredProducts.map((product) => (
                            <Link key={product.id} to={`ProductDetail/${product.id}`} className="main__banner--item">
                                <i className="fas fa-circle stocking" />
                                <h3 className="favorite"><i className="fas fa-thumbs-up" />Yêu thích</h3>
                                <img className="imageproductinhomepage" src={process.env.PUBLIC_URL + "/images/products/" + (product.image)} />
                                <div className="name-and-price">
                                    <h5 className='nameitemsinhomepage' title="name">
                                        {product.name.length > 20 ? `${product.name.substring(0, 20)}...` : product.name}
                                    </h5>
                                    <h4>
                                        <span style={{ color: 'black', marginLeft: '10px' }}>{product.price}₫</span>
                                    </h4>
                                </div>
                                <div className="discount text-blue">
                                    <div><i className="fas fa-tag icon-discount" />Giảm 10%</div>
                                    <div>
                                        <i className="fas fa-cart-plus mx-2" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
            <div className="introduction__section">
                <section className="now__corporation">
                    <div className="now__corporation--preservation">
                        <h2>Đơn hàng của bạn sẽ được bảo quản như thế nào?</h2>
                        <p className="my-20">
                            ShopeeFood sẽ bảo quản đơn của bạn bằng túi &amp; thùng để chống nắng
                            mưa, giữ nhiệt... trên đường đi một cách tốt nhất.
                        </p>
                        <div>
                            <img src="images/Banner.png" alt="img-preservation" style={{ width: '900px', height: '400px' }} />
                        </div>
                    </div>
                </section>
            </div>
            <Outlet />
        </div>
    );
};

export default Content;
