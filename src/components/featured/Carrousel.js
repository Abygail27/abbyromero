    
import React from 'react'; 
import slide_one from '../../resources/images/slide_one.jpg';



const Carrousel = () => {

 


    return (
        <div
         className = "carrousel_wrapper"
          style ={{
              height: `${window.innerHeight}px`,
              overflow: 'hidden',
              background:  `url(${slide_one})`,
              height: `${window.innerHeight}px`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover'

          }}
        > 
       
        </div>
    );
};

export default Carrousel; 