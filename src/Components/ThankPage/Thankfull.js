import axios from '../../Api/axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

function Thankfull() {
    const location = useLocation();
    const[order, setOrder] = useState([]);
    const [isFirstRender, setIsFirstRender] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const queryParams = {};
        for (const [key, value] of searchParams.entries()) {
            queryParams[key] = value;
        }
        setOrder(queryParams);
        setIsFirstRender(false);

    }, [location.search]);

    // if (order) {
    //     axios.post(`api/order`,order).then(res => {
    //         if (res.data.status === 200) {
    //             swal("Success",res.data.message,"success");
    //         }
    //     });
    // }

    useEffect(() => {
        if (!isFirstRender) { 
            axios.post(`api/order`, order).then(res => {
                if (res.data.status === 200) {
                    swal("Success", res.data.message, "success");
                }
            });
        }
    }, [order, isFirstRender]);

    console.log(order);
    
    const handleSubmit = () => {
        navigate('/');
    }
    return (
        <div className='container pt-3'>
            <div className='content-thank'>
                <div className='icon-thank'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                    </svg>
                </div>
                <br></br>
                <div className='name-success'>
                    Thanh toán thành công
                </div>
                <br></br>
                <div className='text-thank'>
                    Cảm ơn quý khách đã sử dụng dịch vụ của chúng tôi. Chúng tôi xin cam kết sản phẩm của chúng tôi là hàng real 100%.
                </div>
                <br></br>
                <button type='button' onClick={() => handleSubmit()} className='btn btn-warning'>Trang chủ</button>
                <br></br>
            </div>
        </div>
    );
}

export default Thankfull;
