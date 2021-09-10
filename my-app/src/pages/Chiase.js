import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import Footer from './Footer';

function Chiase() {

  document.title = "Chia se";
    return (
        <div>
            <Menu />
            <div className="under-menu">
                <div className="web-cocation d-flex justify-content-center align-items-center">
                    <Link to="/"><p className="text2">Trang chủ&nbsp;</p></Link>
                    <img className="web-cocation-icon" src="https://phantri-techmaster.github.io/imgpamee/arrow.png" alt="" />
                    <p className="text2 web-cocation-now">&nbsp;Chia sẻ</p>
                </div>
            </div>
            <div className="section-two-bai-viet d-flex justify-content-between row m-0">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4">
              <Link to="/5-mau-dong-ho-nam-gia-tu-5-den-10-trieu-cuc-hot-2020">
              <div className="section-two-baiviet-box">
                <div className="d-flex justify-content-center">
                  <div className="section-two-baiviet-tieude">
                    <p className="text4">5 MẪU ĐỒNG HỒ NAM GIÁ TỪ 5 ĐẾN 10 TRIỆU CỰC HOT 2020</p>
                  </div>
                </div><img className="img-fluid" src="https://phantri-techmaster.github.io/imgpamee/baiviet/bv1.png" alt="baiviet1" />
                <div className="section-two-baiviet-xemthem d-flex justify-content-start align-items-center">
                  <p className="text1 section-two-baiviet-text">Xem thêm</p><img className="section-two-baiviet-arrow" src="https://phantri-techmaster.github.io/imgpamee/arrow.png" alt="go" />
                </div>
              </div></Link>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4">
              <Link to="/giai-ma-cac-loai-may-dong-ho-pho-bien" >
              <div className="section-two-baiviet-box">
                <div className="d-flex justify-content-center">
                  <div className="section-two-baiviet-tieude">
                    <p className="text4">GIẢI MÃ CÁC LOẠI MÁY ĐỒNG HỒ PHỔ BIẾN</p>
                  </div>
                </div><img className="img-fluid" src="https://phantri-techmaster.github.io/imgpamee/baiviet/bv2.png" alt="baiviet1" />
                <div className="section-two-baiviet-xemthem d-flex justify-content-start align-items-center">
                  <p className="text1 section-two-baiviet-text">Xem thêm</p><img className="section-two-baiviet-arrow" src="https://phantri-techmaster.github.io/imgpamee/arrow.png" alt="go" />
                </div>
              </div></Link>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4">
              <Link to="/chronogarph-la-gi" >
              <div className="section-two-baiviet-box">
                <div className="d-flex justify-content-center">
                  <div className="section-two-baiviet-tieude">
                    <p className="text4">CHRONOGRAPH LÀ GÌ, BẠN ĐÃ THỰC SỰ HIỂU?</p>
                  </div>
                </div><img className="img-fluid" src="https://phantri-techmaster.github.io/imgpamee/baiviet/bv3.png" alt="baiviet1" />
                <div className="section-two-baiviet-xemthem d-flex justify-content-start align-items-center">
                  <p className="text1 section-two-baiviet-text">Xem thêm</p><img className="section-two-baiviet-arrow" src="https://phantri-techmaster.github.io/imgpamee/arrow.png" alt="go" />
                </div>
              </div></Link>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4">
              <Link to="/cach-phan-biet-dong-ho-nam-chinh-hang" >
              <div className="section-two-baiviet-box">
                <div className="d-flex justify-content-center">
                  <div className="section-two-baiviet-tieude">
                    <p className="text4">CÁCH PHÂN BIỆT ĐỒNG HỒ NAM CHÍNH HÃNG</p>
                  </div>
                </div><img className="img-fluid" src="https://phantri-techmaster.github.io/imgpamee/baiviet/bv4.png" alt="baiviet1" />
                <div className="section-two-baiviet-xemthem d-flex justify-content-start align-items-center">
                  <p className="text1 section-two-baiviet-text">Xem thêm</p><img className="section-two-baiviet-arrow" src="https://phantri-techmaster.github.io/imgpamee/arrow.png" alt="go" />
                </div>
              </div></Link>
            </div>
           
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4">
              <Link to="/su-khac-biet-chronograph-va-chronometer" >
              <div className="section-two-baiviet-box">
                <div className="d-flex justify-content-center">
                  <div className="section-two-baiviet-tieude">
                    <p className="text4">SỰ KHÁC BIỆT CHRONOGRAPH VÀ CHRONOMETER </p>
                  </div>
                </div><img className="img-fluid" src="https://phantri-techmaster.github.io/imgpamee/baiviet/bv5.png" alt="baiviet1" />
                <div className="section-two-baiviet-xemthem d-flex justify-content-start align-items-center">
                  <p className="text1 section-two-baiviet-text">Xem thêm</p><img className="section-two-baiviet-arrow" src="https://phantri-techmaster.github.io/imgpamee/arrow.png" alt="go" />
                </div>
              </div></Link>
            
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4">
              <Link to="/nhiem-tu-ly-do-lon-khien-dongho-chay-nhanh-cham">
              <div className="section-two-baiviet-box">
                <div className="d-flex justify-content-center">
                  <div className="section-two-baiviet-tieude">
                    <p className="text4">NHIỄM TỪ - LÝ DO LỚN KHIẾN ĐỒNG HỒ CHẠY NHANH, CHẬM</p>
                  </div>
                </div><img className="img-fluid" src="https://phantri-techmaster.github.io/imgpamee/baiviet/bv6.png" alt="baiviet1" />
                <div className="section-two-baiviet-xemthem d-flex justify-content-start align-items-center">
                  <p className="text1 section-two-baiviet-text">Xem thêm</p><img className="section-two-baiviet-arrow" src="https://phantri-techmaster.github.io/imgpamee/arrow.png" alt="go" />
                </div>
              </div></Link>
            
            </div>
            </div>
            
            
            <div className="sale-event-line"></div>
            <Footer/>
        </div>
    );
}
export default Chiase; 