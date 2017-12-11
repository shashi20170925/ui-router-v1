import React, {Component} from 'react';

export default class Hello extends Component {
  constructor () {
    super();
    this.state = { greeting: 'hello' };
    this.toggleGreeting = this.toggleGreeting.bind(this);
  }
  
  toggleGreeting () {
    this.setState({ 
      greeting: this.state.greeting === 'hello' ? 'what\'s up' : 'hello'
    });
  }
  
  render () {
    return (
      <div>
        <h3>{this.state.greeting} solar system!</h3>
        <button onClick={this.toggleGreeting}>toggle greeting</button>
      </div>
    );
  }
}