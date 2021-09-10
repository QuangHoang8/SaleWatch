import React from 'react';
import PagiNation from './PagiNation';
import Product from '../home-section/Product';
function Content(props) {
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
              {products.map(product => (<Product key={product.id} product={product} handleAdd={handleAdd} handleFavorite={handleFavorite}></Product>))}
            </div>
            <PagiNation
              totalPages={totalPages}
              changePage={(page) => { changePage(page) }}
              currentPage={currentPage}
            />
        </div>
    );
}

export default Content; 