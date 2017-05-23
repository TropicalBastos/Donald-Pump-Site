import React from 'react';

class About extends React.Component{

  click(){
    //display the about modal
    var element = document.getElementById("about-div");
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
    return(
      <div onClick={this.click} className="secondary-button">
        <p>About</p>
      </div>
    );
  }

}

export {About};
