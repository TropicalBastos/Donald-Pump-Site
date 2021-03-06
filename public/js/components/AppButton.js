import React from 'react';

var BUTTON_WIDTH = 200;
var BUTTON_OFFSET = 55;

class AppButton extends React.Component{

  constructor(){
    super();
    var canvasLeft = document.getElementsByClassName("clipped")[0].offsetLeft;
    var canvasWidth = document.getElementsByClassName("clipped")[0].offsetWidth;
    var canvasHeight = document.getElementsByClassName("clipped")[0].offsetHeight;
    var posY = canvasHeight;
    var posX = (canvasWidth+canvasLeft)-BUTTON_OFFSET;
    this.state = {posX:posX,posY:posY};
    this.updateWindow = this.updateWindow.bind(this);
    this.onResize = this.onResize.bind(this);
  }

  updateWindow(){
    var canvasLeft = document.getElementsByClassName("clipped")[0].offsetLeft;
    var canvasWidth = document.getElementsByClassName("clipped")[0].offsetWidth;
    var canvasHeight = document.getElementsByClassName("clipped")[0].offsetHeight;
    var posX = (canvasWidth+canvasLeft)-BUTTON_OFFSET;
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

  click(){
    var actives = document.getElementsByClassName("active-button");

    Array.prototype.forEach.call(actives,(el,i)=>{
      el.classList.remove("active-button");
    });

    var hovers = document.getElementsByClassName("buttonattach");
    var hoversInverted = document.getElementsByClassName("buttonattach-inverted");

    Array.prototype.forEach.call(hovers,(el,i)=>{
      el.style.backgroundImage = "url(/res/buttonattach.png)";
    });

    Array.prototype.forEach.call(hoversInverted,(el,i)=>{
      el.style.backgroundImage = "url(/res/buttonattach.png)";
    });

    document.getElementById("app-button").classList.add("active-button");
    document.getElementById("appattach").style.backgroundImage = "url(/res/buttonattach-hover.png)";
    document.documentElement.style["background-color"] = "#13334e";
    globalVar.onClickCallback("app");
  }

  mouseEnter(){
    document.getElementById("appattach").style.backgroundImage = "url(/res/buttonattach-hover.png)";
  }

  mouseLeave(){
    if(document.getElementById("app-button").className.indexOf("active-button")===-1)
      document.getElementById("appattach").style.backgroundImage = "url(/res/buttonattach.png)";
  }

  render(){
    return(<div>
      <div id="appattach" className="buttonattach"
      style={{top:(this.state.posY-90)+"px",left:(this.state.posX+60)+"px"}}></div>
    <button id="app-button" style={{top:this.state.posY+"px",left:this.state.posX+"px",width:BUTTON_WIDTH+"px"}}
      className="primary-button" onClick={this.click} onMouseEnter={this.mouseEnter}
       onMouseLeave={this.mouseLeave}>The App</button>
  </div>
    );
  }

}

export{AppButton};
