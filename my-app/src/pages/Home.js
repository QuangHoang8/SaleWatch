import React, { useEffect, useState } from 'react';
import Section1 from './home-section/Section1';
import Section2 from './home-section/Section2';
import Footer from './Footer';
import Addsuccess from './Addsuccess';
import Favoriteadd from './Favoriteadd';
import Menu from './Menu';
function Home(props) {
  document.title = "Trang chu";
  const [productsHot, setProductsHot] = useState([]);
  const [salesHot, setSalesHot] = useState([]);
  const [chiaSe, setChiase] = useState([]);
  const [collectionHot, setCollectionHot] = useState([]);
  const [addSuccess,setAddSuccess]=useState(true);
  const [addFavorite,setAddFavorite]=useState(true);
  useEffect(() => {
    async function getProducts() {
      const saleHot = await fetch("https://phantriptit.herokuapp.com/products?_page=1&_limit=4").then(res => res.json());
      const collectionHot = await fetch("https://phantriptit.herokuapp.com/collection?_page=1&_limit=3").then(res => res.json());
      const chiaSe = await fetch("https://phantriptit.herokuapp.com/chiase?_page=1&_limit=2").then(res => res.json());

      // Luu vao state
      setProductsHot(saleHot);
      setCollectionHot(collectionHot);
      setChiase(chiaSe)
    }
    // Goi API
    getProducts();
  }, []);
  useEffect(() => {
    async function getProducts() {
      const response = await fetch("https://phantriptit.herokuapp.com/sales?_page=1&_limit=4");
      const salesHot = await response.json();

      // Luu vao state
      setSalesHot(salesHot);
    }
    // Goi API
    getProducts();
  }, []);
  
    
  function handleAdd2(){
    setAddSuccess(false)
    const timeOut=setTimeout(function() {setAddSuccess(true)}, 1000);
  }
  function handleFavorite2(){
    setAddFavorite(false);
        const timeOut=setTimeout(function() {setAddFavorite(true)}, 1000);
  }
  return (
    <div>
      <div className="all">
      <div className={`add-success d-flex justify-content-center align-items-center ${addFavorite && "display-add-success"}`}><Favoriteadd/></div>
        <div className={`add-success d-flex justify-content-center align-items-center ${addSuccess && "display-add-success"}`}><Addsuccess/></div>
        <Menu></Menu>
        <div className="banner"><img className="show" src="https://phantri-techmaster.github.io/imgpamee/show.png" alt="PATEK PHILIPPE" /><img className="img-fluid" src="https://phantri-techmaster.github.io/imgpamee/banner.jpg" alt="banner" />
          <div className="banner-text">
            <div className="banner-text1">
              <p className="text3">PATEK Philippe Calatrava Leather Strap</p>
            </div>
            <div className="banner-text2 d-flex align-items-center">
              <p className="text1 banner-text2-text">Cảm nhận sự đơn giản, lịch lãm và tinh tế</p><img className="banner-img" src="https://phantri-techmaster.github.io/imgpamee/arrow.png" alt="go" />
            </div></div>
        </div>
        <Section1></Section1>
        <Section2 productsHot={productsHot} salesHot={salesHot} collectionHot={collectionHot} chiaSe={chiaSe} handleAdd2={handleAdd2} handleFavorite2={handleFavorite2}></Section2>
        <Footer></Footer>
      </div>
    </div>

  );
}

export default Home; 