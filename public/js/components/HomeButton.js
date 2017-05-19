import React from 'react';

var BUTTON_WIDTH = 200;
var BUTTON_OFFSET = 107;

class HomeButton extends React.Component{

  constructor(){
    super();
    var canvasLeft = document.getElementsByClassName("clipped")[0].offsetLeft;
    var canvasHeight = document.getElementsByClassName("clipped")[0].offsetHeight;
    var posY = canvasHeight/2;
    var posX = (canvasLeft-BUTTON_WIDTH)+BUTTON_OFFSET;
    this.state = {posX:posX,posY:posY};
    this.updateWindow = this.updateWindow.bind(this);
    this.onResize = this.onResize.bind(this);
  }

  updateWindow(){
    var canvasLeft = document.getElementsByClassName("clipped")[0].offsetLeft;
    var canvasHeight = document.getElementsByClassName("clipped")[0].offsetHeight;
    var posX = (canvasLeft-BUTTON_WIDTH)+BUTTON_OFFSET;
    var posY = canvasHeight/2;
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

  click(){
    document.documentElement.style["background-color"] = "#540000";
    globalVar.onClickCallback("home");
  }

  mouseEnter(){
    document.getElementById("homeattach").style.backgroundImage = "url(/res/buttonattach-hover.png)";
  }

  mouseLeave(){
    document.getElementById("homeattach").style.backgroundImage = "url(/res/buttonattach.png)";
  }

  render(){
    return(<div>
      <div id="homeattach" className="buttonattach-inverted"
        style={{top:(this.state.posY-90)+"px",left:(this.state.posX+60)+"px"}}></div>
      <button style={{top:this.state.posY+"px",left:this.state.posX+"px",width:BUTTON_WIDTH+"px"}}
      className="primary-button" onClick={this.click}
      onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>Home</button>
  </div>
    );
  }

}

export{HomeButton};
