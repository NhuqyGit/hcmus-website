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


function Menu({isClick, onChangeState}) {
    const [pos, setPos] = useState(0)
    const [isOpen, setOpen] = useState(false)

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
        },
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
    
    console.log(pos)
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
        <div className="menu" style={{top: isClick ? 0 : '-100%', backgroundImage: `url(${back})`}}>
            <div className="menuHeader">
                <div className="logo">
                    <img src={logo} alt=""/>
                    <h1>HCMUS VNUHCM-US</h1>
                </div>
                <button onClick={onChangeState}>X</button>
            </div>
            <div className="menu-container">
                <ul className="nav">
                    {listItem}
                </ul>

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