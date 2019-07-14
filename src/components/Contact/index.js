import React from 'react';


const Contact = () => {
    return (
        <div className = "contact_wrapper">

            <div style = {{
                
                width: "100%",
                height: "250px",
                backgroundColor: "white"
            }}
            >
            </div>

             <div className = "location_tag">
             <div>
            We can share ideas or collaborate.
            </div>
            <div>
            <i class="fab fa-linkedin"
            style = {{

               fontSize: '50px'
            }}
            ></i>
            </div>
            <div>
            <i class="fas fa-file-download"
             style = {{

               fontSize: '50px'
            }}
            ></i>
            </div>
           
         </div>

      </div>
    );
}; 

export default Contact;