import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from './Footer';
import Menu from './Menu';
import Addsuccess from './Addsuccess';
import Favoriteadd from './Favoriteadd';
function Chitietphukien() {
    const [position, setPosition] = useState("");
    const params = useParams();
    const { id } = params;
    const [product, setProduct] = useState([]);
    const [addSuccess,setAddSuccess]=useState(true);
    const [addFavorite,setAddFavorite]=useState(true);
    let sale = Math.floor(((product.priceOld - product.priceNew) / product.priceOld) * 100)

    useEffect(() => {
        async function getProducts() {
            const response = await fetch(`https://phantriptit.herokuapp.com/accessories?id=${id}`);
            const product = await response.json();
            setProduct(product[0]);

        }
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
                            </div>
                            <div className="chi-tiet-price">
                                <p className="text1">Giá gốc: ${product.priceOld}$</p>
                                <div className="d-flex align-items-center">
                                    <p className="text3 chi-tiet-price-now">{product.priceNew}$</p>
                                    <p className="text1 chi-tiet-sale">(giảm giá {sale}%)</p>
                                    <p className="text1 chi-tiet-sale">&nbsp;Tiết kiệm {product.priceOld - product.priceNew}$</p>
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
                                <p className="text1">{product.fullName} được bảo hành 3 năm với lỗi của nhà sản xuất</p>
                            </div>
                            <div className="chi-tiet-bao-hanh-content">
                                <p className="text1">1. Bảo hành chỉ có giá trị khi đồng hồ có THẺ hoặc SỔ BẢO HÀNH chính thức đi kèm, THẺ hoặc SỔ BẢO HÀNH được ghi đầy đủ và chính xác các thông tin như: mã số đồng hồ, mã đáy của đồng hồ (nếu có), nơi bán, ngày mua hàng. THẺ hoặc SỔ BẢO HÀNH phải được đóng dấu của Đại lý ủy quyền chính thức hoặc Cửa hàng bán ra và còn trong thời hạn bảo hành theo qui định của từng hãng đồng hồ.</p>
                                <p className="text1">2. Thời gian bảo hành được tính từ ngày mua được ghi trên THẺ hoặc SỔ BẢO HÀNH và không được gia hạn sau khi hết thời hạn bảo hành theo qui định của mỗi hãng đồng hồ, theo tiêu chuẩn chung thời gian bảo hành của đồng hồ thường là 24 tháng (02 năm), ngoại trừ có các cam kết đặc biệt khác.</p>
                                <p className="text1">3. Chỉ bảo hành miễn phí cho các hư hỏng về máy và các linh kiện bên trong của đồng hồ được xác định là do lỗi của nhà sản xuất.</p>
                                <p className="text1">4. Tại hệ thống PAMEE Pin của đồng hồ được bảo hành và thay thế miễn phí không hạn chế thời gian. Ngoại trừ Pin của đồng hồ dòng Thể thao có chức năng đo thời gian (Chronograph) và đồng hồ có đèn soi mặt số (Loomi), đồng hồ sử dụng Pin năng lượng từ ánh sáng (Eco-Drive) sẽ áp dụng theo các chính sách bảo hành kèm theo.</p>
                            </div>
                        </div>
                        <div className="chi-tiet-ban-hang col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                            <p className="text1 chi-tiet-text">- Miễn phí Ship</p>
                            <p className="text1">Miễn phí ship trên toàn quốc. Ship quốc tế tính giá theo quy định</p>
                            <p className="text1 chi-tiet-text">- Dễ dàng đổi trả</p>
                            <p className="text1">Đồng hồ của bạn có thể đổi trả trong 30 ngày theo chính sách bán hàng</p>
                            <p className="text1 chi-tiet-text">- Cam kết hàng chính sách</p>
                            <p className="text1">Pamee chỉ bán hàng chính hãng đầy đủ giấy tờ và bảo hành</p>
                            <p className="text1 chi-tiet-text">- Cần hỗ trợ</p>
                            <p className="text1">Gọi đến trung tâm chăm sóc khách hàng Pamee 18001000</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
}

export default Chitietphukien; 