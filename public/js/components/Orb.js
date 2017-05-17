import React from 'react';
import {HomeOrb} from './HomeOrb.js';

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
    }
  }

  componentDidMount(){
    globalVar.onClickCallback = (data) =>{
      this.setState({page:data});
    };
  }

}

export {Orb};
