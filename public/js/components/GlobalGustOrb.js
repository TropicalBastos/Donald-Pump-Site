import React from 'react';

class GlobalGustOrb extends React.Component{

  render(){

    setTimeout(()=>{
        document.getElementsByClassName("globalimg")[0].classList.add("popin");
    });

    return(<div className="clipped" style={{backgroundColor:"#c3dff7"}}>
          <h1 className="title orbtitle">Global Gust</h1>
          <div className="gust-container">
            <p>Global Gust Games is a studio effort devised and founded by me, Ian Bastos and I am
            its current sole proprietor and contributor. I am a full stack developer and lover of all things tech,
          if anyone is interested go check out my personal website <a href="http://www.ianbastos.com">here</a></p>
          </div>
          <img src="res/globalgust.png" className="globalimg"/>
      </div>
    );
  }

}

export {GlobalGustOrb};
