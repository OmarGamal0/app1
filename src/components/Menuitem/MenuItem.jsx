import React from 'react';

import './MenuItem.css';

const MenuItem = ( {title , price, tags}) => (
  <div className='app__menuItem'>
      <div className="row align-items-center  justify-content-center important py-3">

        <div className="col-md-5">
           <div className='app__menuItem-title  '>
           <p className=''>{title}</p>
           </div>
        </div>

        <div className="col-md-5 ">
            <div className='app__menuItem-dash '></div>
        </div>
          
        <div className="col-md-2 ">
           <div className='app__menuItem-price '>
           <p >{price}</p>
           </div>
        </div>

        <div className='app__menuItem-tags '>
          <p >{tags}</p>
        </div>

      </div>

  </div>
);

export default MenuItem;
