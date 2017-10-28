import React from 'react';

class HomeOrb extends React.Component{

  render(){

    setTimeout(()=>{
      document.getElementsByClassName("home-plane")[0].classList.add("popin");
      document.getElementsByClassName("homedesc-container")[0].classList.add("popin");
    },300);

    return(<div className="clipped" style={{backgroundColor:"red"}}>
            <h1 className="title orbtitle">Home</h1>
              <div className="homedesc-container">
                <p className="home-desc">Welcome to the official site for the Donald Pump mobile
                app!</p>
                <p className="home-desc">Soon to be available on iOS, Android and Windows phone in October 2017</p>
              </div>
              <img src="res/plane.png" className="home-plane"/>
           </div>
    );
  }
}

export {HomeOrb};
