import { useContext} from "react";
import { AppContext } from '../context/AppContext';
import {
    Button,Container, Label, Input, SelectTip, Span
} from "./InputComponents"

const InputCalc = () => {
    const { data, setData } = useContext(AppContext);

    return (
        <Container>
            <Label>
                Bill
                <Input type="number" min="0" placeholder="$" value={data.bill} onChange={(e) => setData({ ...data, bill: e.target.value })} />
            </Label>
            <Label>
                Select Tip %
                <SelectTip>
                    <Button
                        onClick={() => setData({ ...data, selectTip: 5 })}

                    >5%</Button>
                    <Button
                        onClick={() => setData({ ...data, selectTip: 10 })}

                    >10%</Button>
                    <Button
                        onClick={() => setData({ ...data, selectTip: 15 })}

                    >15%</Button>
                    <Button
                        onClick={() => setData({ ...data, selectTip: 25 })}
                    >25%</Button>
                    <Button
                        onClick={() => setData({ ...data, selectTip: 50 })}
                    >50%</Button>
                    <Input value={data.selectTip} type="number" placeholder="Custom" min="1" onChange={(e) => setData({ ...data, selectTip: e.target.value })}></Input>
                </SelectTip>
            </Label>
            <Label>
                Number of People
                <Span> {data.numberOfPeople === 0 ? "Can't be zero" : ""}</Span>
                <Input
                    value={data.numberOfPeople}
                    type="number"
                    min="1"
                    placeholder="$"
                    onChange={(e) => setData({ ...data, numberOfPeople: e.target.value })}
                />
            </Label>
        </Container>
    )
}

export default InputCalc;