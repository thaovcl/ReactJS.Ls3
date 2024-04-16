import React, { Component } from 'react'
import NVT_eventHanlde1 from './components/NVT_eventHanlde1';
import NVT_eventHanlde2 from './components/NVT_eventHanlde2';
import NVT_eventHanlde3 from './components/NVT_eventHanlde3';
import NVT_eventHanlde4 from './components/NVT_eventHanlde4';

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1> Event form demo </h1>
        <NVT_eventHanlde1/>
        <NVT_eventHanlde2/>
        <NVT_eventHanlde3/>
        <NVT_eventHanlde4/>
        

      </div>
    );
  }
}
