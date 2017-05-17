import React from 'react';
import {AppButton} from './AppButton.js';
import {GlobalGustButton} from './GlobalGustButton.js';
import {HomeButton} from './HomeButton.js';
import {GetButton} from './GetButton.js';

class MainButtons extends React.Component{

  render(){
    return(
      <div>
        <AppButton />
        <GlobalGustButton />
        <HomeButton />
        <GetButton />
      </div>
    );
  }

}

export {MainButtons}
