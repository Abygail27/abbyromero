import  React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';

import digital_clubbing from '../../resources/proyects/digital_clubbing.png';
import femeduca from '../../resources/proyects/femeduca.png';
import linkup from '../../resources/proyects/linkup.png';
import md_links from '../../resources/proyects/md_links.png';
import burger_queen from '../../resources/proyects/burger_queen.png';
import venue from '../../resources/proyects/venue.png';


class Pricing extends Component {

  onClickData(){
    window.location.href= [

    'https://abygail27.github.io/cdmx-2019-01-bc-core-am-cipher/src'
  ];
}

onClickDataCode () {
  window.location.href = [
    'https://github.com/Abygail27/cdmx-2019-01-bc-core-am-cipher', 
    
  
  ]
}
onClickFemePage () {
  window.location.href = [
    'https://abygail27.github.io/cdmx-2019-01-bc-core-data-lovers/src/',
  
  ]
}

onClickFemeCode () {
  window.location.href = [
    'https://github.com/Abygail27/cdmx-2019-01-bc-core-data-lovers',
  ]  
}

onClickSocialPage(){
  window.location.href = [
    'https://geekreact-4fa91.firebaseapp.com/',
  
  ]
  
}

onClickSocialCode () {
  window.location.href = [
    'https://github.com/Abygail27/CDMX007-social-network-framework',
  
  ]
}

onClickMark(){
  window.location.href = [
    'https://github.com/Abygail27/CDMX007-fe-md-links',
   
  ]
}

onClickBurgerCode () {
  window.location.href = [
    'https://github.com/Abygail27/CDMX007-fe-burger-queen',
   
  ]
}

onClickVenue(){
  window.location.href = [
    'http://plucky-toe.surge.sh/',
   
  ]
}

onClickVenueCode () {
  window.location.href = [
    'https://github.com/Abygail27/the-venue'
    
  ]
}
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
      <p>Vanilla.js , HTML5 , CSS3 ,</p>
     
      <p><button className = "card"
         onClick={this.onClickData}
        
      >Demo</button></p>

      <p><button className = "card"
      onClick = {this.onClickDataCode}
      >Code</button></p>
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
      <p>Vanilla.js , HTML5 , CSS3 , JSON</p>
        <p><button className = "card"
        onClick = {this.onClickFemePage}
        >Demo</button></p> 
      <p><button className = "card"
        onClick = {this.onClickFemeCode}
      >Code</button></p>
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
      <p>React.js, Firebase, Firestore, Materialize</p> 
      <p><button className = "card"
      onClick = {this.onClickSocialPage}
      >Demo</button></p> 
      <p><button className = "card"
      onClick = {this.onClickSocialCode}
      >Code</button></p>
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
      <p>Node.js</p> 
            <p><button className = "card"
      onClick = {this.onClickMark}
      >Code</button></p>
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
      <p>React.js, Firebase, Firestore, semantic-ui</p> 
      <p><button className = "card">Demo</button></p> 
      <p><button className = "card"
      onClick = {this.onClickBurgerCode}
      >Code</button></p>
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
      <p>React.js, semantic-ui, react-reveal</p> 
      <p><button className = "card"
      onClick = {this.onClickVenue}
      >Demo</button></p> 
      <p><button className = "card"
      onClick = {this.onClickVenueCode}
      >Code</button></p>
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