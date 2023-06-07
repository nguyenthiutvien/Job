import './Companydetail.css';

import 'bootstrap/dist/css/bootstrap.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMapMarkerAlt, faPhone, faBriefcase,
    faMoneyBill, faBuilding, faBookmark, faGlobe
} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faTelegram } from '@fortawesome/free-brands-svg-icons';

function Header() {
    return (
        <div class="header">
            <ul>
                <li><img class="logo" src="https://www.rgf-hragent.asia/Upload_Data/upload/editor/img/20210629/6376059356992849561950706.png" /></li>
                <li><a href="">Tìm việc làm</a></li>
                <li><a href="">Tìm thực tập</a></li>
                <li><a href="">Danh sách công ty</a></li>
                <li><a href="">Bài đăng</a></li>
                <li><a href="">Liên hệ</a></li>
                <li class='login'><a href="">Đăng nhập</a></li>
                <li class='login'><a href="">Đăng ký</a></li>
            </ul><hr /><br />
        </div>
    )
};

const Company = () => {
    return (
        <div class='container'>
            <div class='about'>
                <div class='row'>
                    <img src='https://scontent.fdad1-4.fna.fbcdn.net/v/t39.30808-6/299326047_433718502109145_4193758203224616655_n.png?stp=dst-png_s960x960&_nc_cat=100&ccb=1-7&_nc_sid=e3f864&_nc_ohc=U95LEhhF87sAX9UNARu&_nc_ht=scontent.fdad1-4.fna&oh=00_AfDU-GLK3BeqkRgtYCgfPTkvA0dw5eyTh5WG0NZzcBjVBw&oe=6483E944' width='90%' height='90%' />
                </div><br />
                <div class='row'>
                    <div class='col-sm-3'>
                        <img src='https://media.licdn.com/dms/image/C560BAQFYI_1BMyCE_w/company-logo_200_200/0/1617802601719?e=2147483647&v=beta&t=-HB4Zq624Wwn7mFj_bwZg1X14UOlR1bZnD3FxB7Vsf8' />
                    </div>
                    <div class='col-sm-9'>
                        <h4>Công ty TNHH ONE TECH STOP VIỆT NAM</h4>
                        <p>Chúng tôi cung cấp các giải pháp và hỗ trợ CNTT cho tất cả các khách hàng và đối tác của Ocean Network Express</p>
                        <div class='row'>
                            <table>
                                <tr>
                                    <td>Địa điểm</td>
                                    <td>Hải Châu - Đà Nẵng</td>
                                    <td>Website</td>
                                    <td><a href='https://ots.one-line.com/?lang=vi'>https://ots.one-line.com/?lang=vi</a></td>
                                </tr>
                                <tr>
                                    <td>Lĩnh vực kinh doanh</td>
                                    <td>Information Technology and Services</td>
                                    <td>Quy mô</td>
                                    <td>51 - 150</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div><hr />
                <div class='row'>
                    <div class='col-sm-6'></div>
                    <div class='col-sm-2'>
                        <button type="button" class="btn btn-outline-info"> <FontAwesomeIcon icon={faBookmark} /> LƯU LẠI </button>
                    </div>
                    <div class='col-sm-4'>
                        <button type="button" class="btn btn-warning">XEM VIỆC LÀM ĐANG ỨNG TUYỂN</button>
                    </div><br />
                </div><br />
            </div><br /><br />
            <div class='row'>
                <div class='col-sm-8'>
                    <div>
                        <h5>Thông tin công ty</h5><br />
                        <h6>Giới thiệu</h6><hr />
                        <p>
                            ONE Tech Stop là công ty con của ONE, chúng tôi tập trung vào Hoạt động CNTT
                            & Tối ưu hóa cơ sở hạ tầng, Tăng cường quản trị & bảo mật CNTT cũng như Hiện thực hóa các hoạt động
                            đổi mới & chuyển đổi ra nước ngoài cho ONE. <br /> <br />Văn phòng trụ sở chính của chúng tôi nằm trong một căn nhà phố
                            được xây dựng vào năm 1896, trong khi văn phòng chi nhánh của chúng tôi được thiết kế theo phong cách Hanok
                            cổ của Hàn Quốc. Đây là khái niệm nơi cái cũ gặp cái mới, nơi những điều mới mẻ và thú vị được phát triển
                            bằng cách sử dụng công nghệ mới nhất trong sự thoải mái của một văn phòng cộng hưởng với nét quyến rũ cũ của kiến ​trúc
                            & thiết kế cổ xưa. Ở OTS, chúng tôi coi trọng lịch sử và tôn trọng văn hóa. Chúng tôi tin rằng lịch sử là chất xúc tác
                            cho tiến bộ công nghệ và hiểu biết về văn hóa là điều cần thiết để chúng tôi sử dụng công nghệ một cách phù hợp để cải thiện mọi thứ.
                        </p>
                    </div><br />
                    <h6>Văn hoá doanh nghiệp</h6><hr />
                    <p>Ở OTS, chúng tôi coi trọng lịch sử và tôn trọng văn hóa. Chúng tôi tin rằng lịch sử là chất xúc tác cho tiến bộ công nghệ và hiểu biết về văn hóa
                        là điều cần thiết để chúng tôi sử dụng công nghệ một cách phù hợp để cải thiện mọi thứ.</p><br /><hr />
                    <h6>Địa chỉ văn phòng</h6>
                    <p>Tầng 3 -4 Tòa nhà Phi Long Technology, 52 Nguyễn Văn Linh, Hải Châu, Hải Châu, Việt Nam</p><br />
                    <h5>Việc làm</h5><hr />
                    <div class='career'>
                        <h5><a href=''>Cloud Engineer</a></h5>
                        <p>Singapore</p><hr />
                        <h5><a href=''>Backend Developer</a></h5>
                        <p>TP.Đà Nẵng</p><hr />
                        <h5><a href=''>Thực Tập Sinh Front-end</a></h5>
                        <p>TP.Hồ Chí Minh</p><hr />
                    </div>
                </div>
                <div class='col-sm-4'>
                    <div class="card card-margin">
                        <div class="card-body pt-0">
                            <div>
                                <h5>Theo dõi</h5>
                                <p><FontAwesomeIcon icon={faFacebook} /> <FontAwesomeIcon icon={faTwitter} /> <FontAwesomeIcon icon={faTelegram} /></p>
                                <h5>Hình ảnh công ty</h5>
                                <img src='https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/329141007_1398472594316712_3244195778638485817_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=O6Z4SyMT7rcAX_-Rgyi&_nc_ht=scontent.fdad2-1.fna&oh=00_AfBkYpLXRSd6OQ3jBwHpXFWaXTce5bAoFVk0Ar4psDD9tw&oe=6483C116' width='90%' height='90%' /><br /><br />
                                <p><img src='https://ots.one-line.com/wp-content/uploads/2019/08/DSC_4823.jpg' width='50%' height='50%' /> </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div><br /><br />
        </div>
    )
}

