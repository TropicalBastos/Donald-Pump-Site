import React from 'react';

var BUTTON_WIDTH = 200;
var BUTTON_OFFSET = 55;;

class SourceButton extends React.Component{

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

    document.getElementById("source-button").classList.add("active-button");
    document.getElementById("sourceattach").style.backgroundImage = "url(/res/buttonattach-hover.png)";
    document.documentElement.style["background-color"] = "rgb(84, 0, 0)";
    globalVar.onClickCallback("source");
  }

  mouseEnter(){
    document.getElementById("sourceattach").style.backgroundImage = "url(/res/buttonattach-hover.png)";
  }

  mouseLeave(){
    if(document.getElementById("source-button").className.indexOf("active-button")===-1)
      document.getElementById("sourceattach").style.backgroundImage = "url(/res/buttonattach.png)";
  }

  render(){
    return(<div>
      <div id="sourceattach" className="buttonattach-inverted"
        style={{top:(this.state.posY-90)+"px",left:(this.state.posX+60)+"px"}}></div>
      <button id="source-button" style={{top:this.state.posY+"px",left:this.state.posX+"px",width:BUTTON_WIDTH+"px"}}
      className="primary-button" onClick={this.click}
      onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>Source</button>
  </div>
    );
  }

}

export{SourceButton};
