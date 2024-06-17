import React from 'react'
import './mainsection.css'
import main_image from '../../assets/computer.jpeg'
import friend_logo from '../../assets/Vector.png'
import { FaChevronDown } from "react-icons/fa";
function MainSection() {
  return (
    <main className='main'>
      <div><img src={main_image} alt="" /></div>
      <div className='computer'>
<h3>Computer Engineering</h3>
<p>142,765 Computer Engineer follow this</p>

      </div>
      <div className='all_post'>


<div className='post'>
<h3 className='hide_post'><strong>Posts(368)</strong></h3>
  <h3 className='all_post-heading'><strong>All Posts(32)</strong></h3>
  <h4 className='article'>Article</h4>
  <h4 className='Event'>Event</h4>
  <h4 className='education'>Education</h4>
</div>
<div className='group'>

  <div className='write_post'><button>Write a Post <FaChevronDown/></button></div>
  <div className='join_group'> <button><img src={friend_logo} alt="" className='friend_logo' />Join Group</button></div>
  <div className='filter_button'><button>Filter All <FaChevronDown/></button></div>
</div>

      </div>
      <div className='line'></div>
    </main>
  )
}

export default MainSection
