import { useState, useEffect, useLayoutEffect } from "react";
import diemchuan from "../../assets/img/diem-chuan-trung-tuyen-dien-uu-tien-xet-tuyen-thang-vao-dh-khtn-tphcm-1692702085711402156285.jpeg";
import ctdt from "../../assets/img/chuong-trinh-dao-tao-01.png";
import hcmus from "../../assets/img/hcmus.png"; 

function Admissions() {
    

    return ( 
        <div className="admission-page">
        <section className="slider-section mrg-bot-70" id="first-element-page">
            <div className="image-slider">
                <img src={diemchuan} alt="" />
                <div className="overlay-title"></div>
                <div className="content-overlay">
                <h1>Tuyển sinh</h1>
                <p className="title-text">HCMUS chào đón những sinh viên tài năng, đạt thành tích cao, những người có những quan điểm, kinh nghiệm và quan điểm đa dạng. Chúng tôi mời bạn tìm hiểu thêm về cách tham gia cộng đồng học thuật sôi động này.</p>
                </div>
            </div>
            </section>
            <section className="mrg-bot-70">
            <div className="container">
                <div className="flex-wrapper">
                <div className="sidebar-left-sticky" style={{position: "relative"}}  >
                    <ul className="sub_nav_list scroll-effect" id="sidebar-sticky">
                    <li className="sub_nav_item">
                        <a className="sub_nav_link " href="/tuyensinh/dai-hoc">
                        <span className="sub_nav_link_label">Tuyển Sinh Đại Học <i className="icofont-arrow-right"></i></span>
                        </a>
                    </li>
                    <li className="sub_nav_item">
                        <a className="sub_nav_link " href="/tuyensinh/sau-dai-hoc">
                        <span className="sub_nav_link_label">Tuyển Sinh Sau Đại Học <i className="icofont-arrow-right"></i></span>
                        </a>
                    </li>
                    <li className="sub_nav_item">
                        <a className="sub_nav_link " href="/tuyensinh/faq">
                        <span className="sub_nav_link_label">Thông Tin FAQ/Contact Us <i className="icofont-arrow-right"></i></span>
                        </a>
                    </li>
                    <li className="img-ads">
                        <img src={ctdt} alt="" />
                    </li>
                    </ul>
                </div>
                <div className="content-page-admission">
                    <div className="content_block">
                    <div className="content_block_inner">
                        <div className="typography">
                            <p>Trường Đại học Khoa học Tự nhiên nổi tiếng với trải nghiệm đại học độc đáo của mình, được gắn với Chương trình Giảng dạy Mở linh hoạt nhưng vẫn đảm bảo sự nghiêm khắc. Ngoài ra, trường còn tự hào là nơi có một loạt các chương trình thạc sĩ và tiến sĩ, các khóa học giáo dục chuyên nghiệp và các chương trình trước đại học đa dạng.</p>
                        </div>
                    </div>
                    </div>
                    <div className="component_block">
                    <article className="stat_simple">
                    <h4>7,125</h4>
                    <p>Sinh Viên</p>
                    </article> 
                    <article className="stat_simple">
                    <h4>2,689</h4>
                    <p>Đã Tốt Nghiệp</p>
                    </article>  
                    <article className="stat_simple">
                    <h4>611</h4>
                    <p>Giảng Viên</p>
                    </article>
                    </div>
                    <div className="content_block">
                    <div className="content_block_inner">
                        <div className="typography">
                            <p>Chúng tôi luôn tích cực tìm kiếm sinh viên đến từ nhiều nguồn gốc khác nhau trong mọi chương trình. Chúng tôi trân trọng tài năng học thuật xuất sắc, sự tò mò trí tuệ, góc nhìn cá nhân, sáng tạo và các đặc điểm động viên khác mà mỗi sinh viên đóng góp độc đáo cho cộng đồng của chúng tôi.</p>
                        </div>
                    </div>
                    </div>
                    <div className="image-block">
                    <img src={hcmus} alt="" />  
                    <p>Hcmus là một trường đại học nghiên cứu hàng đầu, nơi sự tò mò, sáng tạo và niềm vui trí tuệ của sinh viên thúc đẩy sự xuất sắc học thuật.</p>
                    </div>
                    <div className="component_body">
                    <div className="component_content">
                        <div className="component_content_group">
                        <h3 className="component_title">
                            <a className="component_title_link" href="#">Tuyển Sinh Đại Học
                            <span className="quick_nav_link_icon">
                                <span className="quick_nav_link_icon_default"><i className="icofont-arrow-right"></i></span>
                            </span>
                            </a>
                        </h3>
                        </div>
                    </div>
                    <div className="component_details">
                        <div className="component_peak_details_inner">
                        <div className="peak_details_caption">Các Chương trình đại học của Trường Đại học Khoa học Tự nhiên là những cơ hội độc đáo dành cho những bạn trẻ năng động và có trách nhiệm để trải nghiệm cuộc sống và học tập cấp đại học trên khuôn viên trường hoặc trong môi trường dựa trên vị trí.</div>
                        </div>
                    </div>
                    </div>
                    <div className="component_body">
                    <div className="component_content">
                        <div className="component_content_group">
                        <h3 className="component_title">
                            <a className="component_title_link" href="#">Tuyển Sinh Sau Đại Học
                            <span className="quick_nav_link_icon">
                                <span className="quick_nav_link_icon_default"><i className="icofont-arrow-right"></i></span>
                            </span>
                            </a>
                        </h3>
                        </div>
                    </div>
                    <div className="component_details">
                        <div className="component_peak_details_inner">
                        <div className="peak_details_caption">Được thiết kế để thúc đẩy sự nghiệp của các chuyên gia thành công, các chương trình thạc sĩ chuyên nghiệp được cung cấp thông qua các chương trình trên toàn thế giới.</div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
            </div>
    );
}

export default Admissions;