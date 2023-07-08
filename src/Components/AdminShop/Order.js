import React, { useEffect, useState } from 'react';
import axios from '../../Api/axios';

function Order() {
    const[orders, setOrder] =useState([]);

    useEffect(() => {
        axios({
            method: "GET",
            url: `http://127.0.0.1:8000/api/get-order`,
            data: null
        })
            .then((res) => {
                setOrder(res.data)
            })
            .catch((err) => {
                console.log(err)
            });
    }, []);

    return (
        <div className="col-md-9">
            <div className="content-manage">
                <h3 className='title-manage-product'>QUẢN LÝ ĐƠN HÀNG</h3>
                <div className="product-overview">
                    <span>Tổng số lượng đơn hàng: </span>
                    <span>20</span>
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
                                <th></th>
                                <th>Tên sản phẩm</th>
                                <th>Tổng giá</th>
                                <th>Trạng thái</th>
                                <th>Thanh toán</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map(order =>
                                    <tr>
                                        <td>
                                            <img src={"../images/orders/" + order.image} alt width="100px" height="100px" />
                                        </td>
                                        <td>{order.name}</td>
                                        <td>
                                        {order.totalPrice}
                                        </td>
                                        <td>{order.status}</td>
                                        <td>{order.payType}</td>
                                        <td>
                                            <button className="btn btn-warning">Cập nhật</button>
                                            <button className="btn btn-danger">Xóa</button>
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

export default Order;