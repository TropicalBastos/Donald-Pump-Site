import React from 'react';
import {Contact} from './Contact.js';
import {About} from './About.js'

class AdditionalComponents extends React.Component{

  render(){
    return(
      <div>
        <About />
        <Contact />
      </div>
    )
  }

}

export {AdditionalComponents};
