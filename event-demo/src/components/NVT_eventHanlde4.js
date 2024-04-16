import React, { Component } from 'react'

export default class NVT_eventHanlde4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Nguyễn Văn Thạo"
        }

    }
    handleGetName = () =>{
        alert(this.props.name);
        this.setState({
            name: this.props.name,
        })
    }
  render() {
    return (
      <div className='alert alert-info'>
            <h2>lấy dữ liệu props</h2>
            <button onClick={this.handleGetName}>Get Name :</button>
            <h2>Welcome to, {this.state.name}</h2>
      </div>
    )
  }
}
