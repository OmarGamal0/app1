import React, { useRef } from 'react';
import { useState } from 'react';
import { meal } from '../../constants';
import { BsPause , BsPlay} from 'react-icons/bs'

import './Intro.css';

const Intro = () => {

  const [playVideo, setplayVideo] = useState(false);
  const vidref = useRef();

  let handelVideo=()=> {
    setplayVideo((prevPlayVideo)=> !prevPlayVideo )

    if(playVideo){
      vidref.current.pause();
    } else{
      vidref.current.play();
    }
  }
  
  return (<>
    <div className='app__video ' id='blog'>

      <video className='w-100' 
      src={meal}
      typeof='video/mp4'
      loop
      controls={false}
      muted
      ref={vidref}
      />

      <div className='app__video-overlay  d-flex align-items-center justify-content-center !important '>
      <div className='app__video-overlay_circle rounded-circle d-flex align-items-center justify-content-center ' onClick={handelVideo}>  
      {playVideo ? <BsPause  color='#fff' size='50px'/> 
      : <BsPlay color='#fff' size='50px'/> }
      </div>
      </div>

    </div>
  
  </>)
}

;

export default Intro;
