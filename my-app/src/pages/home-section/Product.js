import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
function Product(props) {
    const { priceOld, brand, priceNew, img, name, id } = props.product;
    let sale = Math.floor(((priceOld - priceNew) / priceOld) * 100);
    function pushLocalCart(productInput) {
        let arrStorage = JSON.parse(localStorage.getItem("productsId"))
        if (!arrStorage) {
            localStorage.setItem("productsId", JSON.stringify([{
                ...productInput,
                "total": 1
            }]));
        }
        else {
            const match = arrStorage.findIndex(item => item.id === productInput.id);
            (match === -1)
                ? localStorage.setItem("productsId", JSON.stringify([
                    ...arrStorage,
                    {
                        ...productInput,
                        "total": 1
                    }
                ]))
                : localStorage.setItem("productsId", JSON.stringify([
                    ...arrStorage.slice(0, match),
                    {
                        ...arrStorage[match],
                        "total": arrStorage[match]["total"] + 1
                    },
                    ...arrStorage.slice(match + 1)
                ]))
        }
        props.handleAdd();
    }
    

    function pushLocalHeart(productInput) {
        let arrStorage = JSON.parse(localStorage.getItem("productsHeart"))
        if (!arrStorage) {
            localStorage.setItem("productsHeart", JSON.stringify([productInput]));
        }
        else {
            const match = arrStorage.findIndex(item => item.id === productInput.id);
            if (match === -1) {
                localStorage.setItem("productsHeart", JSON.stringify([
                    ...arrStorage,
                    {
                        ...productInput
                    }
                ]))
            }
        }
        props.handleFavorite();
    }



    return (
        <div className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-3 dong-ho-product">
            <Link to={`/chitiet/${id}`}>
                <img className="img-fluid" src={img} alt="anh1" />
                <div className="dong-ho-name">
                    <p className="text1 dong-ho-brand">{brand}</p>
                    <div className="dong-ho-name-product"><p className="text1">{name}</p></div>
                </div>
            </Link>
            <div className="dong-ho-content">
                <div className="d-flex justify-content-between">
                    <div className="d-flex">
                        <p className="text1">Giá cũ:</p>
                        <p className="text1">&nbsp;{priceOld}$</p>
                    </div>
                    <p className="text1 dong-ho-sale">SALE:{sale}%</p>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-end dong-ho-new-price">
                        <p className="text1">Giá mới:</p>
                        <p className="text1">&nbsp;{priceNew}$</p>
                    </div>
                    <div onClick={() => pushLocalHeart(props.product)} >
                        <img className="icon" src="https://phantri-techmaster.github.io/imgpamee/heart.png" ></img>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <div className="dong-ho-add d-flex justify-content-center" onClick={() => pushLocalCart(props.product)}><p className="text1" >ADD TO CART</p></div>
            </div>



        </div>
    );
}

export default Product; 