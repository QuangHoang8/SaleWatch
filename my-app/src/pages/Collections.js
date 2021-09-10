import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import Footer from './Footer';
import Collection from './home-section/Collection';

function Collections() {
const [collection,setCollection]=useState([]);
 useEffect(() => {
    async function getProducts() {
      const collection = await fetch('https://phantriptit.herokuapp.com/collection').then(res => res.json());
      setCollection(collection);
    }
    getProducts();

  }, []);
  document.title = "Bộ sưu tập";
    return (
        <div>
            <Menu />
            <div className="under-menu">
                <div className="web-cocation d-flex justify-content-center align-items-center">
                    <Link to="/"><p className="text2">Trang chủ&nbsp;</p></Link>
                    <img className="web-cocation-icon" src="https://phantri-techmaster.github.io/imgpamee/arrow.png" alt="" />
                    <p className="text2 web-cocation-now">&nbsp;Bộ sưu tập</p>
                </div>
            </div>
            <div className="d-flex row m-0">
                {
                    collection.map(collection=>(<Collection collectionHot={collection}/>))
                }
            </div>
            
            
            <div className="sale-event-line"></div>
            <Footer/>
        </div>
    );
}
export default Collections; 