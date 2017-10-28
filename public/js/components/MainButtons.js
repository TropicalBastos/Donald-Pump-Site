import React from 'react';
import {AppButton} from './AppButton.js';
import {GlobalGustButton} from './GlobalGustButton.js';
import {HomeButton} from './HomeButton.js';
import {SourceButton} from './SourceButton.js';

class MainButtons extends React.Component{

  render(){
    return(
      <div>
        <AppButton />
        <GlobalGustButton />
        <HomeButton />
        <SourceButton />
      </div>
    );
  }

}

export {MainButtons}
