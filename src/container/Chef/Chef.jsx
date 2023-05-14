import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import { RiDoubleQuotesL } from 'react-icons/ri'

import './Chef.css';

const Chef = () => (
  <div className='app__chef app__bg ' id='chef'>
  <div className="container section__padding " >
      <div className='row align-items-center justify-content-between '>

        <div className='col-md-6 '>
          <div className='app__chef-image'>
          <img src={images.chef} alt="chef" />
          </div>
        </div>

        <div className='col-md-6 pe-md-2 px-sm-3 '>
          <div className='app__chef-content p-md-5 px-sm-3 py-sm-4'>
          <SubHeading title={'Chef’s Word'}/>
          <h1>What we believe in</h1>
          <p className='py-3'><RiDoubleQuotesL color='#fff' size={'50px'}/>Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .
            auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. 
            Congue iaculis integer curabitur semper sit nunc.</p>
          <h5>Kevin Luo</h5>
          <p>Chef & Founder</p>
          <img  className=' w-50  py-5' src={images.sign} alt="sign" />
          </div>
        </div>

      </div>
  </div>
 </div>
);

export default Chef;
