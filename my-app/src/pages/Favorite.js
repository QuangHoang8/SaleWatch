import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu'
import Addsuccess from './Addsuccess';

function Favorite(props) {
    const [arrStorage, setArrStorage] = useState([]);
    const [addSuccess,setAddSuccess]=useState(true);
    useEffect(() => {
        const myCart = localStorage.getItem("productsHeart");
        if (myCart) {
            setArrStorage(JSON.parse(myCart));
        }
    }, [arrStorage.length])

    function handDelete(index) {
        const newCart = [
            ...arrStorage.slice(0, index),
            ...arrStorage.slice(index + 1)
        ];

        setArrStorage(newCart);
        localStorage.setItem("productsHeart", JSON.stringify(newCart));
    }
    function pushLocalCart(productInput) {
        handAddProduct();
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
    }
    function handAddProduct(){
        setAddSuccess(false);
        const timeOut=setTimeout(function() {setAddSuccess(true)}, 1000);
      }
      document.title = "Yeu thich";
    return (
        <div>
            <div className={`add-success d-flex justify-content-center align-items-center ${addSuccess && "display-add-success"}`}><Addsuccess/></div>
            <Menu />
            <div className="under-menu">
                <div className="web-cocation d-flex justify-content-center align-items-center">
                    <Link to="/"><p className="text2">Trang chủ&nbsp;</p></Link><img className="web-cocation-icon" src="https://phantri-techmaster.github.io/imgpamee/arrow.png" alt="icon" />
                    <p className="text2 web-cocation-now">&nbsp;Mục yêu thích</p>
                </div>
                <div className="d-flex row m-0 favorite-box">
                    {
                        arrStorage.length === 0
                            ? <div className="text-center w-100"><p className="text4">Không có sản phẩm trong mục yêu thích</p></div>
                            : arrStorage.map((arr, index) => (<div className="d-flex col-md-12 col-lg-6 col-xl-6 row m-0 favorite" key={index}>
                                <div className="favorite-gr1 col-4">
                                    <img className="img-fluid" src={arr.img} />
                                </div>
                                <div className="favorite-gr2 col-8 d-flex row m-0 p-0">
                                    <div className="d-flex col-12 col-sm-7 col-md-7 justify-content-center align-items-start flex-column">
                                        <p className="text2 favorite-brand">{arr.brand}</p>
                                        <p className="text1">{arr.fullName}</p>
                                        <div className="favorite-add-cart d-flex justify-content-center" onClick={() => { pushLocalCart(arr) }}><p className="text1b" >ADD TO CART</p></div>

                                    </div>
                                    <div className="d-flex col-12 col-sm-5 col-md-5 justify-content-center align-items-center p-0">
                                        <div className="col-6 d-flex justify-content-center align-items-center flex-column p-0">
                                            <div className="d-flex justify-content-center align-items-center row m-0">
                                                <div className="m-0 col-12 p-0 d-flex justify-content-center">
                                                    <p className="text1b">Giá tiền:</p>
                                                </div>
                                                <div className="favorite-old-price">
                                                    <p className="text1">{arr.priceOld}$</p>
                                                    <div className="favorite-old-price-line col-12"></div>
                                                </div>
                                                
                                                <p className="text2 favorite-new-price">{arr.priceNew}$</p>
                                            </div>
                                        </div>
                                        <div className="col-6 d-flex justify-content-center align-items-center" onClick={() => { handDelete(index) }}><img className="icon" src="https://phantri-techmaster.github.io/imgpamee/trash.png" /></div>
                                    </div>
                                </div>
                            </div>))
                    }


                </div>
            </div>
            <div className="end-line"></div>
        </div>
    )

}

export default Favorite; 