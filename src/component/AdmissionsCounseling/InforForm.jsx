import React from "react";
import { useState } from "react";
import "./InforForm.css";
import Icofont from "react-icofont";
function InforForm() {
  const [chosenButton, setChosenButton] = useState("button1");

  const handleButtonClick = (buttonName) => {
    setChosenButton(buttonName);
  };

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

  return (
    <div className="send-question">
      <div className="question-text">
        <h3
          style={{
            color: "#273E74",
            marginBottom: "20px",
            marginTop: "20px",
            fontSize: "30px",
          }}
        >
          LIÊN HỆ VỚI CHÚNG TÔI
        </h3>
        <p style={{ width: "500px" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <div>
          {/* <button className="button-options">TUYỂN SINH ĐẠI HỌC</button>
          <button>TUYỂN SINH SAU ĐẠI HỌC</button> */}
          <button
            className={`custom-button ${
              chosenButton === "button1" ? "chosen" : ""
            }`}
            onClick={() => handleButtonClick("button1")}
          >
            TUYỂN SINH ĐẠI HỌC
          </button>
          <button
            className={`custom-button ${
              chosenButton === "button2" ? "chosen" : ""
            }`}
            onClick={() => handleButtonClick("button2")}
          >
            TUYỂN SINH SAU ĐẠI HỌC
          </button>
        </div>
      </div>

      <form className="form-container" onSubmit={handleSubmit}>
        <span className="name">Họ và tên</span>
        <label>
          <span className="input-icon">
            {/* <Icofont icon="user" /> */}
          </span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Ví dụ: Phan Thị Hữu Niên"
          />
        </label>
        <span className="name">Email</span>
        <label>
          <span className="input-icon">
            <Icofont icon="email" />
          </span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="example@gmail.com"
          />
        </label>

        <span className="name">Nội dung cần tư vấn</span>
        <label>
          <span className="input-icon">
            <Icofont icon="question-circle" />
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
export default InforForm;
