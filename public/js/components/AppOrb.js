import React from 'react';

class AppOrb extends React.Component{

  render(){
    setTimeout(()=>{
      document.getElementsByClassName("app-phone")[0].classList.add("popin");
      document.getElementsByClassName("desc-container")[0].classList.add("popin");
    },300);
    return(<div className="clipped" style={{backgroundColor:"#c3dff7"}}>
            <h1 className="title orbtitle">The App</h1>
            <div className="desc-container">
              <p className="app-desc">A super mega ultra addictive mobile game made with the intention
              to pull its users more and more and encourage them to always beat their highscore. Try it out if you dare,
              chances are you won't stop!</p>
            </div>
            <img className="app-phone" src="res/phone.png"/>
           </div>
    );
  }

}

export {AppOrb};
