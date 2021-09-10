import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Footer from './Footer';
import Menu from './Menu';
function Chiase6() {
    document.title = "Nhiễm từ - lý do lớn khiến đồng hồ chạy nhanh, chậm";
    return (
        <div>
            <Menu />
            <div className="under-menu">
                <div className="web-cocation d-flex justify-content-center align-items-center">
                    <Link to="/"><p className="text2">Trang chủ&nbsp;</p></Link>
                    <img className="web-cocation-icon" src="https://phantri-techmaster.github.io/imgpamee/arrow.png" alt="" />
                    <Link to="/chiase"><p className="text2">Chia sẻ&nbsp;</p></Link>
                    <img className="web-cocation-icon" src="https://phantri-techmaster.github.io/imgpamee/arrow.png" alt="" />
                    <p className="text2 web-cocation-now">&nbsp;Nhiễm từ - lý do lớn khiến đồng hồ chạy nhanh, chậm</p>
                </div>
            </div>
            <div className="group-all container-xl">
                <div className="text-center p-0"><p className="text4">NHIỄM TỪ - LÝ DO LỚN KHIẾN ĐỒNG HỒ CHẠY NHANH, CHẬM</p></div>
                <div><img className="img-fluid" src="https://phantri-techmaster.github.io/imgpamee/baiviet/bvbanner6.png"></img></div>
                <p className='text1 content-text-weight content-text-start'>Có bao nhiêu anh em đeo đồng hồ biết về điều này rồi? Trung tâm sửa chữa, bảo dưỡng đồng hồ X-Care đã làm một cuộc khảo sát và kết luận: Đa số đồng hồ chạy nhanh, chậm được gửi tới kiểm tra tại đây đều do nhiễm từ gây ra.</p>
                <p className='text2 content-text-weight content-text-color content-text-margin'>1/ LÀM THẾ NÀO ĐỂ BIẾT ĐỒNG HỒ BỊ NHIỄM TỪ HAY KHÔNG?</p>
                <div className='content-group-margin'>
                    <p className='text1'>Có 2 cách để bạn kiểm tra cỗ máy của mình có đang bị nhiễm từ hay không:</p>
                    <p className='text1 content-text-weight'>Cách 1: Kiểm tra độ nhanh chậm của đồng hồ</p>
                    <p className='text1'>Thông thường, đồng hồ đeo tay chính hãng khi vận hành đều có sai số nhất định. Hãy xem đồng hồ cơ sai số bao nhiêu, quartz sai số bao nhiêu sau đó so sánh với độ nhanh, chậm của cỗ máy mình đang đeo. Sai số cho phép của máy cơ nằm trong khoảng +-25s/ngày, với đồng hồ quartz con số này giảm xuống còn +-0,5s/ngày.</p>
                    <p className='text1'>Trong trường hợp đồng hồ không bị rơi vỡ, vào nước,.. nhưng chạy nhanh hơn hoặc chậm hơn so với sai số theo cam kết của nhà sản xuất đưa ra, hãy nghĩ ngay đến trường hợp đồng hồ của bạn bị nhiễm từ trường. Khi gặp vấn đề này, thường thì đồng hồ cơ chạy nhanh còn đồng hồ quartz chạy chậm.</p>
                    <p className='text1 content-text-weight'>Cách 2: Sử dụng la bàn</p>
                    <p className='text1'>Để kiểm tra, bạn đưa đồng hồ lại gần chiếc la bàn, lắc qua lắc lại. Nếu kim của la bàn dao động, chứng tỏ cỗ máy đã bị nhiễm từ trường. Mức độ dao động của kim la bàn càng lớn, đồng hồ nhiễm từ càng nặng.</p>
                    <p className='text1'>Hiện la bàn rất dễ mua tại các cửa hàng văn phòng phẩm hoặc siêu thị. Vì vậy đây được xem là phương pháp hiệu quả để nhận biết đồng hồ bị nhiễm từ hay không.</p>

                </div>

                <p className='text2 content-text-weight content-text-color content-text-margin'>2/ LÝ DO NÀO KHIẾN ĐỒNG HỒ BỊ NHIỄM TỪ?</p>
                <div className='content-group-margin'>
                    <p className='text1'>Bộ máy đồng hồ được làm từ thép, chúng là kim loại có từ tính nên rất dễ bị nhiễm từ nếu đặt ở những nơi có từ trường lớn.</p>
                    <p className='text1'>Đặc biệt trường hợp đồng hồ cơ bị nhiễm từ thường xảy ra nhiều hơn, do phần dây cót ở bộ phận cân bằng nhạy cảm với từ trường nhất. Khi nhiễm từ, chúng bị xoắn lại, gây ra hiệu ứng chạy nhanh cho đồng hồ cơ. Các chi tiết của đồng hồ đều được khớp nối với nhau, nên chỉ cần 1 chi tiết sai lệch thì cả cỗ máy sẽ bị nguy hại theo.</p>
                    <p className='text1'>Ngoài ra, từ trường tồn tại ở khắp mọi nơi. Những vật dụng xung quanh chúng ta như tivi, loa, lò vi sóng, máy tính, điện thoại di động, radio, máy photocopy, tia X-Quang,… đều là nguyên dẫn khiến đồng hồ bị nhiễm từ bởi chúng ta thường tiếp xúc hoặc đặt cỗ máy thời gian sát với các vật dụng đó.</p>


                </div>

                <p className='text2 content-text-weight content-text-color content-text-margin'>3/ CÁCH KHẮC PHỤC ĐỒNG HỒ NHANH CHẬM</p>
                <div className='content-group-margin'>
                    <p className='text1'>Nếu đồng hồ chạy sai, cách đơn giản nhất đó là sử dụng núm vặn và điều chỉnh đồng hồ về đúng thời gian chuẩn, sau đó hoạt động tay đeo đồng hồ thường xuyên hoặc lên cót thường xuyên để duy trì hoạt động bộ máy một cách ổn định.</p>
                    <p className='text1 content-text-weight'>Ngoài ra, bạn có thể sử dụng một số bí kíp để chỉnh đồng hồ cơ chạy chậm hoặc nhanh sau đây:</p>
                    <p className='text1'>Cách khắc phục đồng hồ cơ chạy nhanh: Nếu đồng hồ của bạn chạy nhanh ít thì bạn nên đặt đồng hồ nằm nghiêng sao cho núm vặn hướng xuống dưới. Trường hợp đồng hồ chạy nhanh nhiều thì đặt đồng hồ nằm nghiêng với núm vặn đặt theo chiều hướng lên.</p>
                    <p className='text1'>Cách chỉnh đồng hồ cơ chạy chậm: Khi đi ngủ hãy tháo đồng hồ ra và đặt cỗ máy nằm ngửa, cho mặt kính hướng lên trên. Điều này sẽ giúp đồng hồ chạy nhanh hơn vào hôm sau.</p>
                    <p className='text1'>Để không gặp phải tình trạng chạy sai giờ hoặc đồng hồ cơ không chạy do nhiều nguyên nhân bạn cần nắm rõ cách sử dụng cỗ máy thời gian sao cho đúng. Đồng thời biết cách bảo quản để kéo dài tuổi thọ cho anh bạn thời gian như: Sử dụng hộp xoay đồng hồ khi không đeo, vệ sinh - bảo dưỡng định kì tại trung tâm bảo hành uy tín, để xa các thiết bị điện tử có nguy cơ gây nhiễm từ cho cỗ máy.</p>
                </div>


            </div>


            <div className="sale-event-line"></div>

            <Footer></Footer>
        </div>
    );
}

export default Chiase6; 