import React from 'react';

class Contact extends React.Component{

  constructor(){
    super();
    this.state = {stage:"button"};
  }

  render(){
    if(this.state.stage==="button"){
      return(
        <div className="secondary-button">
          <p>Contact</p>
        </div>
      );
    }
  }

}

export{Contact};
