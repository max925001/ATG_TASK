// src/RegisterForm.js
import React, { useState } from 'react';
import './RegisterForm.css';
import Rgister_image from '../../assets/registerimage.png'


const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
   <div className='registartionForm'>
   
<div className='registrationheading'><p>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘</p> </div>

<div className='main_section_registration'>

<div className="register-form-container">
      <div className="register-form-header">
      
        
      </div>
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="name-fields">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        <button type="submit" className="create-account-button">Create Account</button>
      </form>
      <div className="social-signup">
        <button className="facebook-signup">Sign up with Facebook</button>
        <button className="google-signup">Sign up with Google</button>
      </div>
     
    </div>


<div className='image'>

<div> <p className="signin-link">
        Already have an account? <a href="/login">Sign In</a>
      </p></div>
<div><img src={Rgister_image} alt="" /></div>

<div><p>By signing up, you agree to our Terms & conditions, Privacy policy</p></div>
</div>



</div>

   </div>
   
  );
};

export default RegisterForm;
