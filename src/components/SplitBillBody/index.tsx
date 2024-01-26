import {ChangeEvent, FC, SetStateAction, useEffect, useState} from 'react';
import {Backdrop, Button, TextField} from "@mui/material";
import SplitBillOrders from "../SplitBillOrders";

interface SplitBillCalculatorProps {
	title: string;
}

const SplitBillCalculator: FC<SplitBillCalculatorProps> = ({title}) => {
	const [numberOfPeople, setNumberOfPeople] = useState(1);
	const [orders, setOrders] = useState([{item: '', cost: 0}]);
	const [totalBill, setTotalBill] = useState(0);
	const [message, setMessage] = useState('');
	const [open, setOpen] = useState(false);
	const [tipPercentage, setTipPercentage] = useState(0);

	const totalWithTip = totalBill + (totalBill * tipPercentage) / 100;

	const perPersonAmount = totalWithTip / numberOfPeople;

	const handleTipChange = (e: { target: { value: SetStateAction<number>; }; }) => {
		setTipPercentage(e.target.value);
	};
	useEffect(() => {
		setMessage(`С каждой хари по: ${perPersonAmount.toFixed(2)} сомов`);
	}, [perPersonAmount]);

	const handleNumberOfPeopleChange = (e: { target: { value: SetStateAction<number>; }; }) => {
		setNumberOfPeople(e.target.value);
	};

	const handleOrderChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
		const newOrders = [...orders];
		// @ts-ignore
		newOrders[index][e.target.name] = e.target.value;
		setOrders(newOrders);
	};

	const handleAddOrder = () => {
		setOrders([...orders, {item: '', cost: 0}] as any);
	};

	const calculateTotalBill = () => {
		let total = 0;
		orders.forEach((order: any) => {
			total += parseFloat(order.cost);
		});
		setTotalBill(total);
	};

	const handleCalculate = () => {
		calculateTotalBill();
		setOpen(true)
	};

	return (
		<div className='flex-col justify-center'>
			<h1 className='title'>{title}</h1>
			<TextField
				sx={{'& .MuiOutlinedInput-root': {color: '#fff'}, margin: '10px'}}
				className='text-white'
				label='Количество человек:'
				type="number"
				value={numberOfPeople}
				onChange={handleNumberOfPeopleChange as any}
				variant='outlined'
				style={{color: '#fff'}}
				color="primary"
				focused
			/>
			<SplitBillOrders
				orders={orders}
				handleOrderChange={handleOrderChange}
				handleTipChange={handleTipChange}
				tipPercentage={tipPercentage}
			/>

			<Button onClick={handleAddOrder}>Добавить заказ</Button>
			<Button onClick={handleCalculate}>Рассчитать</Button>

			<Backdrop
				open={open}
				onClick={() => setOpen(false)}
				sx={{fontSize: '20px' , color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: 'rgba(40,40,40,0.93)'}}
			>
				{message}
			</Backdrop>


		</div>
	);
};

export default SplitBillCalculator;