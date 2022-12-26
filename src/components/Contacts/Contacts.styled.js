import styled from 'styled-components';

export const Ul = styled.ul`
margin: 0 ;
margin-top: 50px;
padding: 0;
list-style: none;
display: flex;
gap: 40px;
flex-wrap: wrap;

`
export const Li = styled.li`
padding: 7px 11px;
display: flex;
gap: 20px;
width: 350px;
color: #8d5524;
font-family: 'Abel', sans-serif;
align-items: center;
background-color: #FFF;
border-radius: 13px;
font-weight: 400;
font-size: 20px;
color: #000000;`



export const Button = styled.button`
padding: 2px 10px ;
font-size: 20px;
font-family: 'Abel', sans-serif;
background-color: #C0B1EC;;
color: #000000;
border: none;
border-radius: 13px;
margin-left: auto;
&:hover{
    background-color: #9C40E3 ;
    color: white;
}
`
export const Img = styled.img`
border-radius: 50%;
width: 50px;
height: 50px;
object-fit: cover;
`