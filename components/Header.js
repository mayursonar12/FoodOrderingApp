import React from 'react'
import Logo from '../assets/images/logo.jpeg'
import { Link } from 'react-router-dom'
import { useState, useEffect } from "react";

// Create functional component

const Header = () => {

    const [zoom, setZoom] = useState(false);

    window.addEventListener(
        "resize", getSizes, false);
      
    //let out = document.querySelector(".output");
    function getSizes() {
        browserZoomLevel = Math.round(window.devicePixelRatio * 100);
        console.log("bzl: " + browserZoomLevel);
    
        if (browserZoomLevel > 150) {
           setZoom(true);
        } else setZoom(false);
        //out.textContent = zoom;
    }   

    useEffect(()=> {
        getSizes();
    }, [])

    return (
        <div className={`navbar ${!zoom ? "active" : ""}`}>
            <div className='logo'>
                <Link to='/'>
                    <img src={Logo} width='100' height='70'/>
                </Link>
            </div>
            <div id='navid' className='navlist'>
                <ul>
                    <Link to='/search'>
                        <li>Search</li>
                    </Link>
                    <li>Offers</li>
                    <li>Help</li>
                    <li>Profile</li>
                    <li>Cart</li>
                </ul>
            </div>

        </div>
    )
}

export default Header
