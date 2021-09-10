import React from 'react';
function Gender(props) {
    return (
        <div className="dropdown-box">
            <div className="dropdown dropdown1 d-flex justify-content-between align-items-center">
                <p className="text1">ĐỒNG HỒ </p><img className="filter-icon" src="img/down.png" alt="" />
            </div>
            <div className="dropdown-content dong-ho-gender">
                <div className="dropdown-content-box d-flex align-items-center">
                    <input id="dong-ho-nam" type="checkbox" name="dongHoNam" value="nam" checked={props.check.dongHoNam} value="nam" onChange={(event) => { props.handChangeCheck(event) }} />
                    <label className="filter-check text1" htmlFor="dong-ho-nam">Đồng hồ nam</label>
                </div>
                <div className="dropdown-content-box d-flex align-items-center">
                    <input id="dong-ho-nu" type="checkbox" name="dongHoNu" value="nữ" checked={props.check.dongHoNu} value="nữ" onChange={(event) => { props.handChangeCheck(event) }} />
                    <label className="filter-check text1" htmlFor="dong-ho-nu">Đồng hồ nữ</label>
                </div>
            </div>
        </div>
    );
}

export default Gender; 