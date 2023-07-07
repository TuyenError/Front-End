import axios from '../../Api/axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Thankfull() {
    const location = useLocation();
    const[order, setOrder] = useState([]);

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const queryParams = {};
        for (const [key, value] of searchParams.entries()) {
            queryParams[key] = value;
        }
        setOrder(queryParams);

        console.log(queryParams);

    }, [location.search]);

    axios.post(`api/order`,order).then(res => {
        console.log(res.data);
    });

    return (
        <div className='container pt-3'>
                <div>
                    <p>
                        Đơn hàng của quý khách đã được giao đến vận chuyển.
                        Cảm ơn quý khách vì đã sử dụng dịch vụ.
                        </p>
                        <p>
                        Đơn hàng của quý khách đã được giao đến vận chuyển.
                        Cảm ơn quý khách vì đã sử dụng dịch vụ.
                        </p>
                        <p>
                        Đơn hàng của quý khách đã được giao đến vận chuyển.
                        Cảm ơn quý khách vì đã sử dụng dịch vụ.
                        </p>
                </div>
        </div>
    );
}

export default Thankfull;
