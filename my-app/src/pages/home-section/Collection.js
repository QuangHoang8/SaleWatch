import React from 'react';
import { Link } from 'react-router-dom';
function Collection(props) {
    const collection=props.collectionHot;
    return (
        <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
            <Link to={`/Chitiet-bosuutap/${collection.slug}`}>
              <div className="section-two-collections-box"><img className="img-fluid" src={collection.img} alt={collection.id} />
                <div className="section-two-collections-name d-flex justify-content-between align-items-center">
                  <p className="text2">{collection.name}</p><img className="section-two-collections-arow" src="https://phantri-techmaster.github.io/imgpamee/arrow.png" alt="go" />
                </div>
              </div>
              </Link>
            </div>
    );
}

export default Collection; 