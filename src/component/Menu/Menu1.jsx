import { useState, useEffect } from "react";

function Menu1({onChangeState}){
    const [isMount, setIsMount] = useState(false)
    const [daotao, setDaoTao] = useState(false)
    const [tuyensinh, setTuyenSinh] = useState(false)
    const [nghiencuu, setNghienCuu] = useState(false)
    const [tintuc, setTinTuc] = useState(false)
    const [gioithieu, setGioiThieu] = useState(false)

    useEffect(()=>{
        setIsMount(!isMount);
    }, [])

    return (
        <div className="menu-list" style={{transform: isMount ? "translateX(0)" : "translateX(100%)"}}>
            <div className="menu-items">
                <div className="topp">
                    <a href="/daotao" className="menu-title">
                        <span>Đào Tạo</span>
                    </a>
                    <div className="btn-plus" onClick={()=>setDaoTao(!daotao)}>
                        <svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus-square">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                {!daotao ? <line x1="12" y1="8" x2="12" y2="16"></line> : null}
                            <line x1="8" y1="12" x2="16" y2="12"></line>
                        </svg>
                    </div>
                </div>

                <div className="bottomm" style={daotao ? {height: "164px"} : {height: 0}}>
                    <div className="subList-item">
                        <a href="/daotao/dh-cd" className="subItem-title"><span>Đại học và cao đẳng</span></a>
                    </div>
                    <div className="subList-item">
                        <a href="/daotao/sau-dai-hoc" className="subItem-title"><span>Sau đại học</span></a>
                    </div>
                    <div className="subList-item">
                        <a href="/daotao/dai-hoc-tu-xa" className="subItem-title"><span>Đại học từ xa</span></a>
                    </div>
                    <div className="subList-item">
                        <a href="/daotao/chuong-trinh-dao-tao" className="subItem-title"><span>Chương trình đào tạo</span></a>
                    </div>
                </div>
            </div>

            <div className="menu-items">
                <div className="topp">
                    <a href="/tuyensinh" className="menu-title">
                        <span>Tuyển Sinh</span>
                    </a>
                    <div className="btn-plus" onClick={()=>setTuyenSinh(!tuyensinh)}>
                        <svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus-square">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                {!tuyensinh ? <line x1="12" y1="8" x2="12" y2="16"></line> : null}
                            <line x1="8" y1="12" x2="16" y2="12"></line>
                        </svg>
                    </div>
                </div>

                <div className="bottomm" style={tuyensinh ? {height: "82px"} : {height: 0}}>
                    <div className="subList-item">
                        <a href="/tuyensinh/dai-hoc" className="subItem-title"><span>Đại học</span></a>
                    </div>
                    <div className="subList-item">
                        <a href="/tuyensinh/sau-dai-hoc" className="subItem-title"><span>Sau đại học</span></a>
                    </div>
                </div>
            </div>

            <div className="menu-items">
                <div className="topp">
                    <a href="/nghiencuu" className="menu-title">
                        <span>Nghiên Cứu</span>
                    </a>
                    <div className="btn-plus" onClick={()=>setNghienCuu(!nghiencuu)}>
                        <svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus-square">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                {!nghiencuu ? <line x1="12" y1="8" x2="12" y2="16"></line> : null}
                            <line x1="8" y1="12" x2="16" y2="12"></line>
                        </svg>
                    </div>
                </div>

                <div className="bottomm" style={nghiencuu ? {height: "123px"} : {height: 0}}>
                    <div className="subList-item">
                        <a href="/nghiencuu/cong-bo-KH" className="subItem-title"><span>Chuyên trang Công bố khoa học</span></a>
                    </div>
                    <div className="subList-item">
                        <a href="/nghiencuu/hoi-nghi-KH" className="subItem-title"><span>Hội nghị khoa học trường</span></a>
                    </div>
                </div>
            </div>

            <div className="menu-items">
                <div className="topp">
                    <a href="/tintuc" className="menu-title">
                        <span>Tin Tức</span>
                    </a>
                    <div className="btn-plus" onClick={()=>setTinTuc(!tintuc)}>
                        <svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus-square">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                {!tintuc ? <line x1="12" y1="8" x2="12" y2="16"></line> : null}
                            <line x1="8" y1="12" x2="16" y2="12"></line>
                        </svg>
                    </div>
                </div>

                <div className="bottomm" style={tintuc ? {height: "123px"} : {height: 0}}>
                    <div className="subList-item">
                        <a href="/tintuc/bai-bao-KH" className="subItem-title"><span>Bài báo khoa học</span></a>
                    </div>
                    <div className="subList-item">
                        <a href="/tintuc/tap-chi" className="subItem-title"><span>Tạp chí</span></a>
                    </div>
                </div>
            </div>

            <div className="menu-items">
                <div className="topp">
                    <a href="/gioithieu" className="menu-title">
                        <span>Giới Thiệu</span>
                    </a>
                    <div className="btn-plus" onClick={()=>setGioiThieu(!gioithieu)}>
                        <svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus-square">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                            {!gioithieu ? <line x1="12" y1="8" x2="12" y2="16"></line> : null}
                            <line x1="8" y1="12" x2="16" y2="12"></line>
                        </svg>
                    </div>
                </div>

                <div className="bottomm" style={gioithieu ? {height: "246px"} : {height: 0}}>
                    <div className="subList-item">
                        <a href="/gioithieu/quy-che" className="subItem-title"><span>Quy chế tổ chức và hoạt động</span></a>
                    </div>
                    <div className="subList-item">
                        <a href="/gioithieu/hoi-dong-truong" className="subItem-title"><span>Hội đồng trường</span></a>
                    </div>
                    <div className="subList-item">
                        <a href="/gioithieu/hoi-dong-KHDT" className="subItem-title"><span>Hội đồng Khoa học và Đào tạo</span></a>
                    </div>
                    <div className="subList-item">
                        <a href="/gioithieu/khoa" className="subItem-title"><span>Các khoa</span></a>
                    </div>
                    <div className="subList-item">
                        <a href="/gioithieu/cac-phong-chua" className="subItem-title"><span>Các phòng chức năng</span></a>
                    </div>
                    <div className="subList-item">
                        <a href="/gioithieu/danh-ba" className="subItem-title"><span>Danh bạ điện thoại</span></a>
                    </div>
                </div>
            </div>


            <div className="close-tab" onClick={onChangeState}>
                <span>ĐÓNG DANH MỤC</span>
            </div>
        </div>
    );
}

export default Menu1;