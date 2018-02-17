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
                <p className="home-desc">Available on Android on the 31st of March 2018. iOS release
                will come slightly after so keep your eyes peeled!</p>
              </div>
              <img src="res/plane.png" className="home-plane"/>
           </div>
    );
  }
}

export {HomeOrb};
