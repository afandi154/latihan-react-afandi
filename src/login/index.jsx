import React, { Component } from 'react'
import Checkbox from '../components/checkbox'
import Input from '../components/input'
import { Buttons, ContainerForm } from '../components/style'

class IndexLogin extends Component {
  state = {
    email: [null, false],
    pass: [null, false],
    check: false
  }

  render() {
    return (
      <ContainerForm onSubmit={this.handleSubmit}>
        <h1>Login</h1>
        <Input
          label="Email"
          type="email"
          sample="Email Aktif Anda"
          callbackValue={(value) => this.setState({email: [value, this.state.email[1]]})}
          callbackError={(status) => this.setState({email: [this.state.email[0], status]})}
        /> 
        <Input
          label="Password"
          type="password"
          sample="Masukan Password"
          callbackValue={(value) => this.setState({pass: [value, this.state.pass[1]]})}
          callbackError={(status) => this.setState({pass: [this.state.pass[0], status]})}
        /> <br />
        <Checkbox isChecked={(value) => this.setState({check: value})}/>
        <div style={{display: "flex"}}>
          <Buttons>Submit</Buttons>
          <Buttons type='button' register>Register</Buttons>
        </div>
      </ContainerForm>
    )
  }

  handleSubmit = (element) => {
    element.preventDefault();
    alert(`
      Nama : ${this.state.email}
      Pass : ${this.state.pass}
      Remember Me : ${this.state.check}
    `)
  }
}

export default IndexLogin