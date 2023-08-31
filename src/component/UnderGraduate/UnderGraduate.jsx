import "./UnderGraduate.scss";

import video from "../../assets/video.mp4";
import student from "../../assets/svg/students 2.svg";
import counselor from "../../assets/svg/counselors 1.svg";
import family from "../../assets/svg/families 1.svg";
import mail from "../../assets/svg/mail 1.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState, useEffect, useRef } from "react";

function UnderGraduate() {
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
        <div className="slider-section">
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

            <div className="content-overlay">
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
        </div>
        <div className="container">
          <nav className="info">
            <p>Find the right information for you.</p>
            <ul>
              <li>
                <a href="/counselors">
                  <img alt="Counselors Icon" src={counselor}></img>
                  <strong>Counselors</strong>
                </a>
              </li>
              <li>
                <a href="/students">
                  <img alt="Students Icon" src={student}></img>
                  <strong>Students</strong>
                </a>
              </li>
              <li>
                <a href="/family">
                  <img alt="Parents and Families Icon" src={family}></img>
                  <strong> Parent & Family</strong>
                </a>
              </li>
            </ul>
          </nav>
          <article className="component_item top in-view">
            <header>
              <h2 className="component_item top in-view" id="brown_education">
                Where will your Brown <br></br>education take you?
              </h2>
            </header>
            <p>
              A Brown University education pushes undergraduates to be creative
              thinkers, intellectual risk-takers and entrepreneurial
              problem-solvers.
            </p>
            <p>
              This distinctive approach demands much of students. As the
              architect of your education, you are responsible for your own
              intellectual and creative development. But you also will receive
              support along the way from a dedicated community of faculty, staff
              and peer mentors and have access to numerous resources across the
              University that will help you on your path.
            </p>
            <nav className="component-item">
              <ul>
                <li>
                  <a href="/explore">
                    <img
                      src="https://admission.brown.edu/sites/default/files/homepage/admissions/explore.jpg"
                      alt=""
                    />
                  </a>
                  <a href="" className="parallelogram">
                    <span>Explore</span>
                  </a>
                </li>
                <li>
                  <a href="/visit">
                    <img
                      src="https://admission.brown.edu/sites/default/files/homepage/admissions/visit.jpg"
                      alt=""
                    />
                  </a>
                  <a href="" className="parallelogram">
                    <span>Visit</span>
                  </a>
                </li>
                <li>
                  <a href="/apply">
                    <img
                      src="https://admission.brown.edu/sites/default/files/homepage/admissions/apply.jpg"
                      alt=""
                    />
                  </a>
                  <a href="" className="parallelogram">
                    <span>Apply</span>
                  </a>
                </li>
              </ul>
            </nav>
          </article>
        </div>
        <div className="new-image">
          <img
            src="https://admission.brown.edu/sites/default/files/homepage/admissions/open-curriculum.jpg"
            alt=""
          />
        </div>
        <div className="new_container">
          <article className="component_item top in-view">
            <header>
              <h2 className="component_item top in-view" id="brown_education">
                Where will your Brown <br></br>education take you?
              </h2>
            </header>

            <p>
              This distinctive approach demands much of students. As the
              architect of your education, you are responsible for your own
              intellectual and creative development. But you also will receive
              support along the way from a dedicated community of faculty, staff
              and peer mentors and have access to numerous resources across the
              University that will help you on your path.
            </p>

            <div className="new-row">
              <img
                src="https://admission.brown.edu/sites/default/files/homepage/where-will-brown-take-you.jpg"
                alt=""
              />
              <div className="new-content">
                You will graduate from Brown prepared to thrive in whatever path
                you choose, with the skills, experience and connections to stand
                out and step up — on the job and everywhere else.
              </div>
            </div>
          </article>
          <footer>
            <a href="">
              Learn more about<strong> The Open Curriculum</strong>{" "}
            </a>
          </footer>
        </div>
        <div className="new-image2">
          <img
            src="https://admission.brown.edu/sites/default/files/homepage/admissions/open-curriculum.jpg"
            alt=""
          />
        </div>
        <div className="next_container">
          <article className="component_item top in-view">
            <header>
              <h2 className="component_item top in-view" id="brown_education">
                Where will your Brown <br></br>education take you?
              </h2>
            </header>

            <p>
              This distinctive approach demands much of students. As the
              architect of your education, you are responsible for your own
              intellectual and creative development. But you also will receive
              support along the way from a dedicated community of faculty, staff
              and peer mentors and have access to numerous resources across the
              University that will help you on your path.
            </p>
            <p>
              This distinctive approach demands much of students. As the
              architect of your education, you are responsible for your own
              intellectual and creative development. But you also will receive
              support along the way from a dedicated community of faculty, staff
              and peer mentors and have access to numerous resources across the
              University that will help you on your path.
            </p>

            <a href="" className="parallelogram">
              <span>LEARN ABOUT FINANCIAL AID</span>
            </a>
          </article>
          <footer>
            <nav>
              <h3>Connect with Brown on social</h3>
              <ul>
                <li>
                  {" "}
                  <a className="icon" href="">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.33 4.0595C5.97 4.0595 4.06 5.9665 4.06 8.3315C4.06 10.6965 5.97 12.6035 8.33 12.6035C10.7 12.6035 12.6 10.6965 12.6 8.3315C12.6 5.9665 10.7 4.0595 8.33 4.0595ZM8.33 11.1095C6.8 11.1095 5.55 9.8635 5.55 8.3315C5.55 6.7995 6.8 5.5545 8.33 5.5545C9.86 5.5545 11.11 6.7995 11.11 8.3315C11.11 9.8635 9.86 11.1095 8.33 11.1095ZM13.78 3.8845C13.78 4.4385 13.33 4.8815 12.78 4.8815C12.22 4.8815 11.78 4.4355 11.78 3.8845C11.78 3.3345 12.23 2.8885 12.78 2.8885C13.33 2.8885 13.78 3.3345 13.78 3.8845ZM16.6 4.8965C16.54 3.5615 16.24 2.3785 15.26 1.4045C14.28 0.4305 13.1 0.1255 11.77 0.0585C10.39 -0.0195 6.27 -0.0195 4.89 0.0585C3.56 0.1215 2.38 0.4265 1.4 1.4015C0.42 2.3755 0.12 3.5575 0.06 4.8925C-0.02 6.2685 -0.02 10.3915 0.06 11.7675C0.12 13.1025 0.42 14.2845 1.4 15.2585C2.38 16.2325 3.56 16.5375 4.89 16.6045C6.27 16.6825 10.39 16.6825 11.77 16.6045C13.1 16.5415 14.28 16.2365 15.26 15.2585C16.23 14.2845 16.54 13.1025 16.6 11.7675C16.68 10.3915 16.68 6.2715 16.6 4.8965ZM14.83 13.2435C14.54 13.9725 13.98 14.5335 13.24 14.8275C12.15 15.2625 9.54 15.1615 8.33 15.1615C7.12 15.1615 4.51 15.2585 3.42 14.8275C2.69 14.5375 2.13 13.9755 1.84 13.2435C1.4 12.1465 1.5 9.5435 1.5 8.3315C1.5 7.1195 1.4 4.5135 1.84 3.4195C2.13 2.6915 2.69 2.1295 3.42 1.8365C4.52 1.4015 7.12 1.5015 8.33 1.5015C9.54 1.5015 12.15 1.4045 13.24 1.8365C13.97 2.1265 14.53 2.6875 14.83 3.4195C15.26 4.5165 15.16 7.1195 15.16 8.3315C15.16 9.5435 15.26 12.1505 14.83 13.2435Z"
                        fill="#171A22"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  {" "}
                  <a className="icon" href="">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 18 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.6102 3.374C15.6202 3.522 15.6202 3.67 15.6202 3.818C15.6202 8.334 12.1802 13.537 5.90016 13.537C3.97016 13.537 2.17016 12.976 0.660156 12.003C0.930156 12.035 1.20016 12.046 1.48016 12.046C3.08016 12.046 4.55016 11.506 5.72016 10.586C4.22016 10.554 2.96016 9.571 2.53016 8.217C2.74016 8.249 2.95016 8.27 3.17016 8.27C3.48016 8.27 3.79016 8.228 4.07016 8.154C2.51016 7.837 1.33016 6.462 1.33016 4.802V4.759C1.79016 5.013 2.32016 5.172 2.88016 5.193C1.96016 4.579 1.35016 3.532 1.35016 2.348C1.35016 1.714 1.52016 1.132 1.82016 0.624C3.50016 2.697 6.03016 4.051 8.86016 4.199C8.81016 3.945 8.78016 3.681 8.78016 3.416C8.78016 1.534 10.3002 0 12.1902 0C13.1802 0 14.0702 0.413 14.6902 1.079C15.4602 0.931 16.2002 0.645 16.8602 0.254C16.6002 1.047 16.0602 1.714 15.3602 2.137C16.0402 2.063 16.7102 1.872 17.3202 1.608C16.8602 2.285 16.2802 2.887 15.6102 3.374Z"
                        fill="#171A22"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  {" "}
                  <a className="icon" href="">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.9798 0.919V15.744C16.9798 16.253 16.5698 16.663 16.0598 16.663H11.8198V10.212H13.9798L14.2998 7.697H11.8098V6.09C11.8098 5.361 12.0098 4.866 13.0598 4.866H14.3898V2.615C14.1598 2.585 13.3698 2.515 12.4498 2.515C10.5298 2.515 9.20982 3.686 9.20982 5.84V7.697H7.03982V10.212H9.20982V16.666H1.23982C0.729824 16.666 0.319824 16.253 0.319824 15.747V0.919C0.319824 0.413 0.729824 0 1.23982 0H16.0598C16.5698 0 16.9798 0.413 16.9798 0.919Z"
                        fill="#171A22"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  {" "}
                  <a className="icon" href="">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 18 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="colored-svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17.3 1.833C17.1 1.112 16.54 0.543 15.82 0.35C14.52 0 9.30998 0 9.30998 0C9.30998 0 4.09998 0 2.79998 0.35C2.07998 0.543 1.51998 1.112 1.31998 1.833C0.97998 3.141 0.97998 5.871 0.97998 5.871C0.97998 5.871 0.97998 8.6 1.31998 9.909C1.51998 10.63 2.07998 11.175 2.79998 11.368C4.09998 11.718 9.30998 11.718 9.30998 11.718C9.30998 11.718 14.52 11.718 15.82 11.368C16.54 11.175 17.1 10.63 17.3 9.909C17.64 8.6 17.64 5.871 17.64 5.871C17.64 5.871 17.64 3.141 17.3 1.833ZM7.60998 8.349V3.393L11.96 5.871L7.60998 8.349Z"
                        fill="#171A22"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>
            <a href="">
              <span>Join our contact list</span>
              <img src={mail} className="img_mail" alt="" />
            </a>
          </footer>
        </div>
      </main>
    </>
  );
}

export default UnderGraduate;
