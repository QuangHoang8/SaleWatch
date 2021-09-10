import React, { useState } from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Dongho from './pages/Dongho';
import Home from './pages/Home';
import Chitiet from './pages/Chitiet';
import Service from './pages/Service';
import Chitietphukien from './pages/Chitietphukien';
import Giohang from './pages/Giohang';
import Location from './pages/Location';
import Bosuutap from './pages/Bosuutap';
import Menu from './pages/Menu';
import Sale from './pages/Sale';
import Chiase from './pages/Chiase';
import Chiase3 from './pages/Chiase3';
import Chiase1 from './pages/Chiase1';
import Chiase2 from './pages/Chiase2';
import Chiase4 from './pages/Chiase4';
import Chiase5 from './pages/Chiase5';
import Chiase6 from './pages/Chiase6';
import Vanchuyen from './pages/Vanchuyen';
import Phukien from './pages/Phukien';
import Quyche from './pages/Quyche';
import Chinhsachbaomat from './pages/Chinhsachbaomat';
import Favorite from './pages/Favorite';
import Collections from './pages/Collections';
import Saleandevent from './pages/Saleandevent';
import Trahanghoantien from './pages/Trahanghoantien';
function App() {
  return (
    <Router>
      <div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/chitiet/:id" exact>
            <Chitiet />
          </Route>
          <Route path="/chitiet-phukien/:id" exact>
            <Chitietphukien />
          </Route>
          <Route path="/Chitiet-bosuutap/:slug" exact>
            <Bosuutap />
          </Route>
          <Route path="/5-mau-dong-ho-nam-gia-tu-5-den-10-trieu-cuc-hot-2020" exact>
            <Chiase1 />
          </Route>
          <Route path="/giai-ma-cac-loai-may-dong-ho-pho-bien" exact>
            <Chiase2 />
          </Route>
          <Route path="/chronogarph-la-gi" exact>
            <Chiase3 />
          </Route>
          <Route path="/cach-phan-biet-dong-ho-nam-chinh-hang" exact>
            <Chiase4 />
          </Route>Sự khác biệt Chronograph và Chronometer
          <Route path="/su-khac-biet-chronograph-va-chronometer" exact>
            <Chiase5 />
          </Route>
          <Route path="/nhiem-tu-ly-do-lon-khien-dongho-chay-nhanh-cham" exact>
            <Chiase6 />
          </Route>
        
          <Route path="/dongho" exact>
            <Dongho/>
          </Route>
          <Route path="/phukien" exact>
            <Phukien/>
          </Route>
          <Route path="/collections" exact>
            <Collections/>
          </Route>
          <Route path="/chiase" exact>
            <Chiase/>
          </Route>
          <Route path="/saleandevent" exact>
            <Saleandevent/>
          </Route>
          <Route path="/vanchuyen" exact>
            <Vanchuyen/>
          </Route>
          <Route path="/quy-che-hoat-dong" exact>
            <Quyche/>
          </Route>
          <Route path="/chinhsachbaomat" exact>
            <Chinhsachbaomat/>
          </Route>
          <Route path="/trahanghoantien" exact>
            <Trahanghoantien/>
          </Route>
          <Route path="/giohang" exact>
            <Giohang/>
          </Route>
          <Route path="/service" exact>
            <Service/>
          </Route>
          <Route path="/location" exact>
            <Location/>
          </Route>
          <Route path="/favorite" exact>
            <Favorite/>
          </Route>
          <Route path="/menu" exact>
            <Menu/>
          </Route>
          <Route path="/sale/:slug" exact>
            <Sale/>
          </Route>
          <Route path="/" exact>
            <Home/>
          </Route>
         
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
