import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 30px;
  flex-direction: column;
  border-radius: 10px;
  background-color: hsl(183, 100%, 15%);
  padding:60px 40px 40px;

  @media screen and (max-width: 768px) {
    gap: 20px;
  }
`;

export const Container1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Container2 = styled.div`
  display: flex;
  flex-direction: column;
`;

export const H2 = styled.h2`
  color: hsl(0, 0%, 100%);

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

export const H3 = styled.h3`
  color: hsl(184, 14%, 56%);
`;

export const H1 = styled.h1`
  align-self: flex-end;
  font-size: calc(50px + 8 * (100vw - 320px) / 880);
  color: hsl(172, 67%, 45%);

  @media screen and (max-width: 768px) {
    font-size: 40px;
    align-self: center;
  }
`;

export const Button = styled.button`
  align-self: center;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  border: none;
  margin-top: 70px;
  padding: 5px;
  color: hsl(0, 0%, 100%);
  background-color: hsl(186, 14%, 43%);
  font-size: 24px;
  &:hover {
    background-color: hsl(172, 67%, 45%);
  }
`;