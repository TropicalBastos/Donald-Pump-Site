import React from 'react';
import {NewsletterSubscribe} from './buttons/NewsletterSubscribe';

class GlobalGustOrb extends React.Component{

  constructor(){
    super();
    this.state = {email: ""};
    this.changeEmail = this.changeEmail.bind(this);
  }

  changeEmail(e){
    var email = e.target.value;
    this.setState({email});
  }

  render(){

    setTimeout(()=>{
        // document.getElementsByClassName("globalimg")[0].classList.add("popin");
    });

    return(<div className="clipped" style={{backgroundColor:"#c3dff7"}}>
          <h1 className="title orbtitle">Newsletter</h1>
          <div className="gust-container">
            <p>Subscribe to our epic newsletter and get game information and development 
              updates and be involved in the development of new features. This is an interactive newsletter,
              where you can respond to each email we send out with your thoughts, 
              and if we like your thoughts we will reply!</p>
          </div>
          <input onChange={this.changeEmail} type="text" className="newsletter"/>
          <NewsletterSubscribe email={this.state.email} />
      </div>
    );
  }

}

export {GlobalGustOrb};
