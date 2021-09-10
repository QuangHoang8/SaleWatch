import React from 'react';
import Phukienpage from './Phukienpage';
import Product2 from '../home-section/Product2';
function Content2(props) {
    const{totalPages,changePage,currentPage,products}=props;
    function handleAdd(){
      props.handleAdd2();
    }
    function handleFavorite() {
      props.handleFavorite2();
    }
    return (
        <div>
            <div className="section-two-product d-flex d-block row m-0">
              {products.map(product => (<Product2 key={product.id} product={product} handleAdd={handleAdd} handleFavorite={handleFavorite}></Product2>))}
            </div>
            <Phukienpage
              totalPages={totalPages}
              changePage={(page) => { changePage(page) }}
              currentPage={currentPage}
            />
        </div>
    );
}

export default Content2; 