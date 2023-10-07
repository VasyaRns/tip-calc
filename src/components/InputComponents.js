import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  background-color: hsl(0, 0%, 100%);
`;
export const ContainerPeople = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between
  `

export const SelectTip = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(100px, 3fr));
  gap: 20px;
  justify-items: center;
`;

export const Span = styled.span`
  color: red;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  color: hsl(186, 14%, 43%);
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  border: none;
  outline: none;
  margin: 5px;

  padding: 5px;
  color: hsl(183, 100%, 15%);
  background-color: hsl(189, 41%, 97%);
  font-size: 24px;
  text-align: right;

  &:focus {
    outline: none !important;
    border: 1px solid hsl(172, 67%, 45%);
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  border: none;
  margin: 5px;
  padding: 5px;
  color: hsl(0, 0%, 100%);
  background: hsl(183, 100%, 15%);
  font-size: 24px;
  ${({ isSelected }) =>
    isSelected &&
    `
    background-color: hsl(172, 67%, 45%);
  `}

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;