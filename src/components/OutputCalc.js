import { 
    Container, Container1, Container2, H2, H3, H1, Button 
} from "./OutputComponents";
import { AppContext } from '../context/AppContext';
import { useContext, useEffect, useState } from 'react';

const OutputCalc = () => {
    const { data, setData } = useContext(AppContext);
    const { bill, selectTip, numberOfPeople } = data;
    const [amount, setAmount] = useState({
        tipAmountPerPerson: 0,
        totalAmountPerPerson: 0
    });

    useEffect(() => {
        calculateAmounts();
    }, [bill, selectTip, numberOfPeople]);

    const calculateAmounts = () => {
        if (numberOfPeople > 0) {
            const tipPercentage = Number(selectTip) / 100;
     const tipAmount = Number(bill) * tipPercentage;
     const totalAmount = Number(bill) + tipAmount;

     const tipAmountPerPerson = (tipAmount / Number(numberOfPeople)).toFixed(2);
     const totalAmountPerPerson = (totalAmount / Number(numberOfPeople)).toFixed(2);
            setAmount({ tipAmountPerPerson, totalAmountPerPerson });
        } else {
            setAmount({ tipAmountPerPerson: 0, totalAmountPerPerson: 0 });
        }
    };

    const handleReset = () => {
        setData({ bill: 0, selectTip: 0, numberOfPeople: 0 });
    };

    return (
        <Container>
            <Container1>
                <Container2>
                    <H2>Tip Amount</H2>
                    <H3>/person</H3>
                </Container2>
                <H1>{amount.tipAmountPerPerson}</H1>
            </Container1>
            <Container1>
                <Container2>
                    <H2>Total</H2>
                    <H3>/person</H3>
                </Container2>
                <H1>{amount.totalAmountPerPerson}</H1>
            </Container1>
            <Button onClick={handleReset}>
                Reset
            </Button>
        </Container>
    );
};

export default OutputCalc;
