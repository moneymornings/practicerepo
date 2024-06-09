import React, { Component } from 'react' //rcc to create the template

class Class extends Component {
    constructor(props){
        super(props); //children constructor / children has properties
        this.state = { //declares the state value like useState
            count: 0 //counter start


           
        };
    }

  Increase = () => {//creating function for increase
    this.setState({count: this.state.count + 1})//this changes the state for increasse and increments counter
    }


    Decrease = () => {
        this.setState({count:this.state.count - 1}) //this changes the state for decrease and increments the counter
    }





  render() {
    return (//to access the state of count , use dot notation with this.state.count
        <>
      <h1>Class Based Component Counting</h1>
      <p> Count: {this.state.count}</p>
      <button onClick ={this.Increase}>Increase</button>
      <button onClick ={this.Decrease}>Decrease</button>
      </>
    )
  }
}


export default  Class 