const Footer = () => {
    return (
        <footer><br /><br />
            <div class='container'>
                <div class='row'>
                    <div class='col-sm-3'>
                        <ul>
                            <li><h5><b>Jobstreet</b></h5></li>
                            <li>Về chúng tôi</li>
                            <li>Liên hệ</li>
                            <li>Thoả thuận </li>
                        </ul>
                    </div>
                    <div class='col-sm-3'>
                        <ul>
                            <li><h5><b>Dành cho Nhà tuyển dụng</b></h5></li>
                            <li>Liên hệ</li>
                            <li>Đăng tuyển dụng</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div class='col-sm-3'>
                        <ul>
                            <li><h5><b>Dành cho ứng viên</b></h5></li>
                            <li>Tìm việc làm</li>
                            <li>Tìm thực tập</li>
                            <li>Việc làm theo Địa điểm</li>
                        </ul>
                    </div>
                    <div class='col-sm-3'>
                        <ul>
                            <li><h5><b>Chứng nhận</b></h5></li>
                            <li><a href='#'><img src='https://luatdonga.com/wp-content/uploads/2016/06/thong-bao-website-thuong-mai-dien-tu-voi-bo-cong-thuong.png' width='60%' height='50%' /> </a></li>
                            <li><h5><b>Kết nối với Jobstreet</b></h5></li>
                            <li class='icon'><p><FontAwesomeIcon icon={faTwitter} /> <FontAwesomeIcon icon={faFacebook} />  <FontAwesomeIcon icon={faTelegram} /></p></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>

    );
}

function Commpanydetail() {
    return (
        <div>
            <Header />
            <Company />
            <Footer />

        </div>
    )
}
export default Commpanydetail;