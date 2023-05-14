import React from 'react';
import { SubHeading } from '../../components';
import {  images } from '../../constants';

import './Gallery.css'; 

const Gallery = () => {
    const galleryImages =[images.gallery02,images.gallery03 ,images.gallery04]

return(
  <div className='app__gallery  ' id='chef'>

    <div className="container">
    <div className='row align-items-center'>

       <div className='col-md-4 '>
       <div className='app__gallery-content pe-4'>
       <SubHeading title={'Instagram'}/>
       <h1>Photo Gallery</h1>
       <p className='py-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
       <button className='btn ' type='button'>  View More </button>
       </div>
       </div>

       <div className='col-md-8 '>
       <div className='app__gallery-images_container row align-items-center  ' >
       {galleryImages.map((image)=> <div className='col-md-3'><img className='p-2' src={image} alt='galleryImage'/></div> )}          
       </div>
    
    </div>

  </div>
  </div>
</div>

)};

export default Gallery;
