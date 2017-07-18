import React from 'react';

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

export default ActionLink;
