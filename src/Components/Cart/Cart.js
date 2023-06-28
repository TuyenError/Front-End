import React, { Component } from 'react';

class Cart extends Component {
    render() {
        return (
            <main className='session-cart'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="left-content">
                                <div className="package">
                                    <div className="package-title">
                                        <p className="package-title-left">Giỏ hàng của bạn</p>
                                        <p className="package-title-right">Được giao bởi <strong>Shops</strong></p>
                                    </div>
                                    <div className="product">
                                        <div className="cart-option">
                                            <div className="cart-title">
                                                <p>Chi tiết sản phẩm</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="cart-item">
                                            <div className="cart-item-left">
                                                <div className="image">
                                                    <a href="#">
                                                        <img src="" alt width="80px" height="80px" />
                                                    </a>
                                                </div>
                                                <div className="content">
                                                    <a href="#" className="title">
                                                        Cơm tấm sài gòn giá rẻ          
                                                    </a>
                                                    <a href="#" className="sku">
                                                        Được làm bởi chuyên gia ẩm thực nổi tiếng nhất của cửa hàng. Thơm ngon nức mũi
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="cart-item-middle">
                                                <p className="current-price">20,000đ</p>
                                                <p className="action">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                                    </svg>
                                                    <a href="delete.php">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                                                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                                                        </svg>
                                                    </a>
                                                </p>
                                            </div>
                                            <div className="cart-item-right">
                                                <span className="item-quantity-prefix"> Số lượng:</span>
                                                <form method="post">
                                                    <div className="selectQuantity">
                                                        <button type="submit" name="btn-minus<?php echo $quantity['ItemID']?>">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-dash" viewBox="0 0 16 16">
                                                                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                                                            </svg>
                                                        </button>
                                                        <input type="text" name="amount" id="amount" defaulvalue={1} defaultValue="1" />
                                                        <button type="submit" name="btn-plus<?php echo $quantity['ItemID']?>">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                                                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="right-content">
                                <div className="address">
                                    <h6 className="title">Địa điểm</h6>
                                    <div className="info-address">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                                            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                        </svg>
                                        <span>101B Lê Hữu Trác, Phước Mỹ, Sơn Trà, Đà Năng</span>
                                    </div>
                                </div>
                                <hr />
                                <p>Thông tin đơn hàng </p>
                                <div className="price-origin">
                                    <p className="text">Tạm tính (1 sản phẩm)</p>
                                    <p className="price">100,000 đ</p>
                                </div>
                                <div className="price-origin">
                                    <p className="text">Phí vận chuyển</p>
                                    <p className="price">30000 đ</p>
                                </div>
                                <hr />
                                <div className="price-origin">
                                    <p className="text">Tổng cộng:</p>
                                    <p className="price">130,000 đ </p>
                                </div>
                                <div className="order">
                                    <button type="button" className="btn btn-warning">
                                        <a href="./function.php">XÁC NHẬN GIỎ HÀNG</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default Cart;