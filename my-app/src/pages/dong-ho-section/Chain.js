import React from 'react';
function Chain(props) {
    return (
        <div className="dropdown-box">
            <div className="dropdown dropdown4 d-flex justify-content-between align-items-center">
                <p className="text1">DÂY ĐEO </p><img className="filter-icon" src="img/down.png" alt="" />
            </div>
            <div className="dropdown-content day-deo">
                <div className="dropdown-content-box d-flex align-items-center">
                    <input id="day-da" type="checkbox" name="dayDa" value="Dây da" checked={props.check.dayDa} onChange={(event) => { props.handChangeCheck(event) }} />
                    <label className="filter-check text1" htmlFor="day-da">	Dây da</label>
                </div>
                <div className="dropdown-content-box d-flex align-items-center">
                    <input id="day-kim-loai" type="checkbox" name="dayKimLoai" value="Dây kim loại" checked={props.check.dayKimLoai} onChange={(event) => { props.handChangeCheck(event) }} />
                    <label className="filter-check text1" htmlFor="day-kim-loai">Dây kim loại</label>
                </div>
            </div>
        </div>
    );
}

export default Chain; 