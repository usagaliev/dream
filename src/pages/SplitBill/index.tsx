import { useState, FC } from 'react';

const SplitBill:FC = () => {
	const [totalAmount, setTotalAmount] = useState(0);
	const [numPeople, setNumPeople] = useState(1);
	const [individualAmounts, setIndividualAmounts] = useState(Array(1).fill(0));

	const handleTotalAmountChange = (e: { target: { value: string; }; }) => {
		setTotalAmount(parseFloat(e.target.value) || 0);
	};

	const handleNumPeopleChange = (e: { target: { value: string; }; }) => {
		const newNumPeople = parseInt(e.target.value, 10) || 1;
		setNumPeople(newNumPeople);
		setIndividualAmounts((prevAmounts) => {
			if (newNumPeople > prevAmounts.length) {
				return [...prevAmounts, ...Array(newNumPeople - prevAmounts.length).fill(0)];
			}
			return prevAmounts.slice(0, newNumPeople);
		});
	};

	const handleIndividualAmountChange = (index: number, value: string) => {
		setIndividualAmounts((prevAmounts) => {
			const newAmounts = [...prevAmounts];
			newAmounts[index] = parseFloat(value) || 0;
			return newAmounts;
		});
	};

	const calculateIndividualAmounts = () => {
		const totalOrderAmount = individualAmounts.reduce((acc, amount) => acc + amount, 0);
		const individualAmount = totalOrderAmount / numPeople;
		setIndividualAmounts(Array(numPeople).fill(individualAmount));
	};

	return (
		<div>
			<h2>Split Bill Calculator</h2>
			<label>
				Total Amount:
				<input type="number" value={totalAmount} onChange={handleTotalAmountChange} />
			</label>
			<br />
			<label>
				Number of People:
				<input type="number" value={numPeople} onChange={handleNumPeopleChange} />
			</label>
			<br />
			<h3>Individual Orders:</h3>
			{individualAmounts.map((amount, index) => (
				<div key={index}>
					<label>
						Person {index + 1}:
						<input
							type="number"
							value={amount}
							onChange={(e) => handleIndividualAmountChange(index, e.target.value)}
						/>
					</label>
				</div>
			))}
			<br />
			<button onClick={calculateIndividualAmounts}>Calculate</button>
			<br />
			{individualAmounts[0] > 0 && (
				<div>
					<h3>Individual Amount:</h3>
					{individualAmounts.map((amount, index) => (
						<p key={index}>Person {index + 1}: {amount.toFixed(2)}</p>
					))}
				</div>
			)}
		</div>
	);
};

export default SplitBill;
