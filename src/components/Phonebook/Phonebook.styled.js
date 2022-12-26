import styled from 'styled-components';

export const Label =styled.label`
display: flex;
flex-direction: column;
font-family: 'Abel', sans-serif;
color:  #000000;
font-size: 20px;
margin-right: 5px;
`
export const Input = styled.input`
padding: 10px 20px;
width: 200px;
border: 2px #9C40E3 solid;
font-family: 'Abel', sans-serif;
font-size: 20px;
background: #FFFFFF;
border-radius: 13px;
outline: none;
background-color: #FFFFFF;
`

export const Button = styled.button`
margin: auto 0 0 0 ;
background-color: #C0B1EC;;
color: #000000;
cursor: pointer;
font-family: 'Abel', sans-serif;
padding: 10px 20px;
border: 2px transparent solid;
border-radius: 13px;
font-size: 20px;
line-height: 25px;
&:hover{
   background-color: #9C40E3 ;
   color: white;
}
`

export const Form = styled.form`
display: flex;
gap: 70px;
padding-bottom: 30px;
`

export const Div = styled.div`
:after{
  content: "";
  display: block;
  width: 100%;
  height: 1px;
  background: #001F54;
  left: 0;
  position: absolute;
       } 
`