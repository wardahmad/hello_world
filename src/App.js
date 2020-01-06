// bring in React and Component from React

import React, {Component} from 'react';
// define our Hello component
class Hello extends Component {
   // what should happen when the component is first created
   constructor (props) {
     super()
     this.state = {
      moodPoints: 1 // initialize this.state.moodPoints to be 1
    };
  }

  increaseMood(e) {
    if (this.state.moodPoints >= 10){
      this.setState({
        moodPoints: 1
      });

    } else {
      this.setState({
        moodPoints: this.state.moodPoints + 1
      });
    }
    
  }
  render () {
    // make sure to return some UI
    return (
      <div>
        <img src="https://i.ytimg.com/vi/RY4uivIh-ik/maxresdefault.jpg" width="300px" hight="300px"></img>
        <h1>Hello {this.props.name}</h1>
        <h2>Hello {this.props.emil}</h2>
        <h3>Good Morning {this.props.addr}</h3>
        <p>i love: {this.props.fave}</p>
        <p>On a scale of 1-10</p>
        <p>You are this happy: {this.state.moodPoints}</p>
        <button onClick={(e) => this.increaseMood(e)}>Cheer upr</button>
      </div>      
    );
  }
}
export default Hello; 