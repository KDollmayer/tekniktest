import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 70%;
  
  margin:5px 20px;

  
 

`

export const Card  = styled.div`
width: 30vh;
display: flex;
flex-direction: column;
padding:5px;
margin:5px;
height: 40vh;
background-color: #FCF7FF;
border-radius: 20px;
  &:hover{
    cursor: pointer;
    
  }

`
export const H1 = styled.h1`
font-weight: bold;
color:#000F08;
text-align: center;
`

export const H3 = styled.h3`
color:#000F08;
padding-left:2px;
text-align: start;
margin-left:15px;
`
export const P = styled.p`
font-weight: lighter;
color:#000F08;
text-align: center;
`
export const PW = styled.p`
color:#000F08;
padding-left:2px;
text-align: start;
margin-left:15px;
`