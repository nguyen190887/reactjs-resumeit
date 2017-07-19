import React from 'react';
import {render} from 'react-dom';
import ActionLink from './components/ActionLink.jsx';
import Toggle from './components/ToggleLink.jsx';
import LoggingButton from './components/LoggingButton.jsx';

import LoginControl from './components/greeting/LoginControl.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <ActionLink />
        <br />
        <Toggle />
        <br />
        <LoggingButton />
        <div>
          <LoginControl />
        </div>
      </div>
    );
  }
}

render(<App /> , document.getElementById('app'));
