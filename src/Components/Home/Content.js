import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Content = () => {
    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        // Lấy danh sách sản phẩm từ API khi component được render
        fetch('http://127.0.0.1:8000/api/get-products')
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const handleSearchChange = (event) => {
        // Xử lý sự kiện thay đổi ô tìm kiếm
        setSearchQuery(event.target.value);
    };

    // Lọc danh sách sản phẩm dựa trên từ khóa tìm kiếm
    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <section className="main__banner">
                <div className="main__banner--content">
                    <div className="main__banner--search">
                        <h1>Đặt Đồ ăn, giao hàng từ 20'...</h1>
                        <h3 className="my-20">Có 12126 Địa Điểm Ở Đà Nẵng Từ 00:00 - 23:59</h3>
                        <div className="main__banner--input">
                            <input
                                type="text"
                                placeholder="Tìm địa điểm, món ăn, địa chỉ..."
                                value={searchQuery}
                                onChange={handleSearchChange}
                            />
                            <button className="btn-primary" type="button">
                                <i className="fas fa-search" />
                            </button>
                        </div>
                        <div className="main__list--search">
                            {/* Danh sách các mục tìm kiếm */}
                            <div className="main__list--item">
                                <h3>All</h3>
                            </div>
                            <div className="main__list--item">
                                <h3>Đồ uống</h3>
                            </div>
                            <div className="main__list--item">
                                <h3>Đồ chay</h3>
                            </div>
                            <div className="main__list--item">
                                <h3>Bánh kem</h3>
                            </div>
                            <div className="main__list--item">
                                <h3>Tráng miệng</h3>
                            </div>
                            <div className="main__list--item">
                                <h3>Homemade</h3>
                            </div>
                            <div className="main__list--item">
                                <h3>Vỉa hè</h3>
                            </div>
                            <div className="main__list--item">
                                <h3>Pizza/Burger</h3>
                            </div>
                            <div className="main__list--item">
                                <h3>Món gà</h3>
                            </div>
                            <div className="main__list--item">
                                <h3>Món lẩu</h3>
                            </div>
                            <div className="main__list--item">
                                <h3>Sushi</h3>
                            </div>
                            <div className="main__list--item">
                                <h3>Mì phở</h3>
                            </div>
                            <div className="main__list--item">
                                <h3>Cơm hộp</h3>
                            </div>
                        </div>
                        <h3 className="my-20">
                            Sử dụng App ShopeeFood để có nhiều giảm giá và trải nghiệm tốt hơn
                        </h3>
                        <div className="main__banner--app">
                            {/* Logo App Store */}
                            <div>
                                <a href="#!"><img className="app" src="images/AppStore-vn.png" alt="appstore" /></a>
                            </div>
                            {/* Logo Play Store */}
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
                        {/* Hiển thị danh sách sản phẩm */}
                        {filteredProducts.map((product) => (
                            <Link to={`ProductDetail/${product.product_id}`} className="main__banner--item">
                                <i className="fas fa-circle stocking" />
                                <h3 className="favorite"><i className="fas fa-thumbs-up" />Yêu thích</h3>
                                <img src="https://bepbanhtiny.com/wp-content/uploads/2023/04/cach-lam-tra-trai-cay-nhiet-doi.jpg" />
                                <div className="name-and-price">
                                    <h5 className='nameitemsinhomepage' title="name">
                                        {product.name.length > 25 ? `${product.name.substring(0, 25)}...` : product.name}
                                    </h5>
                                    <h4>
                                        <span style={{ color: 'black' }}>{product.price}</span>
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
