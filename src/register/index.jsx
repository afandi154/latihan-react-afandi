import React, { Component } from 'react'
import Input from '../components/input'
import Radio from '../components/radio'
import Option from '../components/option'
import { ContainerForm, Buttons, WarningSpan } from '../components/style'

class IndexRegister extends Component {
  state = {
    nama: [null, false],
    email: [null, false],
    pass: [null, false],
    gender: [null, false],
    agama: [null, false]
  }
  render() {
    return (
      <ContainerForm onSubmit={element => this.handleForm(element, this.state)} register>
        <h1>Register</h1>
        <Input 
          label="Nama Lengkap"
          type="text"
          sample="Nama Lengkap Anda"
          callbackValue={(value) => this.setState({nama: [value, this.state.nama[1]]})}
          callbackError={(status) => this.setState({nama: [this.state.nama[0], status]})}
        />
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
        /> 
        <div>
          <span style={{display: "block", margin: "1em 0 0.5em"}}>
            Jenis Kelamin
          </span>
          <Radio 
            label="Pria"
            name="gender"
            value="Pria"
            callbackValue={(value) => this.setState({gender: [value, this.state.gender[1]]}, 
              () => this.setState({gender: [this.state.gender[0], false]}))
            }/>
          <Radio 
            label="Wanita"
            name="gender"
            value="Wanita"
            callbackValue={(value) => this.setState({gender: [value, this.state.gender[1]]}, 
              () => this.setState({gender: [this.state.gender[0], false]}))
            }/>
          {
            this.state.gender[1] && 
            <WarningSpan inline>*Gender tidak boleh kosong</WarningSpan>
          }
        </div> <br />
        <div style={{display: "flex"}}>
          <Option 
            label="Agama"
            callbackValue={(value) => this.setState({agama: [value, this.state.agama[1]]}, 
              () => this.setState({agama: [this.state.agama[0], false]}))
            }
          />
          {
            this.state.agama[1] && 
            <WarningSpan style={{margin: "2.2em 0 0 1em"}}>*Agama tidak boleh kosong</WarningSpan>
          }
        </div>
        
        <Buttons onClick={this.checkEmptyRadio}>Submit</Buttons>
      </ContainerForm>
    )
  }

  handleForm = (element, state) => {
    element.preventDefault();
    
    !state.nama[1] && !state.email[1] &&
    !state.pass[1] && !state.gender[1] &&
    !state.agama[1] &&
    alert(`Registrasi Berhasil! : \n
      Nama : ${state.nama[0]}
      Email : ${state.email[0]}
      Password : ${state.pass[0]}
      Gender : ${state.gender[0]}
      Agama : ${state.agama[0]}`)
  }

  checkEmptyRadio = () => {
    !this.state.gender[0] && this.setState({gender: [null, true]})
    !this.state.agama[0] && this.setState({agama: [null, true]})
  }
}

export default IndexRegister