import React, { useEffect, useState } from 'react';

import { useForm } from "react-hook-form";

function ThanhToan(props) {
  const [citys, setCity] = useState([]);
  const [dataCity, setDataCity] = useState("");
  const [dataCommune, setDataCommune] = useState("")
  const [districts, setDistrict] = useState([]);
  const [communes, setCommune] = useState([]);
  const [money, setMoney] = useState("thanh-toan-active");
  const [cart, setCart] = useState("");
  const [cart1, setCart1] = useState("cart-active");
  const [cart2, setCart2] = useState("");
  const [cart3, setCart3] = useState("");
  const [ship1, setShip1] = useState("cart-active");
  const [ship2, setShip2] = useState("");
  const [ship3, setShip3] = useState("");
  const[cartInfo,setCartInfor]=useState(false);
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    if(data!==""){
      localStorage.setItem("productsId", JSON.stringify([]));
      props.handleSubmit();
    }
    console.log(data)};

  const [infoCart, setInfoCart] = useState("none");
  useEffect(() => {
    async function getListCity() {
      const citys = await fetch("https://phantriptit.herokuapp.com/listCity").then(res => res.json());
      const districts = await fetch("https://phantriptit.herokuapp.com/listDistrict").then(res => res.json());
      const filterDistricts = districts.filter(district => district.idProvince === dataCity);
      const communes = await fetch("https://phantriptit.herokuapp.com/listCommune").then(res => res.json());
      const filterCommunes = communes.filter(commune => commune.idDistrict === dataCommune);
      
      setDistrict(filterDistricts);
      setCommune(filterCommunes);
      setCity(citys);
    }
    // Goi API
    getListCity(citys.length);

  }, [citys.length, dataCity, dataCommune]);
  function getDistrict(event) {
    setDataCity(event.target.value);
    setDataCommune("")
  }
  function getCommune(event) {
    setDataCommune(event.target.value);
  }
  function payMoney() {
    setMoney("thanh-toan-active");
    setCart("")
    setInfoCart("none");
    setCartInfor(false);
  }
  function payCart() {
    setMoney("");
    setCart("cart-active");
    setInfoCart("block");
    setCartInfor(true);
  }
  function Cart1() {
    setCart1("cart-active");
    setCart2("")
    setCart3("")
  }
  function Cart2() {
    setCart2("cart-active");
    setCart1("")
    setCart3("")
  }
  function Cart3() {
    setCart3("cart-active");
    setCart2("")
    setCart1("")
  }
  function shipping1() {
    setShip1("cart-active");
    setShip2("")
    setShip3("")
  }
  function shipping2() {
    setShip2("cart-active");
    setShip1("")
    setShip3("")
  }
  function shipping3() {
    setShip3("cart-active");
    setShip2("")
    setShip1("")
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className="thanh-toan d-flex row m-0">
      <div className="thanh-toan-address-box col-12 col-sm-12 col-md-6 col-lg-6 col-xl-12">
        <p className="text2 gio-hang-title-text">Nhập địa chỉ giao hàng</p>
        <div className="thanh-toan-select"><select id="thanh-toan-address" name="city-province" className="text1" onChange={(event) => { getDistrict(event) }}>
          <option value={"0"}>Chọn Tỉnh/Thành Phố</option>
          {citys.map(city => (<option value={city.id} key={city.id}>{city.city}</option>))}
        </select>
        </div>
        <div className="thanh-toan-select">
          <select id="thanh-toan-address" name="city-province" className="text1" onChange={(event) => { getCommune(event) }}>
            <option> Chọn Quận Huyện</option>
            {districts.map(district => (<option value={district.idDistrict} key={district.idDistrict}>{district.name}</option>))}
          </select>
        </div>
        <div className="thanh-toan-select">
          <select id="thanh-toan-address" name="city-province" className="text1">
            <option> Chọn Phường Xã</option>
            {communes.map(commune => (<option>{commune.name}</option>))}
          </select>
        </div>
        <div className="thanh-toan-select">
          <input id="thanh-toan-address" className="text1" type="text" placeholder="Nhập địa chỉ chính xác ..." name="address" ref={register({ required: true })}/>
          {errors.address && <p className="validate text3">*</p>}
        </div>
      </div>
      <div className="thanh-toan-thong-tin col-12 col-sm-12 col-md-6 col-lg-6 col-xl-12">
        <p className="text2 gio-hang-title-text">Nhập thông tin người mua</p>
        <div className="thanh-toan-select">
          <input id="thanh-toan-address" className="text1" type="text" placeholder="Họ và tên: ..."  name="fullname" ref={register({ required: true })} />
          {errors.fullname && <p className="validate text3">*</p>}
          
        </div>
        <div className="thanh-toan-select">
          <input id="thanh-toan-address" className="text1" type="number" placeholder="Số điện thoại: ..." name="telephone"  ref={register({ required: true })}/>
          {errors.telephone && <p className="validate text3">*</p>}
        </div>
        <div className="thanh-toan-select">
          <input id="thanh-toan-address" className="text1" type="text" placeholder="Ghi chú: ..." />
        </div>
      </div>
      <div className="thanh-toan-pay-cart-select col-12 col-sm-12 col-md-6 col-lg-6 col-xl-12">
        <div className="thanh-toan-pay-select">
          <p className="text2 gio-hang-title-text">Chọn hình thức thanh toán</p>
          <div className="d-flex">
            <div className={money + " thanh-toan-tien-mat col-6 d-flex justify-content-center align-items-center flex-column"} onClick={() => payMoney()}>
              <img src="https://phantri-techmaster.github.io/imgpamee/money.png"></img>
              <p className="m-0">Tiền mặt</p>
            </div>
            <div className={cart + " thanh-toan-the col-6 d-flex justify-content-center align-items-center flex-column"} onClick={() => payCart()}>
              <img src="https://phantri-techmaster.github.io/imgpamee/visa-logo.png"></img>
              <p className="m-0">Thanh toán thẻ</p>
            </div>
          </div>
        </div>
        <div className="thanh-toan-cart-select" style={{ "display": infoCart }}>
          <p className="text2 gio-hang-title-text" >Điền thông tin thẻ</p>
          <div className="d-flex thanh-toan-cart-info">
            <div className="col-3">
              <p className="text1">Loại thẻ:</p>
            </div>
            <div className=" col-3 p-0">
              <img className={cart1 + " img-fluid"} src="https://phantri-techmaster.github.io/imgpamee/card1.png" onClick={() => Cart1()} />
            </div>
            <div className=" col-3 p-0">
              <img className={cart2 + " img-fluid"} src="https://phantri-techmaster.github.io/imgpamee/card2.png" onClick={() => Cart2()} />
            </div>
            <div className=" col-3 p-0">
              <img className={cart3 + " img-fluid"} src="https://phantri-techmaster.github.io/imgpamee/card3.png" onClick={() => Cart3()} />
            </div>

          </div>
          <div className="thanh-toan-select">
            <input id="thanh-toan-address" className="text1" type="text" placeholder="Số thẻ: ..." name="numbercart" ref={register({ required: cartInfo })}/>
            {errors.numbercart && <p className="validate text3">*</p>}
          </div>
          <div className="thanh-toan-select">
            <input id="thanh-toan-address" className="text1" type="tel" placeholder="Ngày hết hạn: ..." name="date" ref={register({ required: cartInfo })}/>
            {errors.date && <p className="validate text3">*</p>}
          </div>
          <div className="thanh-toan-select">
            <input id="thanh-toan-address" className="text1" type="text" placeholder="Mã CCV: ..." name="pass" ref={register({ required: cartInfo})}/>
            {errors.pass && <p className="validate text3">*</p>}
          </div>
        </div>

      </div>
      <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-12">
        <p className="text2 gio-hang-title-text" >Chọn đơn vị vận chuyển</p>
        <div className="d-flex thanh-toan-cart-info">
          <div className=" col-4">
            <img className={ship1 + " img-fluid"} src="https://phantri-techmaster.github.io/imgpamee/ship/1.png" onClick={() => shipping1()} />
          </div>
          <div className=" col-4">
            <img className={ship2 + " img-fluid"} src="https://phantri-techmaster.github.io/imgpamee/ship/2.png" onClick={() => shipping2()} />
          </div>
          <div className=" col-4">
            <img className={ship3 + " img-fluid"} src="https://phantri-techmaster.github.io/imgpamee/ship/3.png" onClick={() => shipping3()} />
          </div>

        </div>
      </div>
      <div className="col-12 d-flex justify-content-center">
        <button className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-12 d-flex justify-content-center align-items-center thanh-toan-accept" type="submit">
          <p className="text2 m-3">THANH TOÁN</p>
         </button>
        </div>
    </div >
    </form>
  );
}

export default ThanhToan; 