import { useState } from "react";



function Search1({onChangeState}) {
    const [input, setInput] = useState("")
    const listCommon = [
        "Học phí của trường như thế nào?",
        "Xét học bổng",
        "Tuyển sinh đại học ra sao ?",
        "Chương trình đào tạo",
        "Ngành Công nghệ Thông tin tyển sinh",
        "Tìm thông tin về chương trình đại học ở đâu?",
        "Học phí ngành Khoa học Máy tính",
        "Thực tập sinh du học",
        "Đăng ký đồ án tốt nghiệp"
    ]

    const renderCommon = listCommon.map((common, i)=>{
        return (
            <div key={i.toString()} style={i === listCommon.length - 1 ? {borderBottom: "2px solid rgba(255, 255, 255, 0.3)"} : {}} className="common-listItem">
                <a className="common-name">
                    <span>{common}</span>
                </a>
            </div>
        )
    })

    return ( 
        <div className="search-container">
            <div className="input-search">
                <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
            </div>
            <div className="btn-search">
                <a  href={`/timkiem?q=${encodeURIComponent(input)}`}>
                    <span>TÌM KIẾM</span>
                </a>
            </div>

            <div className="common-title">
                <span>Tìm kiếm phổ biến</span>
            </div>

            <div className="common-list">
                {renderCommon}
            </div>

            <div className="close-tab" onClick={onChangeState}>
                <span>ĐÓNG TÌM KIẾM</span>
            </div>
        </div>
    );
}

export default Search1;