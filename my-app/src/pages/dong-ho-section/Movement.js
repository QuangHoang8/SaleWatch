import React from 'react';
function Movement(props) {
    return (
        <div className="dropdown-box">
            <div className="dropdown dropdown2 d-flex justify-content-between align-items-center">
                <p className="text1">LOẠI MÁY </p><img className="filter-icon" src="img/down.png" alt="" />
            </div>
            <div className="dropdown-content loai-may">
                <div className="dropdown-content-box d-flex align-items-center">
                    <input id="chrono" type="checkbox" name="chronograph" value="Chronograph" checked={props.check.chronograph} value="chronograph" onChange={(event) => { props.handChangeCheck(event) }} />
                    <label className="filter-check text1" htmlFor="chrono">Chronograph</label>
                </div>
                <div className="dropdown-content-box d-flex align-items-center">
                    <input id="eco" type="checkbox" name="ecoDrive" value="Ecodrive" checked={props.check.ecoDrive} onChange={(event) => { props.handChangeCheck(event) }} />
                    <label className="filter-check text1" htmlFor="Eco">Ecodrive</label>
                </div>
                <div className="dropdown-content-box d-flex align-items-center">
                    <input id="auto" type="checkbox" name="automatic" value="Automatic " checked={props.check.automatic} onChange={(event) => { props.handChangeCheck(event) }} />
                    <label className="filter-check text1" htmlFor="auto">Automatic                 </label>
                </div>
                <div className="dropdown-content-box d-flex align-items-center">
                    <input id="quartz" type="checkbox" name="quartz" value="Quartz" checked={props.check.quartz} onChange={(event) => { props.handChangeCheck(event) }} />
                    <label className="filter-check text1" htmlFor="quartz">Quartz</label>
                </div>
                <div className="dropdown-content-box d-flex align-items-center">
                    <input id={1191} type="checkbox" name="may1191" value="1191" checked={props.check.may1191} onChange={(event) => { props.handChangeCheck(event) }} />
                    <label className="filter-check text1" htmlFor={1191}>1191</label>
                </div>
                <div className="dropdown-content-box d-flex align-items-center">
                    <input id="hand-wind" type="checkbox" name="handWind" value="Hand Wind" checked={props.check.handWind} onChange={(event) => { props.handChangeCheck(event) }} />
                    <label className="filter-check text1" htmlFor="hand-wind">Hand Wind</label>
                </div>
            </div>
        </div>
    );
}

export default Movement; 