import React from 'react';
import SubHeading from '../SubHeading/SubHeading';

import './Newsletter.css';

const Newsletter = () => (
  <div className='app__newsletter '>
  <div className='container app__padding app__newsletter-body '>
      <div className='row align-items-center  text-center'>

        <div className="col-md-12">
          <div className='app__newsletter-head p-5'>
          <SubHeading title={'Newsletter'}/>
          <h1>Subscribe to Our Newsletter</h1>
          <p>And never miss latest Updates!</p>
          </div>
        </div>

        <div className="col-md-12">
          <div className='app__newsletter-input d-flex justify-content-center pb-5 pt-2  '>
          <input className='w-50 px-4 me-4 ' placeholder='Email Address' type="text" name="app__newsletter-input" id="" />
          <button className='btn px-4 m-2'>Subscribe</button>
          </div>
        </div>

      </div>
  </div>
  </div>
);

export default Newsletter;
