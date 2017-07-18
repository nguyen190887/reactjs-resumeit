import React from 'react';
import {render} from 'react-dom';
import ActionLink from './components/ActionLink.jsx';
import Toggle from './components/ToggleLink.jsx';
import LoggingButton from './components/LoggingButton.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <ActionLink />
        <br />
        <Toggle />
        <br />
        <LoggingButton />
      </div>
    );
  }
}

render(<App /> , document.getElementById('app'));
