import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ItemCard from '../ItemCard';

function Shops()  {
    const [shops, setShop] = useState([]);
    useEffect(()=> {
        axios({
            method: 'GET',
            url: `http://127.0.0.1:8000/api/get-shops`,
            data: null
        })
        .then((res)=> {
            setShop(res.data)
        })
        .catch((err)=>{
            console.log(err);
            alert('Xảy ra lỗi');
        })
    },[]);
    return (
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
                                <a href="#!"><img className="app" src="images/AppStore-vn.png" alt="appstore" /></a>
                            </div>
                            <div>
                                <a href="#!"><img className="app" src="images/PlayStore-vn.png" alt="playstore" /></a>
                            </div>
                        </div>
                    </div>

                    <div className="main__banner--shop">
                        <div className="main__banner--endow">
                            <h5>Cửa hàng nổi bật</h5>
                            <a href="#!"><i className="fas fa-th-large" />Xem Tất Cả</a>
                        </div>
                        {
                            shops.map(shop => 
                                <ItemCard
                                id={shop.id}
                                image={shop.users.avatar}
                                name={shop.name}
                                location = {shop.location}
                                /> 
                            )
                        }
                    </div>
                </div>
            </section>
    );
}

export default Shops;