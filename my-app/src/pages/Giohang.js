import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu'
import ThanhToan from './ThanhToan';
import Paysuccess from './Paysuccess';
function caculator(arr) {
    let sum = 0;
    for(var i=0; i<arr.length;i++){
        sum+=arr[i].priceNew*arr[i].total;
    }
    return sum;
}
function caculator2(arr) {
    let sum = 0;
    for(var i=0; i<arr.length;i++){
        sum+=arr[i].total;
    }
    return sum;
}
function Giohang(props) {
    const [arrStorage, setArrStorage] = useState([]);
    const[paySuccess,setPaySuccess]=useState(true);
    useEffect(() => {
        const myCart = localStorage.getItem("productsId");
        if (myCart) {
            setArrStorage(JSON.parse(myCart));
        }
    }, [arrStorage.length])
    
    function handleUpQuantity(index) {
        const newCart = [
            ...arrStorage.slice(0, index),
            {
                ...arrStorage[index],
                total: arrStorage[index].total + 1
            },
            ...arrStorage.slice(index + 1)
        ];
        setArrStorage(newCart);
        localStorage.setItem("productsId", JSON.stringify(newCart));
    }

    function handleDownQuantity(index) {
        let newCart;
        if (arrStorage[index].total === 1) {
            newCart = [
                ...arrStorage.slice(0, index),
                ...arrStorage.slice(index + 1)
            ]
        } else {

            newCart = [
                ...arrStorage.slice(0, index),
                {
                    ...arrStorage[index],
                    total: arrStorage[index].total - 1
                },
                ...arrStorage.slice(index + 1)
            ];
        }
        setArrStorage(newCart);
        localStorage.setItem("productsId", JSON.stringify(newCart));
    }

    function handDelete(index) {
        const newCart = [
            ...arrStorage.slice(0, index),
            ...arrStorage.slice(index + 1)
        ];

        setArrStorage(newCart);
        localStorage.setItem("productsId", JSON.stringify(newCart));
    }
    document.title = "Gio hang";
    function handleSubmit(){
        setPaySuccess(false);
        const timeOut=setTimeout(function() {setPaySuccess(true)}, 1000);
        setArrStorage(JSON.parse(localStorage.getItem("productsId")));
    }
    return (
        <div>
            <div className={`add-success d-flex justify-content-center align-items-center ${paySuccess && "display-add-success"}`}><Paysuccess /></div>
            <Menu/>
            <div className="under-menu">
                <div className="web-cocation d-flex justify-content-center align-items-center">
                    <Link to="/"><p className="text2">Trang chủ&nbsp;</p></Link><img className="web-cocation-icon" src="https://phantri-techmaster.github.io/imgpamee/arrow.png" alt="" />
                    <p className="text2 web-cocation-now">&nbsp;Giỏ hàng</p>
                </div>
                <div className="d-flex row m-0 gio-hang">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-8 d-flex row m-0 p-0 h-100">
                        {
                           arrStorage.length === 0 
                           ? <div className="text-center w-100"><p className="text4">Không có sản phẩm trong giỏ hàng</p></div>
                           :  arrStorage.map((arr, index) => (<div key={arr.id} className="gio-hang-products d-flex row m-0 align-items-center ">
                           <div className="col-2 col-sm-2 col-md-3 col-lg-2 col-xl-3 d-flex align-items-center gio-hang-padding" ><img className="img-fluid" src={arr.img} alt="product-img" /></div>
                           <div className="col-9 col-sm-9 col-md-4 col-lg-4 col-xl-4 d-flex flex-column justify-content-center gio-hang-brand-name gio-hang-padding">
                               <p className="text2">{arr.brand}</p>
                               <p className="text2">{arr.fullName}</p>
                           </div>
                           <div className="col-10 col-sm-10 col-md-5 col-lg-6 col-xl-5 d-flex row m-0 align-items-center gio-hang-products-price gio-hang-padding">
                               <div className="col-3 d-flex justify-content-center align-items-center gio-hang-padding gio-hang-number">
                                   <div className="d-flex justify-content-center align-items-center change-icon" onClick={() => { handleUpQuantity(index) }}><p className="m-0">+</p></div>
                                   <input className="gio-hang-input" type="number" readOnly value={arr.total} />
                                   <div className="d-flex justify-content-center align-items-center change-icon" onClick={() => { handleDownQuantity(index) }}><p className="m-0">-</p></div>
                               </div>
                               <div className="col-3 d-flex justify-content-center align-items-center flex-column gio-hang-padding"><p className="text1 gio-hang-price-text">Đơn giá:</p><p className="text2">{arr.priceNew}$</p></div>
                               <div className="col-4 d-flex justify-content-center align-items-center flex-column gio-hang-padding"><p className="text1 gio-hang-price-text">Thành tiền:</p><p className="text2">{arr.total*arr.priceNew}$</p></div>
                               <div className="col-2 d-flex justify-content-center gio-hang-padding">
                               <img onClick={() => { handDelete(index) }} src="https://phantri-techmaster.github.io/imgpamee/trash.png" className="icon"></img></div>
                           </div>
                       </div>))
                        }
                        {
                            arrStorage.length !== 0 && (
                                <div className="col-12 d-flex flex-column">
                                    <div className="d-flex justify-content-end align-items-end">
                                        <p className="text1 m-0">Tổng số sản phẩm:</p>
                                        <p className="text2 m-0 gio-hang-total-products">&nbsp;{caculator2(arrStorage)}&nbsp;Sản phẩm</p>
                                    </div>
                                    <div className="d-flex justify-content-end align-items-end">
                                        <p className="text1 m-0">Tổng tiền:</p>
                                        <p className="text2 m-0 gio-hang-total-money">&nbsp;{caculator(arrStorage)}$</p>
                                    </div>
                                </div>
                            )
                        }
                        
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-4">
                        <ThanhToan handleSubmit={handleSubmit}/>
                    </div>
                    
                </div>
            </div>
            <div className="end-line"></div>
        </div>
    )

}

export default Giohang; 