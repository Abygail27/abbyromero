import  React, { Component } from 'react';
import CardActionArea from '@material-ui/core/CardActionArea';
import Fade  from 'react-reveal/Fade';






class Contact extends Component {

    onClickContact() {

        window.location.href= [
    
        'https://www.linkedin.com/in/abygail-romero-1b2933181/'
      ];
    }
    
 

  render() {
      return ( 
        <div className = "contact_wrapper">

        <div style = {{
            
            width: "100%",
            height: "250px",
            backgroundColor: "white"
        }}
        >
        </div>
              <Fade delay = {500}>

         <div className = "location_tag">
         <div>
        We can share ideas or collaborate.
        </div>
        <div>
          <CardActionArea  
                 onClick = {this.onClickContact}  
          
          >
              
        <i class="fab fa-linkedin"
        style = {{

           fontSize: '50px',
           backgroundColor: 'white',
           color: '#0077b5'
        }}
        ></i>
              </CardActionArea>
        </div>
       
     </div>

        </Fade>
  </div>
      )
  }


  }

  
 

export default Contact;