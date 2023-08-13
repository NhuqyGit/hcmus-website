import React from "react";
import "./GraduateInfo.css";
import saudaihoc from "../../assets/img/saudaihoc.jpg";
import maiyeu from "../../assets/img/maiyeuhcmus.jpg";

function GraduateInfo() {
  const dataNews = [
    {
      img: maiyeu,
      title: "What is Lorem Ipsum?",
      content:
        "  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text eversince the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      img: maiyeu,
      title: "What is Lorem Ipsum?",
      content:
        "  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text eversince the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      img: maiyeu,
      title: "What is Lorem Ipsum?",
      content:
        "  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text eversince the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          color: "#273E74",
          marginBottom: "10px",
          marginTop: "80px",
        }}
      >
        THÔNG TIN TUYỂN SINH SAU ĐẠI HỌC
      </h1>
      <div style={{ textAlign: "center", margin: "30px 40px" }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </div>
      <div className="post-graduate">
        <div className="news-child">
          <div className="image-container">
            <img
              src={saudaihoc}
              alt="saudaihoc"
              className="image-post-graduate"
            />
            <div className="text-frame">
              <h3>
                <a href="" className="link">
                  What's Loremisum
                </a>
              </h3>
              <div>
                lorem psum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer...
              </div>
            </div>
          </div>
          <div className="image-left-container">
            <img
              src={maiyeu}
              alt="mai yeu"
              className="image-right"
            />
            <div className="text-right">
              <h3 style={{ marginBottom: "10px" }}>
                <a href="" className="link">
                  What is Lorem Ipsum?
                </a>
              </h3>
              <div style={{ fontSize: "15px" }}>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged.
              </div>
            </div>
          </div>
        </div>

        <div className="news">
          {dataNews.map((item, index) => (
            <div className="image-right-container" key={index}>
              <img src={item.img} alt="mai yeu" className="image-right" />
              <div className="text-right">
                <h3 style={{ marginBottom: "10px" }}>
                  <a href="" className="link">
                    {item.title}
                  </a>
                </h3>
                <div style={{ fontSize: "15px" }}>{item.content}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default GraduateInfo;
