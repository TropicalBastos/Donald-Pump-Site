import React from 'react';

class Contact extends React.Component{

  constructor(){
    super();
    this.state = {stage:"button"};
  }

  click(){
    //display the about modal
    var element = document.getElementById("contact-div");
    var display = getComputedStyle(element, null).display;
    if(display === "none" && MODAL === false){
      element.style.display = "block";
      setTimeout(()=>{element.classList.add("popin");},100);
      MODAL = true;
    }else{
      element.classList.remove("popin");
      setTimeout(()=>{element.style.display = "none";},500);
      MODAL = false;
    }
  }

  render(){
    if(this.state.stage==="button"){
      return(
        <div onClick={this.click} className="secondary-button">
          <p>Contact</p>
        </div>
      );
    }
  }

}

export{Contact};
