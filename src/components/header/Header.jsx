import React, { useState } from 'react'
import './header.css'
import logo_image from '../../assets/logo_image.png'
import { CiSearch } from "react-icons/ci";
import { FaAngleDown, FaNapster } from "react-icons/fa";
import RegisterForm from '../registrationform/RegisterForm';
import { RxCross2 } from "react-icons/rx";
function Header() {

const [hide ,sethide] =useState('none')
  const show = () =>{
    if(hide === 'none'){
      sethide('block')
    }
  }

  const hidefunction = () =>{
    if(hide === 'block'){
      sethide('none')
    }
  }

  return (
    <header className='header'>
      
<div className="logo"><img src={logo_image} className='image_logo'/></div>
<div className="search"> 
<div className='serach_icon'><CiSearch /></div>
<input type="text" className='input_search' placeholder='Search for your favorite groups in ATG' />

</div>
<div className="create_account" onClick={show}>

<div >Create Account.<strong>It's Free!</strong>


</div>
<div className='down_arrow'><FaAngleDown/></div>


<div className='Register' style={{display:hide}} onClick={show}>
<div className='cross' onClick={hidefunction}><button><RxCross2/></button></div>

<RegisterForm/></div>
</div>





    </header>
  )
}

export default Header
