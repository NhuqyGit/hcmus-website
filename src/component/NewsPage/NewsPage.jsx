import "./NewsPage.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import RelativeNew from "./RelativeNew";
// import Icofont from "react-icofont";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const relativeNewsData = [
  {
    id: 1,
    imageUrl:
      "https://static.kinhtedothi.vn/w960/images/upload/2022/12/10/screenshot-20221210-121545.jpg",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    desciption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing.",
  },
  {
    id: 2,
    imageUrl:
      "https://static.kinhtedothi.vn/w960/images/upload/2022/12/10/screenshot-20221210-121545.jpg",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    desciption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing.",
  },
  {
    id: 3,
    imageUrl:
      "https://static.kinhtedothi.vn/w960/images/upload/2022/12/10/screenshot-20221210-121545.jpg",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    desciption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing.",
  },
  {
    id: 4,
    imageUrl:
      "https://static.kinhtedothi.vn/w960/images/upload/2022/12/10/screenshot-20221210-121545.jpg",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    desciption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing.",
  },
  {
    id: 5,
    imageUrl:
      "https://static.kinhtedothi.vn/w960/images/upload/2022/12/10/screenshot-20221210-121545.jpg",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    desciption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing.",
  },
  {
    id: 6,
    imageUrl:
      "https://static.kinhtedothi.vn/w960/images/upload/2022/12/10/screenshot-20221210-121545.jpg",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    desciption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing.",
  },
  {
    id: 7,
    imageUrl:
      "https://static.kinhtedothi.vn/w960/images/upload/2022/12/10/screenshot-20221210-121545.jpg",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    desciption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing.",
  },
  {
    id: 8,
    imageUrl:
      "https://static.kinhtedothi.vn/w960/images/upload/2022/12/10/screenshot-20221210-121545.jpg",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    desciption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing.",
  },
];

const relativeNews = relativeNewsData.map((item) => (
  <RelativeNew
    key={item.id}
    title={item.title}
    url={item.imageUrl}
    des={item.desciption}
  />
));

const elements = document.getElementsByClassName("react-multi-carousel-item");
for (let i = 0; i < elements.length; i++) {
  const element = elements[i];
  element.style.width = "378px";
}

