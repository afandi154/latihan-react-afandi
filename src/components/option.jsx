import React, { Component } from 'react'
import { CostumeSelect } from './style'

class Option extends Component {
  state = {
    value: null
  }
  
  render() {
    return (
      <div>
        <label>{this.props.label}</label>
        <br />
        <CostumeSelect 
          defaultValue="Pilih salah satu" 
          onChange={element => this.setValue(element)}
        >
          <option disabled>Pilih salah satu</option>
          <option value="islam">Islam</option>
          <option value="katolik">Katolik</option>
          <option value="protestan">Protestan</option>
          <option value="hindu">Hindu</option>
          <option value="budha">Budha</option>
          <option value="lain">Lainnya</option>
        </CostumeSelect>
      </div>
    )
  }

  setValue = (element) => {
    return this.setState({value: element.target.value}, 
      () => this.props.callbackValue(this.state.value)
    )
  }
}

export default Option