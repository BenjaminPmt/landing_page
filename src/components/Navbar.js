import React from 'react'
import '../css/Navbar.css'
import Button from './Button'
import logo from '../assets/img/logo.png'

export default function Navbar() {
  return (
    <div className='navbar_page'>
        <div className='navbar_container'>
            <div className='navbar_content'>
                <div className='navbar_brand'>
                    <img className='nav_img' src={logo} alt='logo' />
                    <span className='logo_text'>VaultFlow</span>
                </div>
                <div className='navbar_menu'>
                    <div className='navbar_link'>
                        <span className='text'>Features</span>
                    </div>
                    <div className='navbar_link'>
                        <span className='text'>Pricing</span>
                    </div>
                    <div className='navbar_link'>
                        <span className='text'>About us</span>
                    </div>
                </div>
                <div className='button_container'>
                        <Button title='Download the app'/>
                    </div>
            </div>
            
        </div>
    </div>
  )
}
