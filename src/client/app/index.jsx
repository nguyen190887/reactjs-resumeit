import React from 'react';
import {render} from 'react-dom';

class ActionLink extends React.Component {
  handleClick(e) {
    e.preventDefault();
    alert('link was clicked');
  }
  
  render () {
    return (
      <a href="#" onClick={this.handleClick}>
        Click me !!!
      </a>
    );
  }
}

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggle: 'ON'};
    
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  
  render () {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

class LoggingButton extends React.Component {
  // experiement syntax
  // handleClick = () => console.log('this is: ' + this); 
  
  handleClick() {
    console.log('this is: ' + this);
  }
  
  render () {
    return (
      <button onClick={e => this.handleClick(e)}>
        Click to log
      </button>
    );
  }
}

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
