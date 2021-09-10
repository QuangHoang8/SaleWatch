import React, { useEffect, useState, Suspense } from 'react';
import { Link, useParams } from 'react-router-dom';
import Gender from './dong-ho-section/Gender'
import Casesize from './dong-ho-section/Casesize'
import Chain from './dong-ho-section/Chain'
import Movement from './dong-ho-section/Movement'
import Price from './dong-ho-section/Price'
import Type from './dong-ho-section/Type'
import Menu from './Menu'
import Footer from './Footer'
import Content from './dong-ho-section/Content'
import Addsuccess from './Addsuccess';
import Favoriteadd from './Favoriteadd';


const initialState = {
  dongHoNam: false,
  dongHoNu: false,
  chronograph: false,
  ecoDrive: false,
  automatic: false,
  quartz: false,
  may1191: false,
  handWind: false,
  size1: false,
  size2: false,
  size3: false,
  size4: false,
  size5: false,
  size6: false,
  size7: false,
  dayDa: false,
  dayKimLoai: false,
  price1: false,
  price2: false,
  price3: false,
  price4: false,
  price5: false,
  price6: false,
  binhThuong: false,
  dive: false,
  dress: false,
  fashion: false,
  luxury: false,
  quanDoi: false,
}

const initialTag = {
}


const pageLimit = 24;


