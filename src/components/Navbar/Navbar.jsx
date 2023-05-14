import React from 'react';
import images from '../../constants/images';
import { GiKnifeFork } from 'react-icons/gi'

import './Navbar.css';
const Links = () =>(
  <>
     <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#Pages">Pages</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#contactus">Contact Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#blog">Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#footer">Landing</a>
        </li>
  </>
)
const Navbar = () => (
  <>
  <nav className="navbar navbar-expand-lg  navbar-dark app__nav">
  <div className="container-fluid">

    <a className="navbar-brand" href="#">
    <img src={images.gericht} alt="gericht" />
    </a>

    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <GiKnifeFork className='app_navbar-toggler-icon'/>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">

      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
       <Links/>
      </ul>

      <ul className="navbar-nav mb-2 mb-lg-0">
        <li className="nav-item app__nav-link__after">
        <a className="nav-link active" aria-current="page" href="login">Log in / Registration</a>
        </li>
        <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="book">Book Table</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
  </>
 
);

export default Navbar;
