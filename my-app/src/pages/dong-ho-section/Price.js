import React from 'react';
function Price(props) {
    return (
        <div className="dropdown-box">
            <div className="dropdown dropdown5 d-flex justify-content-between align-items-center">
                <p className="text1">MỨC GIÁ</p><img className="filter-icon" src="img/down.png" alt="" />
            </div>
            <div className="dropdown-content">
                <div className="dropdown-content-box d-flex align-items-center">
                    <input id="price1" type="checkbox" name="price1" value="price1" checked={props.check.price1} onChange={(event) => { props.handChangeCheck(event) }} />
                    <label className="filter-check text1" htmlFor="price1">Dưới 200$</label>
                </div>
                <div className="dropdown-content-box d-flex align-items-center">
                    <input id="price2" type="checkbox" name="price2" value="price2" checked={props.check.price2} onChange={(event) => { props.handChangeCheck(event) }} />
                    <label className="filter-check text1" htmlFor="price2">200-300$</label>
                </div>
                <div className="dropdown-content-box d-flex align-items-center">
                    <input id="price3" type="checkbox" name="price3" value="price3" checked={props.check.price3} onChange={(event) => { props.handChangeCheck(event) }} />
                    <label className="filter-check text1" htmlFor="price3">400-800$</label>
                </div>
                <div className="dropdown-content-box d-flex align-items-center">
                    <input id="price4" type="checkbox" name="price4" value="price4" checked={props.check.price4} onChange={(event) => { props.handChangeCheck(event) }} />
                    <label className="filter-check text1" htmlFor="price4">800-1000$</label>
                </div>
                <div className="dropdown-content-box d-flex align-items-center">
                    <input id="price5" type="checkbox" name="price5" value="price5" checked={props.check.price5} onChange={(event) => { props.handChangeCheck(event) }} />
                    <label className="filter-check text1" htmlFor="price5">1000-2000$</label>
                </div>
                <div className="dropdown-content-box d-flex align-items-center">
                    <input id="price6" type="checkbox" name="price6" value="price6" checked={props.check.price6} onChange={(event) => { props.handChangeCheck(event) }} />
                    <label className="filter-check text1" htmlFor="price6">Trên 2000$</label>
                </div>
            </div>
        </div>
    );
}

export default Price; 