import React from 'react';
import { SubHeading } from '../../components';
import images from '../../constants/images';

import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg" id='Pages'>
  <div className='container section__padding '>
    <div className='row align-items-center justify-content-between '>

      <div className="col-md-5">
        <div className='app__aboutus-info p-4 '>
        <SubHeading title={'About Us'}/>
        <p className='py-2'>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.         
        </p>
        <button className='btn' type='button'>  Know More </button>
        </div>
      </div>
 
      <div className="col-md-2 ">
        <div className='app__aboutus-image row align-items-center justify-content-center '>
        <img className='shadow' src={images.knife} alt="knife" />
        </div>
      </div>
      
      <div className="col-md-5">
        <div className='app__aboutus-history p-4 '>
        <SubHeading title={'Our History'}/>
        <p className='py-2'>
          Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.
        </p>
        <button className='btn' type='button'>  Know More </button>
        </div>
      </div>

      
      <div className='app__aboutus-overlay row align-items-center justify-content-center'>
      <img src={images.G} alt="g letter" />
      </div>

    </div>
  </div>
  </div>
);

export default AboutUs;
