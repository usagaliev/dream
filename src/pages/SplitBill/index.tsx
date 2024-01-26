import {FC} from 'react';
import SplitBillCalculator from "../../components/SplitBillBody";

interface SplitBillCalculatorProps {
	title: string;
}

const SplitBill:FC<SplitBillCalculatorProps> = ({title}) => {
	return (
		<SplitBillCalculator title={title}/>
	)
};

export default SplitBill;