import React, { Component } from 'react'

import Slide from 'react-reveal/Slide';



class Discount extends Component {

   

    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">


                    <Slide right>

                        <div className="discount_description">
                       <p 
                       style = {{
                           fontSize: '35px'
                       }}
                       >
Curious to learn and in a constant search for inspiration. 
 I like to make an effort in my work and dedicate time to what enriches me. 
 I adapt easily to changes, I like big challenges and new opportunities for growth.
 I am in constant learning process so my mind is open to new perspectives and disciplines. </p>


                    

                        </div>
                    </Slide>
                </div>
            </div>
        )
    }
}

export default Discount; 