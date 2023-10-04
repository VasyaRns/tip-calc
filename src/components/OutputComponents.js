import styled from "styled-components"

export const Container = styled.div`
width:100%;
display: flex;
gap:30px;
flex-direction: column;
border-radius: 10px;
background-color: hsl(183, 100%, 15%);
margin: 10px;
padding:10px;
justify-content: center;
`
export const Container1 = styled.div`
display:flex;
align-items: center;
justify-content: space-around;
`
export const Container2 = styled.div`
display:flex;
flex-direction: column;
`
export const H2 = styled.h2`
color: hsl(0, 0%, 100%);
`
export const H3 = styled.h3`
color: hsl(184, 14%, 56%);
`
export const H1 = styled.h1`
align-self: flex-end;
font-size: 100px;
color:hsl(172, 67%, 45%);
`
export const Button = styled.button`
align-self: center;
width:50%;
height: 50px;
border-radius: 10px;
border: none;
margin: 5px;
padding: 5px;
color: hsl(0, 0%, 100%);
background-color: hsl(186, 14%, 43%);
font-size: 24px;
`