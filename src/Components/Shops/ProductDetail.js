import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function ProductDetail() {
    // Lấy id từ URL bằng useParams
    const { id } = useParams();
    // Khởi tạo state
    const [product, setProduct] = useState(null);
    const [promotionPrice, setPromotionPrice] = useState(null);
    const [name, setShopName] = useState("");
    const [category_id, setCategory_id] = useState("");
    const [location, setShopLocation] = useState("");
    const [detail_shop_id, setDetailShopId] = useState("");
    const [textDecoration, setTextDecoration] = useState(false);
    const [productFlowcategory, setproductFlowcategory] = useState([]);

    useEffect(() => {
        // Fetch sản phẩm dựa trên id từ API
        axios.get(`http://127.0.0.1:8000/api/get-products/${id}`)
            .then((response) => {
                // Lưu thông tin sản phẩm vào state
                setProduct(response.data);
                console.log("product: ", response);
                const { price, promotion_price, shop_id, category_id } = response.data;
                setCategory_id(category_id);
                // Fetch thông tin cửa hàng dựa trên shop_id
                axios.get(`http://127.0.0.1:8000/api/get-shops/${shop_id}`)
                    .then((shopResponse) => {
                        console.log('shop: ', shopResponse)
                        const { name, location, shop_id } = shopResponse.data;
                        // Lưu thông tin cửa hàng vào state
                        setShopName(name);
                        setShopLocation(location);
                        setDetailShopId(shop_id);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
                if (promotion_price && promotion_price < price) {
                    // Nếu có giá khuyến mãi, lưu giá khuyến mãi vào state
                    setPromotionPrice(promotion_price);
                    setTextDecoration(true);
                } else {
                    // Ngược lại, reset giá trị về false
                    setTextDecoration(false);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);


    useEffect(() => {
        // Fetch sản phẩm dựa trên id từ API
        // Gọi API để lấy danh sách danh mục
        fetch(`http://127.0.0.1:8000/api/get-products-category/${category_id}`)
            .then((response) => response.json())
            .then((data) => {
                setproductFlowcategory(data); // Cập nhật state categories với dữ liệu lấy từ API
            })
            .catch((error) => {
                console.log(error);
            });
    }, [category_id]);

    // Slider suggested products
    // const settings = {
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     prevArrow: <button type="button" className="slick-prev">Previous</button>,
    //     nextArrow: <button type="button" className="slick-next">Next</button>,
    //   };

    return (
        <div className="container">
            <div className="details-product">
                <div className="img-product">
                    <img className='imgDetail' src={process.env.PUBLIC_URL + "/images/products/" + (product && product.image)} alt="image" />
                </div>
                <div className="details-shops-info" style={{ marginRight: '50px' }}>
                    <div className="kind-product">
                        <span>PRODUCT/SẢN PHẨM</span>
                    </div>
                    <h1 className="name-shop">{product && product.name}</h1>
                    <div className="cost-product">
                        <span className="old-price-product" style={{ textDecoration: textDecoration ? 'line-through' : 'none' }}>
                            {product && product.price}₫
                        </span>

                        {promotionPrice && (
                            <span className="promotion-price">
                                {promotionPrice}₫
                            </span>
                        )}
                    </div>
                    {/* Link đến trang chi tiết cửa hàng */}
                    <Link to={`/shopDetails/${detail_shop_id}`}>
                        <div className="shop-info">
                            <div className="shop-name">{name}</div>
                            <div className="shop-address">{location}</div>
                        </div>
                    </Link>
                    <div className="Description">
                        <p>Chất lượng sản phẩm thuộc Sightglass-Coffee đều đã được kiểm tra nghiêm ngặt trước khi đến với khách hàng. Chúc quý khách có trải nghiệm mua sắm vui vẻ tại Sightglass-Coffee !</p>
                    </div>
                    <div className="rating-product">
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
                        được đánh giá trên Sightlass-Coffee
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
            <div className="suggested product">
                <h2>Sản phẩm được gợi ý</h2>
                <div className="product-list">
                    {productFlowcategory.map((relatedProduct) => (
                        <div className="product-item" key={relatedProduct.product_id}>
                            <Link to={`/ProductDetail/${relatedProduct.product_id}`}>
                                <img src={process.env.PUBLIC_URL + "/images/products/" + (relatedProduct.image)} alt="Product" />
                                <h3 className="name">{relatedProduct.name}</h3>
                                <span>{relatedProduct.price}₫</span>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
    );
}

export default ProductDetail;
