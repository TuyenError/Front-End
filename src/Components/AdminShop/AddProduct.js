import React, { useEffect, useRef, useState } from 'react';
import axios from '../../Api/axios';
import swal from 'sweetalert';

function AddProduct() {
    const [categories, setCategories] =useState([]);
    const [product, setProduct] =useState({
        name: '',
        price: '',
        promotion_price: '',
        describe: '',
        image: '',
        category: '',
    });

    // const onReset = () => {
    //     setProduct => ({
    //         name: '',
    //         price: '',
    //         promotion_price: '',
    //         describe: '',
    //         image: '',
    //         category: '',
    //     })
    // }

    const imageRef = useRef (null);

    const onChange = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        var type = event.target.type;

        if (type === 'file') {
            value = imageRef.current.value.replace(/C:\\fakepath\\/i, "");
            const file = event.target.files[0];

            if (file) {
                const reader = new FileReader();
                reader.onload = () => {
                const previewImage = document.getElementById('preview-image-before-upload');
                previewImage.src = reader.result;
                };
                reader.readAsDataURL(file);
            }
        }

        setProduct(
            product => ({
                ...product,
                [name]:value
            })
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        var { name, price, promotion_price, describe, category, image } = product;

        if (name === '' && price === '' && promotion_price === '' && describe === '' && category === '' && image === '') {
            swal("Error","Vui lòng nhập đủ nội dung", "error");
        }
        else {
            axios.post('api/add-product',product)
            .then(res => {
                if (res.data.status === 200) {
                    swal("Success",res.data.message, "success");
                }
                
            })
            .catch(err => {
                console.log(err);
                alert('Báo lỗi');
            })
        }
    }

    useEffect(()=> {
        axios({
            method: 'GET',
            url: `api/get-categories`,
            data: null
        })
        .then((res)=> {
            console.log(res.data);
            setCategories(res.data);
        })
        .catch((err)=>{
            console.log(err);
            alert('Xảy ra lỗi');
        })
    },[]);

    return (
        <div className="col-md-8">
            <div className="cart-admin-shop">
                <div className="card-header-admin">
                    <h4>Thêm Sản Phẩm</h4>
                    <hr/>
                </div>
                
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group fg-admin">
                                    <label htmlFor="name">Tên sản phẩm</label>
                                    <input onChange={onChange} type="text" name="name" placeholder="Nhập tên" className="form-control" id="name" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group fg-admin">
                                    <label htmlFor="price">Giá</label>
                                    <input onChange={onChange} type="text" name="price" placeholder="Nhập giá" className="form-control" id="price" />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group fg-admin">
                                    <label htmlFor="Price">Giá khuyến mãi</label>
                                    <input onChange={onChange} type="text" name="promotion_price" placeholder="Nhập giá khuyến mãi" className="form-control" id="Price" />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group fg-admin">
                                    <label htmlFor="describes">Mô tả sản phẩm</label>
                                    <textarea rows={3} type="text" name="describe" placeholder="Nhập mô tả" className="form-control" id="describe" defaultValue={""} />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group fg-admin">
                                    <label htmlFor="Image">Image</label>
                                    <input onChange={onChange} type="file" ref={imageRef} name="image" className="form-control-file" id="Image" />
                                </div>
                                <div className="form-group fg-admin">
                                    <img 
                                        id="preview-image-before-upload"
                                        src="https://png.pngtree.com/png-vector/20190820/ourmid/pngtree-no-image-vector-illustration-isolated-png-image_1694547.jpg"
                                        alt="xem trước"
                                        style={{ maxHeight: 250 }}
                                    />
                                    
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group fg-admin">
                                    <label htmlFor="category">TypeID</label>
                                    <select name="category" onChange={onChange} className="form-control" id="category">
                                        {
                                            categories.map(category => 
                                                <option value={category.id}>{category.name}</option>
                                            )
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-12 onSave">
                                <button type="button" className="btn btn-warning" name="reset-form">Reset</button>
                                <button type="submit" className="btn btn-primary" name="add_item_btn">Save</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddProduct;