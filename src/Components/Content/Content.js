import React, { Component } from 'react';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
        };
    }
    // get all items
    componentDidMount() {
        fetch('https://6483f301ee799e3216262c7d.mockapi.io/Products')
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    products: data,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }
    // select item follow id
    handleProductClick = (product) => {
        fetch(`https://6483f301ee799e3216262c7d.mockapi.io/Shop/${product.id_shop}`)
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    selectedProduct: product,
                    selectedShop: data,
                });
                const discountedShopItems = this.state.products.filter(
                    (item) => item.id_shop === product.id_shop && item.promotion_price
                );
                this.setState({
                    discountedShopItems: discountedShopItems,
                });
            })

            .catch((error) => {
                console.log(error);
            });
    };

    // quay về trang chủ
    handleBackButtonClick = () => {
        this.setState({
            selectedProduct: null,
            selectedShop: null,
        });
    };
    // click to show discount items
    handleDiscountedItemClick = () => {
        this.setState({
            showDiscountedItems: true,
        });
    };


    render() {
        const { products, selectedProduct, showDiscountedItems, discountedShopItems } = this.state;
        //if have discount items
        if (showDiscountedItems) {
            return (
                <>
                    <div className="discounted-items card-container">
                        {discountedShopItems.length > 0 ? (
                            discountedShopItems.map((product) => (
                                <div key={product.id} className="card main__banner--card">
                                    <div className="card__image">
                                        <img
                                            className="card__image--product-image"
                                            src={process.env.PUBLIC_URL + '/' + product.image}
                                            alt="item"
                                        />
                                    </div>
                                    <div className="card__content">
                                        <h3 className="card__content--name">
                                            {product.name}
                                        </h3>
                                        <p className="card__content--price-old">
                                            Giá cũ: {product.price}.000₫
                                        </p>
                                        <p className="card__content--price-new">
                                            Giá mới: {product.promotion_price}.000₫
                                        </p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>Không có món ăn đang giảm giá</p>
                        )}
                    </div>
                </>
            );
        }
        // list items
        if (selectedProduct) {
            return (
                <>
                    <div className="menu-container">
                        <div className="menu-restaurant-tab row">
                            <div className="item-active col-md-3">
                                <div className="name-menu">Thực đơn</div>
                                <div className="menu-restaurant-category">
                                    <div className="list-category" id="scroll-spy">
                                        <div className="scrollbar-container ps">
                                            <div className="item">
                                                <span id={6731811} title="Món ăn giảm giá" className="item-link active">
                                                    Món ăn giảm giá
                                                </span>
                                            </div>
                                            <div className="item">
                                                <span id={5720777} title="Đồ uống" className="item-link ">
                                                    Đồ uống
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* search items */}
                            <div className="col-md-4">
                                <div className="search-items">
                                    <div className="search-input-container">
                                        <input
                                            className="search-find-items"
                                            type="search"
                                            name="searchKey"
                                            placeholder="Tìm món"
                                        />
                                        <div className="search-icon">
                                            <ion-icon name="search-outline"></ion-icon>
                                        </div>
                                    </div>

                                    <div className="row menu-group mt-auto" id="section-group-menu--1">
                                        <div className="title-menu">Món Đang Giảm</div>
                                    </div>
                                    <div>
                                        {products
                                            .filter((product) => product.promotion_price) // Filter products with promotion_price
                                            .map((product) => (
                                                <div className="row show_items">
                                                    <div className="col-auto item-restaurant-img mt-3" style={{ height: '100%', width: '30%' }}>
                                                        <img
                                                            src={process.env.PUBLIC_URL + '/' + product.image}
                                                            alt="item"
                                                            style={{ height: '100%', width: '100%' }}
                                                        />
                                                    </div>
                                                    <div className="col item-restaurant-info mt-3">
                                                        <h2 className="item-restaurant-name">{product.name}</h2>
                                                    </div>
                                                    <div className="col-auto item-restaurant-more mt-3">
                                                        <div className="row">
                                                            <div className="col-auto product-price">
                                                                <div className="old-price">
                                                                    {product.price}
                                                                    <span className="currency">.000đ</span>
                                                                </div>
                                                                <div className="current-price">
                                                                    {product.promotion_price}
                                                                    <span className="currency">.000đ</span>
                                                                </div>
                                                            </div>
                                                            <div className="col-auto adding-food-cart txt-right">
                                                                <div className="btn-adding">+</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                    </div>
                                    {/* <div className="row menu-group mt-auto" id="section-group-menu--1">
                                        <div className="title-menu">Đồ Uống</div>
                                    </div>
                                    <div>
                                        {products
                                            .filter((product) => product.category === "đồ uống")
                                            .map((product) => (
                                                <div className="row show_items">
                                                    <div className="col-auto item-restaurant-img mt-3" style={{ height: '100%', width: '30%' }}>
                                                        <img
                                                            src={process.env.PUBLIC_URL + '/' + product.image}
                                                            alt="item"
                                                            style={{ height: '100%', width: '100%' }}
                                                        />
                                                    </div>
                                                    <div className="col item-restaurant-info mt-3">
                                                        <h2 className="item-restaurant-name">{product.name}</h2>
                                                    </div>
                                                    <div className="col-auto item-restaurant-more mt-3">
                                                        <div className="row">
                                                            <div className="col-auto product-price">
                                                                <div className="old-price">
                                                                    {product.price}
                                                                    <span className="currency">.00đ</span>
                                                                </div>
                                                                <div className="current-price">
                                                                    {product.promotion_price}
                                                                    <span className="currency">.00đ</span>
                                                                </div>
                                                            </div>
                                                            <div className="col-auto adding-food-cart txt-right">
                                                                <div className="btn-adding">+</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                    </div> */}

                                </div>
                            </div>
                        </div>
                    </div>

                </>
            );
        }

        // show items in homepage.
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
                    <div
                        className="main__banner--restaurant"
                    >
                        {products.map((product) => (
                            <div
                                className="main__banner--card"
                                key={product.id}
                                onClick={() => this.handleProductClick(product)}
                            >
                                <div className="card__image">
                                    <img src={process.env.PUBLIC_URL + '/' + product.image} alt="item" style={{ height: '100%', width: '100%' }} />
                                </div>
                                <br />
                                <div className="card__content">
                                    <h5>{product.name}</h5>
                                    <div className="card__price">
                                        <h3 style={{ color: 'black' }}>Giá: {product.price}.000₫</h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}

export default Content;