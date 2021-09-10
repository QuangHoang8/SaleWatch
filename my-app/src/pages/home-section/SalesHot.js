import React from 'react';
import { Link } from 'react-router-dom';
function SalesHot(props) {
    return (
        <div className="col-12 col-lg-6 p-0">
            <div className="section-two-sale2">
              <div className="col-8 p-0"><img className="img-fluid" src={props.saleHot.img} alt="" /></div>
              <div className="col-6 section-two-sale-background text-left d-flex flex-column justify-content-center">
                <p className="text2 section-two-product-brand">{props.saleHot.brand}</p>
                <p className="text1">{props.saleHot.name}</p>
                <div className="section-two-sale-background-line" />
                <div className="section-two-sale-sale-off">
                  <p className="text2">SALE OFF</p>
                  <p className="text3">{props.saleHot.saleOff}</p>
                  <p className="text2">SẢN PHẨM TRONG BỘ SƯU TẬP</p>
                </div>
                <div className="d-flex justify-content-center">
                <Link to={`/Sale/${props.saleHot.slug}`}>
                  <div className="section-two-sale-button">
                    <p className="text1">XEM SẢN PHẨM</p>
                  </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
    );
}

export default SalesHot; 