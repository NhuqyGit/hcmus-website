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
                        <a className="sub_nav_link " href="#">
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
                            <p>Brown is renowned for its distinctive undergraduate experience rooted in its flexible yet rigorous Open Curriculum. Our campus is also home to the Warren Alpert Medical School and a wide array of master's and doctoral programs, executive education offerings and pre-college programs.</p>
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
                            <p>Across each and every program, we actively seek students from a wide variety of backgrounds. We value the exceptional academic talent, intellectual curiosity, individual perspectives, creativity, and other defining attributes that each student uniquely contributes to our community.</p>
                        </div>
                    </div>
                    </div>
                    <div className="image-block">
                    <img src={hcmus} alt="" />  
                    <p>Brown is a leading research university where the curiosity, creativity and intellectual joy of students drives academic excellence.</p>
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
                        <div className="peak_details_caption">Designed to advance the careers of accomplished professionals from across the globe, executive master’s degrees are offered through the School of Professional Studies.</div>
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
                        <div className="peak_details_caption">Brown Pre-College Summer Programs are unique opportunities for motivated, responsible young people to experience university-level life and learning on campus or in a location-based environment.</div>
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