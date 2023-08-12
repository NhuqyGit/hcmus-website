
import React, { useState } from 'react';
import './SearchList.scss';
import new3 from "../../assets/img/news-3.png";
import new4 from "../../assets/img/news-4.png";
import new5 from "../../assets/img/news-5.png";

function SearchList() {
  const [pos, setPos] = useState(0);
  const [key, setKey] = useState("");


  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('q');

  const listSearch = [
    {
      title: (
        <>
          THÔNG BÁO <span >{searchQuery}</span> VALLET 2023 (Dành cho sinh viên đại học)
        </>
      ),
      content: (
        <p>
          Trường Đại học Khoa học Tự nhiên thông báo danh sách dự kiến sinh viên các. Chương trình Đề án Khoa Công nghệ Thông tin được xét cấp, Chương trình Đề án Khoa Công nghệ Thông tin{' '}
          <span >{searchQuery}</span>
        </p>
      ),
      imgUrl: "https://deviet.vn/wp-content/uploads/2019/04/vuong-quoc-anh.jpg"
    },
    {
      title: (
        <>
          Thông báo kết quả dự kiến HBKK HK1/22-23 CTĐA Khoa Công nghệ Thông tin
        </>
      ),
      content: (
        <p>
          Lễ trao <span >{searchQuery}</span> “Thắp sáng ước mơ” năm 2023 sẽ được diễn ra trong chương trình “Ngày hội Sinh viên và Doanh nghiệp - Năm 2023” vào ngày 04/6/2023 Chương trình Đề án Khoa Công nghệ Thông tin{' '}
        </p>
      ),
      imgUrl: new3
    },
    {
      title: (
        <>
          THÔNG BÁO <span >{searchQuery}</span> VALLET 2023 (Dành cho sinh viên đại học)
        </>
      ),
      content: (
        <p>
          Trường Đại học Khoa học Tự nhiên thông báo danh sách dự kiến sinh viên các. Chương trình Đề án Khoa Công nghệ Thông tin được xét cấp, chương trình Đề án Khoa Công nghệ Thông tin, Chương trình Đề án Khoa Công nghệ Thông tin{' '}
          <span >{searchQuery}</span>
        </p>
      ),
      imgUrl: new4
    },
    {
      title: (
        <>
          Thông báo kết quả dự kiến HBKK HK1/22-23 CTĐA Khoa Công nghệ Thông tin
        </>
      ),
      content: (
        <p>
          Lễ trao <span >{searchQuery}</span> “Thắp sáng ước mơ” năm 2023 sẽ được diễn ra trong chương trình “Ngày hội Sinh viên và Doanh nghiệp - Năm 2023” vào ngày 04/6/2023{' '}
        </p>
      ),
      imgUrl: "https://deviet.vn/wp-content/uploads/2019/04/vuong-quoc-anh.jpg"
    },
    {
      title: (
        <>
          THÔNG BÁO <span >{searchQuery}</span> VALLET 2023 (Dành cho sinh viên đại học)
        </>
      ),
      content: (
        <p>
          Trường Đại học Khoa học Tự nhiên thông báo danh sách dự kiến sinh viên các. Chương trình Đề án Khoa Công nghệ Thông tin được xét cấp, Chương trình Đề án Khoa Công nghệ Thông tin{' '}
          <span >{searchQuery}</span>
        </p>
      ),
      imgUrl: new5
    },
    {
      title: (
        <>
          Thông báo kết quả dự kiến HBKK HK1/22-23 CTĐA Khoa Công nghệ Thông tin
        </>
      ),
      content: (
        <p>
          Lễ trao <span >{searchQuery}</span> “Thắp sáng ước mơ” năm 2023 sẽ được diễn ra trong chương trình “Ngày hội Sinh viên và Doanh nghiệp - Năm 2023” vào ngày 04/6/2023 Chương trình Đề án Khoa Công nghệ Thông tin{' '}
        </p>
      ),
      imgUrl: "https://deviet.vn/wp-content/uploads/2019/04/vuong-quoc-anh.jpg"
    },
    {
      title: (
        <>
          THÔNG BÁO <span >{searchQuery}</span> VALLET 2023 (Dành cho sinh viên đại học)
        </>
      ),
      content: (
        <p>
          Trường Đại học Khoa học Tự nhiên thông báo danh sách dự kiến sinh viên các. Chương trình Đề án Khoa Công nghệ Thông tin được xét cấp{' '}
          <span >{searchQuery}</span>
        </p>
      ),
      imgUrl: "https://deviet.vn/wp-content/uploads/2019/04/vuong-quoc-anh.jpg"
    }
  ]

  const mapSearch = listSearch.map((item, index)=>{
    return (
      <div key={index.toString()}>  
        <ContentBox
          title={item.title}
          content={item.content}
          imgUrl={item.imgUrl}
        />
      </div>
    )
  })

  return (
    <div className="container-list_container">
      <div className='bannerTitle'>
        <h1>TÌM KIẾM</h1>
      </div>

      <div className='section-searchBar'>
                    <div className='searchBar-control'>
                        <div className={`control-item ${pos === 0 ? 'active' : '' }`} onClick={()=>setPos(0)}>
                            <div className="control-title">
                                <svg width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.997" fillRule="evenodd" clipRule="evenodd" d="M14.3326 0.154813C14.3603 0.154148 14.3787 0.165242 14.3881 0.188096C13.2219 5.16827 12.0647 10.1496 10.9165 15.1321C9.15744 14.8694 7.46333 14.4442 5.8342 13.8562C4.30144 13.2973 2.97309 12.5169 1.84886 11.5153C1.22921 10.9271 1.15517 10.2985 1.62669 9.62932C1.87355 9.3138 2.14203 9.01048 2.43208 8.71959C3.23776 7.96496 4.09398 7.24383 5.00103 6.55621C5.99362 5.80759 7.00259 5.07537 8.02822 4.35954C10.1186 2.94427 12.2202 1.54268 14.3326 0.154813Z" fill="#273D73"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M7.33363 6.1918C7.50888 6.18246 7.67551 6.20835 7.83353 6.26946C8.0571 6.35954 8.26539 6.4668 8.45841 6.59119C8.62949 6.49907 8.80057 6.40663 8.9722 6.31384C9.55042 6.07347 9.91619 6.20289 10.0692 6.70214C10.0731 6.91004 10.0637 7.11706 10.0414 7.32341C10.2817 7.39531 10.5086 7.48783 10.7219 7.60077C11.1193 7.87258 11.1287 8.15371 10.7496 8.44394C10.5344 8.57796 10.2936 8.67048 10.0276 8.72129C10.0559 8.96492 10.0603 9.209 10.0414 9.45352C9.93729 9.77059 9.6829 9.90017 9.2777 9.84182C8.97415 9.7575 8.70559 9.62814 8.4723 9.45352C8.23318 9.63302 7.95545 9.7626 7.63913 9.84182C7.25254 9.90283 7.00703 9.7808 6.90316 9.4757C6.84761 9.22342 6.85234 8.97202 6.91705 8.72129C6.57489 8.65872 6.28328 8.52559 6.04222 8.3219C5.88863 8.14084 5.87947 7.95601 6.01444 7.76719C6.25856 7.56061 6.55017 7.41261 6.88927 7.32341C6.89844 7.30123 6.90788 7.27904 6.91705 7.25685C6.85511 7.02786 6.85039 6.79866 6.90316 6.569C6.96648 6.38164 7.11006 6.2559 7.33363 6.1918Z" fill="#F5F6F8"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M7.41707 6.43433C7.76673 6.42636 8.07222 6.51512 8.33356 6.70059C8.17082 6.84903 8.01363 7.00058 7.86143 7.15546C7.59843 7.18053 7.33903 7.22114 7.08381 7.27749C7.07908 7.10731 7.08381 6.93712 7.09769 6.76716C7.15157 6.62085 7.25794 6.5099 7.41707 6.43433Z" fill="#2A4075"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M9.16678 6.43464C9.65279 6.41989 9.88414 6.60849 9.86109 7.00045C9.86275 7.09475 9.84887 7.18728 9.81943 7.27781C9.57559 7.23609 9.33008 7.19526 9.08346 7.15577C8.93127 7.00089 8.77407 6.84934 8.61133 6.7009C8.78074 6.58894 8.96598 6.50019 9.16678 6.43464Z" fill="#294075"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M8.41701 6.81128C8.46728 6.81106 8.51366 6.82215 8.55587 6.84457C8.65252 6.9402 8.75444 7.03272 8.86137 7.12192C8.60225 7.15143 8.34286 7.15143 8.08374 7.12192C8.18511 7.01142 8.2962 6.9078 8.41701 6.81128Z" fill="#2D4277"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M8.0004 7.25545C8.34505 7.24547 8.68749 7.26033 9.02798 7.29983C9.23932 7.5266 9.41512 7.77067 9.55565 8.03205C9.40207 8.29632 9.21683 8.54416 9.0002 8.77537C8.6375 8.82218 8.27645 8.81863 7.91708 8.76427C7.7024 8.53595 7.52632 8.28811 7.3894 8.02096C7.53576 7.76823 7.70712 7.52793 7.90319 7.29983C7.9393 7.28696 7.97179 7.27209 8.0004 7.25545Z" fill="#293F75"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M7.58376 7.29915C7.63098 7.2956 7.67736 7.29937 7.72262 7.31024C7.57099 7.4822 7.43657 7.66348 7.31992 7.85386C7.22939 7.70675 7.16912 7.55143 7.1394 7.3879C7.29354 7.36749 7.44157 7.33798 7.58376 7.29915Z" fill="#2E4378"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M9.22241 7.2998C9.42598 7.32199 9.62039 7.36637 9.80563 7.43294C9.75953 7.58448 9.69926 7.73226 9.62511 7.87671C9.49736 7.67967 9.36294 7.4873 9.22241 7.2998Z" fill="#2B4176"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M6.91719 7.45319C6.94496 7.4512 6.96801 7.45874 6.98662 7.47538C7.04883 7.66132 7.12743 7.8426 7.22268 8.019C7.13298 8.18941 7.05438 8.36315 6.98662 8.54043C6.97579 8.56107 6.95746 8.57571 6.93107 8.58481C6.68973 8.51758 6.48588 8.40664 6.32008 8.25198C6.17733 8.07092 6.19594 7.90074 6.37563 7.74165C6.53837 7.62249 6.71889 7.5262 6.91719 7.45319Z" fill="#2A4075"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M9.94337 7.45288C10.2128 7.51812 10.4397 7.63638 10.6238 7.8079C10.7218 7.96699 10.7127 8.12231 10.596 8.27386C10.4299 8.41054 10.2355 8.51416 10.0128 8.5845C9.99142 8.58139 9.97281 8.57385 9.95726 8.56231C9.88671 8.38236 9.80812 8.20485 9.72119 8.02978C9.81228 7.84118 9.88616 7.64881 9.94337 7.45288Z" fill="#294075"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M8.33363 7.67679C8.8077 7.67412 8.97878 7.85163 8.84742 8.20931C8.66856 8.3988 8.45083 8.43209 8.19477 8.30916C7.93759 8.05444 7.9837 7.84365 8.33363 7.67679Z" fill="#F8F9FA"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M7.30595 8.18726C7.43259 8.36698 7.56673 8.54449 7.70865 8.71978C7.72503 8.74153 7.71587 8.75639 7.68087 8.76416C7.50757 8.73309 7.33622 8.69604 7.16708 8.65322C7.1607 8.49013 7.20708 8.33481 7.30595 8.18726Z" fill="#304579"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M9.61123 8.18726C9.71371 8.32971 9.77869 8.48503 9.80563 8.65322C9.614 8.69715 9.4196 8.72289 9.22241 8.73088C9.37738 8.56113 9.5068 8.37985 9.61123 8.18726Z" fill="#2D4277"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M7.08468 8.78638C7.3313 8.83297 7.58125 8.86626 7.83454 8.88623C7.99089 9.04798 8.15753 9.2033 8.33444 9.35218C8.0906 9.53302 7.80343 9.62178 7.4735 9.61845C7.29103 9.56874 7.17522 9.4689 7.12634 9.3189C7.08857 9.14295 7.07468 8.96544 7.08468 8.78638Z" fill="#293F75"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M9.72222 8.78638C9.7686 8.78638 9.81471 8.78638 9.86109 8.78638C9.87747 8.98962 9.85442 9.18932 9.79165 9.38547C9.6403 9.60669 9.41339 9.67702 9.11123 9.59626C8.92016 9.53857 8.75352 9.45359 8.61133 9.34109C8.78185 9.2013 8.93932 9.05353 9.08346 8.89732C9.30175 8.86626 9.51476 8.8292 9.72222 8.78638Z" fill="#2A4076"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M8.08374 8.94216C8.33814 8.91642 8.59725 8.91287 8.86137 8.93106C8.74611 9.04911 8.61641 9.15628 8.47255 9.2528C8.3323 9.15561 8.20288 9.05199 8.08374 8.94216Z" fill="#293F75"/>
                                    <path opacity="0.972" fillRule="evenodd" clipRule="evenodd" d="M0.501724 11.3159C1.3542 12.2521 2.4003 13.0249 3.64 13.6346C5.02196 14.2901 6.48445 14.8004 8.02804 15.1656C9.58496 15.5007 11.1494 15.8113 12.7216 16.0975C14.4315 16.4594 15.8896 17.1511 17.0957 18.1722C17.9792 19.0247 18.4421 20.0083 18.4843 21.1233C18.4982 21.3005 18.5029 21.478 18.4982 21.6558C18.313 21.6558 18.128 21.6558 17.9428 21.6558C18.0419 19.9544 17.2365 18.6044 15.5266 17.6064C14.9084 17.2558 14.2418 16.9747 13.527 16.7632C12.1281 16.3913 10.7025 16.1029 9.25002 15.8979C7.43815 15.5508 5.70682 15.0332 4.05659 14.3447C2.99346 13.8663 2.0169 13.2931 1.1266 12.625C1.00718 12.5074 0.877595 12.3965 0.737789 12.2922C0.594928 12.1021 0.520859 11.895 0.51561 11.6709C0.501752 11.5529 0.497114 11.4344 0.501724 11.3159Z" fill="#263D73"/>
                                    <path opacity="0.997" fillRule="evenodd" clipRule="evenodd" d="M0.696289 12.7581C2.13448 13.8473 3.78236 14.6869 5.63977 15.2765C7.50524 15.8784 9.43098 16.3147 11.4164 16.5856C12.6173 16.7871 13.756 17.1199 14.8324 17.5841C16.4663 18.3411 17.3597 19.4765 17.5125 20.99C17.5277 21.2048 17.5369 21.4194 17.5402 21.6335C17.1395 21.6481 16.7368 21.6557 16.3321 21.6557C11.6294 21.6421 6.92647 21.6275 2.22377 21.6113C2.05166 20.8005 1.89892 19.9869 1.76553 19.1705C1.40512 17.0329 1.04872 14.8955 0.696289 12.7581Z" fill="#273E74"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M5.63961 19.369C5.63045 19.6061 5.63961 19.8427 5.66738 20.079C5.68432 20.0763 5.69349 20.0688 5.69516 20.0568C5.98593 19.8283 6.28226 19.6026 6.58387 19.38C6.78744 19.3652 6.99129 19.3652 7.19486 19.38C6.91214 19.5875 6.63442 19.7983 6.36169 20.0124C6.65802 20.3379 6.95408 20.6632 7.25041 20.9887C7.05656 21.0145 6.86215 21.0182 6.66719 20.9998C6.45279 20.7495 6.23533 20.5017 6.01454 20.2565C5.89456 20.3375 5.77403 20.4189 5.6535 20.5006C5.63961 20.6705 5.63489 20.8407 5.63961 21.0109C5.48214 21.0109 5.32495 21.0109 5.16748 21.0109C5.16748 20.4635 5.16748 19.9163 5.16748 19.369C5.32495 19.369 5.48214 19.369 5.63961 19.369Z" fill="#FAFBFC"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M5.63969 19.3689C5.65845 19.5981 5.67694 19.8275 5.6957 20.0567C5.69402 20.0687 5.68478 20.0763 5.6677 20.0789C5.63969 19.8426 5.63045 19.6061 5.63969 19.3689Z" fill="#566792"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M8.9167 21.0108C8.9167 20.7668 8.9167 20.5227 8.9167 20.2786C8.6062 20.2713 8.3007 20.2788 8.00021 20.3008C8.00021 20.5376 8.00021 20.7741 8.00021 21.0108C7.84274 21.0108 7.68555 21.0108 7.52808 21.0108C7.52808 20.4635 7.52808 19.9163 7.52808 19.3689C7.68555 19.3689 7.84274 19.3689 8.00021 19.3689C8.00021 19.5835 8.00021 19.7978 8.00021 20.0124C8.3057 20.0124 8.6112 20.0124 8.9167 20.0124C8.9167 19.7978 8.9167 19.5835 8.9167 19.3689C9.07416 19.3689 9.23136 19.3689 9.38883 19.3689C9.38883 19.9163 9.38883 20.4635 9.38883 21.0108C9.23136 21.0108 9.07416 21.0108 8.9167 21.0108Z" fill="#F9F9FB"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M9.69409 19.3689C10.3142 19.3689 10.9347 19.3689 11.5548 19.3689C11.5548 19.4577 11.5548 19.5464 11.5548 19.6352C11.3235 19.6352 11.0919 19.6352 10.8605 19.6352C10.8605 20.0938 10.8605 20.5522 10.8605 21.0108C10.7031 21.0108 10.5459 21.0108 10.3884 21.0108C10.3884 20.5522 10.3884 20.0938 10.3884 19.6352C10.1571 19.6352 9.92544 19.6352 9.69409 19.6352C9.69409 19.5464 9.69409 19.4577 9.69409 19.3689Z" fill="#FDFDFD"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M13.2214 20.4133C13.2292 20.4308 13.2431 20.4457 13.2631 20.4577C13.277 20.0953 13.2817 19.733 13.277 19.3704C13.4158 19.3704 13.5547 19.3704 13.6936 19.3704C13.6936 19.9178 13.6936 20.465 13.6936 21.0124C13.5358 21.0161 13.3786 21.0124 13.2214 21.0013C12.9148 20.648 12.6046 20.2968 12.2911 19.9473C12.2772 20.3023 12.2725 20.6574 12.2772 21.0124C12.1383 21.0124 11.9995 21.0124 11.8606 21.0124C11.8606 20.465 11.8606 19.9178 11.8606 19.3704C12.0192 19.3631 12.1764 19.3704 12.3327 19.3926C12.6293 19.7334 12.9254 20.0738 13.2214 20.4133Z" fill="#FCFDFD"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M13.2777 19.3689C13.2824 19.7315 13.2777 20.0938 13.2637 20.4561C13.2435 20.4442 13.2295 20.4293 13.2217 20.4118C13.2404 20.0641 13.2589 19.7166 13.2777 19.3689Z" fill="#7B89AA"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M8.00024 20.3042C8.30074 20.2822 8.60624 20.2747 8.91673 20.282C8.91673 20.5261 8.91673 20.7702 8.91673 21.0142C8.88924 20.7815 8.8798 20.5449 8.88896 20.3042C8.59263 20.3042 8.29658 20.3042 8.00024 20.3042Z" fill="#8E9AB6"/>
                                </svg>

                                <span>Tất cả thông tin</span>
                            </div>
                            <div className='control-border'>
                                <div className="triangle"></div>
                            </div>
                        </div>
                        <div className={`control-item ${pos === 1 ? 'active' : '' }`} onClick={()=>setPos(1)}>
                            <div className="control-title">
                                <svg width="17" height="16" viewBox="0 0 17 16" fill="red" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.8846 6.68169H12.8077V1.47917C12.8077 1.08898 12.5615 0.828857 12.1923 0.828857H1.11538C0.746154 0.828857 0.5 1.08898 0.5 1.47917V13.1848C0.5 14.6155 1.60769 15.7861 2.96154 15.7861H13.4231C13.4846 15.7861 13.5462 15.7861 13.6077 15.7211C13.7308 15.7211 13.8538 15.7861 14.0385 15.7861C15.3923 15.7861 16.5 14.6155 16.5 13.1848V7.332C16.5 6.94181 16.2538 6.68169 15.8846 6.68169ZM4.80769 7.98232H3.57692C3.20769 7.98232 2.96154 7.72219 2.96154 7.332C2.96154 6.94181 3.20769 6.68169 3.57692 6.68169H4.80769C5.17692 6.68169 5.42308 6.94181 5.42308 7.332C5.42308 7.72219 5.17692 7.98232 4.80769 7.98232ZM7.26923 5.38106H3.57692C3.20769 5.38106 2.96154 5.12093 2.96154 4.73074C2.96154 4.34056 3.20769 4.08043 3.57692 4.08043H7.26923C7.63846 4.08043 7.88462 4.34056 7.88462 4.73074C7.88462 5.12093 7.63846 5.38106 7.26923 5.38106ZM15.2692 13.1848C15.2692 13.9002 14.7154 14.4855 14.0385 14.4855C13.9154 14.4855 13.7923 14.4855 13.6692 14.4204C13.3 14.2904 13.0538 13.9652 12.9308 13.6401V13.575C12.8077 13.445 12.8077 13.3149 12.8077 13.1848V7.98232H15.2692V13.1848Z" fill="#464A4F"/>
                                </svg>
                                <span>Tin tức</span>
                            </div>
                            <div className='control-border'>
                                    <div className="triangle"></div>
                            </div>
                        </div>
                        <div className={`control-item ${pos === 2 ? 'active' : '' }`} onClick={()=>setPos(2)}>
                            <div className='control-title'>
                                <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M13.1667 8.29492H6.83333C6.39792 8.29492 6.04167 8.62795 6.04167 9.03499C6.04167 9.44203 6.39792 9.77506 6.83333 9.77506H13.1667C13.6021 9.77506 13.9583 9.44203 13.9583 9.03499C13.9583 8.62795 13.6021 8.29492 13.1667 8.29492ZM15.5417 3.11442H14.75V2.37435C14.75 1.96731 14.3938 1.63428 13.9583 1.63428C13.5229 1.63428 13.1667 1.96731 13.1667 2.37435V3.11442H6.83333V2.37435C6.83333 1.96731 6.47708 1.63428 6.04167 1.63428C5.60625 1.63428 5.25 1.96731 5.25 2.37435V3.11442H4.45833C3.57958 3.11442 2.875 3.78048 2.875 4.59456V14.9556C2.875 15.7696 3.57958 16.4357 4.45833 16.4357H15.5417C16.4125 16.4357 17.125 15.7696 17.125 14.9556V4.59456C17.125 3.78048 16.4125 3.11442 15.5417 3.11442ZM14.75 14.9556H5.25C4.81458 14.9556 4.45833 14.6225 4.45833 14.2155V6.81478H15.5417V14.2155C15.5417 14.6225 15.1854 14.9556 14.75 14.9556ZM10.7917 11.2552H6.83333C6.39792 11.2552 6.04167 11.5882 6.04167 11.9953C6.04167 12.4023 6.39792 12.7353 6.83333 12.7353H10.7917C11.2271 12.7353 11.5833 12.4023 11.5833 11.9953C11.5833 11.5882 11.2271 11.2552 10.7917 11.2552Z" fill="#464A4F"/>
                                </svg>

                                <span>Sự kiện</span>
                            </div>
                            <div className='control-border'>
                                <div className="triangle"></div>
                            </div>
                        </div>
                    </div>
                    <div className="searchBar-form">
                        <div className="searchBar-input">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.99225 13.9845C8.69767 13.9845 10.2481 13.3798 11.4574 12.3566L16.8837 17.7829C17.0078 17.907 17.1628 17.969 17.3333 17.969C17.5039 17.969 17.6589 17.907 17.7829 17.7829C18.031 17.5349 18.031 17.1318 17.7829 16.8837L12.3566 11.4574C13.3643 10.2481 13.9845 8.68217 13.9845 6.99225C13.9845 3.13178 10.8527 0 6.99225 0C3.14729 0 0 3.14729 0 6.99225C0 10.8527 3.14729 13.9845 6.99225 13.9845ZM6.99225 1.27132C10.155 1.27132 12.7132 3.84496 12.7132 6.99225C12.7132 10.155 10.155 12.7132 6.99225 12.7132C3.82946 12.7132 1.27132 10.1395 1.27132 6.99225C1.27132 3.84496 3.84496 1.27132 6.99225 1.27132Z" fill="white"/>
                            </svg>
                            <input placeholder='Tìm kiếm từ khóa' value={key} onChange={(e)=>setKey(e.target.value)}/>
                        </div>

                        <a className='search-btn' href={`/timkiem?q=${encodeURIComponent(key)}`}>
                            <span>TÌM KIẾM</span>
                            <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_227_754)">
                            <path fillRule="evenodd" clipRule="evenodd" d="M14.5 7.00388C14.5 6.88707 14.4519 6.77551 14.3718 6.69151L10.041 2.31695C9.86994 2.14413 9.593 2.14457 9.42237 2.31695C9.25131 2.48932 9.25131 2.76932 9.42237 2.9417L13.0068 6.56201H0.9375C0.696 6.56201 0.5 6.75976 0.5 7.00388C0.5 7.24801 0.696 7.44576 0.9375 7.44576H13.0064L9.42237 11.0661C9.25131 11.2384 9.25175 11.5184 9.42237 11.6908C9.59344 11.8632 9.87038 11.8632 10.041 11.6908L14.3718 7.31626C14.4536 7.23357 14.4987 7.11982 14.5 7.00388Z" fill="white"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_227_754">
                            <rect width="14" height="14" fill="white" transform="translate(0.5)"/>
                            </clipPath>
                            </defs>
                            </svg>
                        </a>
                    </div>
      </div>
      <div className="top">
        {/* <p>Có <div className='count'><span>8</span></div> kết quả được tìm thấy</p> */}

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

          {mapSearch}

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
    <a className="content_box" href='/baiviet'>
      <div className="content_box_top">
        <h3>{title}</h3>
        {content}
      </div>
      <img src={imgUrl} alt="" />
    </a>
  );
}

export default SearchList;
