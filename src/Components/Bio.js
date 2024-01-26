import React, { Component } from 'react'
import { Card } from 'react-bootstrap';
export default class Bio extends Component {

  constructor(props) {
    super(props);
    this.state = {
      person:{
      fullName: 'Mohamed Hannachi',
      bio: 'Expert international en ecosystème de voyage...',
      imgSrc: './images/img1.jpg',
      profession: 'Web Developer FullStuck JS',
      },
      show:false,
      timer:0,
      interval:null
    };
  }
            
      // component used to show timer's state 
      componentDidMount(){
        this.setState({
          interval : setInterval (
            () => this.setState ({timer : this.state.timer + 1}),1000
          )
        })  
        console.log("componentDidMount") }

       // component used to show  counter update  
      componentDidUpdate(){console.log("component mounted")
                            console.log(this.state.bio)}
      
      // component used to show when component has been unmount                      
      componentWillUnmount(){console.log("component killed !")
                              clearInterval(this.state.interval)}
    
    // this section cover the butttons  timer and counter creation
    render() {
    return (
      <>
      <div  className='card'>
      <Card style={{ width: '40rem' }}>
      <Card.Img variant="top" src={this.state.person.imgSrc} style={{width:'30%', height:'100%', borderRadius:'60%'}} />
      <Card.Body>
        <Card.Title>{this.state.person.fullName}</Card.Title>
        <Card.Text>
        {this.state.person.bio}<br/>
        {this.state.person.profession}
        </Card.Text>
        <p>Timer : {this.state.timer}</p>
      </Card.Body>
    </Card>   
      </div>
      </>
    )
  }
}
