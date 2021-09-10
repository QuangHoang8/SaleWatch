import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import Footer from './Footer';

function Quyche() {
    document.title = "Quy che hoat dong";
    return (
        <div>
            <Menu />
            <div className="under-menu">
                <div className="web-cocation d-flex justify-content-center align-items-center">
                    <Link to="/"><p className="text2">Trang chủ&nbsp;</p></Link>
                    <img className="web-cocation-icon" src="https://phantri-techmaster.github.io/imgpamee/arrow.png" alt="" />
                    <p className="text2 web-cocation-now">&nbsp;Quy chế hoạt động</p>
                </div>
            </div>
            <div className="group-all container-xl">
                <div className="text-center p-0"><p className="text4">QUY CHẾ HOẠT ĐỘNGTẠI PAMEE</p></div>
                <div><img  className="img-fluid" src="https://phantri-techmaster.github.io/imgpamee/regur.png"></img></div>
                <p className="text2 content-text-weight content-text-color content-text-margin">1. Quy trình giao dịch</p>
                <div className="content-group-margin">
                    <p className="text1 content-text-weight">Khi có nhu cầu mua hàng trên Shopee, Người Mua cần thực hiện các bước sau đây:</p>
                    <p className="text1">Tìm kiếm, tham khảo thông tin sản phẩm, dịch vụ, khuyến mại và các Người Bán mà Người Mua đang quan tâm.</p>
                    <p className="text1">Tham khảo thông tin giá và chính sách hỗ trợ của bên bán sản phẩm, dịch vụ mà Người Mua đang có nhu cầu mua (có thể tham khảo mặt hàng tương tự của những Người Bán khác trên website Pamee để đưa ra quyết định mua sản phẩm, dịch vụ đó);</p>
                    <p className="text1">Dựa trên thông tin tham khảo được từ Người Bán sản phẩm, dịch vụ Người Mua có thể liên hệ với chủ gian hàng qua thông tin liên hệ trên gian hàng để hỏi thêm thông tin sản phẩm, dịch vụ hoặc tiếp xúc trực tiếp để xem và mua sản phẩm, dịch vụ;</p>
                    <p className="text1">Người Mua đưa ra quyết định đặt hàng trực tuyến bằng cách click vào “Đặt hàng”</p>
                    <p className="text1">Người Mua lựa chọn cách thức giao dịch </p>

                   </div>

                <p className="text2 content-text-weight content-text-color content-text-margin">2. Quy trình thanh toán</p>
                <div className="content-group-margin">
                <p className="text1 content-text-weight">Cách 1: Thanh toán khi nhận hàng (COD – giao hàng và thu tiền tận nơi):</p>
                <p className="text1">Bước 1: Người Mua tìm hiểu thông tin về sản phẩm, dịch vụ được đăng tin</p>
                <p className="text1">Bước 2: Người Mua đặt đơn hàng</p>
                <p className="text1">Bước 3: Pamee xác nhận thông tin Người Mua</p>
                <p className="text1">Bước 4: Pamee tiến hành chuyển hàng</p>
                <p className="text1">Bước 5: Người Mua nhận hàng và thanh toán cho Pamee</p>
                <p className="text1 content-text-weight">Cách 2: Thanh toán online</p>
                <p className="text1">Bước 1: Người Mua tìm hiểu thông tin về sản phẩm, dịch vụ được đăng tin</p>
                <p className="text1">Bước 2: Người Mua đặt đơn hàng trên Pamee</p>
                <p className="text1">Bước 3: Người mua thanh toán</p>
                <p className="text1">Bước 4: Pamee tiến hành chuyển hàng</p>
                <p className="text1"></p>
                <p className="text1"></p>
                <p className="text1"></p>

                </div>
                <p className="text2 content-text-weight content-text-color content-text-margin">3. Đảm bảo an toàn giao dịch</p>
                <div className="content-group-margin">
                <p className="text1">Ban quản lý đã sử dụng các dịch vụ để bảo vệ thông tin về nội dung mà Người Bán đăng sản phẩm trên Shopee. Để đảm bảo các giao dịch được tiến hành thành công, hạn chế tối đa rủi ro có thể phát sinh, Người bán phải cung cấp thông tin đầy đủ (tên, địa chỉ, số điện thoại, email) trong mỗi gian hàng đăng bán sản phẩm.</p>
                <p className="text1">Người Mua không nên đưa thông tin chi tiết về việc thanh toán với bất kỳ ai bằng email hoặc hình thức liên lạc khác, Shopee không chịu trách nhiệm về những thiệt hại hay rủi ro thành viên có thể gánh chịu trong việc trao đổi thông tin của Người Mua qua Internet hoặc email.</p>
                <p className="text1">Trong trường hợp Người Mua liên hệ trực tiếp với Người Bán và không sử dụng dịch vụ giao nhận của Shopee thì Người Mua phải cân nhắc việc giao tiền trước cho Người Bán.</p>
                <p className="text1">Người Mua tuyệt đối không sử dụng bất kỳ chương trình, công cụ hay hình thức nào khác để can thiệp vào hệ thống hay làm thay đổi cấu trúc dữ liệu. Nghiêm cấm việc phát tán, truyền bá hay cổ vũ cho bất kỳ hoạt động nào nhằm can thiệp, phá hoại hay xâm hại hệ thống website. Mọi vi phạm sẽ bị xử lý theo Quy chế và quy định của pháp luật.</p>
                <p className="text1">Mọi thông tin giao dịch được bảo mật, trừ trường hợp buộc phải cung cấp khi Cơ quan pháp luật yêu cầu.</p>

                </div>
            
            
            
            </div>
            
            
            <div className="sale-event-line"></div>
            <Footer/>
        </div>
    );
}
export default Quyche 