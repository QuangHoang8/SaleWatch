import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import Footer from './Footer';

function Location() {
    document.title = "Showroom";
    return (
        <div>
            <Menu />
            <div className="under-menu">
                <div className="web-cocation d-flex justify-content-center align-items-center">
                    <Link to="/"><p className="text2">Trang chủ&nbsp;</p></Link>
                    <img className="web-cocation-icon" src="https://phantri-techmaster.github.io/imgpamee/arrow.png" alt="" />
                    <p className="text2 web-cocation-now">&nbsp;Showroom</p>
                </div>
            </div>
            <div className="group-all container-xl">
                <div className="text-center p-0"><p className="text4">ĐỊA CHỈ SHOWROOM PAMEE</p></div>
                <div><img className="img-fluid" src="https://phantri-techmaster.github.io/imgpamee/showroom.png"></img></div>
                <div className="location-line"></div>
                <div className="d-flex row m-0">
                    <div className="col-md-12 col-lg-6 col-xl-6 p-0">
                        <img className="img-fluid" src="https://phantri-techmaster.github.io/imgpamee/map.png"></img>
                    </div>
                    <div className="col-md-12 col-lg-6 col-xl-6 location-address d-flex flex-column justify-content-between">
                        <div className="location1">
                            <p className="text1b content-text-color location-showroom">Showroom1: 160 Âu Cơ, P.9, Q.Tân Bình – TPHCM</p>
                            <p className="text1">ĐT: 1900.1000</p>
                            <p className="text1">Mail: lienhe@pamee.com</p>
                            <p className="text1">Bán Các Hãng: Citizen, Casio, TiTan, Skagen, Seiko, OP, Orient, Adriatica, Police, Timex, Daniel Wellington</p>
                            <div className="d-flex location-button-box">
                                <div className="location-button"><p className="text1b">Liên hệ với cửa hàng</p></div>
                            </div>
                        </div>
                        <div>
                            <p className="text1b content-text-color location-showroom">Showroom1: 160 Âu Cơ, P.9, Q.Tân Bình – TPHCM</p>
                            <p className="text1">ĐT: 1900.1000</p>
                            <p className="text1">Mail: lienhe@pamee.com</p>
                            <p className="text1">Bán Các Hãng: Citizen, Casio, TiTan, Skagen, Seiko, OP, Orient, Adriatica, Police, Timex, Daniel Wellington</p>
                            <div className="d-flex location-button-box">
                                <div className="location-button"><p className="text1b">Liên hệ với cửa hàng</p></div>
                            </div>
                        </div>
                    </div>
                </div>




            </div>


            <div className="sale-event-line"></div>
            <Footer />
        </div>
    );
}
export default Location; 