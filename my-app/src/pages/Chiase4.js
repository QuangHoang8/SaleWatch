import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Footer from './Footer';
import Menu from './Menu';
function Chiase4() {
    document.title = "Cách phân biệt đồng hồ nam chính hãng";
    return (
        <div>
            <Menu />
            <div className="under-menu">
                <div className="web-cocation d-flex justify-content-center align-items-center">
                    <Link to="/"><p className="text2">Trang chủ&nbsp;</p></Link>
                    <img className="web-cocation-icon" src="https://phantri-techmaster.github.io/imgpamee/arrow.png" alt="" />
                    <Link to="/chiase"><p className="text2">Chia sẻ&nbsp;</p></Link>
                    <img className="web-cocation-icon" src="https://phantri-techmaster.github.io/imgpamee/arrow.png" alt="" />
                    <p className="text2 web-cocation-now">&nbsp;Cách phân biệt đồng hồ nam chính hãng</p>
                </div>
            </div>
            <div className="group-all container-xl">
                <div className="text-center p-0"><p className="text4">CÁCH PHÂN BIỆT ĐỒNG HỒ NAM CHÍNH HÃNG</p></div>
                <div><img className="img-fluid" src="https://phantri-techmaster.github.io/imgpamee/baiviet/bvbanner1.png"></img></div>
                <p className='text1 content-text-weight content-text-start'>Để không trở thành "miếng mồi" béo bở của cánh gian thương, người tiêu dùng hãy tự trang bị cho mình những kiến thức cơ bản nhất về phân biệt đồng hồ thật - giả!</p>
                <p className='text2 content-text-weight content-text-color content-text-margin'>1. Kiểm tra đồng hồ chính hãng qua mặt số và mặt kính</p>
                <div className='content-group-margin'>
                    <p className='text1'>Để nhận biết đồng hồ thật - giả, dấu hiệu đầu tiên bạn cần quan tâm đó là mặt số và kính đồng hồ. Mặt đồng hồ hàng hiệu chính hãng được thiết kế hoàn hảo, các chi tiết in khắc sắc nét, rõ ràng. Ngoài ra, bạn cần chú ý đến các tiểu tiết như kim và cọc số, chúng tuy nhỏ nhưng để đạt được sự cân đối, nhẵn mịn không phải đơn giản. Điều này chỉ các thương hiệu đồng hồ chính hãng mới làm được.</p>
                    <p className='text1'>Với đồng hồ hàng hiệu chính hãng, kim là một chỉnh thể cân đối, không có gờ hay gợn. Trường hợp kim vát hai bên, mặt vát phải đều nhau, tạo thành một tam giác cân. Đường rãnh dọc kim sắc nét, đi từ đỉnh xuống dưới. Ở đồng hồ hàng hiệu chính hãng, đặc biệt với đồng hồ cơ, kim giây thường chạy rất mượt. Trong khi đó, kim giây hàng fake không tránh khỏi hiện tượng giật giật, đứt quãng.</p>
                    <p className='text1'>Mọi chi tiết trên mặt số đồng hồ nam hàng hiệu chính hãng đều được trau chuốt một cách tỉ mỉ. Bất kể sự cẩu thả nào trong gia công thiết kế đều là bằng chứng tố cáo sự giả dối của hàng fake.</p>
                    <p className='text1'>Đối với đồng hồ hàng hiệu chính hãng có mặt kính Sapphire, ta có thể nhận biết loại kính này bằng một phương pháp đơn giản: nhỏ một giọt nước lên bề mặt kính và nghiêng đồng hồ.</p>
                    <p className='text1'>Do Sapphire và kính thường có độ căng khác nhau nên sẽ có sự khác biệt. Nếu giọt nước bị chảy đi thì kính đồng hồ là kính thường, nếu giọt nước tụ lại một chỗ và không bị chảy thì đó là kính Sapphire. Tuy nhiên, phương pháp này được xác định là chưa chuẩn xác 100%. Cách chính xác nhất, bạn có thể dùng máy đo độ cứng để xác định chính xác nhất.</p>
                    <p className='text1'></p>
                    <p className='text1'></p>
                    <p className='text1'></p>
                    <p className='text1'></p>

                </div>

                <p className='text2 content-text-weight content-text-color content-text-margin'>2. Cách phân biệt qua dây đồng hồ chính hãng</p>
                <div className='content-group-margin'>
                <p className='text1'>Với những thiết kế dây kim loại, khi gập hai mắt liền nhau, đồng hồ chính hãng có độ mở tất cả mắt xích tương đồng, hàng nhái thường không. Mặt trong và khe giữa các mắt dây đồng hồ thật vẫn đảm bảo độ láng mịn, còn ở hàng giả thường bị nhám và được làm cẩu thả.</p>
                    <p className='text1'>Với đồng hồ dây kim loại: Bạn kiểm tra bằng cách giữ chặt dây đồng hồ lắc qua lắc lại, nếu là đồng hồ hàng hiệu chính hãng, dây rất chắc chắn; nếu là hàng giả, dây thường lỏng lẻo, nhanh giãn.</p>
                    <p className='text1'>Khi cắt dây đồng hồ, chốt dây phải dễ dàng tháo được nhưng chắc chắn (không cần đập nhiều nhát mới ra), sau đó lắp lại vẫn như mới. Tuy nhiên, điều này khá khó vì phụ thuộc vào cảm giác của mỗi người.</p>
                    <p className='text1'>Với đồng hồ dây da nam chính hãng: mặt sau dây thường được in mã đồng hồ, mã số đường dây, các đường nét thanh mảnh, gọn gàng. Trong khi đó đồng hồ fake có dây với đường chỉ khâu lộn xộn, thường không có mã sản phẩm, mã dây.</p>
                    <p className='text1'></p>
                    <p className='text1'></p>
                    <p className='text1'></p>
                    <p className='text1'></p>


                </div>

                <p className='text2 content-text-weight content-text-color content-text-margin'>3. Kiểm tra chính hãng qua dấu hiệu khắc, dập</p>
                <div className='content-group-margin'>
                <p className='text1'></p>
                    <p className='text1'>Các chi tiết khắc dập phải thật sắc sảo, đồng đều, không bị nhòe. Thông thường, đồng hồ hàng hiệu chính hãng có biểu tượng được dập khắc ở núm hoặc khóa dây.</p>
                    <p className='text1'>Phần đáy đồng hồ in một số thông số kỹ thuật cơ bản như: chất liệu vỏ, chất liệu kính, độ chịu nước, loại máy, model hoặc serial. Bạn có thể kiểm tra xem những thông tin này có khớp với thông tin được đăng tải trên trang web chính thức của nhà sản xuất hay không. Ngoài ra, các con số phải được in với độ nông sâu đồng đều, sắc nét và cân đối.</p>
                    <p className='text1'></p>
                    <p className='text1'></p>
                    <p className='text1'></p>
                    <p className='text1'></p>
                    <p className='text1'></p>

                </div>

                <p className='text2 content-text-weight content-text-color content-text-margin'>4. Kiểm tra tem và phiếu bảo hành</p>
                <div className='content-group-margin'>
                    <p className='text1'>Đồng hồ hàng hiệu chính hãng bao giờ cũng phải đi kèm với hộp đựng, túi xách, hướng dẫn sử dụng đóng quyển và thẻ bảo hành toàn cầu của hãng. Logo và chữ in trên các phụ kiện này phải rõ nét, sắc sảo và phản ánh đúng các thông tin được khắc dập trên đồng hồ.</p>
                    <p className='text1'>Ngược lại, đồng hồ nhái thường không có phụ kiện đi kèm; hoặc nếu có, phụ kiện trông cũng không được “xịn” như hàng thật. Để mua được đồng hồ hàng hiệu chính hãng, bạn cần tỉnh táo, tìm hiểu kĩ lưỡng, tránh hấp tấp quyết định. Nếu có điều kiện bạn nên hỏi thêm chuyên gia tư vấn, vì công nghệ làm giả ngày càng tinh vi.</p>

                </div>

            </div>


            <div className="sale-event-line"></div>

            <Footer></Footer>
        </div>
    );
}

export default Chiase4; 