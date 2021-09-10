import React, { useEffect, useState } from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import { Link } from 'react-router-dom';
function Menu(props) {
  const [menuMobile, setMenuMobile] = useState(-2000);
  const[myCart,setCart]=useState(0);

  function displayMenu() {
    setMenuMobile(0)
  }
  function closeMenu(){
    setMenuMobile(-2000);
  }
  return (
    <div className="menu-box">
      <div className="menu">
        <div className="d-flex justify-content-between">
          <div className="col-4 col-sm-4 col-md-4 col-lg-5 col-xl-5 menu-icon-box"><img className="menu-mobile-icon" onClick={() => displayMenu()} src="https://phantri-techmaster.github.io/imgpamee/icon/menu.png" alt="menu" /></div>
          <div className="menu2 col-4 col-sm-4 col-md-4 col-lg-5 col-xl-5" style={{ padding: 0 }}>
            <ul className="d-flex" style={{ margin: 0, paddingLeft: 30 }}>
              <li><Link className="hvr-underline-from-center text1" to="/">TRANG CHỦ</Link></li>
              <li><Link className="hvr-underline-from-center text1" to="/dongho">ĐỒNG HỒ</Link></li>
              <li><Link className="hvr-underline-from-center text1" to="/phukien" >PHỤ KIỆN</Link></li>
              <li><Link className="hvr-underline-from-center text1" to="/service" >DỊCH VỤ</Link></li>
              <li><Link to="/collections" className="hvr-underline-from-center text1" >BỘ SƯU TẬP</Link></li>
            </ul>
          </div>
          <div className="col-4 col-sm-3 col-md-3 col-lg-2 col-xl-2 logo-box" style={{ textAlign: 'center' }}><Link to="/"><img className="img-fluid logo" src="https://phantri-techmaster.github.io/imgpamee/logo2.png" alt="logo" /></Link></div>
          <div className="menu-icon d-flex justify-content-end align-items-center col-4 col-sm-4 col-md-4 col-lg-5 col-xl-5" style={{ paddingRight: 30 }}>
            <Link to="/location"><img className="img-margin icon" src="https://phantri-techmaster.github.io/imgpamee/pin.png" alt="pin" /></Link>
            <Link to="/favorite">
            <img className="img-margin icon" src="https://phantri-techmaster.github.io/imgpamee/heart.png" alt="heart" />
            </Link>
            <Link to="/giohang">
                <img className="img-margin icon cart-icon" src="https://phantri-techmaster.github.io/imgpamee/bag.png" alt="bag" />
            </Link>
            </div>
        </div>
      </div>
      <ul className="menu-mobile" style={{left:menuMobile}}>
        <div className="menu-mobile-box" >
          <img className="menu-mobile-icon menu-mobile-close" onClick={() => closeMenu()} src="https://phantri-techmaster.github.io/imgpamee/close.png" alt="close" />
          <li className="text1"><Link to="/">TRANG CHỦ</Link></li>
          <li className="text1"><Link to="/dongho">ĐỒNG HỒ</Link></li>
          <li className="text1"><Link to="/phukien">PHỤ KIỆN</Link></li>
          <li className="text1"><Link to="/service">DỊCH VỤ</Link></li>
          <li className="text1"><Link to="/collections">BỘ SƯU TẬP</Link></li>
          <li className="text1"><Link to="/location">ĐỊA CHỈ CỬA HÀNG</Link></li>
          </div>
        </ul>
    </div >

  );
}

export default Menu; 