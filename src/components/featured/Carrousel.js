    
import React from 'react'; 
import black_slide from '../../resources/images/black_slide.png';



const Carrousel = () => {

 


    return (
        <div
         className = "carrousel_wrapper"
          style ={{
              height: `${window.innerHeight}px`,
              overflow: 'hidden',
              background:  `url(${black_slide})`,
              height: `${window.innerHeight}px`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover'

          }}
        > 
       
        </div>
    );
};

export default Carrousel; 