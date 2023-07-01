import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';

function ItemCard(props) {
    const { id, name, location } = props;
    return (
        <>
            <Link to={`/shopDetails/${id}`}className="card mb-3" style={{ maxWidth: 360 }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src="/images/items/com-xoi.jpg" className="img-fluid rounded-start" alt="Cơm xối" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{location}</p>
                    </div>
                </div>
            </div>
        </Link >
            <Outlet />
        </>

         
    );
}

export default ItemCard;