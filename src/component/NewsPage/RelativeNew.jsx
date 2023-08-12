import React, { useState } from "react";
import "./RelativeNews.css";

function RelativeNew(props) {
  const [collapse, setCollapse] = useState(false);
  const [display, setDisplay] = useState(false);
  return (
    <div className="card">
      <a href="">
        <div>
          <img src={props.url} alt="" className="image" />
        </div>
        <div className="news_title">{props.title}</div>
        <div className={`long-des ${collapse ? "expanded" : ""}`}>
          {props.des}
        </div>
      </a>

      <span>
        <button
          className={`button ${display ? "none" : ""}`}
          onClick={() => {
            setCollapse((prev) => !prev);
          }}
        >
          {collapse ? "Thu gọn" : "Xem thêm"}
        </button>
      </span>
    </div>
  );
}

export default RelativeNew;
