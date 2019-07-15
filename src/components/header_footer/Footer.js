import React from 'react'
import Fade  from 'react-reveal/Fade';

const Footer =() => {
    return (
        <footer className = "bck_red">
            <Fade deñay = {500}>
                <div className = "font_righteous footer_logo_venue">
                    <div className = "footer_copyright">
                    Abby Romero
                    </div>
                </div>
            </Fade>
        </footer>
    )
}

export default Footer;



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
  <CardActionArea  
         onClick = {this.onClickContact}  
  
  >
      
<i class="fab fa-linkedin"
style = {{

   fontSize: '50px'
}}
></i>
      </CardActionArea>
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
