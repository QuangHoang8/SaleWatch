import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import Footer from './Footer';

function Trahanghoantien() {
    document.title = "Tra hang";
    return (
        <div>
            <Menu />
            <div className="under-menu">
                <div className="web-cocation d-flex justify-content-center align-items-center">
                    <Link to="/"><p className="text2">Trang chủ&nbsp;</p></Link>
                    <img className="web-cocation-icon" src="https://phantri-techmaster.github.io/imgpamee/arrow.png" alt="" />
                    <p className="text2 web-cocation-now">&nbsp;Trả hàng và hoàn tiền</p>
                </div>
            </div>
            <div className="group-all container-xl">
                <div className="text-center p-0"><p className="text4">CHÍNH SÁCH ĐỔI TRẢ HÀNG KHI MUA ĐỒNG HỒ TẠI PAMEE</p></div>
                <div><img  className="img-fluid" src="https://phantri-techmaster.github.io/imgpamee/return.png"></img></div>
                <p className="text1 content-text-weight content-text-start">Tại PAMEE, khi mua sản phẩm, bạn được hưởng 2 chính sách:1 đổi 1 trong 30 ngày và 1 đổi 1 trong 3 ngày</p>
                <p className="text2 content-text-weight content-text-color content-text-margin">1. 1 đổi 1 trong vòng 30 ngày khi phát hiện lỗi của nhà sản xuất</p>
                <div className="content-group-margin">
                    <p className="text1">Với mong muốn đem lại trải nghiệm mua hàng tốt dành cho quý khách cũng như đảm bảo quyền lợi người tiêu dùng, nâng cao chất lượng dịch vụ sau bán hàng, cửa hàng đổi sản phẩm mới cùng loại nếu sản phẩm bị lỗi kỹ thuật do nhà sản xuất hoặc hàng hóa bị hư hại trong quá trình vận chuyển trong vòng 30 ngày được tính từ lúc quý khách nhận được sản phẩm . Sản phẩm chỉ được đổi khi đáp ứng đầy đủ các điều kiện sau dưới đây:</p>
                <p className="text1">- Sản phẩm mới mua trong vòng 30 ngày kể từ ngày xuất bán. Nếu quý khách mua trực tuyến, thời gian được tính từ ngày khách nhận được sản phẩm.</p>
                <p className="text1">- Chưa xuất hiện tình trạng đã qua sử dụng, bề mặt vỏ đồng hồ không có dấu hiệu xước dù rất nhỏ.</p>
                <p className="text1">- Đầy đủ các phụ kiện: hộp, túi, tem, phiếu bảo hành, hóa đơn bán hàng, tem thương hiệu và hướng dẫn kỹ thuật v.v…</p>
                <p className="text1">-Trường hợp hàng hóa bị hư hại trong quá trình vận chuyển, quý khách vui lòng từ chối nhận sản phẩm và gửi sản phẩm lại cho Xwatch. Đồng thời, quý khách thông báo cho bộ phận chăm sóc khách hàng qua hotline 1900.0325 để nhận sản phẩm mới thay thế.</p>
                <p className="text1 content-text-weight">Trường hợp không chấp nhận đổi hoặc trả sản phẩm:</p>
                <p className="text1">- Lỗi do người sử dụng.</p>
                <p className="text1">- Sản phẩm có các lỗi ngoại quan (xước, móp, méo, vỡ, sứt, ...) khi quý khách đã mang sản phẩm ra khỏi cửa hàng. Vì vậy, quý khách cần kiểm tra một cách kỹ càng sản phẩm trước khi mua.</p>
                    </div>

                <p className="text2 content-text-weight content-text-color content-text-margin">2. 1 đổi 1 trong 3 ngày với sản phẩm mua làm quà tặng</p>
                <div className="content-group-margin">
                <p className="text1">Khách hàng mua làm QUÀ TẶNG: Trong vòng 3 ngày nếu sản phẩm còn nguyên vẹn, không phát sinh lỗi, khách hàng được đổi lấy một mẫu có giá trị ngang bằng hoặc cao hơn có sẵn tại cửa hàng. Chính sách này chỉ áp dụng với khách mua trực tiếp tại cửa hàng, không áp dụng khách hàng mua online:</p>
                <p className="text1">(*) Tất cả các sản phẩm đổi mới đều phải giữ nguyên trạng như lúc ban đầu khi mua. Còn nguyên trạng như ban đầu nghĩa là sản phẩm trong điều kiện còn mới nguyên bao gồm và không giới hạn:</p>
                <p className="text1">• Chưa xuất hiện tình trạng đã qua sử dụng, bề mặt vỏ đồng hồ không có dấu hiệu xước dù rất nhỏ.</p>
                <p className="text1">• Đầy đủ các phụ kiện: hộp, túi, tem, phiếu bảo hành, tem thương hiệu và hướng dẫn kỹ thuật v.v…</p>
                <p className="text1">Phạm vi áp dụng:</p>
                <p className="text1">Áp dụng cho tất cả các dòng sản phẩm thuộc các thương hiệu: Seiko, Orient, Citizen, OP, Ogival, Bulova, Elixa.</p>
                <p className="text1 content-text-weight">LƯU Ý: chính sách trên chỉ được áp dụng duy nhất 1 lần.</p>
                <p className="text1">Hy vọng cùng với "Bảo hiểm cả lỗi người dùng trong 5 năm" và "Đền gấp 10 lần nếu phát hiện hàng fake", chính sách Đổi mới hàng khi mua đồng hồ tại PAMEE sẽ mang đến sự an tâm tuyệt đối cho khách hàng.</p>
                <p className="text1">Cám ơn bạn đã đồng hành và ủng hô PAMEE</p>
                </div>
            
            
            
            </div>
            
            
            <div className="sale-event-line"></div>
            <Footer/>
        </div>
    );
}
export default Trahanghoantien; 