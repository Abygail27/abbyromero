import React from 'react'; 
import Carrousel from './Carrousel';


const Featured = () => {
    return (
        <div style = {{position: 'relative'}}>

            <Carrousel/>


           <div className = "artist_name">
               <div className = "wrapper"
               style = {{
                   color: 'black'
               }}
               >
                   Passionate young women 
                   with a desire to continue on learning
               </div>
          </div>
        </div>
    )
}

export default Featured;