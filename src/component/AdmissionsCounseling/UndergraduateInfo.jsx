import React, { useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";
import "./UndergraduateInfo.css";
import tuyensinhdaihoc from "../../assets/img/tuyensinhdaihoc.png";
// import Icofont from "react-icofont";

function UndergraduateInfo() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null); // Collapse the clicked item if already open
    } else {
      setActiveIndex(index); // Expand the clicked item
    }
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
    <div>
      <h1
        style={{ textAlign: "center", color: "#273E74", marginBottom: "10px" }}
      >
        THÔNG TIN TUYỂN SINH ĐẠI HỌC
      </h1>
      <div style={{ textAlign: "center", margin: "30px 40px" }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </div>
      <div className="undergraduate">
        <Accordion
          transition={{
            duration: "300ms",
            timingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          }}
        >
          {data.map((item, index) => (
            <AccordionItem key={index}>
              {({ open }) => (
                <div className="accordion-item">
                  <>
                    <AccordionHeader
                      className={`accordion-title ${
                        open ? "accordion-active" : ""
                      }`}
                    >
                      <h3 style={{ color: "#273E74" }}>{item.title}</h3>
                      <Icofont
                        icon="icofont-simple-down"
                        className={`arrow-icon ${open ? "open" : ""}`}
                      />
                    </AccordionHeader>

                    <AccordionBody>
                      <div className="accordion-body">{item.content}</div>
                    </AccordionBody>
                  </>
                </div>
              )}
            </AccordionItem>
          ))}
        </Accordion>

        <div className="image-frame">
          <img className="image" src={tuyensinhdaihoc} alt="tuyensinhdaihoc" />
          <button className="button-send">
            <span className="button-content">
              LIÊN HỆ TƯ VẤN
              <Icofont icon="icofont-send-mail" className="icon-large" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default UndergraduateInfo;
