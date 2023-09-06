import "./FAQ.scss";
import React, { useState } from "react";
import CollapsibleContent from "./CollapsibleContent";
function FAQ() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    question: "",
  });
  const [isMount, setMount] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    if(formData.email === "" || formData.name === "" || formData.question === ""){
      setMount(false)
    }
    else{
      setMount(true)
    }
    setFormData({name: "", email: "", question: ""})
    console.log(formData);
  };

  function getContent(isTrue) {
    if (isTrue !== null) {
      if(isTrue === false)
        return (
          <div className="thongbao">
            <span>Vui lòng nhập đầy đủ thông tin</span>;
          </div>
        )
      else {
        return (
          <div className="thongbao">
            <span>Gửi thành công</span>;
          </div>
        )
      }
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const data = [
    {
      title:
        "1. Trường ĐH Khoa học Tự nhiên, ĐHQG-HCM là đại học công lập hay đại học dân lập?",
      content: (
        <ol>
          <li>
            - Trường ĐH Khoa học Tự nhiên, ĐHQG-HCM là trường đại học công lập,
            là một trong 6 trường đại học thành viên của ĐH Quốc gia TP.HCM.
          </li>
          <li>
            - Trường ĐH Khoa học Tự nhiên, ĐHQG-HCM được thành lập theo quyết
            định 1236/GDĐT của Bộ GD&ĐT ngày 30/3/1996 trên cơ sở tách ra từ
            Trường Đại học Tổng hợp TP.HCM để tham gia vào Đại học Quốc gia
            TP.HCM
          </li>
        </ol>
      ),
    },
    {
      title: "2. Phương thức xét tuyển năm học 2023",
      content: (
        <div>
          <img
            src="https://tuyensinh.hcmus.edu.vn/images/2023/04/19/pa2-mt-trc.png"
            alt="Phương thức xét tuyển 2023"
            style={{ maxWidth: "100%", height: "auto" }}
          ></img>
        </div>
      ),
    },
    {
      title:
        "3. Cho em hỏi Khoa CNTT có nhiều chương trình như Chất lượng cao, Tiên tiến...., có phải em trúng tuyển vào khoa CNTT rồi mới chọn vào các chương trình đó phải không?",
      content: (
        <div>
          <p>
            Khoa CNTT của Trường có nhiều chương trình và mỗi chương trình đều
            tuyển riêng. Thí sinh đăng ký xét tuyển nguyện vọng theo thông tin
            sau:
          </p>

          <ol>
            <li>
              <strong>Nhóm ngành Máy tính và CNTT</strong>
              <br />
              - Mã ngành: 7480201_NN
              <br />- Tổ hợp môn xét tuyển: A00, A01, D07, B08
            </li>
            <li>
              <strong>Ngành Công nghệ Thông tin (CT Chất lượng cao)</strong>
              <br />
              - Mã ngành: 7480201_CLC
              <br />- Tổ hợp môn xét tuyển: A00, A01, D07, B08
            </li>
            <li>
              <strong>Ngành Khoa học Máy tính (CT Tiên tiến)</strong>
              <br />
              - Mã ngành: 7480101_TT
              <br />- Tổ hợp môn xét tuyển: A00, A01, D07, B08
            </li>
            <li>
              <strong>Ngành Công nghệ Thông tin (CT Việt – Pháp)</strong>
              <br />
              - Mã ngành: 7480201_VP
              <br />- Tổ hợp môn xét tuyển: A00, A01, D07, D29
            </li>
          </ol>
        </div>
      ),
    },
    {
      title:
        "4. Cho em hỏi Khoa CNTT có nhiều chương trình như Chất lượng cao, Tiên tiến...., có phải em trúng tuyển vào khoa CNTT rồi mới chọn vào các chương trình đó phải không?",
      content: (
        <div>
          <p>
            Khoa CNTT của Trường có nhiều chương trình và mỗi chương trình đều
            tuyển riêng. Ví dụ:
          </p>

          <ul>
            <li>
              <strong>Nhóm ngành Máy tính và CNTT</strong>
              <br />
              Tổ hợp môn xét tuyển: A00, A01, D07, D08
              <br />
              Dự kiến 400 chỉ tiêu.
            </li>
            <li>
              <strong>Chương trình CLC CNTT</strong>
              <br />
              Tổ hợp môn xét tuyển: A00, A01, D07, D08
              <br />
              Dự kiến 440 chỉ tiêu.
            </li>
            <li>
              <strong>Chương trình Tiên tiến CNTT</strong>
              <br />
              Tổ hợp môn xét tuyển: A00, A01, D07, D08
              <br />
              Dự kiến 80 chỉ tiêu.
            </li>
            <li>
              <strong>Chương trình Việt - Pháp CNTT</strong>
              <br />
              Tổ hợp môn xét tuyển: A00, A01, D07, D29
              <br />
              Dự kiến 40 chỉ tiêu.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title:
        "5. Em muốn xét tuyển nhóm ngành máy tính và CNTT thì chọn chuyên ngành khi đăng ký xét tuyển đúng hay không?",
      content:
        "Sinh viên Nhóm ngành Máy tính và CNTT sẽ đăng ký chuyên ngành sau 02 năm học, bao gồm:Công nghệ Thông tin, Công nghệ Tri thức, Hệ thống Thông tin, Khoa học Dữ liệu, Khoa học Máy tính, Kỹ thuật Phần mềm, Mạng máy tính và Viễn thông, Thị giác máy tính, Trí tuệ nhân tạo",
    },
    {
      title: "6. Kỳ thi đánh giá năng lực của ĐH Quốc gia TP.HCM là gì ?",
      content:
        "Trả lời: \
Kỳ thi đánh giá năng lực của ĐHQG-HCM là một kỳ thi độc lập với Kỳ thi THPT được tổ chức vào ngày 26/03/2023 và 28/5/2023.\
Các trường thành viên của ĐHQG-HCM dùng kết quả kỳ thi này để xét tuyển. Các trường có chỉ tiêu riêng cho kỳ thi đánh giá năng lực (Trường ĐH Khoa học Tự nhiên dùng 45%-50% tổng chỉ tiêu).\
Kỳ thì đánh giá năng lực là kỳ thi độc lập với kỳ thi THPT đo đó thí sinh có quyền sử dụng kết quả thi THPT hoặc kết quả thi đánh giá năng lực hoặc kết quả cả 2 kỳ thi để có 2 cơ hội xét tuyển vào Trường ĐH Khoa học Tự nhiên. Do đó kỳ thi đánh giá năng lực là kỳ thi không bắt buộc.\
Năm 2023 kỳ thi ĐGNL được tổ chức 2 đợt thi là 26/3/2023 và 28/5/2023. Thí sinh có thể đăng ký thi cả 2 đợt thi và lựa chọn kết quả tốt nhất để đăng ký xét tuyển.",
    },
    {
      title:
        "7. Cho em hỏi, với những ngành xét tuyển nhiều tổ hợp môn thi ví dụ như nhóm ngành Máy tính & CNTT có 4 tổ hợp môn xét tuyển A00, A01, D07 và D08 thì điểm trúng tuyển giữa các tổ hợp môn thi đó giống nhau hay khác nhau ạ?",
      content:
        "Trường ĐH KHTN xét chung mức điểm trúng tuyển cho cùng 1 ngành/nhóm ngành với các tổ hợp môn xét tuyển khác nhau.\
      Ví dụ: điểm trúng tuyển cho nhóm ngành Máy tính và CNTT với tổ hợp môn xét tuyển A00, A01, D07, D08 đều có chung mức điểm 26.00 ở năm 2017 và 22.75 vào năm 2018.",
    },
    {
      title: "8. Mã trường, Mã ngành, Điểm chuẩn hằng năm?",
      content: (
        <img
          src="https://tuyensinh.hcmus.edu.vn/images/2023/04/12/gi-bo-01-1.png"
          alt="Mã ngành, Mã trường, Điểm chuẩn"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      ),
    },
    {
      title: "9. CLC có được nghỉ hè không ạ?",
      content: "Không em nhé!!!!!!!!!!!!!!!!!",
    },
  ];
  return (
    <div className="faq-container">
      <h2 style={{ marginBottom: "30px" }}>
        NHỮNG CÂU HỎI THƯỜNG ĐƯỢC QUAN TÂM
      </h2>

      {data.map((item, index) => (
        <CollapsibleContent title={item.title} isActive={false}>
          <p>{item.content}</p>
        </CollapsibleContent>
      ))}
      <h2 style={{ marginTop: "50px", marginLeft: "135px" }}>
        LIÊN HỆ VỚI CHÚNG TÔI
      </h2>
      
      {getContent(isMount)}
      
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col text-left">
            <label htmlFor="first" className="form-label">
              Họ và Tên
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Ví dụ: Phan Thị Hữu Niên"
            />
          </div>
          <div className="col text-left">
            <label htmlFor="last`" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="example@gmail.com"
            />
          </div>
        </div>

        <label className="form-label">Nội dung cần giải đáp</label>
        <label>
          <span className="input-icon">
            {/* <Icofont icon="question-circle" /> */}
          </span>
          <textarea
            name="question"
            value={formData.question}
            onChange={handleInputChange}
            placeholder="Mình muốn tư vấn về học phí cho năm 2024..."
          />
        </label>
        <button className="button-send-question" type="submit">
          GỬI CÂU HỎI
          {/* <i className="icofont-location-arrow" style={{ marginLeft: "5px" }}></i> */}
        </button>
      </form>

    </div>
  );
}
export default FAQ;
