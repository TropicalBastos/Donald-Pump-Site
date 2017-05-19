import React from 'react';

class SourceOrb extends React.Component{

  render(){
    return(<div className="clipped" style={{backgroundColor:"red"}}>
    <h1 className="title orbtitle">Source</h1>
            <div className="source-container">
              <p className="source-desc">The source code for this website is available
              on GitHub courtesy of Global Gust</p>
            </div>
            <a href="https://github.com/TropicalBastos/Donald-Pump-Site">
              <div className="laptop"></div>
            </a>
    </div>
    );
  }

}

export {SourceOrb};
