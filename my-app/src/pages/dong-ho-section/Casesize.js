import React from 'react';
function Casesize(props) {
    return (
        <div className="dropdown-box">
        <div className="dropdown dropdown3 d-flex justify-content-between align-items-center">
          <p className="text1">CASE SIZE </p><img className="filter-icon" src="img/down.png" alt="" />
        </div>
        <div className="dropdown-content case-size">
          <div className="dropdown-content-box d-flex align-items-center">
            <input id="size1" type="checkbox" name="size1" value="size1" checked={props.check.size1} onChange={(event) => { props.handChangeCheck(event) }} />
            <label className="filter-check text1" htmlFor="size1">Dưới 20mm</label>
          </div>
          <div className="dropdown-content-box d-flex align-items-center">
            <input id="size2" type="checkbox" name="size2" value="size2" checked={props.check.size2} onChange={(event) => { props.handChangeCheck(event) }} />
            <label className="filter-check text1" htmlFor="size2">20-25mm</label>
          </div>
          <div className="dropdown-content-box d-flex align-items-center">
            <input id="size3" type="checkbox" name="size3" value="size3" checked={props.check.size3} onChange={(event) => { props.handChangeCheck(event) }} />
            <label className="filter-check text1" htmlFor="size3">25-30mm</label>
          </div>
          <div className="dropdown-content-box d-flex align-items-center">
            <input id="size4" type="checkbox" name="size4" value="size4" checked={props.check.size4} onChange={(event) => { props.handChangeCheck(event) }} />
            <label className="filter-check text1" htmlFor="size4">30-35mm</label>
          </div>
          <div className="dropdown-content-box d-flex align-items-center">
            <input id="size5" type="checkbox" name="size5" value="size5" checked={props.check.size5} onChange={(event) => { props.handChangeCheck(event) }} />
            <label className="filter-check text1" htmlFor="size5">35-40mm</label>
          </div>
          <div className="dropdown-content-box d-flex align-items-center">
            <input id="size6" type="checkbox" name="size6" value="size6" checked={props.check.size6} onChange={(event) => { props.handChangeCheck(event) }} />
            <label className="filter-check text1" htmlFor="size6">40-45mm</label>
          </div>
          <div className="dropdown-content-box d-flex align-items-center">
            <input id="size7" type="checkbox" name="size7" value="size7" checked={props.check.size7} onChange={(event) => { props.handChangeCheck(event) }} />
            <label className="filter-check text1" htmlFor="size7">Trên 45mm</label>
          </div>
        </div>
      </div>
    );
  }

  export default Casesize; 