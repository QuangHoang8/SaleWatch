import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Footer from './Footer';
import Menu from './Menu';
function Chiase5() {
    document.title = "Sự khác biệt Chronograph và Chronometer";
    return (
        <div>
            <Menu />
            <div className="under-menu">
                <div className="web-cocation d-flex justify-content-center align-items-center">
                    <Link to="/"><p className="text2">Trang chủ&nbsp;</p></Link>
                    <img className="web-cocation-icon" src="https://phantri-techmaster.github.io/imgpamee/arrow.png" alt="" />
                    <Link to="/chiase"><p className="text2">Chia sẻ&nbsp;</p></Link>
                    <img className="web-cocation-icon" src="https://phantri-techmaster.github.io/imgpamee/arrow.png" alt="" />
                    <p className="text2 web-cocation-now">&nbsp;Sự khác biệt Chronograph và Chronometer</p>
                </div>
            </div>
            <div className="group-all container-xl">
                <div className="text-center p-0"><p className="text4">SỰ KHÁC BIỆT CHRONOGRAPH VÀ CHRONOMETER</p></div>
                <div><img className="img-fluid" src="https://phantri-techmaster.github.io/imgpamee/baiviet/bvbanner5.png"></img></div>
                <p className='text1 content-text-weight content-text-start'>Khi bước vào thế giới đồng hồ, chắc hẳn bạn sẽ nghe đến 2 từ: Chronograph và Chronometer. Chúng có gì khác biệt?</p>
                <p className='text2 content-text-weight content-text-color content-text-margin'>1. Bản chất của Chronograph và Chronometer</p>
                <div className='content-group-margin'>
                    <p className='text1'>Chronograph là chức năng bấm giờ của đồng hồ. Đồng hồ Chronograph là đồng hồ có chức năng bấm giờ, dùng đo lường chính xác một khoảng thời gian.</p>
                    <p className='text1'>Chronometer là một chứng nhận cao quý về độ chính xác của đồng hồ được kiểm duyệt và cấp bởi COSC (Contrôle Officiel Suisse des Chronomètres) - một tổ chức uy tín hoạt động độc lập, chịu trách nhiệm chứng nhận độ chính xác của đồng hồ ở Thụy Sĩ.</p>
                    <p className='text1'>Vậy về bản chất, Chronograph và Chronometer hoàn toàn khác biệt. Giờ thì chúng ta hãy tìm hiểu kỹ hơn về từng loại.</p>


                </div>

                <p className='text2 content-text-weight content-text-color content-text-margin'>2. Chronograph và đồng hồ Chronoraph</p>
                <div className='content-group-margin'>
                <p className='text1'></p>
                    <p className='text1'>Đồng hồ Chronogaph ra đời từ năm 1816. Đặc điểm nhận diện một chiếc Chronograph là chúng có thêm mặt số phụ hoặc mặt số điện tử (LCD) hiển thị thời gian bấm giờ. Mẫu Chronograph phổ biến nhất hiện nay có 3 mặt số phụ và 3 nút điều chỉnh.</p>
                    <p className='text1'>Tùy từng thiết kế và độ chính xác của phép đo mà các phiên bản Chronograph có cấu tạo và thông số khác nhau.</p>
                    


                </div>

                <p className='text2 content-text-weight content-text-color content-text-margin'>3. Chronometer và đồng hồ Chronometer</p>
                <div className='content-group-margin'>
                    <p className='text1'>Để đạt được chứng nhận COSC, một chiếc đồng hồ phải trải qua hàng loạt cuộc thử nghiệm khắc nghiệt được tiến hành trong 15 ngày đêm liên tục ở 5 vị trí và 3 mức nhiệt độ khác nhau. Đồng hồ đạt tiêu chuẩn ISO 1359, chỉ được phép sai số trong khoảng -4 đến +6 giây/ngày sẽ được cấp giấy chứng nhận (Chronometer Certificate) và một mã số xác minh duy nhất.</p>
                    <p className='text1'>Khi xuất xưởng, chúng được in dòng chữ “Chronometer” trên mặt số, nắp lưng hoặc trong máy đồng hồ.</p>
                    <p className='text1'>Tuy không có tiêu chuẩn cụ thể nào cho đồng hồ Quartz, nhưng COSC cũng tiến hành một quy trình thử nghiệm tương tự như đồng hồ cơ.</p>
                    <p className='text1'>Mỗi chiếc Quartz sẽ được thử nghiệm trong 11 ngày liên tục ở 1 vị trí và 3 mức nhiệt khác nhau. Ngoài ra, trong suốt 1 ngày, nó phải quay cả 3 chiều trong không gian để giả định như sử dụng ở thực tế bên ngoài. Cuối cùng, nó phải chịu 200 cú sốc tương đương với 100G (mạnh hơn 100 lần so với lực hấp dẫn).</p>
                    <p className='text1'>Một chiếc đồng hồ điện tử Chronometer có độ chính xác gấp 10 lần so với đồng hồ quartz thông thường. Hiện nay, chỉ có 3% đồng hồ Thụy Sĩ sản xuất ra có chứng nhận Chronometer, đủ để biết điều kiện đạt chuẩn Chronometer khó đến mức nào.</p>
                    <p className='text1'>Một chiếc đồng hồ Chronometer hoàn toàn có thể có chức năng Chronograph và ngược lại. Nhưng một chiếc Chronometer không đồng nghĩa với việc nó được tích hợp chức năng Chronograph. Hay chẳng đồng hồ Chronograph nào nhất thiết phải có chứng nhận Chronometer.</p>
                    <p className='text1'>Như vậy, chúng ta đã phân biệt và hiểu rõ hơn về Chronograph và Chronometer. Bạn đã tự tin hơn khi nhắc đến chúng trong các cuộc thảo luận liên quan đến đồng hồ rồi chứ?</p>
                   
                </div>

                



            </div>


            <div className="sale-event-line"></div>

            <Footer></Footer>
        </div>
    );
}

export default Chiase5; 