function Dongho(props) {
  const [products, setProducts] = useState([]);
  const [check, setCheck] = useState(initialState);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrenPage] = useState(1);
  const [search, setSearch] = useState("");
  const [sort1, setSort1] = useState("id");
  const [order, setOrder] = useState("asc");
  const [displaySort, setDisplaySort] = useState(-200);
  const [tag, setTag] = useState(initialTag);
  const [filterMobile, setFilterMobile] = useState(-2000);
  const [addSuccess, setAddSuccess] = useState(true);
  const [addFavorite,setAddFavorite]=useState(true);

  const url = `https://phantriptit.herokuapp.com/products?_page=${currentPage}&_limit=${pageLimit}&&q=${search}&&_order=${order}&&_sort=${sort1}`
  function handChangeCheck(event) {
    setCheck({
      ...check,
      [event.target.name]: !check[event.target.name]
    })
  }
  function handUncheck() {
    setCheck(initialState);
  }
  function handSubmit(event) {
    console.log(event.target.value);
  }
  function changePage(page) {
    setCurrenPage(page);
  }
  function sortGiam(event) {
    let thuocTinh = (event.target.id).slice(0, -1);
    setSort1(thuocTinh);
    setOrder("asc");
    setDisplaySort(-200);
  }
  function sortTang(event) {
    let thuocTinh = (event.target.id).slice(0, -1);
    setSort1(thuocTinh);
    setOrder("desc");
    setDisplaySort(-200);
  }
  function searchTag(event) {
    let data = event.target.id;
    setSearch(data);
    setTag({
      ...initialTag,
      [data]: "activeTag"
    })
    setCurrenPage(1);

  }
  function showSort() {
    if (displaySort == 30) {
      setDisplaySort(-200);
    }
    else {
      setDisplaySort(30);
    }
  }
  function displayFilter() {
    setFilterMobile(0)
  }
  function closeFilter() {
    setFilterMobile(-2000);
  }
  function handleAdd2() {
    setAddSuccess(false)
    const timeOut = setTimeout(function () { setAddSuccess(true) }, 1000);
  }
  function handleFavorite2(){
    setAddFavorite(false);
        const timeOut=setTimeout(function() {setAddFavorite(true)}, 1000);
  }
  function handSearch(event){
    const searchValue=(event.target.parentElement.parentElement.children[0].value);
    console.log(searchValue);
    setSearch(searchValue);
  }

  useEffect(() => {
    async function getProducts() {
      const products = await fetch(url).then(res => res.json());
      // const products = await response.json();
      const allProducts = await fetch(`https://phantriptit.herokuapp.com/products?&&q=${search}`).then(res => res.json());

      // Luu vao state
      setProducts(products);
      setTotalPages(Math.ceil(allProducts.length / pageLimit));
    }
    // Goi API
    getProducts();

  }, [currentPage, totalPages, sort1, order, search]);
  document.title = "Dong ho";
  return (
    <div>
      <div className={`add-success d-flex justify-content-center align-items-center ${addFavorite && "display-add-success"}`}><Favoriteadd/></div>
      <div className={`add-success d-flex justify-content-center align-items-center ${addSuccess && "display-add-success"}`}><Addsuccess /></div>
      <Menu />
      <div className="banner"><img className="img-fluid" src="https://phantri-techmaster.github.io/imgpamee/banner2.png" alt="banner2" />
        <div className="banner-content text-center">
          <p className="text3">MUA ROLEX - QUÀ CỰC XỊN</p>
          <div className="underline-banner d-flex justify-content-center">
            <p className="text1">VIEW ALL</p>
          </div>
        </div>
      </div>
      <div className="d-flex">
        <div className="filter-box" style={{ left: filterMobile }}>
          <div className="filter">
            <img className="filter-mobile-close" src="https://phantri-techmaster.github.io/imgpamee/close.png" alt="close" onClick={() => closeFilter()} />
            <form onSubmit={(event) => handSubmit(event)}>
              <Gender check={check} handChangeCheck={(event) => { handChangeCheck(event) }}></Gender>
              <Movement check={check} handChangeCheck={(event) => { handChangeCheck(event) }}></Movement>
              <Casesize check={check} handChangeCheck={(event) => { handChangeCheck(event) }}></Casesize>
              <Chain check={check} handChangeCheck={(event) => { handChangeCheck(event) }}></Chain>
              <Price check={check} handChangeCheck={(event) => { handChangeCheck(event) }}></Price>
              <Type check={check} handChangeCheck={(event) => { handChangeCheck(event) }}></Type>
              <div className="apply-button d-flex justify-content-center flex-column">
                <div className="ap-dung d-flex justify-content-center">
                  <button className="text1" type="submit">Áp dụng</button>
                </div>
                <div className="bo-chon d-flex justify-content-center" id="btn-uncheck" onClick={handUncheck}>
                  <p className="text1">Bỏ chọn</p>
                </div>
              </div>
            </form>
          </div>

        </div>

        <div className="dong-ho-danh-sach" >

          <div className="web-cocation d-flex justify-content-center align-items-center">
            <Link to="/"><p className="text2">Trang chủ&nbsp;</p></Link><img className="web-cocation-icon" src="https://phantri-techmaster.github.io/imgpamee/arrow.png" alt="" />
            <p className="text2 web-cocation-now">&nbsp;Đồng hồ</p>
          </div>
          <div className="d-flex dong-ho-tool justify-content-between">
            <div className="d-flex">
              <div onClick={() => displayFilter()} className="filter-display">
                <img className="img-fluid" src="https://phantri-techmaster.github.io/imgpamee/filter.png"></img>
              </div>
              <div className="sort">
                <div className="sort-title d-flex align-items-center justify-content-center" onClick={() => showSort()}><p className="text2">Sắp xếp theo</p><img className="sort-icon" src="https://phantri-techmaster.github.io/imgpamee/down.png"></img></div>
                <div className="sort-line-box" style={{ top: displaySort }}>
                  <div onClick={(event) => sortGiam(event)} className="dong-ho-sort-line text-center p-0"><p id="name1" className="text1">Tên từ A-Z</p></div>
                  <div onClick={(event) => sortTang(event)} className="dong-ho-sort-line text-center p-0"><p id="name2" className="text1">Tên từ Z-A</p></div>
                  <div onClick={(event) => sortGiam(event)} className="dong-ho-sort-line text-center p-0"><p id="priceNew1" className="text1">Giá tăng dần</p></div>
                  <div onClick={(event) => sortTang(event)} className="dong-ho-sort-line text-center p-0"><p id="priceNew2" className="text1">Giá giảm dần</p></div>
                </div>
              </div>              
            </div>
            <div className="d-flex dong-ho-search">
                <input type="text" placeholder="Tìm trong Đồng hồ ..." className="text1"/>
                <div className="d-flex justify-content-center align-items-center dong-ho-tool-icon-box" onClick={(event)=>handSearch(event)}>
                  <img className="dong-ho-tool-icon" src="https://phantri-techmaster.github.io/imgpamee/search2.png"></img>
                </div>
              </div>
          </div>

          <Content handleAdd2={handleAdd2} handleFavorite2={handleFavorite2} products={products} totalPages={totalPages}
            changePage={(page) => { changePage(page) }}
            currentPage={currentPage} />

        </div>
        <div className="tag d-flex flex-column align-items-center">
          <div className="tim-kiem-pho-bien d-flex justify-content-center"><p className="text2" >Tìm kiếm phổ biến</p></div>
          <div className="d-flex flex-column align-items-center tag-diffirent">
            <div onClick={(event) => { searchTag(event) }} className={`d-flex justify-content-center ${tag.chronograph}`} ><p id="chronograph" className="text1">Chronograph</p></div>
            <div onClick={(event) => { searchTag(event) }} className={`d-flex justify-content-center ${tag.automatic}`}><p id="automatic" className="text1">Automatic</p></div>
            <div onClick={(event) => { searchTag(event) }} className={`d-flex justify-content-center ${tag.quartz}`}><p id="quartz" className="text1">Quartz</p></div>
            <div onClick={(event) => { searchTag(event) }} className={`d-flex justify-content-center ${tag.ecodrive}`}><p id="ecodrive" className="text1">Ecodrive</p></div>
            <div onClick={(event) => { searchTag(event) }} className={`d-flex justify-content-center ${tag.gold}`}><p id="gold" className="text1">Gold</p></div>
            <div onClick={(event) => { searchTag(event) }} className={`d-flex justify-content-center ${tag.blue}`} ><p id="blue" className="text1">Blue</p></div>
            <div onClick={(event) => { searchTag(event) }} className={`d-flex justify-content-center ${tag.black}`} ><p id="black" className="text1">Black</p></div>
            <div onClick={(event) => { searchTag(event) }} className={`d-flex justify-content-center ${tag.white}`} ><p id="white" className="text1">White</p></div>

            <div onClick={(event) => { searchTag(event) }} className="d-flex justify-content-center"><p className="text1 search-all">Xem tất cả</p></div>
          </div>
          <div className="tim-kiem-pho-bien d-flex justify-content-center"><p className="text2" >Thương hiệu nổi tiếng</p></div>
          <div className="d-flex flex-column align-items-center tag-diffirent">

            <div onClick={(event) => { searchTag(event) }} className={`d-flex justify-content-center ${tag.citizen}`} ><p id="citizen" className="text1">CITIZEN</p></div>
            <div onClick={(event) => { searchTag(event) }} className={`d-flex justify-content-center ${tag.orient}`}><p id="orient" className="text1">ORIENT</p></div>
            <div onClick={(event) => { searchTag(event) }} className={`d-flex justify-content-center ${tag.rolex}`}><p id="rolex" className="text1">ROLEX</p></div>
            <div onClick={(event) => { searchTag(event) }} className={`d-flex justify-content-center ${tag.fossil}`} ><p id="fossil" className="text1">FOSSIL</p></div>
            <div onClick={(event) => { searchTag(event) }} className={`d-flex justify-content-center ${tag.casio}`} ><p id="casio" className="text1">CASIO</p></div>
            <div onClick={(event) => { searchTag(event) }} className={`d-flex justify-content-center ${tag.seiko}`} ><p id="seiko" className="text1">SEIKO</p></div>
            <div onClick={(event) => { searchTag(event) }} className={`d-flex justify-content-center ${tag.ball}`}><p id="ball" className="text1">BALL</p></div>
            <div onClick={(event) => { searchTag(event) }} className={`d-flex justify-content-center ${tag.michael}`}><p id="michael" className="text1">MICHAEL KORS</p></div>
            <div onClick={(event) => { searchTag(event) }} className="d-flex justify-content-center"><p className="text1 search-all">Xem tất cả</p></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>

  );
}

export default Dongho; 