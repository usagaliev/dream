import {ChangeEvent, FC} from 'react';
import {TextField} from "@mui/material";

interface SplitBillOrdersProps {
	orders: any;
	tipPercentage: number;

	handleOrderChange(index: number, e: ChangeEvent<HTMLInputElement>): void;

	handleTipChange(e: { target: { value: number; }; }): void;
}

const SplitBillOrders: FC<SplitBillOrdersProps> = ({orders, tipPercentage, handleTipChange, handleOrderChange}) => {
	return (
		<div className='mt-5'>
			<TextField
				sx={{'& .MuiOutlinedInput-root': {color: '#fff'}, margin: '10px'}}
				focused
				type="number"
				label='Процент чаевых'
				value={tipPercentage}
				onChange={handleTipChange as any}
				variant='outlined'
				required
			/>
			{orders.map((order: any, index: number) => (
				<div key={index} className='flex items-center'>
					<TextField
						sx={{'& .MuiOutlinedInput-root': {color: '#fff'}, margin: '10px'}}
						focused
						type="text"
						name="item"
						value={order.item}
						onChange={(e) => handleOrderChange(index, e as ChangeEvent<HTMLInputElement>)}
						variant='outlined'
						label={`Заказ #${index + 1}:`}
						style={{color: '#fff'}}
						required
					/>
					<TextField
						sx={{'& .MuiOutlinedInput-root': {color: '#fff'}, margin: '10px'}}
						focused
						type="number"
						label='Стоимость'
						name="cost"
						value={order.cost}
						onChange={(e) => handleOrderChange(index, e as ChangeEvent<HTMLInputElement>)}
						variant='outlined'
						required
					/>
				</div>
			))}
		</div>
	);
};

export default SplitBillOrders;