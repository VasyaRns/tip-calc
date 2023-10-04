import styled from "styled-components"

export const Container = styled.div`
display: flex;
flex-direction: column;
border-radius: 10px;
background-color: hsl(0, 0%, 100%);
`
export const ContainerButtons = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 20px;
`

export const Label = styled.label`
display: flex;
flex-direction: column;
justify-content: center;
align-items: start;
color:hsl(186, 14%, 43%);
`
export const Input = styled.input`
width: 100%;
height: 50px;
border-radius: 10px;
border: none;
outline: none;
margin: 5px;
padding: 5px;
color:hsl(183, 100%, 15%);
background-color: hsl(189, 41%, 97%);
font-size: 24px;
&::-webkit-outer-spin-button,
&::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
`
export const Button = styled.button`
width: 100%;
height: 50px;
border-radius: 10px;
border: none;
margin: 5px;
padding: 5px;
color: hsl(0, 0%, 100%);
background-color: hsl(183, 100%, 15%);
font-size: 24px;`