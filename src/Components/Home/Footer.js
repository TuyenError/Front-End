import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (

            <footer>
                <div className="footer__container">
                    <div>
                        <h5>Công ty</h5>
                        <ul className="footer--introduce my-20">
                            <li><a href="#!">Giới thiệu</a></li>
                            <li><a href="#!">Quy chế</a></li>
                            <li><a href="#!">Điều khoản sử dụng</a></li>
                            <li><a href="#!">Bảo mật thông tin</a></li>
                            <li><a href="#!">Giải quyết khiếu nại</a></li>
                            <li><a href="#!">Liên hệ</a></li>
                            <li><a href="#!">Hợp tác nhân viên giao nhận</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5>Ứng dụng ShopeeFood</h5>
                        <div className="appstore my-20">
                            <a href="#!"><img src="../images/AppStore-vn.png" alt="appstore" /></a>
                        </div>
                        <div className="googleplay my-20">
                            <a href="#!"><img src="../images/PlayStore-vn.png" alt="playstore" /></a>
                        </div>
                        <div className="huawei my-20">
                            <a href="#!"><img src="../images/Huawei-gallery-vn.png" alt="huawei" /></a>
                        </div>
                    </div>
                    <div>
                        <div className="footer__copyright">
                            <div className="footer__copyright--shoppe">
                                <img src="../logosightglass.png" alt="logo" />
                            </div>
                            <p>© 2023 Sightglass Coffee</p>
                            <div class="footer__copyright--icon">
                                <span class="facebook">
                                    <i class="icon fab fa-facebook-f"></i>
                                </span>
                                <span class="instagram">
                                    <i class="icon fab fa-instagram"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="text-end">
                        <h5 style={{ marginBottom: '20px' }}>Địa chỉ công ty</h5>
                        <p>Công Ty Cổ Phần Sightglass</p>
                        <p>101B Lê Hữu Trác</p>
                        <p>Phường Phước Mỹ, Quân Sơn Trà, Đà Nẵng</p>
                        <p>Giấy CN ĐKDN số: 0311828036</p>
                        <p>do Sở Kế hoạch và Đầu tư TP. Đà Nẵng cấp ngày 01/6/2023,</p>
                        <p>Số điện thoại: 0964984046</p>
                        <p>
                            Email <a href="mailto:sightglasscoffee@gmail.com">sightglasscoffee@gmail.com</a>
                        </p>
                        <div className="img-bocongthuong text-end">
                            <img src="../images/gov_seals1.jpg" alt="bocongthuong" />
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
export default Footer;