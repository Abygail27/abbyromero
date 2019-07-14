import  React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';
import digital_clubbing from '../../resources/proyects/digital_clubbing.png';
import femeduca from '../../resources/proyects/femeduca.png';
import linkup from '../../resources/proyects/linkup.png';
import md_links from '../../resources/proyects/md_links.png';
import burger_queen from '../../resources/proyects/burger_queen.png';
import venue from '../../resources/proyects/venue.png';


class Pricing extends Component {

 

    render() {
        return (
            <div className = "bck_black_proyects">
                <div className = "center_wrapper pricing_section">
                    <h2>Proyects</h2>

                    <div className = "pricing_wrapper">
                    <Zoom>
          <div className = "pricing_item">
          <div className="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
    <a href="" target="">
                        <img className="twitter" src={digital_clubbing} 
                        
                        width="300px" height = "200px" alt="twitter"/>
                    </a>

  

    </div>
    <div className="flip-card-back">
      <h1>Digital Clubbing</h1> 
      <p><button className = "card">Demo</button></p> 
      <p><button className = "card">Code</button></p>
    </div>
  </div>
</div>
            
          </div>
          </Zoom>

          <Zoom>
          <div className = "pricing_item">
          <div className="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
    <a href="" target="">
                        <img className="twitter" src={femeduca} 
                        
                        width="300px" height = "200px" alt="twitter"/>
                    </a>
    
    </div>
    <div className="flip-card-back">
      <h1>Femeduca</h1> 
        <p><button className = "card">Demo</button></p> 
      <p><button className = "card">Code</button></p>
    </div>
  </div>
</div>
            
          </div>
          </Zoom>


          <Zoom>
          <div className = "pricing_item">
          <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
    <a href="" target="">
                        <img className="twitter" src={linkup} 
                        
                        width="300px" height = "200px" alt="twitter"/>
                    </a>
    </div>
    <div className="flip-card-back">
      <h1>Linkup!</h1> 
      <p><button className = "card">Demo</button></p> 
      <p><button className = "card">Code</button></p>
    </div>
  </div>
</div>
            
          </div>
          </Zoom>

          <Zoom>
          <div className = "pricing_item">
          <div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
    <a href="" target="">
                        <img className="twitter" src={md_links} 
                        
                        width="300px" height = "200px" alt="twitter"/>
                    </a>
   
    </div>
    <div className="flip-card-back">
      <h1>Markdown Links</h1> 
      
      <p><button className = "card">Code</button></p>
    </div>
  </div>
</div>
            
          </div>
          </Zoom>

          <Zoom>
          <div className = "pricing_item">
          <div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
    <a href="" target="">
                        <img className="twitter" src={burger_queen} 
                        
                        width="300px" height = "200px" alt="twitter"/>
                    </a>
    
    </div>
    <div className="flip-card-back">
      <h1>Burger Queen</h1> 
      <p><button className = "card">Demo</button></p> 
      <p><button className = "card">Code</button></p>
    </div>
  </div>
</div>
            
          </div>
          </Zoom>

          <Zoom>
          <div className = "pricing_item">
          <div className="flip-card">
  <div class="flip-card-inner">
    <div className="flip-card-front">
    <a href="" target="">
                        <img className="twitter" src={venue} 
                        
                        width="300px" height = "200px" alt="twitter"/>
                    </a>
   
    </div>
    <div className="flip-card-back">
      <h1>The Venue</h1> 
      <p><button className = "card">Demo</button></p> 
      <p><button className = "card">Code</button></p>
    </div>
  </div>
</div>
            
          </div>
          </Zoom>
                    </div>
                </div>
              
            </div>
        );
    }
}

export default Pricing;