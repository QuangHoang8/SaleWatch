import React from 'react';
import { Link } from 'react-router-dom';
function Footer() {
    return (
        <div className="footer">
            <div className="footer-contact row m-0 d-flex justify-content-between">
                <div className="col-5 d-flex flex-column align-items-center">
                    <p className="text1">Liên hệ nhân viên</p>
                    <div className="footer-icon"><img src="https://phantri-techmaster.github.io/imgpamee/icon/message.png" alt="message" /><img src="https://phantri-techmaster.github.io/imgpamee/icon/phone-call.png" alt="phone" /></div>
                </div>
                <div className="col-2 d-flex align-items-center">
                    <div className="footer-logo"><img className="img-fluid" src="https://phantri-techmaster.github.io/imgpamee/logo2.png" alt="logo" /></div>
                </div>
                <div className="col-5 d-flex flex-column align-items-center">
                    <p className="text1">Theo dõi chúng tôi</p>
                    <div className="footer-icon"><img src="https://phantri-techmaster.github.io/imgpamee/icon/youtube.png" alt="message" /><img src="https://phantri-techmaster.github.io/imgpamee/icon/facebook.png" alt="phone" /><img src="https://phantri-techmaster.github.io/imgpamee/icon//twister.png" alt="phone" /></div>
                </div>
            </div>
            <div className="footer-menu row m-0 d-flex justify-content-center">
                <div className="col-3 col-sm-3 col-md-2 col-lg-2 col-xl-2">
                    <Link to="/chinhsachbaomat"><p className="text1">CHÍNH SÁCH BẢO MẬT</p></Link>
                </div>
                <div className="col-3 col-sm-3 col-md-2 col-lg-2 col-xl-2">
                    <Link to="/quy-che-hoat-dong"><p className="text1">QUY CHẾ HOẠT ĐỘNG</p></Link>
                </div>
                <div className="col-3 col-sm-3 col-md-2 col-lg-2 col-xl-2">
                    <Link to="/vanchuyen"><p className="text1">CHÍNH SÁCH VẬN CHUYỂN</p></Link>
                </div>
                <div className="col-3 col-sm-3 col-md-2 col-lg-2 col-xl-2">
                    <Link to="/trahanghoantien"><p className="text1">TRẢ HÀNG VÀ HOÀN TIỀN</p></Link>
                </div>
            </div>
            <div className="text-center">
                <p className="text1">Địa chỉ: Tầng 28, Tòa nhà trung tâm Lotte Hà Nội, 54 Liễu Giai, phường Cống Vị, Quận Ba Đình, Hà Nội. Tổng đài hỗ trợ: 18001000 - Email: cskh@hotro.pamee.vn</p>
                <p className="text1">Mã số doanh nghiệp: 999999999 do Sở Kế hoạch &amp; Đầu tư TP Hà Nội cấp lần đầu ngày 10/02/2015</p>
                <p className="text1">© 2020 - Bản quyền thuộc về Công ty TNHH Pamee</p>
            </div>
        </div>


    );
}

export default Footer; 