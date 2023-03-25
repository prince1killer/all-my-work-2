import React from 'react'

function Navbar() {
  return (
    <div>
        <nav className='nav'>
            <div className='logo'>LOGO</div>
            <ul>
                <li><a href='#home'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#blog'>Blog</a></li>
                <li><a href='#contect'>Contect</a></li>
                <li><a href='#footer'>Footer</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar