import React, { Component } from 'react'
import { CostumeInput, WarningSpan } from './style'

class Input extends Component {
  state = {
    value: "",
    errors: null
  }

  render() {
    return (
      <div>
        <label
          style={{display: "block", margin: "1em 0 0.3em"}}
        >
          {this.props.label}
        </label>
        <CostumeInput type={this.props.type}
          placeholder={this.props.sample}
          onChange={element => this.setValue(element)}
          onBlur={this.checkErrors}
          required
        />
        {
          this.state.errors &&
          <WarningSpan>{this.state.errors}</WarningSpan>
        }
      </div>
    )
  }

  setValue = (element) => {
    return this.setState({value: element.target.value}, 
      () => this.props.callbackValue(this.state.value)
    )
  }

  checkErrors = () => {
    let regexName = /[\d!@#$%^&*()_+}{"':?><=;`,.|\\\][\-/]/g
    let regexEmail = /([\w]{4,})(@[\w]{4,})(\.\D[\w]+)/g

    if(
        this.state.value.length > 0 && 
        this.state.value.length < 5
      ) {
      this.setState({errors: `*${this.props.label} tidak boleh kurang dari 5 karakter`},
      () => this.props.callbackError(true))
    }
    else if(
        this.props.label === "Nama Lengkap" && 
        regexName.test(this.state.value)
      ) {
      this.setState({errors: `*${this.props.label} tidak boleh terdiri dari bilangan angka / symbol`}, () => this.props.callbackError(true))
    }
    else if (
        this.props.label === "Email" && 
        this.state.value.length > 0 &&
        !regexEmail.test(this.state.value)
      ){
      this.setState({errors: `*Harap masukan ${this.props.label} yang valid`},
      () => this.props.callbackError(true))
    }
    else{
      this.setState({errors: ""}, () => this.props.callbackError(false))
    }
  }
}

export default Input