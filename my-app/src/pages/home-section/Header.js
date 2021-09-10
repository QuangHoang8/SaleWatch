import React from 'react';
import Menu from '../Menu';
function Header(props) {
  return (
    <div>
      <Menu total={props.total}></Menu>
      <div className="banner"><img className="show" src="https://phantri-techmaster.github.io/imgpamee/show.png" alt="PATEK PHILIPPE" /><img className="img-fluid" src="https://phantri-techmaster.github.io/imgpamee/banner.jpg" alt="banner" />
        <div className="banner-text">
          <div className="banner-text1">
            <p className="text3">PATEK Philippe Calatrava Leather Strap</p>
          </div>
            <div className="banner-text2 d-flex align-items-center">
              <p className="text1 banner-text2-text">Cảm nhận sự đơn giản, lịch lãm và tinh tế</p><img className="banner-img" src="https://phantri-techmaster.github.io/imgpamee/arrow.png" alt="go" />
            </div></div>
      </div>

    </div>

  );
}

export default Header; 