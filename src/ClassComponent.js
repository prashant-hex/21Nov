import React, { Component } from 'react'

export default class ClassComponent extends Component {

    constructor(props){
      super(props);
      this.state = "value"
    }

    

  render() {
    return (
      <>
        <p>ClassComponent</p>
        name - {this.props.value.name} : {this.props.value.age}
      </>
    )
  }
}
