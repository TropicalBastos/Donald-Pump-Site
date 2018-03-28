import React from 'react';

class HomeOrb extends React.Component{

  render(){

    setTimeout(()=>{
      document.getElementsByClassName("home-plane")[0].classList.add("popin");
      document.getElementsByClassName("homedesc-container")[0].classList.add("popin");
    },300);

    return(<div className="clipped" style={{backgroundColor:"red"}}>
            <h1 className="title orbtitle">Home</h1>
              <div className="homedesc-container">
                <p className="home-desc">Welcome to the official site for the Donald Pump mobile
                app!</p>
                <p className="home-desc">Now available on Android, iOS release coming very soon keep your eyes peeled!</p>
                <a href='https://play.google.com/store/apps/details?id=com.globalgust.donaldpump&hl=en&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
                  <img className="google-badge" alt='Get it on Google Play' src='https://play.google.com/intl/en_gb/badges/images/generic/en_badge_web_generic.png'/>
                </a>
              </div>
              <img src="res/plane.png" className="home-plane"/>
           </div>
    );
  }
}

export {HomeOrb};
