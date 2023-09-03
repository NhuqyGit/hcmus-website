import './Footer.scss';
import logo from '../../assets/logo-footer.svg';

function Footer() { 
    return (
        <footer>    
            <div className="footer-container">
                <div className='footer-logo'>
                    <img src={logo}></img>
                    <div className='logo-name'>
                        <h1>HCMUS</h1>
                        <h4>Viet Nam National University</h4>
                        <h4 style={{marginBottom: "10px"}}>Ho Chi Minh City</h4>
                    </div>
                </div>

                <div className='info-contact'>
                    <div className='info-contact__container'>
                        <h4>VNUHCM - University Of Science</h4>
                        <div className='address'>
                            <svg width="14px" height="20px" viewBox="0 0 14 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                    <g id="Rounded" transform="translate(-377.000000, -1306.000000)">
                                        <g id="Communication" transform="translate(100.000000, 1162.000000)">
                                            <g id="-Round-/-Communication-/-location_on" transform="translate(272.000000, 142.000000)">
                                                <g>
                                                    <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
                                                    <path d="M12,2 C8.13,2 5,5.13 5,9 C5,13.17 9.42,18.92 11.24,21.11 C11.64,21.59 12.37,21.59 12.77,21.11 C14.58,18.92 19,13.17 19,9 C19,5.13 15.87,2 12,2 Z M12,11.5 C10.62,11.5 9.5,10.38 9.5,9 C9.5,7.62 10.62,6.5 12,6.5 C13.38,6.5 14.5,7.62 14.5,9 C14.5,10.38 13.38,11.5 12,11.5 Z" id="🔹Icon-Color" fill="#8996a0"></path>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <span>227 Đ. Nguyễn Văn Cừ, Phường 4, Quận 5, Thành phố Hồ Chí Minh</span>
                        </div>
                        <div className='phone'>
                            <svg width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                    <g id="Rounded" transform="translate(-749.000000, -1263.000000)">
                                        <g id="Communication" transform="translate(100.000000, 1162.000000)">
                                            <g id="-Round-/-Communication-/-phone" transform="translate(646.000000, 98.000000)">
                                                <g>
                                                    <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
                                                    <path d="M19.23,15.26 L16.69,14.97 C16.08,14.9 15.48,15.11 15.05,15.54 L13.21,17.38 C10.38,15.94 8.06,13.63 6.62,10.79 L8.47,8.94 C8.9,8.51 9.11,7.91 9.04,7.3 L8.75,4.78 C8.63,3.77 7.78,3.01 6.76,3.01 L5.03,3.01 C3.9,3.01 2.96,3.95 3.03,5.08 C3.56,13.62 10.39,20.44 18.92,20.97 C20.05,21.04 20.99,20.1 20.99,18.97 L20.99,17.24 C21,16.23 20.24,15.38 19.23,15.26 Z" id="🔹Icon-Color" fill="#8996a0"></path>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <span>(028) 62884499</span>
                        </div>
                        <div className='social'>
                            <div className="facebook">
                                <svg width="25" height="25" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0 12.067C0 18.033 4.51354 22.994 10.4167 24V15.333H7.29167V12H10.4167V9.333C10.4167 6.333 12.4302 4.667 15.2781 4.667C16.1802 4.667 17.1531 4.8 18.0552 4.933V8H16.4583C14.9302 8 14.5833 8.733 14.5833 9.667V12H17.9167L17.3615 15.333H14.5833V24C20.4865 22.994 25 18.034 25 12.067C25 5.43 19.375 0 12.5 0C5.625 0 0 5.43 0 12.067Z" fill="#545454"/>
                                </svg>
                            </div>
                            <div className='youtube'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.0037 11.7913L11.1963 10.4813C10.9513 10.3675 10.75 10.495 10.75 10.7662V13.2338C10.75 13.505 10.9513 13.6325 11.1963 13.5188L14.0025 12.2087C14.2488 12.0938 14.2487 11.9063 14.0037 11.7913ZM12 0C5.3725 0 0 5.3725 0 12C0 18.6275 5.3725 24 12 24C18.6275 24 24 18.6275 24 12C24 5.3725 18.6275 0 12 0ZM12 16.875C5.8575 16.875 5.75 16.3213 5.75 12C5.75 7.67875 5.8575 7.125 12 7.125C18.1425 7.125 18.25 7.67875 18.25 12C18.25 16.3213 18.1425 16.875 12 16.875Z" fill="#545454"/>
                                </svg>

                            </div>
                            <div className='twitter'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.8125 0C5.28926 0 0 5.28926 0 11.8125C0 18.3357 5.28926 23.625 11.8125 23.625C18.3357 23.625 23.625 18.3357 23.625 11.8125C23.625 5.28926 18.3357 0 11.8125 0ZM17.4894 8.9042C17.4973 9.02813 17.4973 9.15732 17.4973 9.28389C17.4973 13.1546 14.5494 17.6133 9.1626 17.6133C7.50146 17.6133 5.96162 17.1308 4.66436 16.3002C4.90166 16.3266 5.12842 16.3371 5.371 16.3371C6.74209 16.3371 8.00244 15.873 9.00703 15.0873C7.72031 15.0609 6.63926 14.2172 6.27012 13.057C6.721 13.1229 7.12705 13.1229 7.59111 13.0043C6.92858 12.8697 6.33307 12.5099 5.90577 11.986C5.47846 11.462 5.24572 10.8063 5.24707 10.1303V10.0934C5.63467 10.3122 6.09082 10.4467 6.56807 10.4651C6.16687 10.1978 5.83785 9.83552 5.61018 9.41053C5.3825 8.98554 5.26322 8.51094 5.26289 8.02881C5.26289 7.48301 5.40527 6.98467 5.66104 6.55225C6.39642 7.45753 7.31407 8.19793 8.35435 8.72534C9.39463 9.25274 10.5342 9.55535 11.6991 9.61348C11.2852 7.62275 12.7723 6.01172 14.56 6.01172C15.4037 6.01172 16.1631 6.36504 16.6983 6.93457C17.3602 6.81064 17.993 6.56279 18.5572 6.23057C18.3384 6.9082 17.8796 7.48037 17.2705 7.8416C17.8611 7.77832 18.4307 7.61484 18.958 7.38545C18.5599 7.9708 18.0615 8.49023 17.4894 8.9042Z" fill="#545454"/>
                                </svg>

                            </div>
                        </div>
                        <div className='copyright'>
                            <span>© COPYRIGHT VNUHCM-US 2022. THIẾT KẾ BỞI PHÒNG THÔNG TIN - TRUYỀN THÔNG.</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;