import React from 'react';
import { Newsletter, SubHeading } from '../../components';
import { images } from '../../constants';
import {  FiFacebook ,FiInstagram ,FiTwitter} from 'react-icons/fi'

import './Footer.css';

const Footer = () => (
  <div className='app__footer app__bg section__padding ' id='footer'>
    <Newsletter/>
  <div className='container '>
      <div className='row text-center section__padding '>
        
        <div className='col-md-4'> 
          <div className='app__footer-cotactus p-5'>
          <h3 className='pb-3'>Contact Us</h3>
          <p>9 W 53rd St, New York, NY 10019, USA</p>
          <p>+1 212-344-1230</p>
          <p>+1 212-555-1230</p>
          </div>
        </div>
        
        <div className='col-md-4'> 
          <div className='app__footer-gericht '>
          <img  src={images.gericht} alt="gericht" />
          <SubHeading title={"The best way to find yourself is to lose yourself in the service of others."}/>
            <div className='app__footer-gericht_icons '>
            <FiFacebook className='mx-1'/> <FiInstagram className='mx-1'/> <FiTwitter className='mx-1'/>
            </div>
          <p className='pt-5'>2021 Gerícht. All Rights reserved.</p>
          </div>
        </div>
        
        <div className='col-md-4'> 
          <div className='app__footer-workinghours  p-5'>
          <h3 className='pb-3'>Working Hours</h3>
          <p>Monday-Friday:{<br/>} 08:00 am -12:00 am</p>
          <p>Saturday-Sunday:{<br/>} 07:00am -11:00 pm</p>
          </div>
        </div>

      </div>
  </div>
  </div>
);

export default Footer;
