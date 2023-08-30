import "./FAQ.scss";
import React, { useState } from "react";
import CollapsibleContent from "./CollapsibleContent";
function FAQ() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    question: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const data = [
    {
      title: "Khoa Công Nghệ Thông Tin",
      content: "Lorem ipsum dolor sit amet.",
    },
    { title: "Khoa Địa Chất", content: "Lorem ipsum dolor sit amet." },
    {
      title: "Khoa Điện Tử Viễn Thông",
      content: "Lorem ipsum dolor sit amet.",
    },
    {
      title: "Khoa Hóa Học",
      content: "Lorem ipsum dolor sit amet.",
    },
    {
      title: "Khoa Khoa Học và Công Nghệ Vật Liệu",
      content: "Lorem ipsum dolor sit amet.",
    },
    {
      title: "Khoa Môi Trường",
      content: "Lorem ipsum dolor sit amet.",
    },
    {
      title: "Khoa Sinh Học và Công Nghệ Sinh Học",
      content: "Lorem ipsum dolor sit amet.",
    },
    {
      title: "Khoa Toán Tin Học",
      content: "Lorem ipsum dolor sit amet.",
    },
    {
      title: "Khoa Vật Lí - Vật Lí Kĩ Thuật",
      content: "Lorem ipsum dolor sit amet.",
    },
  ];
  return (
    <div className="faq-container">
      <h2 style={{marginBottom:"30px"}}>NHỮNG CÂU HỎI THƯỜNG ĐƯỢC QUAN TÂM</h2>

      {data.map((item, index) => (
        <CollapsibleContent title={item.title} isActive={false}>
          <p>{item.content}</p>
        </CollapsibleContent>
      ))}
      <h2 style={{marginTop:"50px", marginLeft: "135px"}}>
        LIÊN HỆ VỚI CHÚNG TÔI
      </h2>
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
