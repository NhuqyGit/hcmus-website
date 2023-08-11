
import React from 'react';
import './SearchList.css';

function SearchList() {
  return (
    <div className="container">
      <div className="top">
        <p>Có <span>8</span> kết quả được tìm thấy</p>

        <div className="top_sort">
          <span>Sắp xếp theo: </span>
          <select name="" id="">
            <option value="1">Mới nhất</option>
            <option value="2">Mới nhì</option>
            <option value="3">Mới ba</option>
          </select>
        </div>
      </div>

      <div className="wrap-content">
        <div className="content">

          <ContentBox
            title="THÔNG BÁO HỌC BỔNG VALLET 2023 (Dành cho sinh viên đại học)"
            content="Học bổng Vallet được ra đời từ hơn 20 năm nay nhằm giúp đỡ các học sinh, sinh viên và các học viên sau đại học Việt Nam có tài năng hoặc xuất sắc."
            imgUrl="https://deviet.vn/wp-content/uploads/2019/04/vuong-quoc-anh.jpg"
          />
          <ContentBox
            title="THÔNG BÁO HỌC BỔNG VALLET 2023 (Dành cho sinh viên đại học)"
            content="Học bổng Vallet được ra đời từ hơn 20 năm nay nhằm giúp đỡ các học sinh, sinh viên và các học viên sau đại học Việt Nam có tài năng hoặc xuất sắc."
            imgUrl="https://deviet.vn/wp-content/uploads/2019/04/vuong-quoc-anh.jpg"
          />
          <ContentBox
            title="THÔNG BÁO HỌC BỔNG VALLET 2023 (Dành cho sinh viên đại học)"
            content="Học bổng Vallet được ra đời từ hơn 20 năm nay nhằm giúp đỡ các học sinh, sinh viên và các học viên sau đại học Việt Nam có tài năng hoặc xuất sắc."
            imgUrl="https://deviet.vn/wp-content/uploads/2019/04/vuong-quoc-anh.jpg"
          />
          <ContentBox
            title="THÔNG BÁO HỌC BỔNG VALLET 2023 (Dành cho sinh viên đại học)"
            content="Học bổng Vallet được ra đời từ hơn 20 năm nay nhằm giúp đỡ các học sinh, sinh viên và các học viên sau đại học Việt Nam có tài năng hoặc xuất sắc."
            imgUrl="https://deviet.vn/wp-content/uploads/2019/04/vuong-quoc-anh.jpg"
          />
          <ContentBox
            title="THÔNG BÁO HỌC BỔNG VALLET 2023 (Dành cho sinh viên đại học)"
            content="Học bổng Vallet được ra đời từ hơn 20 năm nay nhằm giúp đỡ các học sinh, sinh viên và các học viên sau đại học Việt Nam có tài năng hoặc xuất sắc."
            imgUrl="https://deviet.vn/wp-content/uploads/2019/04/vuong-quoc-anh.jpg"
          />
          <ContentBox
            title="THÔNG BÁO HỌC BỔNG VALLET 2023 (Dành cho sinh viên đại học)"
            content="Học bổng Vallet được ra đời từ hơn 20 năm nay nhằm giúp đỡ các học sinh, sinh viên và các học viên sau đại học Việt Nam có tài năng hoặc xuất sắc."
            imgUrl="https://deviet.vn/wp-content/uploads/2019/04/vuong-quoc-anh.jpg"
          />
          <ContentBox
            title="THÔNG BÁO HỌC BỔNG VALLET 2023 (Dành cho sinh viên đại học)"
            content="Học bổng Vallet được ra đời từ hơn 20 năm nay nhằm giúp đỡ các học sinh, sinh viên và các học viên sau đại học Việt Nam có tài năng hoặc xuất sắc."
            imgUrl="https://deviet.vn/wp-content/uploads/2019/04/vuong-quoc-anh.jpg"
          />
          <ContentBox
            title="THÔNG BÁO HỌC BỔNG VALLET 2023 (Dành cho sinh viên đại học)"
            content="Học bổng Vallet được ra đời từ hơn 20 năm nay nhằm giúp đỡ các học sinh, sinh viên và các học viên sau đại học Việt Nam có tài năng hoặc xuất sắc."
            imgUrl="https://deviet.vn/wp-content/uploads/2019/04/vuong-quoc-anh.jpg"
          />

          <div className="bottom">
            <div className="bottom_paginate">
              <span>&lt;</span>
              <span>1</span>
              {/* <span>2</span>
              <span>...</span>
              <span>9</span>
              <span>10</span> */}
              <span>&gt;</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContentBox(props) {
  const { title, content, imgUrl } = props;

  return (
    <div className="content_box">
      <div className="content_box_top">
        <h3>{title}</h3>
        <p>
          <b>{content}</b>
        </p>
      </div>
      <img src={imgUrl} alt="" />
    </div>
  );
}

export default SearchList;
