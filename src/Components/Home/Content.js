import React, { Component } from 'react';

class Content extends Component {
    render() {
        return (
            <div>
                <section className="main__banner">
                    <div className="main__banner--content">
                        <div className="main__banner--search">
                            <h1>Đặt Đồ ăn, giao hàng từ 20'...</h1>
                            <h3 className="my-20">Có 12126 Địa Điểm Ở Đà Nẵng Từ 00:00 - 23:59</h3>
                            <div className="main__banner--input">
                                <input type="text" placeholder="Tìm địa điểm, món ăn, địa chỉ..." />
                                <button className="btn-primary" type="button">
                                    <i className="fas fa-search" />
                                </button>
                            </div>
                            <div className="main__list--search">
                                <div className="main__list--item">
                                    <h3>All</h3>
                                </div>
                                <div className="main__list--item">
                                    <h3>Đồ ăn</h3>
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
                                <div>
                                    <a href="#!"><img className="app" src="/images/AppStore-vn.png" alt="appstore" /></a>
                                </div>
                                <div>
                                    <a href="#!"><img className="app" src="/images/PlayStore-vn.png" alt="playstore" /></a>
                                </div>
                            </div>
                        </div>

                        <div className="main__banner--restaurant">
                            <div className="main__banner--endow">
                                <h5>Ưu đãi</h5>
                                <a href="#!"><i className="fas fa-th-large" />Xem Tất Cả</a>
                            </div>
                            <div className="main__banner--item">
                                <i className="fas fa-circle stocking" />
                                <h3 className="favorite"><i className="fas fa-thumbs-up" />Yêu thích</h3>
                                <img src="/images/items/bun-dau.jpg" alt="item" />
                                <div className="name-and-address">
                                    <h5 title="Bún Đậu Nhà Cuội">Bún Đậu Nhà Cuội</h5>
                                    <h4>
                                        <span>30000₫</span>
                                    </h4>
                                </div>
                                <div className="discount text-blue">
                                    <div><i className="fas fa-tag icon-discount" />Giảm 10%</div>
                                    <div>
                                        <i className="fas fa-cart-plus mx-2" />
                                    </div>
                                </div>
                            </div>
                            <div className="main__banner--item">
                                <i className="fas fa-circle stocking" />
                                <img src="/images/items/mi-quang.jpg" alt="item" />
                                <div className="name-and-address">
                                    <h5 title="Mỳ Quảng My Ny">Mỳ Quảng My Ny</h5>
                                    <h4>
                                        <span>35000₫</span>
                                    </h4>
                                </div>
                                <div className="discount text-blue">
                                    <div><i className="fas fa-tag icon-discount" />Giảm 10%</div>
                                    <div>
                                        <i className="fas fa-cart-plus mx-2" />
                                    </div>
                                </div>
                            </div>
                            <div className="main__banner--item">
                                <i className="fas fa-circle stocking" />
                                <h3 className="favorite"><i className="fas fa-thumbs-up mx-1" />Yêu thích</h3>
                                <img src="/images/items/phuc-long.jpg" alt="item" />
                                <div className="name-and-address">
                                    <h5 title="Phúc Long">Phúc Long</h5>
                                    <h4>
                                        <span>34000₫</span>
                                    </h4>
                                </div>
                                <div className="discount text-blue">
                                    <div><i className="fas fa-tag icon-discount" />Giảm 10%</div>
                                    <div>
                                        <i className="fas fa-cart-plus mx-2" />
                                    </div>
                                </div>
                            </div>
                            <div className="main__banner--item">
                                <i className="fas fa-circle stocking" />
                                <img src="/images/items/tra-sua.jpeg" alt="item" />
                                <div className="name-and-address">
                                    <h5 title="Trà Sữa Bobapop">Trà Sữa Bobapop</h5>
                                    <h4>
                                        <span>45000₫</span>
                                    </h4>
                                </div>
                                <div className="discount text-blue">
                                    <div><i className="fas fa-tag icon-discount" />Giảm 10%</div>
                                    <div>
                                        <i className="fas fa-cart-plus mx-2" />
                                    </div>
                                </div>
                            </div>
                            <div className="main__banner--item">
                                <i className="fas fa-circle stocking" />
                                <h3 className="favorite"><i className="fas fa-thumbs-up mx-1" />Yêu thích</h3>
                                <img src="/images/items/com-xoi.jpg" alt="item" />
                                <div className="name-and-address">
                                    <h5 title="Cơm Gà Xối Mỡ">Cơm Gà Xối Mỡ</h5>
                                    <h4>
                                        <span>30000₫</span>
                                    </h4>
                                </div>
                                <div className="discount text-blue">
                                    <div><i className="fas fa-tag icon-discount" />Giảm 10%</div>
                                    <div>
                                        <i className="fas fa-cart-plus mx-2" />
                                    </div>
                                </div>
                            </div>
                            <div className="main__banner--item">
                                <i className="fas fa-circle stocking" />
                                <h3 className="favorite"><i className="fas fa-thumbs-up mx-1" />Yêu thích</h3>
                                <img src="/images/items/com-tho.jpg" alt="item" />
                                <div className="name-and-address">
                                    <h5 title="Cơm Thố Tuấn Lộc">Cơm Thố Tuấn Lộc</h5>
                                    <h4>
                                        <span>55000₫</span>
                                    </h4>
                                </div>
                                <div className="discount text-blue">
                                    <div><i className="fas fa-tag icon-discount" />Giảm 10%</div>
                                    <div>
                                        <i className="fas fa-cart-plus mx-2" />
                                    </div>
                                </div>
                            </div>
                            <div className="main__banner--item">
                                <i className="fas fa-circle stocking" />
                                <h3 className="favorite"><i className="fas fa-thumbs-up mx-1" />Yêu thích</h3>
                                <img src="/images/items/item1.jpg" alt="item" />
                                <div className="name-and-address">
                                    <h5 title="Bún bò">Bún bò</h5>
                                    <h4>
                                        <span>60000₫</span>
                                    </h4>
                                </div>
                                <div className="discount text-blue">
                                    <div><i className="fas fa-tag icon-discount" />Giảm 10%</div>
                                    <div>
                                        <i className="fas fa-cart-plus mx-2" />
                                    </div>
                                </div>
                            </div>
                            <div className="main__banner--item">
                                <i className="fas fa-circle stocking" />
                                <h3 className="favorite"><i className="fas fa-thumbs-up mx-1" />Yêu thích</h3>
                                <img src="/images/items/item2.jpg" alt="item" />
                                <div className="name-and-address">
                                    <h5 title="Trà Sữa">Trà Sữa</h5>
                                    <h4>
                                        <span>65000₫</span>
                                    </h4>
                                </div>
                                <div className="discount text-blue">
                                    <div><i className="fas fa-tag icon-discount" />Giảm 10%</div>
                                    <div>
                                        <i className="fas fa-cart-plus mx-2" />
                                    </div>
                                </div>
                            </div>
                            <div className="main__banner--item">
                                <i className="fas fa-circle stocking" />
                                <h3 className="favorite"><i className="fas fa-thumbs-up mx-1" />Yêu thích</h3>
                                <img src="/images/items/pizza.jpg" alt="item" />
                                <div className="name-and-address">
                                    <h5 title="Pizza">Pizza</h5>
                                    <h4>
                                        <span>33000₫</span>
                                    </h4>
                                </div>
                                <div className="discount text-blue">
                                    <div><i className="fas fa-tag icon-discount" />Giảm 10%</div>
                                    <div>
                                        <i className="fas fa-cart-plus mx-2" />
                                    </div>
                                </div>
                            </div>
                            <div className="main__banner--item">
                                <i className="fas fa-circle stocking" />
                                <h3 className="favorite"><i className="fas fa-thumbs-up mx-1" />Yêu thích</h3>
                                <img src="/images/items/mi-quang2.jpg" alt="item" />
                                <div className="name-and-address">
                                    <h5 title="Mì Quảng">Mì Quảng</h5>
                                    <h4>
                                        <span>45000</span>
                                    </h4>
                                </div>
                                <div className="discount text-blue">
                                    <div><i className="fas fa-tag icon-discount" />Giảm 10%</div>
                                    <div>
                                        <i className="fas fa-cart-plus mx-2" />
                                    </div>
                                </div>
                            </div>
                            <div className="main__banner--item">
                                <i className="fas fa-circle stocking" />
                                <h3 className="favorite"><i className="fas fa-thumbs-up mx-1" />Yêu thích</h3>
                                <img src="/images/items/tocotoco.jpg" alt="item" />
                                <div className="name-and-address">
                                    <h5 title="Trà Sữa Tocotoco">Trà Sữa Tocotoco</h5>
                                    <h4>
                                        <span>46000₫</span>
                                    </h4>
                                </div>
                                <div className="discount text-blue">
                                    <div><i className="fas fa-tag icon-discount" />Giảm 10%</div>
                                    <div>
                                        <i className="fas fa-cart-plus mx-2" />
                                    </div>
                                </div>
                            </div>
                            <div className="main__banner--item">
                                <i className="fas fa-circle stocking" />
                                <h3 className="favorite"><i className="fas fa-thumbs-up mx-1" />Yêu thích</h3>
                                <img src="/images/items/nuoc-xoai-ep.jpg" alt="item" />
                                <div className="name-and-address">
                                    <h5 title="Nước Xoài Ép">Nước Xoài Ép</h5>
                                    <h4>
                                        <span>44000₫</span>
                                    </h4>
                                </div>
                                <div className="discount text-blue">
                                    <div><i className="fas fa-tag icon-discount" />Giảm 10%</div>
                                    <div>
                                        <i className="fas fa-cart-plus mx-2" />
                                    </div>
                                </div>
                            </div>
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
                    {/* <section className="now__corporation">
                        <div className="now__corporation--preservation merchant-app">
                            <h2>ShopeeFood Merchant App</h2>
                            <ul>
                                <li>
                                    <h4 className="my-20">
                                        - <strong>ShopeeFood Merchant</strong> là ứng dụng quản lý đơn
                                        hàng cho các nhà hàng đối tác của dịch vụ đặt món tận nơi
                                    </h4>
                                </li>
                                <li>
                                    <h4>
                                        - <strong>ShopeeFood.vn</strong> luôn sẵn sàng hợp tác với các
                                        nhà hàng, quán ăn, cafe... để mở rộng kinh doanh cũng như gia
                                        tăng khách hàng. Hãy kết nối vào hệ thống đặt và giao hàng để
                                        giảm bớt chi phí quản lý, vận hành, marketing, công nghệ...
                                    </h4>
                                </li>
                                <li>
                                    <h4 className="my-20">
                                        Đăng ký tham gia: <a href="#!">
                                            <span className="text-lightblue">tại đây</span>
                                        </a>
                                    </h4>
                                </li>
                            </ul>
                        </div>
                        <div className="img-reg-merchant">
                            <img src="./assets/images/banner-phone-reg-merchant.png" alt="reg-merchant" />
                        </div>
                    </section> */}
                    {/* <section className="now__corporation">
                        <div className="now__corporation--preservation merchant-app">
                            <h2 className="text-blue">
                                <a href="#!" className="text-orage">ShopeeFood.vn</a> Hợp tác nhân viên
                                giao nhận - ShopeeFood Driver
                            </h2>
                            <ul>
                                <li>
                                    <h4 className="my-20">Giúp bạn tăng thu nhập trong thời gian rảnh rỗi</h4>
                                </li>
                                <li>
                                    <h4>
                                        <strong className="text-orage">ShopeeFood</strong> tìm kiếm hợp tác
                                        với các cá nhân để thực hiện việc giao hàng, chúng tôi sẽ cung
                                        cấp ứng dụng (app), 1 số dụng cụ cần thiết để bạn có thể tiếp
                                        nhận &amp; giao hàng, kiếm thêm thu nhập. Đăng ký tham gia
                                        <a href="#!" className="fw-bold text-lightblue">tại đây</a> hoặc gửi
                                        Email qua
                                        <a href="mailto:tuyendung@gofast.vn" className="text-lightblue fw-bold">tuyendung@gofast.vn</a>
                                        - hoặc gọi qua số điện thoại (028) 7109 9179.
                                    </h4>
                                </li>
                            </ul>
                        </div>
                        <div className="img-deliverynow">
                            <img src="images/bg-deliverynow.png" alt="reg-merchant" />
                        </div>
                    </section> */}
                </div></div>
        );
    }
}
export default Content;