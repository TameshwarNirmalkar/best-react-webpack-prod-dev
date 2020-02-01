import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import HelloWorld from './components/hello-world';
import butterfly from './resource/images/butterfly.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getTitleState() {
    return 'This is get TitleState';
  }

  render() {
    return (
      <div>
        <img src={butterfly} alt="butterfly" />
        {this.getTitleState()}
        <HelloWorld title="Hello from React webpack" />
      </div>
    );
  }
}

export default hot(App);
