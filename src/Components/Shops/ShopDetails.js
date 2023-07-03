import axios from '../../Api/axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import swal from 'sweetalert';

function ShopDetails() {
    let { id } = useParams();
    const [shopDetails, setShopDetails] = useState([]);
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);

    // get shop
    useEffect(() => {
        axios({
            method: "GET",
            url: `http://127.0.0.1:8000/api/get-shops/${id}`,
            data: null
        })
            .then((res) => {
                setShopDetails(res.data)
            })
            .catch((err) => {
                console.log(err)
            });
    }, []);

    // get categories base on shop_id
    useEffect(() => {
        axios({
            method: "GET",
            url: `http://127.0.0.1:8000/api/get-categories/${id}`,
            data: null
        })
            .then((res) => {
                setCategories(res.data)
            })
            .catch((err) => {
                console.log(err)
            });
    }, []);

    // get prducts base on shop_id
    useEffect(() => {
        axios({
            method: "GET",
            url: `http://127.0.0.1:8000/api/get-products-shop/${id}`,
            data: null
        })
            .then((res) => {
                setProducts(res.data)
            })
            .catch((err) => {
                console.log(err)
            });
    }, []);

    const handleAddToCart = (e, $id) => {
        e.preventDefault();

        const data = {
            product_id: $id,
            product_qty: 1,
        }
        
            axios.post(`http://localhost:8000/api/add-to-cart`,data).then(res => {
                if (res.data.status === 201) {
                    swal('Success',res.data.message,'success');
                }
                else if (res.data.status === 409) {
                    swal('Warning',res.data.message,'warning')
                }   
                else if (res.data.status === 401) {
                    swal('Error',res.data.message,'error')
                }
                else if (res.data.status === 404) {
                    swal('Warning',res.data.message,'warning')
                }
            });
        
    }


    return (
        <main>
            <div className="container">
                <div className="details-shop">
                    <div className="img-shops">
                        <img src="https://images.foody.vn/res/g73/727405/prof/s640x400/file_restaurant_photo_txl9_16309-d68c31c8-210907081807.jpg" alt="Cơm tấm" />
                    </div>
                    <div className="details-shops-info">
                        <div className="kind-shops">
                            <span>Shop/Cửa hàng</span>
                        </div>
                        <h1 className="name-shop">{shopDetails.name}</h1>
                        <div className="location">{shopDetails.location}</div>
                        <div className="rating">
                            <div className="stars">
                                <span className="full">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                </span>
                                <span className="full">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                </span>
                                <span className="full">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                </span>
                                <span className="full">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                </span>
                                <span className="full">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                </span>
                            </div>
                            <span className="number-rating">8</span>
                            đánh giá trên Sightlass-Coffee
                        </div>
                        <div className="view-more-rating">
                            <a href="#" className="number-review"> {shopDetails.description} </a>
                        </div>
                        <div className="status-shop">
                            <div className="open-time">
                                <span className="stt online" title="Mở cửa" />
                            </div>
                            <div className="time">
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
                                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                                </svg>
                                <span className="time-open-close">{shopDetails.timeOpen}</span>
                            </div>
                        </div>
                        <div className="cost-shop">
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-coin" viewBox="0 0 16 16">
                                <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z" />
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                            </svg>
                            <span>
                                {shopDetails.cost}
                            </span>
                        </div>
                        <div className="utility-shop">
                            <div className="utility-item">
                                <div className="utility-title">Phí dịch vụ</div>
                                <div className="utility-content">
                                    <span className="txt-bold txt-red">0.0% Phí dịch vụ</span>
                                </div>
                                <span className="icon icon-partner-vi" data-toggle="modal" data-target="#modal-verify-merchant" />
                            </div>
                            <div className="utility-item">
                                <div className="utility-title">Dịch vụ bởi</div>
                                <div className="utility-content">
                                    <span className="txt-bold txt-red">Sightlass-Coffee</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="section-categories">
                <div className="container">
                    <h5 className="title-categories">THỰC ĐƠN</h5>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="menu-shop-categories">
                                <ul className="list-categories">
                                    {
                                        categories.map(category =>
                                            <li className="item-categories">
                                                <a href="#">{category.name}</a>
                                            </li>
                                        )
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="menu-shop-details">
                                <div className="menu-list-product">
                                    <div className="search-item">
                                        <div className="input-group flex-nowrap">
                                            <span className="input-group-text">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                                </svg>
                                            </span>
                                            <input type="text" className="form-control" placeholder="Tìm kiếm" aria-describedby="addon-wrapping" />
                                        </div>
                                    </div>
                                    <div className="list-products">
                                        {
                                            categories.map((category) =>
                                                <div key={category.id}>
                                                    <h6 className="title-list-product">{category.name}</h6>
                                                    <table className="table">
                                                        <tbody>
                                                            {
                                                                products.filter((product) => product.category_id === category.id)
                                                                    .map(product =>
                                                                        <tr>
                                                                            <td>
                                                                                <div>
                                                                                    <button type="button" className="btn-modal" data-bs-toggle="modal" data-bs-target={`#Modal${product.id}`}>
                                                                                        <img className="image-product-lits" src={"../images/products/" + product.image} />
                                                                                    </button>
                                                                                    {/* Modal */}
                                                                                    <div className="modal fade" id={`Modal${product.id}`} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                                                        <div className="modal-dialog">
                                                                                            <div className="modal-content">
                                                                                                <div className="modal-body">
                                                                                                    <div className="image-content">
                                                                                                        <img className="image-modal" src={"../images/products/" + product.image}/>
                                                                                                    </div>
                                                                                                    <div className="info-product-modal">
                                                                                                        <h5>{product.name}</h5>
                                                                                                        <p>Giá cũ: {product.price}</p>
                                                                                                        <p>Giá mới: {product.promotion_price}</p>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="modal-footer">
                                                                                                    <button type="submit" onClick={(e) => handleAddToCart(e, product.id)} className="btn btn-danger">+  Thêm vào giỏ hàng</button>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>

                                                                            </td>
                                                                            <td className="td-name-product">
                                                                                {product.name}
                                                                            </td>
                                                                            <td>
                                                                                {product.promotion_price < product.price ? (
                                                                                    <div>
                                                                                        <p className="old-price">{product.price}</p>
                                                                                        <p className="current-price">{product.promotion_price}</p>
                                                                                    </div>
                                                                                ) : (
                                                                                    <p className="current-price">{product.price}</p>
                                                                                )}
                                                                            </td>
                                                                            <td>
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16">
                                                                                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                                                                                </svg>
                                                                            </td>
                                                                        </tr>
                                                                    )
                                                            }
                                                        </tbody>
                                                    </table>
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}

export default ShopDetails;