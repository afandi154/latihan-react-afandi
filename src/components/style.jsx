import styled from "styled-components";

export const ContainerForm = styled.form`
  width: ${({register}) => register? "40%" : "30%"};
  margin: 3em auto;
  padding: 0.5em 2.5em;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0 0 10px #BBB;
`
export const CostumeInput = styled.input`
  display: block;
  width: 100%;
  padding: 0.8em;
  box-sizing: border-box;
  font-size: 16px;
`

export const CostumeSelect = styled.select`
  display: inline;
  margin-top: 0.5em;
  padding: 0.5em 1em;
`
export const WarningSpan = styled.span`
  display: ${({inline}) => inline? "inline" : "block"};
  font-size: 14px;
  color: red;
  margin-bottom: 0.2em;
`

export const Buttons = styled.button`
  background-color: ${({register}) => register? "#F22" : "#55AAFF"};
  border: none;
  border-radius: 5px;
  padding: 0.8em 1.5em;
  font-weight: 400;
  font-size: 17px;
  margin: 1.5em 1em 1.5em 0;

  &:hover {
    background-color: ${({register}) => register? "#F11" : "#00AAFF"};
    cursor: pointer;
  }

  &:focus {
    border: 5px solid ${({register}) => register? "#F00" : "#8080FF"};
    background-color: ${({register}) => register? "#F31" : "#A0A0FF"};
    padding: 0.5em 1.2em;
  }
`
