import React from 'react'; 

import Roll from 'react-reveal/Roll';

const Skills = () => {
    return (
       
      <div className = "bck_black"> 
      <h1
      style = {{
        textAlign: 'center'
      }}
      >Skills</h1>
   
      <Roll left>
        <div className = "ol s12 m7 div-card">
        <div className = "icon"> <i class="fab fa-js-square "></i></div>
        </div> 
      </Roll>

      <Roll left>
        <div className = "ol s12 m7 div-card">
        <div className = "icon"><i class="fab fa-react"></i></div>
        </div>
      </Roll>

      <Roll left>
        <div className = "ol s12 m7 div-card">
        <div className = "icon"><i class="fab fa-node"></i></div>
        </div>
      </Roll>

      <Roll left>
        <div className = "ol s12 m7 div-card">
        <div className = "icon"><i class="fab fa-npm"></i></div>
        </div>
        </Roll>

      <Roll left>
        <div className = "ol s12 m7 div-card">
        <div className = "icon"><i class="fab fa-github"></i></div>
        </div>
        </Roll>

        <Roll left>
        <div className = "ol s12 m7 div-card">
        <div className = "icon"><i class="fab fa-css3-alt"></i></div>
        </div>
        </Roll>
        
        <Roll left>
        <div className = "ol s12 m7 div-card">
        <div className = "icon"><i class="fab fa-linux"></i></div>
        </div>
        </Roll>

      <Roll left>
        <div className = "ol s12 m7 div-card">
        <div className = "icon"><i class="fab fa-html5"></i></div>
        </div>
        </Roll>

      <Roll left>
        <div className = "ol s12 m7 div-card">
        <div className = "icon"><i class="fab fa-git-square"></i></div>
        </div>
        </Roll>
    </div>
    );
};

export default Skills;

