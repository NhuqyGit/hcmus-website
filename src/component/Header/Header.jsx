import { useContext, useState } from 'react';
import { MyContext } from '../../MyContext';
import Menu from '../Menu/Menu';
import './Header.scss';
import logo from '../../assets/logo.svg';
import Search from '../Search/Search';
import { useNavigate } from 'react-router';
function Header() {
    const [isClick, setIsClick] = useState(false)
    const [isSearchClick, setSearchClick] = useState(false)
    const context = useContext(MyContext);
    const navigate = useNavigate();

    const handleMenuClick = ()=>{
        setIsClick(!isClick);
        context.setClickMenu(true);
    }

    const handleMenuClose = ()=>{
        setIsClick(false);
        context.setClickMenu(false);
    }

    const handleSearchClick = ()=>{
        setSearchClick(!isSearchClick);
        // context.setClickSearch(true);
    }

    const handleSearchClose = ()=>{
        setSearchClick(false);
        // context.setClickSearch(false);
    }
    return ( 
        <>
            <Menu isClick={isClick} onChangeState={handleMenuClose}/>
            <Search isClick={isSearchClick} onChangeState={handleSearchClose}/>
            <div className='header'>
                <div className='header-container'>
                    <div className='header-left'>
                        <div className='logo' onClick={()=>navigate('/')}>
                            <img src={logo} alt=''></img>
                        </div>
                        <div className='uni-name'>
                            <h1>Trường đại học khoa học tự nhiên, đhqg-hcm</h1>
                        </div>
                    </div>

                    <div className='header-right'>
                        <div className='search-btn' onClick={handleSearchClick}>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.99225 13.9845C8.69767 13.9845 10.2481 13.3798 11.4574 12.3566L16.8837 17.7829C17.0078 17.907 17.1628 17.969 17.3333 17.969C17.5039 17.969 17.6589 17.907 17.7829 17.7829C18.031 17.5349 18.031 17.1318 17.7829 16.8837L12.3566 11.4574C13.3643 10.2481 13.9845 8.68217 13.9845 6.99225C13.9845 3.13178 10.8527 0 6.99225 0C3.14729 0 0 3.14729 0 6.99225C0 10.8527 3.14729 13.9845 6.99225 13.9845ZM6.99225 1.27132C10.155 1.27132 12.7132 3.84496 12.7132 6.99225C12.7132 10.155 10.155 12.7132 6.99225 12.7132C3.82946 12.7132 1.27132 10.1395 1.27132 6.99225C1.27132 3.84496 3.84496 1.27132 6.99225 1.27132Z" fill="white"/>
                            </svg>
                        </div>
                        <div className='menu-btn' onClick={handleMenuClick}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 12H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M3 6H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M3 18H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>Menu</span>

                        </div>
                        {/* <button onClick={()=>setIsClick(!isClick)}>Click</button> */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;