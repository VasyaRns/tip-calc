import {
    Button,Container,Label,Input,ContainerButtons
} from "./InputComponents"

const InputCalc = () => {
    
    return (
        <Container>
            <Label>
                Bill
                <Input type="number" min="0" placeholder="$" />
            </Label>
            <Label>
            Select Tip %
                <ContainerButtons>
                    <Button>5%</Button>
                    <Button>10%</Button>
                    <Button>15%</Button>
                    <Button>25%</Button>
                    <Button>50%</Button>
                    <Input placeholder="Custom"></Input>
                </ContainerButtons>
            </Label>
            <Label>
                Number of People
                <Input type="number" min="0" placeholder="$" />
            </Label>
        </Container>
    )

}

export default InputCalc;