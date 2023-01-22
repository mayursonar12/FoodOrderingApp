import React from 'react'
import Logo from '../assets/images/logo.jpeg'
import { Link } from 'react-router-dom'

// Create functional component

const Header = () => {
    return (
        <div className='navbar'>
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
