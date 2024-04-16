import React, { Component } from 'react'

export default class NVT_eventHanlde1 extends Component {
    
    eventHanldeClick1 = () =>{
        alert('Event hanlde 1')
    }
    eventHanldeClick2(){
        alert('Event hanlde 2')
    }

    render() {
    return (
      <div className='alert alert-danger'>
        <h2>Event hanlde </h2>
        <button onClick={this.eventHanldeClick1()}>Click 1</button>
        <button onClick={this.eventHanldeClick2}>Click 2</button>
      </div>
    )
  }
}
