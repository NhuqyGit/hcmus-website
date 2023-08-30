import "./style.scss";
import banner from "../../assets/img/banner-home.png";
import post1 from "../../assets/img/post-1.png";
import post2 from "../../assets/img/post-2.png";
import post3 from "../../assets/img/post-3.png";
import post4 from "../../assets/img/post-4.png";
import img6 from "../../assets/img/image-6.png";
import img5 from "../../assets/img/image-5.png";
import img4 from "../../assets/img/image-4.png";
import img3 from "../../assets/img/image-3.png";
import img2 from "../../assets/img/image-2.png";
import img1 from "../../assets/img/image-1.png";
import atom1 from "../../assets/img/atom-1.png";
import brain1 from "../../assets/img/brain-1.png";
import tralia0 from "../../assets/img/gisEarthAustralia0.png";
import dbtNew from "../../assets/img/dbt-new.png";
import person1 from "../../assets/img/person-1.png";
import person2 from "../../assets/img/person-2.png";
import dbt from "../../assets/img/dbtien-3.png";
import person4 from "../../assets/img/person-3.png";
import person5 from "../../assets/img/person-4.png";
import new1 from "../../assets/img/news-1.png";
import new2 from "../../assets/img/news-2.png";
import new3 from "../../assets/img/news-3.png";
import new4 from "../../assets/img/news-4.png";
import new5 from "../../assets/img/news-5.png";

import video from "../../assets/video.mp4";

