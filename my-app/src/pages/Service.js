import React from 'react';
import Menu from './Menu';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function Service() {
    document.title = "Dich vu";
    return (
        <div>
            <Menu />
            <div className="under-menu">
                <div className="web-cocation d-flex justify-content-center align-items-center">
                    <Link to="/"><p className="text2">Trang chủ&nbsp;</p></Link>
                    <img className="web-cocation-icon" src="https://phantri-techmaster.github.io/imgpamee/arrow.png" alt="" />
                    <p className="text2 web-cocation-now">&nbsp;Dịch vụ</p>
                </div>
            </div>
            <div className="d-flex row m-0 favorite-box">
                <div className="col-md-12 col-lg-6 col-xl-6 service-box">
                    <div className=" d-flex service row m-0">
                        <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 p-0">
                            <img className="img-fluid" src="https://phantri-techmaster.github.io/imgpamee/service/1.jpg"></img>
                        </div>
                        <div className="col-12 col-sm-12 col-md-5 col-lg-7 col-xl-7 p-0 service-content d-flex flex-column justify-content-center">
                            <p className="text2 content-text-weight content-text-color location-showroom">Sửa chữa tại showroom</p>
                            <p className="text1 ">Đem đồng hồ của mình đến bất kỳ showroom nào của PAMEE để sửa chữa</p>
                            <p className="text1 ">Chúng tôi hy vọng sẽ giúp đỡ bạn nhiều hơn trong việc bảo dưỡng và sửa chữa đồng hồ</p>
                            <div className="d-flex location-button-box">
                                <div className="location-button"><p className="text1b">Xem báo giá</p></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 col-lg-6 col-xl-6 service-box">
                    <div className="d-flex service row m-0">
                        <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 p-0">
                            <img className="img-fluid" src="https://phantri-techmaster.github.io/imgpamee/service/2.jpg"></img>
                        </div>
                        <div className="col-12 col-sm-12 col-md-5 col-lg-7 col-xl-7 p-0 service-content d-flex flex-column justify-content-center">
                            <p className="text2 content-text-weight content-text-color location-showroom">Sửa chữa tại nhà</p>
                            <p className="text1 ">Chúng tôi cung cấp dịch vụ sửa chữa tận nơi</p>
                            <p className="text1 ">Cung cấp cho chúng tôi điạ chỉ và số điện thoại chúng tôi sẽ liên hệ sửa chữa tận nơi nhanh chuyên nghiệp nhất</p>
                            <div className="d-flex location-button-box">
                                <div className="location-button"><p className="text1b">Xem báo giá</p></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 col-lg-6 col-xl-6 service-box service-box-under">
                    <div className=" d-flex service row m-0">
                        <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 p-0">
                            <img className="img-fluid" src="https://phantri-techmaster.github.io/imgpamee/service/3.jpg"></img>
                        </div>
                        <div className="col-12 col-sm-12 col-md-5 col-lg-7 col-xl-7p-0 service-content d-flex flex-column justify-content-center">
                            <p className="text2 content-text-weight content-text-color location-showroom">Thu cũ đổi mới</p>
                            <p className="text1 ">Bạn có thể đổi đồng hồ cũ thành đồng hồ mới</p>
                            <p className="text1 ">Hỗ trợ đổi mới, lên đời cho khách hàng với dịch vụ chuyên nghiệp và chi phí rẻ nhất</p>
                            <div className="d-flex location-button-box">
                                <div className="location-button"><p className="text1b">Xem báo giá</p></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 col-lg-6 col-xl-6 service-box service-box-under">
                    <div className=" d-flex service row m-0">
                        <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 p-0">
                            <img className="img-fluid" src="https://phantri-techmaster.github.io/imgpamee/service/4.jpg"></img>
                        </div>
                        <div className="col-12 col-sm-12 col-md-5 col-lg-7 col-xl-7p-0 service-content d-flex flex-column justify-content-center">
                            <p className="text2 content-text-weight content-text-color location-showroom">Thẩm định đồng hồ</p>
                            <p className="text1 ">Đem đồng hồ đến showroom để thẩm định chất lượng</p>
                            <p className="text1 ">Bạn không yên tâm về chiếc đồng hồ vừa mua, chúng tôi sẽ giúp bạn thẩm định chất lượng</p>
                            <div className="d-flex location-button-box">
                                <div className="location-button"><p className="text1b">Xem báo giá</p></div>
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
export default Service; 