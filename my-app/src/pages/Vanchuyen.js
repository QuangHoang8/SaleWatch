import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import Footer from './Footer';

function Vanchuyen() {
    document.title = "Chinh sach van chuyen";
    return (
        <div>
            <Menu />
            <div className="under-menu">
                <div className="web-cocation d-flex justify-content-center align-items-center">
                    <Link to="/"><p className="text2">Trang chủ&nbsp;</p></Link>
                    <img className="web-cocation-icon" src="https://phantri-techmaster.github.io/imgpamee/arrow.png" alt="" />
                    <p className="text2 web-cocation-now">&nbsp;Chính sách vận chuyển</p>
                </div>
            </div>
            <div className="group-all container-xl">
                <div className="text-center p-0"><p className="text4">CHÍNH SÁCH VẬN CHUYỂN KHI MUA ĐỒNG HỒ TẠI PAMEE</p></div>
                <div><img  className="img-fluid" src="https://phantri-techmaster.github.io/imgpamee/shipping.png"></img></div>
                <p className="text1 content-text-weight content-text-start">Ngay sau khi đơn hàng được gửi đến, chúng tôi sẽ gửi thư (hoặc gọi điện) xác nhận rằng hàng hóa của Quý khách đang được chuyển đi. Hàng sẽ đến tận tay Quý khách trong vòng từ 1 đến 5 ngày (trừ ngày lễ và chủ nhật).</p>
                <p className="text2 content-text-weight content-text-color content-text-margin">1. Thời gian vận chuyển và cách tính phí</p>
                <div className="content-group-margin">
                    <p className="text1">- Phí vận chuyển: Khách hàng được MIỄN PHÍ vận chuyển trên Toàn quốc.</p>
                <p className="text1 content-text-weight">- Thời gian xử lý đơn hàng:</p>
                <p className="text1">+ Đơn đặt hàng từ 8h30 đến 17h30 thì chúng tôi sẽ liên hệ trong ngày.</p>
                <p className="text1">+ Đơn đặt hàng sau 17h30 thì chúng tôi sẽ liên hệ vào sáng hôm sau.</p>
                <p className="text1 content-text-weight">- Thời gian giao hàng:</p>
                <p className="text1">+ Giao hàng trong ngày hoặc từ 1 - 2 ngày cho khách hàng có địa chỉ ở các quận nội thành Thành phố Hà Nội và các tỉnh lân cận.</p>
                <p className="text1">+ Giao hàng từ 2 – 5 ngày cho khách hàng có địa chỉ ở các tỉnh xa, miền Trung và miền Nam.</p>
                <p className="text1">+ Tuy nhiên, vào thời gian cao điểm (lễ, tết…) chúng tôi không thể giao hàng ngay nên sẽ thỏa thuận thời gian giao hàng cho Quý khách. Kính mong Quý khách thông cảm!</p>
                    </div>

                <p className="text2 content-text-weight content-text-color content-text-margin">2. Chính sách của chúng tôi</p>
                <div className="content-group-margin">
                <p className="text1">Trước khi giao hàng chúng tôi sẽ gọi điện xác nhận rằng hàng hóa của Quý khách đang được chuyển đi. Hàng sẽ đến tận tay Quý khách trong vòng từ 1 đến 5 ngày (trừ ngày lễ và chủ nhật).</p>
                <p className="text1">Chúng tôi đảm bảo giao hàng trong vòng 24 - 48h (kể cả thứ 7 và Chủ Nhật) trong nội thành Hà Nội. Việc giao hàng sẽ được tiến hành ngay khi chúng tôi xác nhận được giao dịch. Nếu trong đợt giao hàng đầu tiên Quý khách không có mặt, chúng tôi sẽ gửi email (hoặc gọi điện) đến Quý khách để sắp xếp thời gian giao hàng khác thuận tiện hơn. Nếu đợt giao hàng thứ hai bị hoãn với cùng lý do, Quý khách sẽ đến kho hàng của chúng tôi để nhận hàng trong thời gian hoạt động từ 8h30 đến 21h30.</p>
                <p className="text1">Tuy hiếm xảy ra nhưng nếu quý khách phát hiện sản phẩm bị khiếm khuyết hay thiếu sản phẩm trong đơn hàng, Quý khách có thể tham khảo quy định đổi trả hàng hoặc liên hệ với chúng tôi qua số điện thoại (04) 2222 8888 hoặc hotline 18001000, chúng tôi cam kết sẽ giải quyết sớm nhất cho Quý khách.</p>
                <p className="text1">Cám ơn bạn đã đồng hành và ủng hô PAMEE</p>
                </div>
            
            
            
            </div>
            
            
            <div className="sale-event-line"></div>
            <Footer/>
        </div>
    );
}
export default Vanchuyen; 