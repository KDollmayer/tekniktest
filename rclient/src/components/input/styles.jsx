import styled from "styled-components";

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #000F08;
  align-items: center;
  padding-top:30px;
  border-radius: 20px;
  margin:5px;
  
  width:45vh;
  height: 70vh;


`
export const H1 = styled.h1`
font-weight: bold;
color:#FFFBDB;
`

export const Input = styled.input`
  background-color:#FFFBDB;
  margin:10px;
  padding:10px;
  width:50%;
  border-radius: 5px;
  border: 0;
  &:hover{
    cursor: pointer;
    width: 53%;
    transition: 0.3s ease-in;
  }
`

export const Button = styled.button`

background-color:#FFFBDB;
  margin:10px;
  padding:10px;
  width:50%;
  border-radius: 5px;
  border: 0;
  transition: 0.3s ease-in;
  &:hover{
    cursor: pointer;
    transition: 0.3s ease-in;
    background-color: #006C67 ;
    color:#FFFBDB;
  }

`

export const TextArea = styled.textarea`

background-color:#FFFBDB;
  margin:10px;
  padding:10px;
  width:50%;
  height: 50px;
  border-radius: 5px;
  border: 0;

  overflow: hidden;
  &:hover{
    cursor: pointer;
    width: 53%;
    height:56px;
    transition: 0.3s ease-in;
  }

`