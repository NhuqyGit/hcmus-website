import React, { useContext, useState } from "react";
import "./Menu.scss";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import AcademicsNav from "../Academics/AcademicsNav";
import AdmissionNav from "../Admission/AdmissionNav";
import ResearchNav from "../Research/ResearchNav";
import NewsNav from "../News/NewsNav";
import IntroduceNav from "../Introduce/IntroduceNav";

import Academics from "../Academics/Academics";
import UniAndCol from "../Academics/UniAndCol";
import Graduate from "../Academics/Graduate";
import DistanceUni from "../Academics/DistanceUni";
import Curriculum from "../Academics/Curriculum";

import logo from "../../assets/logo.svg";
import back from "../../assets/back.jpg";
import { MyContext } from "../../MyContext";

import backMenu1 from "../../assets/img/backMenu1.jpg";
import backMenu2 from "../../assets/img/backMenu2.jpg";
import backMenu3 from "../../assets/img/backMenu3.png";
import backMenu4 from "../../assets/img/backMenu4.jpg";


function Menu({isClick, onChangeState}) {
    const [pos, setPos] = useState(0)
    const [isOpen, setOpen] = useState(false)

    const backMenu = [back, backMenu1, backMenu2, backMenu3, backMenu4]
    const subNav = [<AcademicsNav />, <AdmissionNav />, <ResearchNav/>, <NewsNav/>, <IntroduceNav/>]
    const items = [
        {
            title: "Đào tạo",
            delay: '0.22s'
        },
        {
            title: "Tuyển sinh",
            delay: '0.24s'
        },
        {
            title: "Nghiên cứu",
            delay: '0.26s'
        },
        {
            title: "Tin tức",
            delay: '0.28s'
        },
        {
            title: "Giới thiệu",
            delay: '0.3s'
        }
    ]
    const handleClick = (index)=>{
        if(pos === index && isOpen){
            setOpen(false);
        }
        else{
            setPos(index);
            setOpen(true);
        }
    }
    
    const listItem = items.map((item, index)=>{
        return (
            <li key={index.toString()} className={isClick ? 'appear' : ""} style={{transitionDelay: item.delay}}>
                <button className="btnNav" onClick={()=>handleClick(index)}>
                    <span 
                        className={(pos===index && isOpen ? `btnNavActive` : "") + (!isOpen ? ' noActiveHover' : '')}
                        style={{color: pos===index || !isOpen ? 'white' : '#8996a0'}}>{item.title}</span>
                </button>
            </li>
        )
    })

    return (
        <div className="menu" style={{top: isClick ? 0 : '-100%', backgroundImage: `url(${backMenu[pos]})`}}>
            <div className="menuHeader">
                <div className="logo">
                    <a href="/">
                        <img src={logo} alt=""/>
                    </a>
                        <div className="logo-title">
                            <h1>TRƯỜNG ĐẠI HỌC KHOA HỌC TỰ NHIÊN, ĐHQG-HCM</h1>
                            <h3>HCMUS VNUHCM-US</h3>
                        </div>
                </div>
                <div className="btn-close" onClick={onChangeState}>
                    <span>Đóng</span>
                    <div className="icon-close">
                        <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.3679 15.0131L24.0919 7.33126C24.4622 6.9647 24.4622 6.37126 24.0919 6.00563C23.7226 5.63907 23.1226 5.63907 22.7532 6.00563L15.0357 13.6809L7.24693 5.89126C6.87756 5.52095 6.27756 5.52095 5.90818 5.89126C5.53881 6.26251 5.53881 6.86345 5.90818 7.23376L13.6913 15.0178L5.88006 22.7859C5.51068 23.1525 5.51068 23.7459 5.88006 24.1116C6.24943 24.4781 6.84943 24.4781 7.21881 24.1116L15.0235 16.35L22.7813 24.1088C23.1507 24.4791 23.7507 24.4791 24.1201 24.1088C24.4894 23.7375 24.4894 23.1366 24.1201 22.7663L16.3679 15.0131Z" fill="white"/>
                        </svg>
                    </div>

                </div>
                {/* <button className="btn-close" onClick={onChangeState}>
                </button> */}
            </div>
            <div className="menu-container">
                <div className="cc">
                    <ul className="nav">
                        {listItem}
                    </ul>
                </div>

                {isOpen ? subNav[pos] : null}

                

                {/* <div>
                    <Routes>
                        <Route path="/daotao/*" element={<AcademicsNav />}>
                            <Route path="dao-tao" element={<Academics />}></Route>
                            <Route path="dai-hoc-va-cao-dang" element={<UniAndCol />}></Route>
                            <Route path="sau-dai-hoc" element={<Graduate />}></Route>
                            <Route path="dai-hoc-tu-xa" element={<DistanceUni />}></Route>
                            <Route path="chuong-trinh-dao-tao" element={<Curriculum />}></Route>
                        </Route>
                        <Route path="/tuyensinh" element={<AdmissionNav />}></Route>
                        <Route path="/nghiencuu" element={<ResearchNav />}></Route>
                        <Route path="/tintuc" element={<NewsNav />}></Route>
                        <Route path="/gioithieu" element={<IntroduceNav />}></Route>
                    </Routes>
                </div> */}
            </div>

        </div>
    );
}

export default Menu;