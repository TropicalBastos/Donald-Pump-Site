import React from 'react';

var BUTTON_WIDTH = 200;
var BUTTON_OFFSET = 55;;

class GetButton extends React.Component{

  constructor(){
    super();
    var canvasLeft = document.getElementsByClassName("clipped")[0].offsetLeft;
    var canvasHeight = document.getElementsByClassName("clipped")[0].offsetHeight;
    var posY = canvasHeight;
    var posX = (canvasLeft-BUTTON_WIDTH)+BUTTON_OFFSET;
    this.state = {posX:posX,posY:posY};
    this.updateWindow = this.updateWindow.bind(this);
    this.onResize = this.onResize.bind(this);
  }

  updateWindow(){
    var canvasLeft = document.getElementsByClassName("clipped")[0].offsetLeft;
    var canvasHeight = document.getElementsByClassName("clipped")[0].offsetHeight;
    var posX = (canvasLeft-BUTTON_WIDTH)+BUTTON_OFFSET;
    var posY = canvasHeight;
    this.setState({posX:posX,posY:posY});
  }

  onResize (){
    if (this.rqf) return;
    if( typeof window !== 'undefined' )
      this.rqf = window.requestAnimationFrame(() => {
        this.rqf = null;
        this.updateWindow();
      });
  }

  componentDidMount () {
    this.updateWindow();
    if( typeof window !== 'undefined' )
      window.addEventListener('resize', this.onResize, false);
  }

  componentWillUnmount () {
    if( typeof window !== 'undefined' )
      window.removeEventListener('resize', this.onResize);
  }

  render(){
    return(
      <button style={{top:this.state.posY+"px",left:this.state.posX+"px",width:BUTTON_WIDTH+"px"}}
      className="primary-button">Get It!</button>
    );
  }

}

export{GetButton};
