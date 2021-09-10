import React from 'react';
function Type(props) {
    return (
        <div className="dropdown-box">
        <div className="dropdown dropdown6 d-flex justify-content-between align-items-center">
          <p className="text1">KIỂU ĐỒNG HỒ</p><img className="filter-icon" src="img/down.png" alt="" />
        </div>
        <div className="dropdown-content day-deo">
          <div className="dropdown-content-box d-flex align-items-center">
            <input id="binhThuong" type="checkbox" name="binhThuong" value="Bình thường" checked={props.check.binhThuong} onChange={(event) => { props.handChangeCheck(event) }} />
            <label className="filter-check text1" htmlFor="binhThuong">Bình thường</label>
          </div>
          <div className="dropdown-content-box d-flex align-items-center">
            <input id="dive" type="checkbox" name="dive" value="Đồng hồ lặn" checked={props.check.dive} onChange={(event) => { props.handChangeCheck(event) }} />
            <label className="filter-check text1" htmlFor="dive">Đồng hồ lặn</label>
          </div>
          <div className="dropdown-content-box d-flex align-items-center">
            <input id="dress" type="checkbox" name="dress" value="Công sở" checked={props.check.dress} onChange={(event) => { props.handChangeCheck(event) }} />
            <label className="filter-check text1" htmlFor="dress">Công sở</label>
          </div>
          <div className="dropdown-content-box d-flex align-items-center">
            <input id="fashion" type="checkbox" name="fashion" value="Thời trang" checked={props.check.fashion} onChange={(event) => { props.handChangeCheck(event) }} />
            <label className="filter-check text1" htmlFor="fashion">Thòi trang</label>
          </div>
          <div className="dropdown-content-box d-flex align-items-center">
            <input id="luxury" type="checkbox" name="luxury" value="Sang trọng" checked={props.check.luxury} onChange={(event) => { props.handChangeCheck(event) }} />
            <label className="filter-check text1" htmlFor="luxury">Sang trọng</label>
          </div>
          <div className="dropdown-content-box d-flex align-items-center">
            <input id="quan-doi" type="checkbox" name="quanDoi" value="Quân đội" checked={props.check.quanDoi} onChange={(event) => { props.handChangeCheck(event) }} />
            <label className="filter-check text1" htmlFor="quan-doi">Quân đội</label>
          </div>
        </div>
      </div>
    );
  }

  export default Type; 