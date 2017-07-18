import React from 'react';

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

export default LoggingButton;
