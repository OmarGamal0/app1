import React from 'react';
import { SubHeading } from '../../components';
import images from '../../constants/images';

import './Header.css';

const Header = () => (

  <div className="app__header " id='home'>
  <div className='container section__padding '>
    <div className='row align-items-center justify-content-between '>

      <div className="col-md-5">
        <div className='app__header-info p-4 '>
        <SubHeading title={'Chase the new Flavour'}/>
        <h1>The key to Fine dining</h1>
        <p className='pt-4 pb-4'> Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus  </p>
        <button className='btn ' type='button'>  Explore Menu  </button>
        </div>
      </div>

      <div className="col-md-6 ">
        <div className='app__header-image '>
        <img className='p-4' src={images.welcome} alt="welcome" />
        </div>
      </div>
      
    </div>

  </div>
  </div>
);

export default Header;
