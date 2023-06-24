import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";

function ProductDetail() {
    const { id } = useParams();
    const [products, setProduct] = useState([]);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/get-products/${id}`)
            .then((response) => {
                setProduct(response.data);
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className="product-container">
            <div className="image-container">
                <img className="image-product" src={products.image} />
            </div>
            <div className="product-details">
                <h2>{products.name}</h2>
                <h4>{products.price}₫</h4>
                <h4>Mô tả: Thơm ngon mời bạn ăn nha</h4>
                <div className="rating">
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                </div>
                <button className="btn btn-danger"> + Thêm vào giỏ hàng</button>
                <br />
                <br />
            </div>
        </div>
        
    );
}

export default ProductDetail;
