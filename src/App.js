import styled from 'styled-components'
import InputCalc from './components/InputCalc'
import OutputCalc from './components/OutputCalc'

function App() {
  const Main = styled.main`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: hsl(185, 41%, 84%);
  `;

  const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 30px;
    border-radius: 10px;
    background-color: hsl(0, 0%, 100%);
    padding: 20px;
    max-width: 1000px;

    @media screen and (max-width: 1068px) {
      flex-direction: column;
    }
  `;
  return (
    <Main>
      <Container>
        <InputCalc></InputCalc>
        <OutputCalc></OutputCalc>
      </Container>
    </Main>
  );
}

export default App;
