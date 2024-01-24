import {FC} from 'react';
import {AppBar, Box, Link, Button, Toolbar, Typography} from "@mui/material";
import {PathProps} from "../../types/types.ts";


interface NavigationProps {
	navItems: PathProps[];
}

const Navigation: FC<NavigationProps> = ({navItems}) => {

	return (
		<div>
			<AppBar component="nav">
				<Toolbar>
					<Typography
						variant="h6"
						component="div"
						sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}
					>
						DREAM CREATOR
					</Typography>
					<Box sx={{display: {xs: 'none', sm: 'block'}}}>
						{navItems.map((item) => (
							<Link href={item.path} key={item.path}>
								<Button sx={{ color: '#fff' }} key={item.path}>{item.name}</Button>
							</Link>
						))}
					</Box>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Navigation;