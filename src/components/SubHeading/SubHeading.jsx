import React from 'react';
import images from '../../constants/images';

const SubHeading = ({title}) => (

  <div className='app__subHeading'>
    <h4>{title}</h4>
    <img className='mb-4 ' src={images.spoon} alt="spoon" />
  </div>
  
);

export default SubHeading;
