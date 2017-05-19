import React from 'react';
import {HomeOrb} from './HomeOrb.js';
import {AppOrb} from './AppOrb.js';
import {SourceOrb} from './SourceOrb.js';
import {GlobalGustOrb} from './GlobalGustOrb.js';

class Orb extends React.Component{

  constructor(){
    super();
    this.state = {page:"intro"};
  }

  render(){
    if(this.state.page==="intro"){
      return(
        <div className="clipped">
          <canvas id="maincanvas" className="clippedcanvas"></canvas>
        </div>
      );
    }else if(this.state.page==="home"){
      return(<HomeOrb />);
    }else if(this.state.page==="app"){
      return(<AppOrb />);
    }else if(this.state.page==="source"){
      return(<SourceOrb />);
    }else if (this.state.page==="globalgust"){
      return(<GlobalGustOrb />)
    }
  }

  componentDidMount(){
    globalVar.onClickCallback = (data) =>{
      this.setState({page:data});
    };
  }

}

export {Orb};
