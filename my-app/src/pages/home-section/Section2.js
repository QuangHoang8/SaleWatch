import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Product from '../home-section/Product';
import SalesHot from '../home-section/SalesHot';
import Collection from '../home-section/Collection';

function Section2(props) {

  function handleAdd() {
    props.handleAdd2();
  }
  function handleFavorite() {
    props.handleFavorite2();
  }


  return (
    <div>
      <div className="section-two">
        <div className="container-xl">
          <div className="section-two-header" style={{ textAlign: 'center' }}>
            <p className="text4" style={{ marginBottom: 5 }}>MODEL BÁN CHẠY</p>
            <Link to="/dongho">
              <div className="underline">
                <p className="text1">VIEW ALL</p>
              </div>
            </Link>
          </div>
          <div className="section-two-product d-flex justify-content-center d-block w-100 row m-0">
            {props.productsHot.map(product => (<Product key={product.id} product={product} handleAdd={handleAdd} handleFavorite={handleFavorite} addSuccess></Product>))}
          </div>
        </div>
      </div>
      <div className="section-two">
        <div className="section-two-header" style={{ textAlign: 'center' }}>
          <p className="text4" style={{ marginBottom: 5 }}>SALE AND EVENT</p>
          <Link to="/saleandevent">
            <div className="underline">
              <p className="text1">VIEW ALL</p>
            </div>
          </Link>
        </div>
        <div className="section-two-sale-list d-flex row m-0">
          {props.salesHot.map(saleHot => (<SalesHot key={saleHot.id} saleHot={saleHot}></SalesHot>))}
        </div>
      </div>
      <div className="section-two">
        <div className="section-two-header" style={{ textAlign: 'center' }}>
          <p className="text4" style={{ marginBottom: 5 }}>BỘ SƯU TẬP</p>
          <Link to="/collections">
            <div className="underline">
              <p className="text1">VIEW ALL</p>
            </div>
          </Link>
        </div>
        <div className="container-xl">
          <div className="section-two-collections d-flex justify-content-center row m-0">
            {props.collectionHot.map(collectionHot => (<Collection key={collectionHot.id} collectionHot={collectionHot}></Collection>))}
          </div>
        </div>
      </div>
      <div className="section-two">
        <div className="section-two-header" style={{ textAlign: 'center' }}>
          <p className="text4" style={{ marginBottom: 5 }}>CHIA SẺ</p>
          <Link to="/chiase">
            <div className="underline">
              <p className="text1">VIEW ALL</p>
            </div>
          </Link>
        </div>
        <div className="container-xl">
          <div className="section-two-bai-viet d-flex justify-content-between row m-0">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
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
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <Link to="/chronogarph-la-gi">
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
            
            
            
          </div>
        </div>
      </div>
    </div>

  );
}

export default Section2; 