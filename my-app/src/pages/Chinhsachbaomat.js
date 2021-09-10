import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import Footer from './Footer';

function Chinhsachbaomat() {
    document.title = "Chinh sach bao mat";
    return (
        <div>
            <Menu />
            <div className="under-menu">
                <div className="web-cocation d-flex justify-content-center align-items-center">
                    <Link to="/"><p className="text2">Trang chủ&nbsp;</p></Link>
                    <img className="web-cocation-icon" src="https://phantri-techmaster.github.io/imgpamee/arrow.png" alt="" />
                    <p className="text2 web-cocation-now">&nbsp;Chính sách bảo mật</p>
                </div>
            </div>
            <div className="group-all container-xl">
                <div className="text-center p-0"><p className="text4">CHÍNH SÁCH BẢO MẬT TẠI PAMEE</p></div>
                <div><img  className="img-fluid" src="https://phantri-techmaster.github.io/imgpamee/return.png"></img></div>
                <p className="text1 content-text-weight content-text-start">PAMEE nghiêm túc thực hiện trách nhiệm của mình liên quan đến bảo mật thông tin theo các quy định về bảo vệ bí mật dữ liệu cá nhân của pháp luật Việt Nam.Bên dưới là tóm tắt sơ lược cách thức chúng tôi thu thập, sử dụng, và bảo vệ thông tin cá nhân của bạn. Việc đảm bảo người dùng Shopee có trải nghiệm an toàn, bảo mật và hiểu được thông tin cá nhân của mình được thu thập và xử lý như thế nào là vô cùng quan trọng đối với Shopee.</p>
                <p className="text2 content-text-weight content-text-color content-text-margin">1. Chúng tôi thu thập những thông tin gì?</p>
                <div className="content-group-margin">
                    <p className="text1">Shopee thu thập các dữ liệu cá nhân mà bạn cung cấp cho chúng tôi, bao gồm nhưng không giới hạn ở:</p>
                <p className="text1">-Tên</p>
                <p className="text1">- Địa chỉ email</p>
                <p className="text1">- Số điện thoại</p>
                <p className="text1">-Thông tin thanh toán</p>
                <p className="text1">Chúng tôi thu thập thông tin có liên quan đến việc sử dụng trình duyệt, ứng dụng, và các thiết bị mà bạn dùng để truy cập các dịch vụ của chúng tôi, cũng như các thông tin về cách thức bạn sử dụng và tương tác với chúng tôi hoặc các dịch vụ của chúng tôi.</p>
                    </div>

                <p className="text2 content-text-weight content-text-color content-text-margin">2. Chúng tôi sử dụng các dữ liệu cá nhân được cung cấp như thế nào?</p>
                <div className="content-group-margin">
                <p className="text1">Chúng tôi có thể xử lý thông tin cá nhân của bạn cho một số mục đích, bao gồm nhưng không giới hạn ở:</p>
                <p className="text1">• Để liên hệ với bạn</p>
                <p className="text1">• Để quản lý tài khoản PAMEE của bạn</p>
                <p className="text1">• Để xử lý giao dịch cho bạn</p>
                <p className="text1">• Để nâng cấp sàn giao dịch và cải thiện các dịch vụ của chúng tôi</p>
                <p className="text1">• Để cá nhân hóa quá trình bạn sử dụng các dịch vụ của chúng tôi</p>
                <p className="text1">• Thông báo cho bạn các cập nhật có liên quan</p>
                <p className="text1">• Trả lời cho các câu hỏi của bạn</p>
                <p className="text1">Chúng tôi cũng xử lý thông tin cá nhân của bạn cho mục đích tuân thủ quy định pháp luật, để quản lý các hệ thống và tài chính của chúng tôi, để điều tra, cũng như thực thi các quyền hiến định.</p>
                </div>

                <p className="text2 content-text-weight content-text-color content-text-margin">3. Ai có thể truy cập thông tin cá nhân của bạn?</p>
                <div className="content-group-margin">
                <p className="text1">Chúng tôi hạn chế việc truy cập thông tin cá nhân của bạn. Tuy nhiên chúng tôi theo từng thời điểm cần phải cung cấp thông tin cá nhân của bạn cho bên thứ ba nhất định theo nhu cầu công việc hoặc mục đích pháp lý. Bên thứ ba này bao gồm, nhưng không giới hạn ở:</p>
                <p className="text1">• Các công ty liên kết hoặc công ty liên quan của chúng tôi</p>
                <p className="text1">• Nhà cung cấp dịch vụ thứ ba mà chúng tôi thuê để hỗ trợ hoặc bổ sung cho hoạt động kinh doanh của chúng tôi</p>
                <p className="text1">• Cơ quan nhà nước có thẩm quyền</p>
                <p className="text1">Cám ơn bạn đã đồng hành và ủng hô PAMEE</p>
                </div>
            
            
            
            </div>
            
            
            <div className="sale-event-line"></div>
            <Footer/>
        </div>
    );
}
export default Chinhsachbaomat; 