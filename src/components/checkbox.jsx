import React, { Component } from 'react'

class Checkbox extends Component {
  state = {
    value: false
  }
  
  render() {
    return (
      <div>
        <input type="checkbox"
          style={{margin: "5px 0 0"}}
          checked={this.state.value}
          onChange={e => this.setState({value: e.target.checked}, 
            () => this.props.isChecked(this.state.value))}
          /> Remember Me
      </div>
    )
  }
}

export default Checkbox