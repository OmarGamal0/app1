import React from 'react';
import { SubHeading } from '../../components';
import { data, images } from '../../constants';

import './Laurels.css';

const Awardcard =({award:{imgUrl,title ,subtitle }})=> (
<>
      <div className="col-md-2 col-sm-2    ">
        <div className='d-flex align-items-center justify-content-center'> 
        <img  src={imgUrl} alt="award" />
        </div>
      </div>
      <div className="col-md-4 col-sm-4 text-center   text-sm-start  ">
        <div className='ps-md-3'>
        <h2>{title}</h2>
        <p>{subtitle}</p>
        </div>
      </div>
</>
)

const Laurels = () => (
  <div className='app__laurels app__bg ' id='laurels'>
  <div className="container section__padding " >
    <div className='row align-items-center justify-content-center '>

      <div className='col-md-7 '>
        <div className='app__laurels-info'>
        <SubHeading title={'Awards & recognition'}/>
        <h1 >Our Laurels</h1>
          <div className=' app__laurels-info_card'>
          <div className='row align-items-center justify-content-center p-sm-4 '>{data.awards.map((award)=> <Awardcard award={award}/>)}</div>
          </div>
        </div>
      </div>
    
      <div className='col-md-5 '>
        <div className='app__laurels-image'>
        <img className='w-100' src={images.laurels}alt="laurels" />
        </div>
      </div>

    </div> 
  </div>
  </div>
);

export default Laurels;
