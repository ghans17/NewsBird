import React, { Component } from 'react';
import plant from '../Components/plant.gif';

export class Loading extends Component {
  render() {
    return (
      <div
        className="text-center"
       
      >
        <img src={plant} alt="Loading.." />
        
      </div>
    );
  }
}

export default Loading;
