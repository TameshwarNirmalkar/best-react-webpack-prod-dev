import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import HelloWorld from './components/hello-world';
import butterfly from './resource/images/butterfly.png';
import VehicleChangeComponent from './components/vehicle-change/vehicle-change-component';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicleData: {
        DMSModelCode: 'MUZ',
        DMSVariantCode: 'MU300',
        id: 2,
      },
    };
  }

  getTitleState() {
    return 'This is get TitleState';
  }

  render() {
    const { vehicleData } = this.state;
    return (
      <div>
        <img src={butterfly} alt="butterfly" />
        {this.getTitleState()}
        <p>NODE Environment : {process.env.NODE_ENV} </p>
        <p>BASE path : {process.env.REACT_APP_BASE_API}</p>
        <p>API URL : {process.env.REACT_APP_API_URL}</p>
        <HelloWorld title="Hello from React webpack" />
        <VehicleChangeComponent preFilledData={vehicleData} />
      </div>
    );
  }
}

export default hot(App);
