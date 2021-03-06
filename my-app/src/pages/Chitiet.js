import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from './Footer';
import Menu from './Menu';
import Addsuccess from './Addsuccess';
import Favoriteadd from './Favoriteadd';
function Chitiet() {
    const [position, setPosition] = useState("");
    const params = useParams();
    const { id } = params;
    const [product, setProduct] = useState([]);
    const [addSuccess,setAddSuccess]=useState(true);
    const [addFavorite,setAddFavorite]=useState(true);
    let sale = Math.floor(((product.priceOld - product.priceNew) / product.priceOld) * 100)

    useEffect(() => {
        async function getProducts() {
            const response = await fetch(`https://phantriptit.herokuapp.com/products?id=${id}`);
            const product = await response.json();
            setProduct(product[0]);

        }
        let arrStorage = JSON.parse(localStorage.getItem("productsId"));
        getProducts();
    }, []);
    function zoom(e) {
        var zoomer = e.currentTarget;
        let x = (e.nativeEvent.offsetX / zoomer.offsetWidth) * 100
        let y = (e.nativeEvent.offsetY / zoomer.offsetHeight) * 100
        setPosition(x + "% " + y + "%");
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
    function pushLocalHeart(productInput) {
        handAddFavorite()
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
    }
    function handAddProduct(){
        setAddSuccess(false);
        const timeOut=setTimeout(function() {setAddSuccess(true)}, 1000);
      }
    function handAddFavorite(){
        setAddFavorite(false);
        const timeOut=setTimeout(function() {setAddFavorite(true)}, 1000);
      }
    document.title = "Chi tiet";
    return (
        <div>
            <div className={`add-success d-flex justify-content-center align-items-center ${addFavorite && "display-add-success"}`}><Favoriteadd/></div>
            <div className={`add-success d-flex justify-content-center align-items-center ${addSuccess && "display-add-success"}`}><Addsuccess/></div>
            <Menu></Menu>
            <div className="container-xl">
                <div className="chi-tiet-box under-menu">
                    <div className="d-flex justify-content-between row m-0">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <figure
                                className="zoom"
                                onMouseMove={(event) => { zoom(event) }}
                                onTouchMove={(event) => { zoom(event) }}
                                style={{
                                    background: `url(${product.img})`,
                                    backgroundPosition: position
                                }}><img src={product.img} /></figure>
                        </div>
                        <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 d-flex flex-column justify-content-around">
                            <div>
                                <div className="chi-tiet-name">
                                    <p className="text2">{product.brand}</p>
                                    <p className="text2">{product.fullName}</p>
                                </div>
                                <div className="chi-tiet-dac-diem">
                                    <p className="text1">?????ng h??? {product.gender}</p>
                                    <p className="text1">Lo???i d??y: {product.chain}</p>
                                    <p className="text1">Lo???i M??y: {product.movement}</p>
                                    <p className="text1">Case size: {product.caseSize}mm</p>
                                    <p className="text1">Ki???u ?????ng h???: {product.type}</p>
                                </div>
                            </div>
                            <div className="chi-tiet-price">
                                <p className="text1">Gi?? g???c: ${product.priceOld}$</p>
                                <div className="d-flex align-items-center">
                                    <p className="text3 chi-tiet-price-now">{product.priceNew}$</p>
                                    <p className="text1 chi-tiet-sale">(gi???m gi?? {sale}%)</p>
                                    <p className="text1 chi-tiet-sale">&nbsp;Ti???t ki???m {product.priceOld - product.priceNew}$</p>
                                </div>
                            </div>
                            <div className="chi-tiet-button">
                                <div className="chi-tiet-add-cart d-flex justify-content-center" onClick={() => pushLocalCart(product)}>
                                    <p className="text2">ADD TO CART</p>
                                </div>
                                <div className="chi-tiet-add-favorite d-flex justify-content-center" onClick={() => pushLocalHeart(product)}>
                                    <p className="text2">ADD TO FAVORITE</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="chi-tiet-line" />
                <div className="chi-tiet-content">
                    <div className="d-flex justify-content-between row m-0">
                        <div className="chi-tiet-bao-hanh col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8">
                            <div className="chi-tiet-bao-hanh-title d-flex">
                                <p className="text1">{product.fullName} ???????c b???o h??nh 3 n??m v???i l???i c???a nh?? s???n xu???t</p>
                            </div>
                            <div className="chi-tiet-bao-hanh-content">
                                <p className="text1">1. B???o h??nh ch??? c?? gi?? tr??? khi ?????ng h??? c?? TH??? ho???c S??? B???O H??NH ch??nh th???c ??i k??m, TH??? ho???c S??? B???O H??NH ???????c ghi ?????y ????? v?? ch??nh x??c c??c th??ng tin nh??: m?? s??? ?????ng h???, m?? ????y c???a ?????ng h??? (n???u c??), n??i b??n, ng??y mua h??ng. TH??? ho???c S??? B???O H??NH ph???i ???????c ????ng d???u c???a ?????i l?? ???y quy???n ch??nh th???c ho???c C???a h??ng b??n ra v?? c??n trong th???i h???n b???o h??nh theo qui ?????nh c???a t???ng h??ng ?????ng h???.</p>
                                <p className="text1">2. Th???i gian b???o h??nh ???????c t??nh t??? ng??y mua ???????c ghi tr??n TH??? ho???c S??? B???O H??NH v?? kh??ng ???????c gia h???n sau khi h???t th???i h???n b???o h??nh theo qui ?????nh c???a m???i h??ng ?????ng h???, theo ti??u chu???n chung th???i gian b???o h??nh c???a ?????ng h??? th?????ng l?? 24 th??ng (02 n??m), ngo???i tr??? c?? c??c cam k???t ?????c bi???t kh??c.</p>
                                <p className="text1">3. Ch??? b???o h??nh mi???n ph?? cho c??c h?? h???ng v??? m??y v?? c??c linh ki???n b??n trong c???a ?????ng h??? ???????c x??c ?????nh l?? do l???i c???a nh?? s???n xu???t.</p>
                                <p className="text1">4. T???i h??? th???ng PAMEE Pin c???a ?????ng h??? ???????c b???o h??nh v?? thay th??? mi???n ph?? kh??ng h???n ch??? th???i gian. Ngo???i tr??? Pin c???a ?????ng h??? d??ng Th??? thao c?? ch???c n??ng ??o th???i gian (Chronograph) v?? ?????ng h??? c?? ????n soi m???t s??? (Loomi), ?????ng h??? s??? d???ng Pin n??ng l?????ng t??? ??nh s??ng (Eco-Drive) s??? ??p d???ng theo c??c ch??nh s??ch b???o h??nh k??m theo.</p>
                            </div>
                        </div>
                        <div className="chi-tiet-ban-hang col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                            <p className="text1 chi-tiet-text">- Mi???n ph?? Ship</p>
                            <p className="text1">Mi???n ph?? ship tr??n to??n qu???c. Ship qu???c t??? t??nh gi?? theo quy ?????nh</p>
                            <p className="text1 chi-tiet-text">- D??? d??ng ?????i tr???</p>
                            <p className="text1">?????ng h??? c???a b???n c?? th??? ?????i tr??? trong 30 ng??y theo ch??nh s??ch b??n h??ng</p>
                            <p className="text1 chi-tiet-text">- Cam k???t h??ng ch??nh s??ch</p>
                            <p className="text1">Pamee ch??? b??n h??ng ch??nh h??ng ?????y ????? gi???y t??? v?? b???o h??nh</p>
                            <p className="text1 chi-tiet-text">- C???n h??? tr???</p>
                            <p className="text1">G???i ?????n trung t??m ch??m s??c kh??ch h??ng Pamee 18001000</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
}

export default Chitiet; 