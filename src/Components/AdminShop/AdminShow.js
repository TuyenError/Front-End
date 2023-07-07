import swal from 'sweetalert';
import axios from '../../Api/axios';
import React, { useState, useEffect, useRef } from 'react';

function AdminShow() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] =useState([]);
    const [productUpdate, setProductUpdate] =useState({
        id: '',
        name: '',
        price: '',
        promotion_price: '',
        describe: '',
        image: '',
        category: '',
    });

    const onUpdate = (id) => {
        axios.get(`api/get-products/${id}`).then(res => {
            setProductUpdate(res.data);
        })
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

    useEffect(() => {
        axios({
            method: 'GET',
            url: `api/get-product-AdminShop`,
            data: null
        })
            .then((res) => {
                setProducts(res.data);
            })
            .catch((err) => {
                console.log(err);
                alert('Xảy ra lỗi');
            })
    }, []);

    const imageRef = useRef (null);

    const handleSubmit = (e) => {
        e.preventDefault();

        var { id, name, price, promotion_price, describe, category, image } = productUpdate;

        if (name === '' || price === '' || promotion_price === '' || describe === '' || category === '' || image === '') {
            swal("Error","Vui lòng nhập đủ nội dung", "error");
        }
        else {
            axios.post(`api/update-product/${id}`,productUpdate)
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

        setProductUpdate(
            productUpdate => ({
                ...productUpdate,
                [name]:value
            })
        );
    };

    const onDelete = (id) => {
        const confirmed = window.confirm('Bạn có chắc chắn muốn xóa không?');
        if (confirmed) {
            axios.delete(`api/delete-product/${id}`).then(res => {
                if (res.data.status === 200) {
                    window.location.reload();
                    setTimeout(() => {
                        swal("Success", res.data.message, "success");
                    }, 2.5);

                }
            })
        }
    }
    var no = 0;

    return (
        <div className="col-md-9">
            <div className="content-manage">
                <h3 className='title-manage-product'>QUẢN LÝ SẢN PHẨM</h3>
                <div className="product-overview">
                    <span>Tổng số lượng sản phẩm: </span>
                    <span>20</span>
                </div>
                <div className="btn-add">
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        + Thêm sản phẩm
                    </button>
                </div>
                <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-list-manage">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Tên sản phẩm</th>
                                <th>Hình ảnh</th>
                                <th>Giá gốc</th>
                                <th>Giá khuyến mãi</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map(product =>
                                    <tr>
                                        <td>{no += 1}</td>
                                        <td>{product.name}</td>
                                        <td>
                                            <img src={"../images/products/" + product.image} alt width="100px" height="100px" />
                                        </td>
                                        <td>{product.unit_price}</td>
                                        <td>{product.promotion_price}</td>
                                        <td>
                                            <button onClick={() => onUpdate(product.id)} className="btn btn-warning" data-bs-toggle="modal" data-bs-target={"#Modal"+product.id}>Cập nhật</button>
                                            <button onClick={() => onDelete(product.id)} className="btn btn-danger">Xóa</button>

                                            {/* Modal */}
                                            <div className="modal fade" id={"Modal"+product.id} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div className="modal-dialog modal-lg">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title" id="exampleModalLabel">Cập nhật sản phẩm</h5>
                                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                                        </div>
                                                        <div className="modal-body modal-update">
                                                            <form onSubmit={handleSubmit}>
                                                               
                                                                    
                                                                        <div className="form-group fg-admin">
                                                                            <label htmlFor="name">Tên sản phẩm</label>
                                                                            <input onChange={onChange} type="text" name="name" placeholder="Nhập tên" value={productUpdate.name} className="form-control" id="name" />
                                                                        </div>
                                                                    
                                                                    
                                                                        <div className="form-group fg-admin">
                                                                            <label htmlFor="price">Giá</label>
                                                                            <input onChange={onChange} type="text" name="price" placeholder="Nhập giá" value={productUpdate.price} className="form-control" id="price" />
                                                                        </div>
                                                                    
                                                                    
                                                                        <div className="form-group fg-admin">
                                                                            <label htmlFor="Price">Giá khuyến mãi</label>
                                                                            <input onChange={onChange} type="text" name="promotion_price" placeholder="Nhập giá khuyến mãi" value={productUpdate.promotion_price} className="form-control" id="Price" />
                                                                        </div>
                                                                    
                                                                        <div className="form-group fg-admin">
                                                                            <label htmlFor="describes">Mô tả sản phẩm</label>
                                                                            <textarea rows={3} type="text" name="describe" placeholder="Nhập mô tả" value={productUpdate.describe} className="form-control" id="describe" defaultValue={""} />
                                                                        </div>
                                                                    
                                                                        <div className="form-group fg-admin">
                                                                            <label htmlFor="Image">Image</label>
                                                                            <input onChange={onChange} type="file" ref={imageRef} name="image" className="form-control-file" id="Image" />
                                                                        </div>
                                                                        <div className="form-group fg-admin">
                                                                            <img 
                                                                                id="preview-image-before-upload"
                                                                                src={"../images/products/" + product.image}
                                                                                alt="xem trước"
                                                                                style={{ maxHeight: 250 }}
                                                                            />
                                                                            
                                                                        </div>
                                                                    
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
                                                            </form>
                                                        </div>
                                                        <div className="modal-footer">
                                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                                                            <button type="button" onClick={handleSubmit} className="btn btn-primary">Lưu thay đổi</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default AdminShow;