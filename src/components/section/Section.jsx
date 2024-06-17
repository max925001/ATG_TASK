import React from 'react'
import './section.css'
import tree_image from '../../assets/tree.jpeg'
import { HiDotsHorizontal } from "react-icons/hi";
import person1 from '../../assets/person1.jpeg'
import tax from '../../assets/Tax.jpeg'
import car from '../../assets/car.jpeg'
import girl from '../../assets/girl.jpeg'
import Alpha from '../../assets/alpha.jpeg'
import boy from '../../assets/boy.jpeg'
import { FiEye } from "react-icons/fi";
import { MdDateRange } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaPen } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { AiOutlineLike } from "react-icons/ai";
import image1 from '../../assets/image1.jpeg'
import image2 from '../../assets/image2.jpeg'
import image3 from '../../assets/image3.jpeg'
import humanity from '../../assets/Humanity.jpeg'

function Section() {
  return (
    <div className='container'>
       <div class="column1">

<div className='row1'><img src={tree_image} alt="" />
<h3>✍️ Article</h3>
<br />
<div className='details'>
<p>What if famous brands had regular fonts? Meet RegulaBrands!</p>
<div className='dots'><HiDotsHorizontal/></div>

</div>
<br />
<p style={{fontSize:'15px'}}>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
<br />
<div className='user_details'>

<div className='user'><img src={person1} alt="" />
<h4>Sarthak Kamra</h4>
</div>
<div className='share'>
<div className='eye'><FiEye/></div>
<div className='viwes'><p>1.4k views</p></div>
<div><button><CiShare2/></button></div>



</div>

</div>

</div>
<div className='row1'>

<img src={tax} alt="" />

<h3>🔬️ Education</h3>
<br />
<div className='details'>
<p>Tax Benefits for Investment under National Pension Scheme launched by Government</p>
<div className='dots'><HiDotsHorizontal/></div>

</div>
<br />
<p style={{fontSize:'15px'}}>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
<br />
<div className='user_details'>

<div className='user'><img src={girl} alt="" />
<h4>Sarthak Kamra</h4>
</div>
<div className='share'>
<div className='eye'><FiEye/></div>
<div className='viwes'><p>1.4k views</p></div>
<div><button><CiShare2/></button></div>



</div>

</div>






</div>
<div className='row1'>



<img src={car} alt="" />

<h3>🗓️ Meetup</h3>
<br />
<div className='details'>
<p>Finance & Investment Elite Social Mixer @Lujiazui</p>
<div className='dots'><HiDotsHorizontal/></div>

</div>
<br />
<div className='date_location'>

  <div className="date"><p><MdDateRange/>Fri, 12 Oct, 2018</p></div>
  <div className='location'><IoLocationOutline/>Ahmedabad, India</div>
</div>
<br />
<button style={{width:'100%' ,padding:'10px', borderRadius:'10px' ,color:'rgba(229, 97, 53, 1)'}}>Visit Website</button>
<div className='user_details'>

<div className='user'><img src={Alpha} alt="" />
<h4>Ronal Jones</h4>
</div>
<div className='share'>
<div className='eye'><FiEye/></div>
<div className='viwes'><p>1.4k views</p></div>
<div><button><CiShare2/></button></div>



</div>

</div>








</div>
<div className='row1'>





<h3>💼️ Job</h3>
<br />
<div className='details'>
<p>Software Developer</p>
<div className='dots'><HiDotsHorizontal/></div>

</div>
<br />
<div className='date_location'>

  <div className="date"><p><MdDateRange/>Innovaccer Analytics Private Ltd.</p></div>
  <div className='location'><IoLocationOutline/>Noida, India</div>
</div>
<br />
<button style={{width:'100%' ,padding:'10px', borderRadius:'10px' ,color:'rgba(229, 97, 53, 1)'}}>Visit Website</button>
<div className='user_details'>

<div className='user'><img src={boy} alt="" />
<h4>Joseph Gray</h4>
</div>
<div className='share'>
<div className='eye'><FiEye/></div>
<div className='viwes'><p>1.4k views</p></div>
<div><button><CiShare2/></button></div>



</div>

</div>














</div>


       </div>
       <div class="column2">



<div className='column2-section'>


<div className='location-write'>

<div className='location'><IoLocationOutline/><input type="text" name="" id="" placeholder='Enter Your Location' /></div>

<div className='pen'><FaPen/></div>

</div>

<br />
<br />
<p className='information'><IoMdInformationCircleOutline/>Your location will help us serve better and extend a personalised experience.</p>

<br />
<br />
<div className='Recommaded-group'>
<h3 className='heading'><AiOutlineLike/>REcommended Groups</h3>
<br />
<br />
<div className='follow_group'><div className='name'><img src={image1} alt="" /><p>Leisure</p></div>
<div className='follow'><button>Follow</button></div>
</div>
<br />
<div className='follow_group'><div className='name'><img src={humanity} alt="" /><p>Activism</p></div>
<div className='follow'><button>Follow</button></div>
</div>
<br />
<div className='follow_group'><div className='name'><img src={image2} alt="" /><p>MBA</p></div>
<div className='follow'><button>Follow</button></div>
</div>
<br />
<div className='follow_group'><div className='name'><img src={image3} alt="" /><p>Philosophy</p></div>
<div className='follow'><button>Follow</button></div>
</div>
</div>
</div>

<br />
<br />
<a href="">See more...</a>










       </div>
    </div>
  )
}

export default Section
