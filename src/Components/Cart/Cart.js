import React, { Component, useState, useEffect } from 'react';
import axios from '../../Api/axios';
import { useNavigate } from 'react-router-dom';
function Cart() {

    const [carts, setCarts] = useState([]);
    const [selectedValue, setSelectedValue] = useState('');
    const navigate = useNavigate();

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const handlePayment = () => {
        axios.post(`api/payment/`).then(res => {
            if (res.data.code === '00') {
                var url = res.data.data;
                navigate(url);
            }
        });
    }

    useEffect(() => {
        axios({
            method: "GET",
            url: `http://127.0.0.1:8000/api/get-cart`,
            data: null
        })
            .then((res) => {
                setCarts(res.data)
            })
            .catch((err) => {
                console.log(err)
            });
    }, []);

    let totalPrice = 0;
    carts.map(cart =>
        totalPrice += (cart.products.promotion_price * cart.quantity)
    )

    const handleDecrement = (cart_id) => {
        setCarts(cart =>
            cart.map(item =>
                cart_id === item.id ? { ...item, quantity: item.quantity - (item.quantity > 1 ? 1 : 0) } : item
            )
        );
        updateQuantity(cart_id, "dec");
    }
    const handleIncrement = (cart_id) => {
        setCarts(cart =>
            cart.map(item =>
                cart_id === item.id ? { ...item, quantity: item.quantity + (item.quantity < 10 ? 1 : 0) } : item
            )
        );
        updateQuantity(cart_id, "inc");
    }
    const updateQuantity = (cart_id, scope) => {
        axios.put(`/api/update-quantity/${cart_id}/${scope}`)
    }
    const handleDelete = (cart_id) => {
        axios.delete(`api/delete/${cart_id}`)
            .then(res => {
                window.location.reload();
            })
    }
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
                                    {
                                        carts.map(cart =>
                                            <div className="cart-item">
                                                <div className="cart-item-left">
                                                    <div className="image">
                                                        <a href="#">
                                                            <img src={"../images/products/" + cart.products.image} alt width="80px" height="80px" />
                                                        </a>
                                                    </div>
                                                    <div className="content">
                                                        <a href="#" className="title">
                                                            {cart.products.name}
                                                        </a>
                                                        <a href="#" className="sku">
                                                            Được làm bởi chuyên gia ẩm thực nổi tiếng nhất của cửa hàng. Thơm ngon nức mũi
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="cart-item-middle">
                                                    <p className="current-price">{cart.products.promotion_price}đ</p>
                                                    <p className="action">
                                                        <a className='icon-cart'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                                            </svg>
                                                        </a>
                                                        <a className='icon-cart' onClick={() => handleDelete(cart.id)}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                                                                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                                                            </svg>
                                                        </a>
                                                    </p>
                                                </div>
                                                <div className="cart-item-right">
                                                    <span className="item-quantity-prefix"> Số lượng:</span>
                                                    <div className="selectQuantity">
                                                        <button type="submit" onClick={() => handleDecrement(cart.id)} name="btn-minus">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-dash" viewBox="0 0 16 16">
                                                                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                                                            </svg>
                                                        </button>
                                                        <input type="text" name="amount" id="amount" value={cart.quantity} defaultValue="1" />
                                                        <button type="submit" onClick={() => handleIncrement(cart.id)} name="btn-plus">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                                                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="cart-item-right">
                                                    <span className="item-quantity-prefix"> Tổng giá:</span>
                                                    <p className='price-item'>{cart.products.promotion_price * cart.quantity}</p>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="right-content">
                            <div className="address">
                                <h6 className="title">Đơn hàng sẽ được giao tới</h6>
                                <div className='customer-name'>
                                    <span>A Quang</span>
                                </div>
                                <div className="info-address">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                    </svg>
                                    <input className='input-address' value={"101B Lê Hữu Trác, Phước Mỹ, Sơn Trà, Đà Năng"} />
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                    </svg>
                                </div>
                            </div>
                            <hr />
                            <p>Thông tin đơn hàng </p>
                            <div className="price-origin">
                                <p className="text">Tạm tính </p>
                                <p className="price">{totalPrice} đ</p>
                            </div>
                            <div className="price-origin">
                                <p className="text">Phí vận chuyển</p>
                                <p className="price">30000 đ</p>
                            </div>
                            <hr />
                            <div className="price-origin">
                                <p className="text">Tổng cộng:</p>
                                <p className="price">{totalPrice + 30000} đ </p>
                            </div>
                            <div className="order">

                                <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#paymentModal">
                                    XÁC NHẬN THANH TOÁN
                                </button>

                                {/* Modal */}
                                <div className="modal fade" id="paymentModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                                                                    
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id="exampleModalLabel">LỰA CHỌN PHƯƠNG THỨC THANH TOÁN</h5>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{width: "20px"}} />
                                                </div>
                                                <div className="modal-body">
                                                    <div className='option-payment'>
                                                        <div className="select-option-payment">
                                                            <div className="cart-top">
                                                                <span>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-cash-coin" viewBox="0 0 16 16">
                                                                        <path fillRule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z" />
                                                                        <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z" />
                                                                        <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z" />
                                                                        <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z" />
                                                                    </svg>
                                                                </span>
                                                                <span className="text">Thanh toán khi nhận hàng</span>
                                                                <span className="option">
                                                                    <input type="radio" onChange={handleChange} id="cash" name="method-payment" defaultValue="cash" />
                                                                </span>
                                                            </div>
                                                            <div className="cart-bottom">
                                                                <p>Thanh toán khi nhận hàng</p>
                                                            </div>
                                                        </div>
                                                        <div className="select-option-payment">
                                                            <div className="cart-top">
                                                                <span>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-credit-card" viewBox="0 0 16 16">
                                                                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z" />
                                                                        <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z" />
                                                                    </svg>
                                                                </span>
                                                                <span className="text">Thanh toán bằng MOMO</span>
                                                                <span className="option-card">
                                                                    <input type="radio" onChange={handleChange} id="momo" name="method-payment" defaultValue="momo" />
                                                                </span>
                                                            </div>
                                                            <div class="cart-bottom">
                                                                <p>Chọn để thêm thẻ</p>
                                                            </div>
                                                        </div>
                                                        <div className="select-option-payment">
                                                            <div className="cart-top">
                                                                <span>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-credit-card" viewBox="0 0 16 16">
                                                                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z" />
                                                                        <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z" />
                                                                    </svg>
                                                                </span>
                                                                <span className="text">Thanh toán bằng VNpay</span>
                                                                <span className="option-card">
                                                                    <input type="radio" onChange={handleChange} id="vnpay" name="method-payment" defaultValue="vnpay" />
                                                                </span>
                                                            </div>
                                                            <div class="cart-bottom">
                                                                <p>Chọn để thêm thẻ</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="modal-footer-cart">
                                                    <button type="button" className="btn btn-secondary" style= {{height: '100%'}} data-bs-dismiss="modal">Đóng</button>
                                                    <button onClick={() => handlePayment()} className="btn btn-primary">Tiếp tục</button>
                                                </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Cart;