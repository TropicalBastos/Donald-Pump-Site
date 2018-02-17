import React, {Component} from 'react';

class CentralModal extends Component{

    constructor(){
        super();
        this.state = {
            visible: true
        };
        this.reAdjust = this.reAdjust.bind(this);
    }

    reAdjust(){
        setTimeout(() => {
            this.setState({visible: false})
        }, 2000);
    }

    render(){
        if(this.state.visible){
            this.reAdjust();
            return(
                <p className={this.props.cl}>{this.props.text}</p>
            );
        }

        return null;
    }

}

export {CentralModal};