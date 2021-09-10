import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import Footer from './Footer';
import SalesHot from './home-section/SalesHot';

function Saleandevent() {
    document.title = "Sale and event";
const [sales,setSales]=useState([]);
 useEffect(() => {
    async function getProducts() {
      const sales = await fetch('https://phantriptit.herokuapp.com/sales').then(res => res.json());
      setSales(sales);
    }
    getProducts();

  }, []);
    return (
        <div>
            <Menu />
            <div className="under-menu">
                <div className="web-cocation d-flex justify-content-center align-items-center">
                    <Link to="/"><p className="text2">Trang chủ&nbsp;</p></Link>
                    <img className="web-cocation-icon" src="https://phantri-techmaster.github.io/imgpamee/arrow.png" alt="" />
                    <p className="text2 web-cocation-now">&nbsp;Sale and event</p>
                </div>
            </div>
            <div className="d-flex row m-0">
                {
                    sales.map(sale=>(<SalesHot saleHot={sale}/>))
                }
            </div>
            
            
            <div className="sale-event-line"></div>
            <Footer/>
        </div>
    );
}
export default Saleandevent; 