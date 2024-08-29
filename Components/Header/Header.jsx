import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo.png'
import './Header.css'
function Header() {
  const [sticky, setSticky] = useState('');
  const [showNav, setShowNav] = useState('');

  useEffect(() => {
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky('dark-nav') : setSticky('');
    });
    
  }, []);
  return (
    <div className={`header ${sticky}`} id='header'>
      <div className="container">
      <div className="logo">
        <img src={logo} alt="" />
      </div>

      <div className="navbar">
      <i class="fa-solid fa-bars-staggered" onClick={()=> {
        if(showNav ===''){
          setShowNav('show')
          console.log(showNav)
        }else{
          setShowNav('')
          console.log(showNav)
        }
      }}></i>

      <div className={`ul ${showNav}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#program">Program</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#campus">Campus</a></li>
        <li><a href="#test">Testimonials</a></li>
        <li><a href="#contact" className='contact'>Contact us</a></li>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Header
