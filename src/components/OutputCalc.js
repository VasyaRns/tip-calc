import {Container,Container1,Container2,H2,H3,H1,Button} from "./OutputComponents";

const OutputCalc = () => {


    return (
        <Container>
            <Container1>
                <Container2>
                    <H2>Tip Amount</H2>
                    <H3>/person</H3>
                </Container2>
                <H1>$0</H1>
            </Container1>
            <Container1>
                <Container2>
                    <H2>Tip Amount</H2>
                    <H3>/person</H3>
                </Container2>
                <H1>$0</H1>
            </Container1>
            <Button>
                Reset
            </Button>
        </Container>
    )
}
export default OutputCalc;