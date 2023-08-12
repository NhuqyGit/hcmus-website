import "./NewsPage.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import RelativeNew from "./RelativeNew";
import Icofont from "react-icofont";
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
          <div>
            <Icofont icon="ui-calendar" className="icon" />
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
            <div className="share"></div>
            <a href="">
              <Icofont icon="instagram" className="icon" />
            </a>
            <a href="">
              <Icofont icon="twitter" className="icon" />
            </a>
            <a href="">
              <Icofont icon="facebook" className="icon" />
            </a>
            <a href="">
              <Icofont icon="youtube-play" className="icon" />
            </a>

            <a href="">
              <Icofont icon="share" className="icon" />
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
