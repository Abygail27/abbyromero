import React from 'react'; 
import Carrousel from './Carrousel';
import Flip from 'react-reveal/Flip';

const Featured = () => {
    return (
        <div style = {{position: 'relative'}}>

            <Carrousel/>


           <div className = "artist_name">
           <Flip top>
          
               <div className = "wrapper"
               style = {{
                   color: 'white',
                   fontSize: '35px',
                   fontFamily: 'Montserrat,sans-serif'
               }} >
                   Passionate front-end developer 
                   with a desire to continue learning
               </div>
        </Flip>
          </div>
        </div>
    )
}

export default Featured;