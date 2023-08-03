import React from "react";
import "./Menu.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import AcademicsNav from "../Academics/AcademicsNav";
import AdmissionNav from "../Admission/AdmissionNav";
import ResearchNav from "../Research/ResearchNav";
import NewsNav from "../News/NewsNav";
import IntroduceNav from "../Introduce/IntroduceNav";

function Menu() {
    return (
        <div className="menu">
            <div>
                <ul>
                    <li>
                        <Link to="/daotao">ĐÀO TẠO</Link>
                    </li>
                    <li>
                        <Link to="/tuyensinh">TUYỂN SINH</Link>
                    </li>
                    <li>
                        <Link to="/nghiencuu">NGHIÊN CỨU</Link>
                    </li>
                    <li>
                        <Link to="/tintuc">TIN TỨC</Link>
                    </li>
                    <li>
                        <Link to="/gioithieu">GIỚI THIỆU</Link>
                    </li>
                </ul>
            </div>

            <div>
                <Routes>
                    <Route path="/daotao" element={<AcademicsNav />}></Route>
                    <Route path="/tuyensinh" element={<AdmissionNav />}></Route>
                    <Route path="/nghiencuu" element={<ResearchNav />}></Route>
                    <Route path="/tintuc" element={<NewsNav />}></Route>
                    <Route path="/gioithieu" element={<IntroduceNav />}></Route>
                </Routes>
            </div>
        </div>
    );
}

export default Menu;