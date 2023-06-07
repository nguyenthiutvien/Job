// import React, { Component } from 'react';
// import axios from 'axios';
// import students from  './data.json';
// import { useState } from 'react';
// import { useEffect } from 'react';
import './Jobdetail.css';

import 'bootstrap/dist/css/bootstrap.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt,faPhone, faBriefcase,
  faMoneyBill, faBuilding, faBookmark, faGlobe
} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faTelegram} from '@fortawesome/free-brands-svg-icons';

// import 'https://kit.fontawesome.com/a076d05399.js';




function Header() {
  return (
    <div class="header">
      <ul>
        <li><img class="logo" src="https://www.rgf-hragent.asia/Upload_Data/upload/editor/img/20210629/6376059356992849561950706.png" /></li>
        <li><a href="./Commpanydetail.js">Tìm việc làm</a></li>
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

const Job = () => {
  return (
    <div class='container'>
      <div class='row'>

        <div class='col-sm-2'>
          <img src='https://rpaviet.files.wordpress.com/2020/07/logo-hpt.png?w=750' width='50%' height='30%' />
        </div>
        <div class='col-sm-6'>
          <h3><b>Thực tâp sinh Front-End</b></h3>
          <p class='company'>Công ty dịch vụ công nghệ Tin Học</p><br />
          <p><FontAwesomeIcon icon={faMapMarkerAlt} />  Hồ Chí Minh</p>
          <p><FontAwesomeIcon icon={faMoneyBill} /> Thương lượng</p>
          <p><FontAwesomeIcon icon={faBuilding} />   Computer & Information Technology</p>
          <p><FontAwesomeIcon icon={faBriefcase} />  Fulltime</p>
          <span class='button'>
            <a href="#" class="btn btn-info" role="button">ỨNG TUYỂN NHANH</a>
            <button type="button" class="btn btn-outline-info"> <FontAwesomeIcon icon={faBookmark} /> LƯU LẠI </button>
          </span>
        </div>
        <div class='col-sm-4'>

        </div>
      </div><br /><hr /><br /><br />
      <div class='row'>
        <div class='col-sm-8'>
          <h5><b>Skills</b></h5><br />
          <ul>
            <li><button type="button" class="btn btn-outline-secondary btn-rounded" data-mdb-ripple-color="dark">JavaScript</button></li>
            <li><button type="button" class="btn btn-outline-secondary btn-rounded" data-mdb-ripple-color="dark">HTML & CSS</button></li>
            <li><button type="button" class="btn btn-outline-secondary btn-rounded" data-mdb-ripple-color="dark">Responsive Design</button></li>
            <li><button type="button" class="btn btn-outline-secondary btn-rounded" data-mdb-ripple-color="dark">React js</button></li>
          </ul><br />
          <div>
            <h5><b>Chi tiết công việc Thực Tập Sinh Front-end tại Hpt Corporation</b></h5><br />
            <h5><b>MÔT TẢ CÔNG VIỆC</b></h5><br />
            <p>- Triển khai HTML/CSS/JavaScript theo design. </p>
            <p>- Đảm bảo tiêu chuẩn đồ họa chất lượng và sự thống nhất trong việc thiết kế các sản phẩm.</p>
            <p>- Cải thiện UI/UX, tính năng và hiệu năng ứng dụng trong quá trình vận hành.</p><br />
          </div>
          <div>
            <h5><b>YÊU CẦU CÔNG VIỆC</b></h5><br />
            <p>- Sinh viên năm thứ 3 trở lên các trường đại học chuyên ngành công nghệ thông tin, chuẩn bị tốt nghiệp hoặc có kinh nghiệm làm việc thuộc lĩnh vực phát triển phần mềm.</p>
            <p>- Thành thạo HTML, CSS, LESS, JavaScript, Ajax, Responsive Design.</p>
            <p>- Có kinh nghiệm về thẩm mỹ và tư duy logic trong phân chia bố cục trang web.</p>
            <p>- Có kiến thức về UX/UI.</p>
            <p>- Dynamic HTML.</p>
          </div><br />
          <div>
            <h5><b>PHÚC LỢI</b></h5><br />
            <p>- Được học tập, nghiên cứu cùng đội ngũ kỹ sư nhiều năm kinh nghiệm để phát triển những giải pháp mới cho khách hàng doanh nghiệp.</p>
            <p>- Cơ hội học hỏi framework mới, học hỏi và thu thập kinh nghiệm trong lĩnh vực phát triển phần mềm cho doanh nghiệp, gia tăng hiểu biết về nghiệp vụ doanh nghiệp như: Ngân hàng, tổ chức chính phủ, công ty sản xuất…</p>
          </div>
          <div class='company1'>
          <div class='company2'>
            <h4><b>Giới thiệu về công ty</b></h4><br />
            <div class='row'>
              <div class='col-sm-2'>
                <img src='https://rpaviet.files.wordpress.com/2020/07/logo-hpt.png?w=750' width='50%' height='30%' />
              </div>
              <div class='col-sm-10'>
                <p><b>Hpt Corporation</b></p>
                <p>Information Technology and Services - 201-500 nhân viên</p>
                <p><FontAwesomeIcon icon={faGlobe} /> <FontAwesomeIcon icon={faFacebook} />  <FontAwesomeIcon icon={faPhone} /></p>
              </div>
            </div>
            <p>Trải qua 28 năm xây dựng và phát triển, Công ty Cổ phần Dịch vụ Công nghệ Tin học HPT
              (HPT Vietnam Corporation) kiên định với sứ mệnh thấu hiểu và phát triển những ứng dụng công nghệ tiên tiến
              cho khách hàng vì sự phồn vinh của khách hàng, của HPT và của Việt Nam. Tầm nhìn của Ban lãnh đạo
              hướng đến sự phát triển mạnh mẽ và bền vững của HPT: Xây dựng HPT trở thành công ty công nghệ hàng đầu
              trong các lĩnh vực giải pháp dịch vụ CNTT-Truyền thông, Phát triển phần mềm và Tích hợp các công nghệ
              tiên tiến.. Vì vậy, HPT tích cực chuyển đổi nội tại để ngày càng vững mạnh, đồng hành cùng sự
              chuyển đổi của khách hàng. HPT hiện nay đã phát triển khắp Việt Nam và từng bước vươn ra thị trường
              thế giới: Trụ sở chính tại TP.HCM, Chi nhánh tại Hà Nội, VPĐD tại Đà Nẵng, VPĐD tại Campuchia...</p><br />
            <h5><b>Địa chỉ công ty</b></h5>
            <p>Lô E2a-3 Đường D1, Khu Công Nghệ Cao , Phường Long Thạnh Mỹ, Thành phố Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam</p>
          </div>
          </div>
        </div>
        <div class='col-sm-4'></div>
      </div><br/><br/>
    </div>
    
  )
}
  const Footer = () => {
    return (
         <footer><br/><br/>
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
              <li><a href='#'><img src='https://luatdonga.com/wp-content/uploads/2016/06/thong-bao-website-thuong-mai-dien-tu-voi-bo-cong-thuong.png' width='60%' height='50%'/> </a></li>
              <li><h5><b>Kết nối với Jobstreet</b></h5></li>
              <li class='icon'><p><FontAwesomeIcon icon={faTwitter} /> <FontAwesomeIcon icon={faFacebook} />  <FontAwesomeIcon icon={faTelegram} /></p></li>
            </ul> 
          </div>
         </div>
        </div>
      </footer>

    );
  }
function App() {
  return (
    <div>
      <Header />
      <Job/>
    <Footer/>

    </div>
  )
}
export default App;
