import { useContext, useState,useRef } from "react";
import { AppContext } from '../context/AppContext';
import {
    Button, Container, Label, Input, SelectTip, Span, ContainerPeople
} from "./InputComponents"

const InputCalc = () => {
    const { data, setData } = useContext(AppContext);
    const tips = [5, 10, 15, 25, 50];
    
    const {selectedTip, setSelectedTip} = useContext(AppContext);

    const handleTipClick = (tip) => {
        setSelectedTip(tip);
        setData({ ...data, selectTip: tip });
    };



    return (
        <Container>
            <Label>
                Bill
                <Input type="number" min="0" placeholder="0" value={data.bill} onChange={(e) => setData({ ...data, bill: e.target.value })} />
            </Label>
            <Label>
                Select Tip %
                <SelectTip>
                    {tips.map((tip) => (
                        <Button
                            key={tip}
                            isSelected={selectedTip === tip}
                            onClick={() => handleTipClick(tip)}>{tip}%
                        </Button>
                    ))}
                    <Input
                        value={data.selectTip} type="number" placeholder="Custom" min="1" onChange={(e) => setData({ ...data, selectTip: e.target.value })}></Input>
                </SelectTip>
            </Label>
            <Label>
                <ContainerPeople>
                    <p>Number of People</p>
                    {data.numberOfPeople === null || data.numberOfPeople > 0 ? null : <Span>Can't be zero</Span>}
                </ContainerPeople>
                <Input
                    type="number"
                    min="1"
                    value={data.numberOfPeople}
                    placeholder="0"
                    onChange={(e) => setData({ ...data, numberOfPeople: e.target.value })}
                />
            </Label>
        </Container>
    )
}

export default InputCalc;