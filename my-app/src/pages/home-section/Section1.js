import React from 'react';

function Section1() {
    return (
        <div className="section-one">
  <div className="topic">
    <div className="d-flex justify-content-center d-flex">
      <p className="text4 topic1">PAMEE - Một sự lựa chọn tuyệt vời</p>
    </div>
    <div className="d-flex justify-content-center">
      <p className="text1">Chúng tôi cam kết chỉ bán hàng chính hãng, chất lượng hoàn hảo</p>
    </div>
    <div className="d-flex justify-content-center">
      <div className="d-flex">
        <p className="text1">Sự</p>
        <p className="text1 topic-a">&nbsp;uy tín và chuyên nghiệp</p>
        <p className="text1">&nbsp;luôn là tiêu chí</p>
      </div>
    </div>
    <div className="d-flex justify-content-center">
      <p className="text1">bán hàng của chúng tôi</p>
    </div>
  </div>
  <div className="section-one-box d-flex align-items-center"><img className="section-one-banner" src="https://phantri-techmaster.github.io/imgpamee/service.png" alt="service" />
    <div className="col-12 col-sm-8 col-md-6 col-lg-4 col-xl-4 d-flex justify-content-center align-items-center">
      <div className="d-flex section-one-content flex-column">
        <div className="d-flex align-items-center"><img className="service-img" src="https://phantri-techmaster.github.io/imgpamee/icon/plus.png" alt="plus" />
          <p className="text2">Hơn 2 triệu mẫu đồng hồ</p>
        </div>
        <div className="d-flex align-items-center"><img className="service-img" src="https://phantri-techmaster.github.io/imgpamee/icon/free-shipping.png" alt="van-chuyen" />
          <p className="text2">Miễn phí vận chuyển</p>
        </div>
        <div className="d-flex align-items-center"><img className="service-img" src="https://phantri-techmaster.github.io/imgpamee/icon/clock.png" alt="CSKH" />
          <p className="text2">Chăm sóc khách hàng 24/24</p>
        </div>
        <div className="d-flex align-items-center"><img className="service-img" src="https://phantri-techmaster.github.io/imgpamee/icon/label.png" alt="bao-hanh" />
          <p className="text2">Bảo hành đến khi hỏng</p>
        </div>
        <div className="d-flex email-sale flex-column">
          <p className="text2">Nhập email nhận mã giảm giá 10%</p>
          <div className="d-flex">
            <div className="col-9 p-0">
              <input className="text1" type="text" placeholder="Nhập email" />
            </div>
            <div className="col-3 p-0 email-submit">
              <p className="text2">OK</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    );
}

export default Section1; 