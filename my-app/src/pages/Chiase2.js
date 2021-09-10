import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Footer from './Footer';
import Menu from './Menu';
function Chiase2() {

    document.title = "Giải mã các loại máy đồng hồ phổ biến";

    return (
        <div>
            <Menu />
            <div className="under-menu">
                <div className="web-cocation d-flex justify-content-center align-items-center">
                    <Link to="/"><p className="text2">Trang chủ&nbsp;</p></Link>
                    <img className="web-cocation-icon" src="https://phantri-techmaster.github.io/imgpamee/arrow.png" alt="" />
                    <Link to="/chiase"><p className="text2">Chia sẻ&nbsp;</p></Link>
                    <img className="web-cocation-icon" src="https://phantri-techmaster.github.io/imgpamee/arrow.png" alt="" />
                    <p className="text2 web-cocation-now">&nbsp;Giải mã các loại máy đồng hồ phổ biến</p>
                </div>
            </div>
            <div className="group-all container-xl">
                <div className="text-center p-0"><p className="text4">GIẢI MÃ CÁC LOẠI MÁY ĐỒNG HỒ PHỔ BIẾN</p></div>
                <div><img className="img-fluid" src="https://phantri-techmaster.github.io/imgpamee/baiviet/bvbanner2.png"></img></div>
                <p className='text1 content-text-weight content-text-start'>Được ví như “Linh hồn của những cỗ máy thời gian”, Movement đóng vai trò vận hành, tạo ra nguồn năng lượng sống cho đồng hồ hoạt động! Có bao giờ bạn tự hỏi: Chiếc đồng hồ của bạn được ráp bộ máy nào và gốc gác lịch sử của máy đó chưa?</p>
                <p className='text2 content-text-weight content-text-color content-text-margin'>1/ ETA Movement</p><div className='content-group-margin'>
                    <p className='text1'>Là linh hồn của hàng triệu chiếc đồng hồ sản xuất ra mỗi năm, trong đó phải kể đến Longines, Ogival, Tissot… ETA được mệnh danh là hãng sản xuất MÁY ĐỒNG HỒ lớn nhất trên thế giới.</p>
                    <p className='text1'>Tuy nhiên, tùy từng dòng đồng hồ từ đắt tiền đến rẻ tiền mà bên trong chúng sẽ sử dụng cỗ máy ETA cấp độ khác nhau.Các hãng hồ sau khi nhập máy về sẽ dựa trên nền tảng có sẵn và sáng tạo, thay đổi thêm theo yêu cầu của họ.</p>
                    <p className='text1'>Vậy có bao nhiêu cấp độ của ETA Movement và chúng được xác định như thế nào? Dưới đây là cấp độ cơ bản của máy ETA với số hiệu thường thấy 2xxx - xx.</p>
                    <p className='text1'>Được biết hiện nay, máy ETA2xxx - xx  được phân làm 4 cấp độ từ thấp đến cao bao gồm: Standard, Elabore, Top Grade và Chronometer. Để phân cấp 4 loại máy này, người ta dựa vào độ hoàn thiện, chất lượng linh kiện (dây cót, dây tóc, bộ phận chống sốc…) và mức sai số. Trong đó, một trong những yếu tố quan trọng để đánh giá chính là Incabloc (bộ phận chống sốc).</p>
                    <p className='text1'>Các cấp độ máy Elabore, Top Grade và Chronometer của ETA đều có Incabloc còn Standard thì rất rất hiếm. Chính vì thế, dựa vào đây, 99% người ta có thể nhận dạng chính xác được: đây có phải ETA- Standard?</p>
                    <p className='text1'>Ngoài ra, người ta còn dựa vào chất liệu mỗi bánh răng, nhông cốt và chân kính trong máy đồng hồ để phân biệt cấp độ.</p>
                    <p className='text1'>Ruby trong máy Standard là thủy tinh giả ngọc, trong khi ruby dùng trong các phân hạng cao hơn được nhấn mạnh là gia công bởi thợ kim hoàn và độ trong của màu sắc vượt trội.</p>
                    <p className='text1'>Như vậy, ta cũng có thể dễ dàng phân biệt được máy ETA-Standard với các cấp độ máy khác. Vậy, ETA-Elabore và ETA-Top Grade khác nhau như thế nào?</p>
                    <p className='text1'>Điểm mấu chốt nằm ở Balance (bánh xoay) - yếu tố quyết định đến độ chính xác của đồng hồ mà chỉ cần dựa vào mắt thường, ta cũng có thể nhìn thấy sự khác biệt. Bánh xoay máy ETA-Top Grade hoàn thiện hơn cả về cấu tạo và chất lượng. Đây chính là lý do mà hầu hết máy ETA-Elabore sẽ sử dụng trong những chiếc đồng hồ bình thường còn Top Grade được dùng trong sản phẩm cao cấp hơn. </p>
                    <p className='text1'>Cấp độ cao nhất của máy ETA là Chronometer. Thực chất, đây chính là ETA-Top Grade được COSC - Tổ chức kiểm định chất lượng đồng hồ Thụy Sĩ công nhận. </p>
                    <p className='text1'>Những máy đồng hồ ETA-Top Grade được gửi đến COSC sẽ trải qua các bài test cực kỳ gắt gao và chỉ những cỗ máy đạt chuẩn của COSC khi gửi về mới được chứng nhận Chronometer.</p>
                    <p className='text1'>Các máy ETA đạt được chứng nhận Chronometer sẽ được in số seri trên thân máy như 1 dấu hiệu chỉ rõ sự khác biệt với 1 máy Topgrade.</p>
                    <p className='text1'>Tuy nhiên, điều mà dân chơi đồng hồ đích nhắm đến cuối cùng là In-house movement. Có nhiều loại máy in-house nổi tiếng trong đó có in-house của Rolex, Omega, Patek Philippe… nhưng không phải tất cả chúng đều hoàn hảo. </p>
                    <p className='text1'>Nếu in-house là Seiko (trừ Grand Seiko), Citizen, hay Poljot của Nga hoặc các hãng Trung Hoa thì giới sành chơi khuyên: tốt nhất bạn nên xài ETA.</p>
                    <p className='text1'>Hiện tại, ETA Thụy Sĩ vẫn đang được thế giới đánh giá cao về chất lượng. Dù ETA ở cấp nào thì chăng nữa thì vẫn là hàng tốt, các máy ETA xài 20 năm vẫn còn ổn. </p>
                    <p className='text1'>Đó là lý do mà trên Amazon nếu đồng hồ dùng Miyota (Citizen) chỉ tầm 200-300$, nếu xài ETA thì cũng phải tầm 500$. Nhưng nếu bạn mua đồng hồ trên 2000- 3000 USD thì hãy nghĩ đến in-house khác.</p>
                    <p className='text1'>Đóng vai trò “người anh hùng thầm lặng” góp phần làm nên tên tuổi của các hãng đồng hồ. ETA quá là tuyệt vời phải không anh em?</p>
                </div>

                <p className='text2 content-text-weight content-text-color content-text-margin'>2/ Omega Co-Axial</p>
                <div className='content-group-margin'>
                    <p className='text1'>Một trong những phát minh quan trọng nhất trong ngành công nghiệp sản xuất đồng hồ được Omega nắm giữ đó là cơ cấu hồi Co-Axial Escapement. Hiện nay cơ cấu hồi đặc biệt này đã có mặt trên hầu hết những mẫu đồng hồ cao cấp của Omega.</p>
                    <p className='text1'>Cơ cấu hồi Co-Axial Escapement do nhà sản xuất đồng hồ người Anh George Daniels đưa ra hơn 20 năm trước. George Daniels đã nhận thấy một số vấn đề liên quan đến độ chính xác và tin cậy của đồng hồ cơ khí, đặc biệt là ma sát trượt giữa chân kính với răng của bánh răng trong cơ cấu hồi.</p>
                    <p className='text1 content-text-weight'> Hạn chế của cơ cấu hồi nguyên bản</p>
                    <p className='text1'>Trên cơ cấu hồi kiểu cổ điển của Thomas Mudge sử dụng các chân kính thực hiện cả chức năng khoá và truyền lực từ hệ thống bánh răng đến bánh lắc (balance). Và chính điều này đã tạo ra các xung trên bề mặt của chân kính, gây ra hiện tượng trượt trên bề mặt răng của bánh răng cơ cấu hồi trong quá trình truyền lực.</p>
                    <p className='text1'>Hiện tượng trượt buộc các nhà sản xuất đồng hồ phải sử dụng loại dầu đặc biệt để bôi trơn bề mặt sao cho chúng chuyển động thật trơn tru. Do có hiện tượng dính ướt của dầu cho nên hiệu quả truyền lực bị giảm đáng kể dẫn đến giảm biên độ dao động của bánh lắc và do đó giảm độ chính xác của đồng hồ.</p>
                    <p className='text1 content-text-weight'> Cải tiến của cơ cấu hồi Co-Axial Escapement</p>
                    <p className='text1'>George Daniels đã phát triển Co-Axial Escapement với mục đích phân chia chức năng khoá và truyền lực của cơ cấu hồi thông qua bốn chân kính. Bánh răng A là một bánh răng thứ tư trong hệ bánh răng đã được thay đổi, cung cấp momen xoắn cho cơ cấu hồi. C và D là bánh răng “Co-Axial Wheel”, có chức năng như một bánh răng hồi (escape wheel). Hai bánh răng C và D được gắn cứng với nhau trên cùng một trục B và đây là nguồn gốc của tên gọi “Co-Axial” tức là đồng trục.</p>
                    <p className='text1'>Có thể thấy rằng không có hiện tượng trượt giữ chân kính với bề mặt răng của bánh răng trong quá trình truyền lực, ma sát cũng được giảm đáng kể và không cần sử dụng dầu bôi trơn, giữ cho biên độ của bánh lắc không bị ảnh hưởng. Chính điều này giúp cho Co-Axial Escapement là một giải pháp tuyệt vời nâng cao độ chính xác và tin cậy của đồng hồ.</p>


                </div>

                <p className='text2 content-text-weight content-text-color content-text-margin'>3/ Máy Eco-Drive</p>
                <div className='content-group-margin'>
                <p className='text1'>Hơn 80% đồng hồ Citizen thuộc dòng máy Eco- Drive. Đó là con số khổng lồ mang đến sự lớn mạnh không ngừng và khả năng cạnh tranh khốc liệt của Citizen với bất kỳ thương hiệu nào khác. Ngoài ra, Eco - Drive Citizen sở hữu những tính năng nổi trội mà khiến nhiều người phải ngạc nhiên.</p>
                    <p className='text1 content-text-weight'>Sau khi sạc đầy, dù không được tiếp xúc với ánh sáng, đồng hồ vẫn có thể chạy trong vòng 6 tháng, thậm chí một năm.</p>
                    <p className='text1 content-text-weight'>Có thể sạc từ đèn huỳnh quang hoặc nến. Mặc dù năng lượng tích trữ từ nguồn không nhiều, nhưng vẫn đủ giúp đồng hồ hoạt động đến sáng hôm sau.</p>
                    <p className='text1 content-text-weight'> Eco - Drive có khả năng tự động điều chỉnh để tiết kiệm năng lượng. Nếu thiếu sáng dưới mức cho phép, trong 1 thời gian dài, đồng hồ sẽ ngưng hoạt động của kim giây và kim phút, để tiết kiệm năng lượng phục vụ cho bộ nhớ đếm giờ. Khi tiếp xúc với ánh sáng trở lại và nạp đủ năng lượng đồng hồ sẽ tự động điều chỉnh quay kim đến giờ hiện tại.</p>
                    <p className='text1 content-text-weight'>Tuổi thọ của tấm panel mặt trời và pin sạc bền từ 15-20 năm.</p>
                    <p className='text1'>Tuy nhiên dùng thời gian lâu cũng có thể gây ra hiện tượng chai pin. Khi đó hãy mang đồng hồ tới các địa chỉ uy tín để kịp thời sửa chữa.</p>

                </div>



            </div>


            <div className="sale-event-line"></div>

            <Footer></Footer>
        </div>
    );
}

export default Chiase2; 