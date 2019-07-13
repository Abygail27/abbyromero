import  React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';

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
    <img src="https://s4.aconvert.com/convert/p3r68-cdx67/cbqzn-stjq6.jpg" alt="Avatar" style={{
     width:'300px',
     height:'200px'

    }}/>
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
    <img src="https://s4.aconvert.com/convert/p3r68-cdx67/cbyb2-e1m4h.jpg" alt="Avatar" style={{
      width:'300px',
      height:'200px'

    }}/>
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
    <img src="https://s4.aconvert.com/convert/p3r68-cdx67/cbio3-kuc48.jpg" alt="Avatar" style={{
     width:'300px',
     height:'200px'

    }}/>
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
    <img src="https://s4.aconvert.com/convert/p3r68-cdx67/cbk4d-dci96.jpg" alt="Avatar" style={{
      width:'300px',
      height:'200px'

    }}/>
    </div>
    <div className="flip-card-back">
      <h1>Markdown Links</h1> 
      <p><button className = "card"
       OnClick
       to="https://s4.aconvert.com/convert/p3r68-cdx67/cbrwc-xes3z.jpg"
     >
       {'Demo'}></button></p> 
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
    <img src="https://s4.aconvert.com/convert/p3r68-cdx67/cbrwc-xes3z.jpg" alt="Avatar" style={{
      width:'300px',
      height:'200px'

    }}/>
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
    <img src="https://s4.aconvert.com/convert/p3r68-cdx67/cbvok-o7ojf.jpg" alt="Avatar" style={{
     width:'300px',
     height:'200px'

    }}/>
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