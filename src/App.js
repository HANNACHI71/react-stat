import React, { Component } from 'react'
import Bio from './Components/Bio';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {show:false};
  }

toggle=()=>{
  this.setState({show: !this.state.show})
}
  render() {
    return (
      <div>
        <h3>Workshop React State</h3>
        <button onClick={()=>this.toggle()}>Show/Hide</button>
        {this.state.show ?<Bio/> : null}
      </div>
    )
  }
}