function NewsPage() {
  return (
    <div className="news-container">
      <div className="main_content">
        <div className="news">
          <div className="news_date">
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.97266 2.5H10.9102V1.40625C10.9102 1.05078 11.1836 0.75 11.5664 0.75C11.9219 0.75 12.2227 1.05078 12.2227 1.40625V2.5H13.3164C14.2734 2.5 15.0664 3.29297 15.0664 4.25V13C15.0664 13.9844 14.2734 14.75 13.3164 14.75H4.56641C3.58203 14.75 2.81641 13.9844 2.81641 13V4.25C2.81641 3.29297 3.58203 2.5 4.56641 2.5H5.66016V1.40625C5.66016 1.05078 5.93359 0.75 6.31641 0.75C6.67188 0.75 6.97266 1.05078 6.97266 1.40625V2.5ZM4.12891 13C4.12891 13.2461 4.32031 13.4375 4.56641 13.4375H13.3164C13.5352 13.4375 13.7539 13.2461 13.7539 13V6H4.12891V13Z" fill="#3E3232" fillOpacity="0.5"/>
            </svg>

            <span className="date">July 14, 2023</span>
          </div>
          <h2>What is Lorem ispum?</h2>
          <div className="img">
            <img
              src="https://static.kinhtedothi.vn/w960/images/upload/2022/12/10/screenshot-20221210-121545.jpg"
              alt=""
              className="image"
            />
          </div>

          <h4>Where does it come from ?</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
            voluptatibus perspiciatis? Provident, sit. Eos laudantium soluta
            omnis culpa, veritatis nulla. Quis quam veniam nemo, deserunt
            voluptate fuga itaque sint! Velit eveniet fugit mollitia obcaecati
            numquam aut beatae quam corrupti vel ipsam officia dicta voluptas
            doloremque, facilis minima, sit vitae deleniti.
          </p>
          <div className="img">
            <img
              src="https://static.kinhtedothi.vn/w960/images/upload/2022/12/10/screenshot-20221210-121545.jpg"
              alt=""
              className="image"
            />
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            vitae voluptates nisi atque tenetur pariatur corporis assumenda ab.
            Repellendus dolorum consequatur, ipsam eius consectetur perferendis
            accusantium iusto reprehenderit in est expedita atque incidunt,
            fugiat tenetur placeat eum quidem cupiditate velit magnam
            dignissimos? Autem, tempora ea ipsa illo porro aut necessitatibus
            ab, modi vel fugiat quo distinctio doloribus impedit at molestiae
            sapiente dolore officia, placeat similique? Dolores error beatae
            tempora ipsa veniam, laudantium aliquam commodi mollitia sed quam
            nam! Eos dolorem unde repellat eveniet iure deserunt totam
            dignissimos magnam recusandae neque doloremque dolor reiciendis quis
            perferendis ea assumenda a, omnis debitis blanditiis excepturi.
            Sequi distinctio quos nisi omnis, nam natus quaerat porro voluptatum
            necessitatibus asperiores architecto quis, quisquam, illo excepturi
            temporibus. Architecto at, eligendi aliquam nam alias natus officiis
            necessitatibus amet, numquam enim, repellendus eveniet in
            praesentium soluta porro dolorem reprehenderit autem omnis placeat
            rem! Iste voluptatibus accusamus molestiae, velit ea dicta quo.
            Dolores laboriosam qui nulla, ut ducimus eveniet hic, distinctio
            similique iure maxime officia neque aut repellendus eos delectus
            saepe ad temporibus quo aliquam debitis animi? In animi, possimus
            rerum accusantium molestiae corporis similique soluta ipsum
            blanditiis itaque veniam nam amet dolore nisi, explicabo eaque
            doloremque magni libero odio?
          </p>
          <div className="share_icon">
            <a href="">
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M8.33 4.0595C5.97 4.0595 4.06 5.9665 4.06 8.3315C4.06 10.6965 5.97 12.6035 8.33 12.6035C10.7 12.6035 12.6 10.6965 12.6 8.3315C12.6 5.9665 10.7 4.0595 8.33 4.0595ZM8.33 11.1095C6.8 11.1095 5.55 9.8635 5.55 8.3315C5.55 6.7995 6.8 5.5545 8.33 5.5545C9.86 5.5545 11.11 6.7995 11.11 8.3315C11.11 9.8635 9.86 11.1095 8.33 11.1095ZM13.78 3.8845C13.78 4.4385 13.33 4.8815 12.78 4.8815C12.22 4.8815 11.78 4.4355 11.78 3.8845C11.78 3.3345 12.23 2.8885 12.78 2.8885C13.33 2.8885 13.78 3.3345 13.78 3.8845ZM16.6 4.8965C16.54 3.5615 16.24 2.3785 15.26 1.4045C14.28 0.4305 13.1 0.1255 11.77 0.0585C10.39 -0.0195 6.27 -0.0195 4.89 0.0585C3.56 0.1215 2.38 0.4265 1.4 1.4015C0.42 2.3755 0.12 3.5575 0.06 4.8925C-0.02 6.2685 -0.02 10.3915 0.06 11.7675C0.12 13.1025 0.42 14.2845 1.4 15.2585C2.38 16.2325 3.56 16.5375 4.89 16.6045C6.27 16.6825 10.39 16.6825 11.77 16.6045C13.1 16.5415 14.28 16.2365 15.26 15.2585C16.23 14.2845 16.54 13.1025 16.6 11.7675C16.68 10.3915 16.68 6.2715 16.6 4.8965ZM14.83 13.2435C14.54 13.9725 13.98 14.5335 13.24 14.8275C12.15 15.2625 9.54 15.1615 8.33 15.1615C7.12 15.1615 4.51 15.2585 3.42 14.8275C2.69 14.5375 2.13 13.9755 1.84 13.2435C1.4 12.1465 1.5 9.5435 1.5 8.3315C1.5 7.1195 1.4 4.5135 1.84 3.4195C2.13 2.6915 2.69 2.1295 3.42 1.8365C4.52 1.4015 7.12 1.5015 8.33 1.5015C9.54 1.5015 12.15 1.4045 13.24 1.8365C13.97 2.1265 14.53 2.6875 14.83 3.4195C15.26 4.5165 15.16 7.1195 15.16 8.3315C15.16 9.5435 15.26 12.1505 14.83 13.2435Z" fill="#171A22"/>
              </svg>
            </a>
            <a href="">
              <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M15.6102 3.374C15.6202 3.522 15.6202 3.67 15.6202 3.818C15.6202 8.334 12.1802 13.537 5.90016 13.537C3.97016 13.537 2.17016 12.976 0.660156 12.003C0.930156 12.035 1.20016 12.046 1.48016 12.046C3.08016 12.046 4.55016 11.506 5.72016 10.586C4.22016 10.554 2.96016 9.571 2.53016 8.217C2.74016 8.249 2.95016 8.27 3.17016 8.27C3.48016 8.27 3.79016 8.228 4.07016 8.154C2.51016 7.837 1.33016 6.462 1.33016 4.802V4.759C1.79016 5.013 2.32016 5.172 2.88016 5.193C1.96016 4.579 1.35016 3.532 1.35016 2.348C1.35016 1.714 1.52016 1.132 1.82016 0.624C3.50016 2.697 6.03016 4.051 8.86016 4.199C8.81016 3.945 8.78016 3.681 8.78016 3.416C8.78016 1.534 10.3002 0 12.1902 0C13.1802 0 14.0702 0.413 14.6902 1.079C15.4602 0.931 16.2002 0.645 16.8602 0.254C16.6002 1.047 16.0602 1.714 15.3602 2.137C16.0402 2.063 16.7102 1.872 17.3202 1.608C16.8602 2.285 16.2802 2.887 15.6102 3.374Z" fill="#171A22"/>
              </svg>
            </a>
            <a href="">
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M16.9798 0.919V15.744C16.9798 16.253 16.5698 16.663 16.0598 16.663H11.8198V10.212H13.9798L14.2998 7.697H11.8098V6.09C11.8098 5.361 12.0098 4.866 13.0598 4.866H14.3898V2.615C14.1598 2.585 13.3698 2.515 12.4498 2.515C10.5298 2.515 9.20982 3.686 9.20982 5.84V7.697H7.03982V10.212H9.20982V16.666H1.23982C0.729824 16.666 0.319824 16.253 0.319824 15.747V0.919C0.319824 0.413 0.729824 0 1.23982 0H16.0598C16.5698 0 16.9798 0.413 16.9798 0.919Z" fill="#171A22"/>
              </svg>
            </a>
            <a href="">
              <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M17.3 1.833C17.1 1.112 16.54 0.543 15.82 0.35C14.52 0 9.30998 0 9.30998 0C9.30998 0 4.09998 0 2.79998 0.35C2.07998 0.543 1.51998 1.112 1.31998 1.833C0.97998 3.141 0.97998 5.871 0.97998 5.871C0.97998 5.871 0.97998 8.6 1.31998 9.909C1.51998 10.63 2.07998 11.175 2.79998 11.368C4.09998 11.718 9.30998 11.718 9.30998 11.718C9.30998 11.718 14.52 11.718 15.82 11.368C16.54 11.175 17.1 10.63 17.3 9.909C17.64 8.6 17.64 5.871 17.64 5.871C17.64 5.871 17.64 3.141 17.3 1.833ZM7.60998 8.349V3.393L11.96 5.871L7.60998 8.349Z" fill="#171A22"/>
              </svg>
            </a>

            <a href="">
              <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M13.1401 11.73C12.5101 11.73 11.9401 11.98 11.5101 12.37L5.56014 8.91C5.61014 8.72 5.64014 8.53 5.64014 8.33C5.64014 8.13 5.61014 7.94 5.56014 7.75L11.4401 4.32C11.8901 4.74 12.4801 5 13.1401 5C14.5201 5 15.6401 3.88 15.6401 2.5C15.6401 1.11 14.5201 0 13.1401 0C11.7601 0 10.6401 1.11 10.6401 2.5C10.6401 2.7 10.6701 2.89 10.7101 3.08L4.84014 6.51C4.39014 6.09 3.80014 5.83 3.14014 5.83C1.76014 5.83 0.640137 6.95 0.640137 8.33C0.640137 9.71 1.76014 10.83 3.14014 10.83C3.80014 10.83 4.39014 10.57 4.84014 10.16L10.7701 13.62C10.7301 13.8 10.7101 13.98 10.7101 14.16C10.7101 15.51 11.8001 16.6 13.1401 16.6C14.4801 16.6 15.5701 15.51 15.5701 14.16C15.5701 12.82 14.4801 11.73 13.1401 11.73Z" fill="#171A22"/>
              </svg>
            </a>
          </div>
        </div>
        <div className="beside_news">
          <div className="tag">
            <h3 className="title_tag">Thẻ</h3>
            <a href="">
              <div className="fa_container">
                <span className="falcuty">CNTT</span>
                <span className="falcuty">Vật lý</span>
                <span className="falcuty">Công nghệ sinh học</span>
                <span className="falcuty">Hóa học</span>
                <span className="falcuty">Môi trường</span>
                <span className="falcuty">Sinh học</span>
              </div>
            </a>
          </div>
          <div className="hot_news">
            <h3 className="title_tag">Bài viết nổi bật</h3>

            <div className="list_news">
              <ul>
                <li>
                  <div>
                    <a href="" className="one_news">
                      <div className="thumnail">
                        <img
                          src="https://static.kinhtedothi.vn/w960/images/upload/2022/12/10/screenshot-20221210-121545.jpg"
                          alt=""
                          className="img"
                        />
                      </div>
                      <div className="descript">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Omnis, dolor!
                      </div>
                    </a>
                  </div>
                </li>
                <li>
                  <div>
                    <a href="" className="one_news">
                      <div className="thumnail">
                        <img
                          src="https://static.kinhtedothi.vn/w960/images/upload/2022/12/10/screenshot-20221210-121545.jpg"
                          alt=""
                          className="img"
                        />
                      </div>
                      <div className="descript">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Omnis, dolor!
                      </div>
                    </a>
                  </div>
                </li>
                <li>
                  <div>
                    <a href="" className="one_news">
                      <div className="thumnail">
                        <img
                          src="https://static.kinhtedothi.vn/w960/images/upload/2022/12/10/screenshot-20221210-121545.jpg"
                          alt=""
                          className="img"
                        />
                      </div>
                      <div className="descript">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Omnis, dolor!
                      </div>
                    </a>
                  </div>
                </li>
                <li>
                  <div>
                    <a href="" className="one_news">
                      <div className="thumnail">
                        <img
                          src="https://static.kinhtedothi.vn/w960/images/upload/2022/12/10/screenshot-20221210-121545.jpg"
                          alt=""
                          className="img"
                        />
                      </div>
                      <div className="descript">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Omnis, dolor!
                      </div>
                    </a>
                  </div>
                </li>
                <li>
                  <div>
                    <a href="" className="one_news">
                      <div className="thumnail">
                        <img
                          src="https://static.kinhtedothi.vn/w960/images/upload/2022/12/10/screenshot-20221210-121545.jpg"
                          alt=""
                          className="img"
                        />
                      </div>
                      <div className="descript">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Omnis, dolor!
                      </div>
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <button className="more">Xem thêm</button>
          </div>
        </div>
      </div>
      <div className="relative_news">
        <div className="container relative ">
          <h3 className="title_tag">Bài viết liên quan </h3>
          <Carousel className="carousel" responsive={responsive}>
            {relativeNews}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default NewsPage;
