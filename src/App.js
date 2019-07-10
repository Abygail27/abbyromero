import React, { Component } from 'react';
import './resources/styles.css';
import { Element } from 'react-scroll';

import Header from './components/header_footer/Header'; 
import Featured from './components/featured';
import Skills from './components/Skills';
import Hightlight from './components/Highlights';
import Pricing from './components/pricing';






import Contact from './components/Contact';


import Footer from './components/header_footer/Footer';
class App extends Component {
  render () {

    return (
      <div className="App" style = {{ height: "1500px"}}>

    <Header/>
    
    <Element name = "featured">
      <Featured/>
    </Element>


    <Element name = "vunuenfo">
      <Skills/>
    </Element>

    <Element name = "highlights">
       <Hightlight/>
    </Element>

     
    <Element name = "pricing">
      <Pricing/>
    </Element>

    <Element name = "location">
      <Contact/>
    </Element>

      <Footer/>

      </div>
    );
  }
  }

export default App;