import cc from "../../assets/img/cc.jpg";
import Header from "../Header/Header";
import { useState, useEffect, useRef } from "react";
function Home() {
  const [isPlay, setPlay] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    if (isPlay) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [isPlay]);

  return (
    <>
      {/* <Header /> */}
      <main>
        <section className="slider-section">
          <div className="image-slider">
            {/* <img src={banner} /> */}
            <video
              // controls={!isPlay} // Hide controls when video is playing
              autoPlay={true}
              muted={true}
              loop
              ref={videoRef}
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <p className="text-content-slider">
              Trường Đại học Khoa học Tự nhiên,
              <br />
              Đại học Quốc gia Thành phố Hồ Chí Minh
            </p>
            <div className="overlay-title"></div>
            <div className="content-overlay">
              <p className="title-text">
                Trường Đại học Khoa học Tự nhiên - Đại học Quốc gia Thành phố Hồ
                Chí Minh (HCMUS) là một trong những trường đại học hàng đầu tại
                Việt Nam với chuyên môn tập trung vào lĩnh vực khoa học tự nhiên
                và công nghệ thông tin.
              </p>
              {/* <button className="button-action-slide"><i className="icofont-ui-play"></i></button>   */}

              <div
                className="button-action-slide"
                onClick={() => setPlay(!isPlay)}
              >
                <svg
                  style={{ display: !isPlay ? "block" : "none" }}
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M-838-2232H562v3600H-838z" fill="none" />
                  <path d="M16 10v28l22-14z" />
                  <path d="M0 0h48v48H0z" fill="none" />
                </svg>

                <svg
                  style={{ display: isPlay ? "block" : "none" }}
                  version="1.1"
                  id="Icons"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 32 32"
                  xmlSpace="preserve"
                >
                  <g>
                    <path d="M14,8H9C8.4,8,8,8.4,8,9v14c0,0.6,0.4,1,1,1h5c0.6,0,1-0.4,1-1V9C15,8.4,14.6,8,14,8z" />
                    <path d="M23,8h-5c-0.6,0-1,0.4-1,1v14c0,0.6,0.4,1,1,1h5c0.6,0,1-0.4,1-1V9C24,8.4,23.6,8,23,8z" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="intro-keyword">
            <div>
            <img src={cc} />
            </div>
            
        </section> */}
        <section className="tab-information">
          <div className="container">
            <div className="nav-tab">
              <div className="items-left">
                <svg
                  width="32px"
                  height="32px"
                  viewBox="0 0 32 32"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
                >
                  <g
                    id="Page-1"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                    sketch:type="MSPage"
                  >
                    <g
                      id="icon-48-notebook"
                      sketch:type="MSArtboardGroup"
                      fill="#000000"
                    >
                      <path
                        d="M9.99742191,3 C8.89427625,3 8,3.89833832 8,5.00732994 L8,27.9926701 C8,29.1012878 8.89092539,30 9.99742191,30 L25.0025781,30 C26.1057238,30 27,29.1016617 27,27.9926701 L27,5.00732994 C27,3.89871223 26.1090746,3 25.0025781,3 L9.99742191,3 L9.99742191,3 Z M6,10 L6,11 L8,11 L8,10 L6,10 L6,10 Z M6,14 L6,15 L8,15 L8,14 L6,14 L6,14 Z M6,6 L6,7 L8,7 L8,6 L6,6 L6,6 Z M6,22 L6,23 L8,23 L8,22 L6,22 L6,22 Z M6,26 L6,27 L8,27 L8,26 L6,26 L6,26 Z M6,18 L6,19 L8,19 L8,18 L6,18 L6,18 Z M8,10 L8,11 L10,11 L10,10 L8,10 L8,10 Z M8,14 L8,15 L10,15 L10,14 L8,14 L8,14 Z M8,6 L8,7 L10,7 L10,6 L8,6 L8,6 Z M8,22 L8,23 L10,23 L10,22 L8,22 L8,22 Z M8,26 L8,27 L10,27 L10,26 L8,26 L8,26 Z M8,18 L8,19 L10,19 L10,18 L8,18 L8,18 Z M12,8 L12,9 L23,9 L23,8 L12,8 L12,8 Z M13,12 L13,13 L22,13 L22,12 L13,12 L13,12 Z"
                        id="notebook"
                        sketch:type="MSShapeGroup"
                      ></path>
                    </g>
                  </g>
                </svg>
                <p>Giới Thiệu về Tự Nhiên</p>
              </div>
              <div className="items-right">
                <div className="action-btn-tab action">
                  <button className="btn action">Sinh Viên</button>
                </div>
                <div className="action-btn-tab">
                  <button>Giảng Viên</button>
                </div>
                <div className="action-btn-tab">
                  <button>Phụ Huynh</button>
                </div>
              </div>
            </div>
            <div className="information-tab">
              <div className="left-information-tab">
                <ul>
                  <li className="left-tab">
                    <button className="tab-active">Giới Thiệu</button>
                  </li>
                  <li className="left-tab">
                    <button>Đào Tạo</button>
                  </li>
                  <li className="left-tab">
                    <button>Nghiên Cứu</button>
                  </li>
                  <li className="left-tab">
                    <button>Tham Quan</button>
                  </li>
                  <li className="left-tab">
                    <button>Sự Kiện</button>
                  </li>
                </ul>
              </div>
              <div className="right-information-tab">
                <div className="box-post-tab">
                  <div className="flex-blog-post">
                    <div className="box-blog-post">
                      <img src={post1} />
                      <p className="title-blog-post">Thông tin về HCMUS</p>
                      <p className="post-except">
                        Trường Đại học Khoa học Tự nhiên - Đại học Quốc gia
                        Thành phố Hồ Chí Minh (HCMUS) là một trong những trường
                        đại học hàng đầu tại Việt Nam với chuyên môn tập trung
                        vào lĩnh vực khoa học tự nhiên và công nghệ thông tin.
                        Dưới đây là một số thông tin giới thiệu về trường HCMUS
                      </p>
                    </div>
                    <div className="box-blog-post">
                      <img src={post2} />
                      <p className="title-blog-post">Quy chế tổ chức </p>
                      <p className="post-except">
                        Thông tin chi tiết về Quy chế tổ chức của Trường Đại học
                        Khoa học Tự nhiên - Đại học Quốc gia Thành phố Hồ Chí
                        Minh (HCMUS) có thể thay đổi theo thời gian và tài liệu
                        cụ thể của trường.
                      </p>
                    </div>
                    <div className="box-blog-post">
                      <img src={post3} />
                      <p className="title-blog-post">Tuyên bố sứ mạng</p>
                      <p className="post-except">
                        Đối với trường Đại học Khoa học Tự nhiên - Đại học Quốc
                        gia Thành phố Hồ Chí Minh (HCMUS), tuyên bố sứ mạng có
                        thể bao gồm những mục tiêu và cam kết trong việc đào
                        tạo, nghiên cứu, và phục vụ cộng đồng. Dưới đây là một
                        ví dụ giả định về tuyên bố sứ mạng của HCMUS
                      </p>
                    </div>
                    <div className="box-blog-post">
                      <img src={post4} />
                      <p className="title-blog-post">Hội đồng trường</p>
                      <p className="post-except">
                        Hội đồng trường thường có quyền quyết định về các vấn đề
                        quan trọng như kế hoạch phát triển, ngân sách, chính
                        sách đào tạo, và các vấn đề quản lý khác. Đôi khi, cấu
                        trúc và chức năng của Hội đồng trường có thể thay đổi
                        tùy theo quy định của từng trường và quốc gia.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="award-section">
          <div className="container">
            <div className="title-row">
              <div className="left-title-row">
                <p>CHUYÊN MỤC SẢN PHẨM SÁNG TẠO KHOA HỌC</p>
              </div>
              <div className="right-title-row">
                <p>
                  Ở đây, chúng tôi tự hào giới thiệu đến bạn những thành quả
                  nghiên cứu độc đáo và sáng tạo từ các ngành khoa học tại
                  trường chúng tôi. Từ các phát minh công nghệ tiên tiến đến các
                  phân tích sâu sắc về tự nhiên và xã hội, chúng tôi đã đạt được
                  những thành tựu đáng kinh ngạc
                </p>
              </div>
            </div>
            <div className="icon-element">
              <div className="row-icon-element">
                <div className="icon-box">
                  <div className="icon">
                    <p>
                      <img src={atom1} />
                    </p>
                    <p>Sản Phẩm</p>
                  </div>
                  <div className="row-blog-post">
                    <div className="img-post">
                      <img src={img5} />
                    </div>
                    <div className="content-post">
                      <p className="title-content-post">
                        Loại pin mặt trời mới có thể tạo nhiều hoa văn khác nhau{" "}
                      </p>
                      <p className="except-content-post">
                        Pin mặt trời chất màu nhạy quang vừa có thểứng dụng làm
                        kính của các tòa nhà với nhiều loại hoa văn khác nhau,
                        vừa cung cấp thêm nguồn điện và làm mát cho các tòa nhà.
                      </p>
                    </div>
                  </div>
                  <div className="row-blog-post">
                    <div className="img-post">
                      <img src={img6} />
                    </div>
                    <div className="content-post">
                      <p className="title-content-post">
                        Thiết bị tìm kiếm nước ngầm , tìm kiếm khoáng sản
                      </p>
                      <p className="except-content-post">
                        Đây là thiết bị thăm dò đa cực giúp tìm kiếm nước ngầm ,
                        tìm kiếm khoáng sản, khảo sát địa chất công trình .
                      </p>
                    </div>
                  </div>
                  <div className="view-more">
                    <button>Xem Thêm</button>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="icon">
                    <p>
                      <img src={brain1} />
                    </p>
                    <p>Nghiên Cứu</p>
                  </div>
                  <div className="row-blog-post">
                    <div className="img-post">
                      <img src={img4} />
                    </div>
                    <div className="content-post">
                      <p className="title-content-post">
                        Nghiên cứu nhiều sản phẩm từ tế bào gốc phục vụ điều trị
                        bệnh
                      </p>
                      <p className="except-content-post">
                        Pin mặt trời chất màu nhạy quang vừa có thể ứng dụng làm
                        kính của các tòa nhà với nhiều loại hoa văn khác nhau,
                        vừa cung cấp thêm nguồn điện và làm mát cho các tòa nhà.
                      </p>
                    </div>
                  </div>
                  <div className="row-blog-post">
                    <div className="img-post">
                      <img src={img3} />
                    </div>
                    <div className="content-post">
                      <p className="title-content-post">
                        Nghiên cứu loại tinh dầu thu hút ruồi đục quả
                      </p>
                      <p className="except-content-post">
                        Nhóm giảng viên, sinh viên trường ĐHKTTN (ĐHQG-HCM) đã
                        nghiên cứu loại tinh dầu thu hút ruồi đục quả, nhằm giúp
                        người nông dân tiêu diệt loài ruồi này
                      </p>
                    </div>
                  </div>
                  <div className="view-more">
                    <button>Xem Thêm</button>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="icon">
                    <p>
                      <img src={tralia0} />
                    </p>
                    <p>Thành Tựu</p>
                  </div>
                  <div className="row-blog-post">
                    <div className="img-post">
                      <img src={img2} />
                    </div>
                    <div className="content-post">
                      <p className="title-content-post">
                        Loại pin mặt trời mới có thể tạo nhiều hoa văn khác nhau{" "}
                      </p>
                      <p className="except-content-post">
                        Pin mặt trời chất màu nhạy quang vừa có thểứng dụng làm
                        kính của các tòa nhà với nhiều loại hoa văn khác nhau,
                        vừa cung cấp thêm nguồn điện và làm mát cho các tòa nhà.
                      </p>
                    </div>
                  </div>
                  <div className="row-blog-post">
                    <div className="img-post">
                      <img src={img1} />
                    </div>
                    <div className="content-post">
                      <p className="title-content-post">
                        Loại pin mặt trời mới có thể tạo nhiều hoa văn khác nhau{" "}
                      </p>
                      <p className="except-content-post">
                        Pin mặt trời chất màu nhạy quang vừa có thểứng dụng làm
                        kính của các tòa nhà với nhiều loại hoa văn khác nhau,
                        vừa cung cấp thêm nguồn điện và làm mát cho các tòa nhà.
                      </p>
                    </div>
                  </div>
                  <div className="view-more">
                    <button>Xem Thêm</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="intro-member">
          <div className="container">
            <div className="title-row">
              <div className="left-title-member-row">
                <p>
                  Chúng tôi tự hào giới thiệu đội ngũ giảng viên tài năng và đầy
                  nhiệt huyết, với sự đa dạng về kiến thức, kinh nghiệm và thành
                  tựu trong nhiều lĩnh vực.
                </p>
              </div>
              <div className="right-title-member-row">
                <p>GIẢNG VIÊN ƯU TÚ CỦA KHOA HỌC TỰ NHIÊN</p>
              </div>
            </div>
          </div>
          <div className="member-main-infor">
            <div className="container">
              <div className="row-member">
                <div className="col-6-member img-center">
                  <img src={dbtNew} />
                </div>
                <div className="col-6-member">
                  <div className="content-for-member">
                    <p className="role-member">
                      TRƯỞNG KHOA CÔNG NGHỆ THÔNG TIN
                    </p>
                    <p className="name-member">TS. Đinh Bá Tiến</p>
                    <p className="intro-text-member">
                      Đinh Bá Tiến ( 25 tuổi), nghiên cứu sinh tiến sĩ ngành
                      công nghệ thông tin tại ĐH Huddersfield (Anh), là một
                      trong ba nghiên cứu sinh vừa được chọn tham gia chương
                      trình nghiên cứu tại Cơ quan Không gian và vũ trụ Hoa Kỳ
                      (NASA), sau một kỳ sát hạch đầy căng thẳng với hàng trăm
                      ứng viên.
                    </p>
                  </div>
                  <div className="nav-member">
                    <ul>
                      <li>
                        <img src={person1} />
                      </li>
                      <li>
                        <img src={person2} />
                      </li>
                      <li className="active">
                        <img src={dbt} />
                      </li>
                      <li>
                        <img src={person4} />
                      </li>
                      <li>
                        <img src={person5} />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="news-section">
          <div className="container">
            <div className="categories-wrap">
              <p className="heading-categories">HCMUS</p>
              <p className="subHeading-categories">Tin Tức</p>
            </div>
            <div className="flex-news-post">
              <div className="col-6-left">
                <div className="box-news">
                  <img className="img_hov" src={new1} />
                  <div className="content-box-news">
                    <p className="title-box-news">
                      Toàn quốc khoa học trái đất mỏ, quặng, môi trường lần IV
                    </p>
                    <p className="display-des-box-news">
                      Riêng đối với thí sinh có bằng tốt nghiệp bậc cao đẳng hệ
                      chính quy ngành Công nghệ thông tin không do Trường ĐH
                      KHTN, ĐHQG-HCM cấp thì phải.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-6-right">
                <div className="row-for-news">
                  <div className="col-6-left">
                    <div className="box-news">
                      <img className="img_hov" src={new2} />
                      <div className="content-box-news2">
                        <p className="title-box-news">
                          Seminar thời đại AI mới
                        </p>
                        <div className="view-more-news">
                          <button className="icon">
                            <svg
                              width="16"
                              height="12"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M24 12.0067C24 11.8064 23.9175 11.6152 23.7803 11.4712L16.356 3.97191C16.0627 3.67566 15.588 3.67641 15.2955 3.97191C15.0022 4.26741 15.0022 4.74741 15.2955 5.04291L21.4403 11.2492H0.75C0.336 11.2492 0 11.5882 0 12.0067C0 12.4252 0.336 12.7642 0.75 12.7642H21.4395L15.2955 18.9704C15.0022 19.2659 15.003 19.7459 15.2955 20.0414C15.5887 20.3369 16.0635 20.3369 16.356 20.0414L23.7803 12.5422C23.9205 12.4004 23.9977 12.2054 24 12.0067Z"
                                fill="#939393"
                              />
                            </svg>
                          </button>
                          <span>Khám phá bài viết</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6-left">
                    <div className="box-news">
                      <img className="img_hov" src={new3} />
                      <div className="content-box-news2">
                        <p className="title-box-news">Áp dụng AI vào IOT</p>
                        <div className="view-more-news">
                          <button className="icon">
                            <svg
                              width="16"
                              height="12"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M24 12.0067C24 11.8064 23.9175 11.6152 23.7803 11.4712L16.356 3.97191C16.0627 3.67566 15.588 3.67641 15.2955 3.97191C15.0022 4.26741 15.0022 4.74741 15.2955 5.04291L21.4403 11.2492H0.75C0.336 11.2492 0 11.5882 0 12.0067C0 12.4252 0.336 12.7642 0.75 12.7642H21.4395L15.2955 18.9704C15.0022 19.2659 15.003 19.7459 15.2955 20.0414C15.5887 20.3369 16.0635 20.3369 16.356 20.0414L23.7803 12.5422C23.9205 12.4004 23.9977 12.2054 24 12.0067Z"
                                fill="#939393"
                              />
                            </svg>
                          </button>
                          <span>Khám phá bài viết</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6-left">
                    <div className="box-news">
                      <img className="img_hov" src={new4} />
                      <div className="content-box-news2">
                        <p className="title-box-news">
                          Sự thay đổi của vật chất
                        </p>
                        <div className="view-more-news">
                          <button className="icon">
                            <svg
                              width="16"
                              height="12"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M24 12.0067C24 11.8064 23.9175 11.6152 23.7803 11.4712L16.356 3.97191C16.0627 3.67566 15.588 3.67641 15.2955 3.97191C15.0022 4.26741 15.0022 4.74741 15.2955 5.04291L21.4403 11.2492H0.75C0.336 11.2492 0 11.5882 0 12.0067C0 12.4252 0.336 12.7642 0.75 12.7642H21.4395L15.2955 18.9704C15.0022 19.2659 15.003 19.7459 15.2955 20.0414C15.5887 20.3369 16.0635 20.3369 16.356 20.0414L23.7803 12.5422C23.9205 12.4004 23.9977 12.2054 24 12.0067Z"
                                fill="#939393"
                              />
                            </svg>
                          </button>
                          <span>Khám phá bài viết</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6-left">
                    <div className="box-news">
                      <img className="img_hov" src={new5} />
                      <div className="content-box-news2">
                        <p className="title-box-news">Cuộc sống sinh viên</p>
                        <div className="view-more-news">
                          <button className="icon">
                            <svg
                              width="16"
                              height="12"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M24 12.0067C24 11.8064 23.9175 11.6152 23.7803 11.4712L16.356 3.97191C16.0627 3.67566 15.588 3.67641 15.2955 3.97191C15.0022 4.26741 15.0022 4.74741 15.2955 5.04291L21.4403 11.2492H0.75C0.336 11.2492 0 11.5882 0 12.0067C0 12.4252 0.336 12.7642 0.75 12.7642H21.4395L15.2955 18.9704C15.0022 19.2659 15.003 19.7459 15.2955 20.0414C15.5887 20.3369 16.0635 20.3369 16.356 20.0414L23.7803 12.5422C23.9205 12.4004 23.9977 12.2054 24 12.0067Z"
                                fill="#939393"
                              />
                            </svg>
                          </button>
                          <span>Khám phá bài viết</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="event-infor">
          <div className="container">
            <div className="categories-wrap">
              <p className="heading-categories">HCMUS</p>
              <p className="subHeading-categories">Sự Kiện Hot</p>
            </div>
            <div className="row-event">
              <div className="col-event">
                <div className="box-event">
                  <div className="img-event">
                    <img src={new1} alt="" />
                  </div>
                  <div className="time-event">
                    <div>
                      <p className="month">July</p>
                      <p className="date">13</p>
                    </div>
                  </div>
                  <div className="content-event">
                    <p className="categories-event">HỘI THẢO</p>
                    <p className="name-event">
                      Bác sĩ lâm sàng và súng :Chương trình giảng dạy về súng và
                      thương tích do súng gây ra.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-event">
                <div className="box-event">
                  <div className="img-event">
                    <img src={new1} alt="" />
                  </div>
                  <div className="time-event">
                    <div>
                      <p className="month">July</p>
                      <p className="date">14</p>
                    </div>
                  </div>
                  <div className="content-event">
                    <p className="categories-event">TRIỂN LÃM</p>
                    <p className="name-event">
                      MindReaders : sách dành cho nghệ sĩ của Gall Wight và một
                      số điều thú vị dành cho bạn.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-event">
                <div className="box-event">
                  <div className="img-event">
                    <img src={new1} alt="" />
                  </div>
                  <div className="time-event">
                    <div>
                      <p className="month">July</p>
                      <p className="date">17</p>
                    </div>
                  </div>
                  <div className="content-event">
                    <p className="categories-event">THUYẾT TRÌNH</p>
                    <p className="name-event">
                      Hội thảo lập kế hoạch chăm sóc trước trực tuyến hai lần
                      được tổ chức lần thứ V.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-event">
                <div className="box-event">
                  <div className="img-event">
                    <img src={new1} alt="" />
                  </div>
                  <div className="time-event">
                    <div>
                      <p className="month">July</p>
                      <p className="date">19</p>
                    </div>
                  </div>
                  <div className="content-event">
                    <p className="categories-event">HỘI THẢO</p>
                    <p className="name-event">
                      Bác sĩ lâm sàng và súng :Chương trình giảng dạy về súng và
                      thương tích do súng gây ra.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
