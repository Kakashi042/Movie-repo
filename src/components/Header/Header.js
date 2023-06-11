import React from 'react';
import user from '../../images/user.png'; 
import { Link } from 'react-router-dom';
import './Header.scss'

const Header = () => {
    return (
        <div className='header'>
            <Link to='/'>
            <div className='logo'>MovieKart</div>
            </Link>
            <div className='user-image'>
                <img src={user} alt='user image'/>
            </div>
        </div>
    );
};

export default Header;