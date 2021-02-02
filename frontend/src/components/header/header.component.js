import React from 'react';
import './header.style.scss';
import {Link} from 'react-router-dom';
const Header = () => (
    <div className ='header'>
        <Link className= 'logo-container' to ='/'>
        </Link>

    <div className = 'options'>
    <Link className = 'option'>
         MEN
     </Link>
     <Link className = 'option'>
         WOMEN
     </Link>
     <Link className = 'option'>
         CHILD
     </Link>
     <Link className = 'option'
      to='/shop'>
      SHOP
     </Link>
     <Link className = 'option' to= '/shop'>
     CONTACT
     </Link>
     
    </div>
    </div>
)
export default Header;