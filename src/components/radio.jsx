import React, { Component } from 'react'

class Radio extends Component {
  state = {
    value: "",
    errors: null
  } 
  
  render() {
    return (
      <label style={{marginRight: "1em"}}>
        <input 
          type="radio" 
          name={this.props.name} 
          value={this.props.value}
          onChange={(element) => this.setValue(element)}
        />
        {this.props.label}
      </label>
    )
  }

  setValue = (element) => {
    return this.setState({value: element.target.value}, 
      () => this.props.callbackValue(this.state.value)
    )
  }
}

export default Radio