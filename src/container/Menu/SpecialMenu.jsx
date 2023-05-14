import React from 'react';
import { MenuItem, SubHeading } from '../../components';
import {images , data } from '../../constants';

import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialmenu " id='Pages'>
  <div className='container section__padding '>
    <div className='row align-items-center justify-content-between '>

      <div className="col-md-12">
        <div className='app__specialmenu-head py-4 '>
        <SubHeading title={'Menu that fits you palatte'}/>
        <h1>Today’s Special</h1>
        </div>
      </div>

      <div className="col-md-4 ">
        <div className='app__specialmenu-drink py-4 '>
        <h2 className='py-4'>Wine & Beer</h2>
        {data.wines.map((drink ,index )=> <MenuItem key={index} title={drink.title} price={drink.price} tags={drink.tags}/>)}
        </div>
      </div>
 
      <div className="col-md-4 ">
        <div className='app__specialmenu-image row align-items-center justify-content-center '>
        <img className='shadow' src={images.menu} alt="menu" />
        </div>
      </div>
      

      <div className="col-md-4">
        <div className='app__specialmenu-cocktails py-4 '>
        <h2 className='py-4'>Cocktails</h2>
        {data.cocktails.map((cocktail ,index )=> <MenuItem key={index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags}/>)}
        </div>
      </div>

    </div>
  </div>
  </div>
);

export default SpecialMenu;
