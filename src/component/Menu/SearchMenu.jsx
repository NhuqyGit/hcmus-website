import React, { useContext, useState, useRef, useEffect } from "react";
import "./SearchMenu.scss";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Menu1 from "./Menu1";

function SearchMenu({isMenuClick, isClick, setWidth, onChangeState}) {
    const childRef = useRef();
    useEffect(()=>{
        const childElement = childRef.current
        if (childElement) {
            const rect = childElement.getBoundingClientRect();
            console.log(rect.width)
            setWidth(rect.width)
        }
    }, [childRef])


    return (
        <div ref={childRef} className={`Menu-test ${!isClick ? "tab-close" : ""}`} id="Menu-test" style={isClick ? {transform: "translateX(0)"} : {transform: "translateX(100%)"}}>
            <div className="btn-close">
                <div className="icon-close" onClick={onChangeState}>
                    <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.3679 15.0131L24.0919 7.33126C24.4622 6.9647 24.4622 6.37126 24.0919 6.00563C23.7226 5.63907 23.1226 5.63907 22.7532 6.00563L15.0357 13.6809L7.24693 5.89126C6.87756 5.52095 6.27756 5.52095 5.90818 5.89126C5.53881 6.26251 5.53881 6.86345 5.90818 7.23376L13.6913 15.0178L5.88006 22.7859C5.51068 23.1525 5.51068 23.7459 5.88006 24.1116C6.24943 24.4781 6.84943 24.4781 7.21881 24.1116L15.0235 16.35L22.7813 24.1088C23.1507 24.4791 23.7507 24.4791 24.1201 24.1088C24.4894 23.7375 24.4894 23.1366 24.1201 22.7663L16.3679 15.0131Z" fill="white"/>
                    </svg>
                </div>
            </div>

            {isMenuClick ? <Menu1 onChangeState={onChangeState}/> : null}
            {/* <Menu1 /> */}
        </div>
    )
}

export default SearchMenu;