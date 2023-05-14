import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

import './findus.css';

const FindUs = () => (
  <div className='app__findus app__bg ' id='contactus'>
  <div className="container section__padding " >
      <div className='row align-items-center justify-content-between '>

        <div className='col-md-6 '>
         <div className='app__findus-content'>
          <SubHeading title={'Contact'}/>
          <h1 className='py-2'>Find Us</h1>
          <p className='py-4'>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
          <h3 className='py-2'>Opening Hours</h3>
          <h4>Mon - Fri: 10:00 am - 02:00 am</h4>
          <h4 className='pb-4'>Sat - Sun: 10:00 am - 03:00 am</h4>
          <button className='btn  ' type='button'>  Explore Menu  </button>
          </div>
        </div>

        <div className='col-md-6 '>
          <div className='app__findus-image'>
          <img className='w-100' src={images.findus} alt="chef" />
          </div>
        </div>
      </div>
  </div>
  </div>
);

export default FindUs;
