import {FC, ReactNode} from 'react';
import {AppBar, Box, Button, Link, Toolbar, Typography} from "@mui/material";


interface NavigationProps {
	children: ReactNode;
}

const Navigation: FC<NavigationProps> = ({children}) => {

	return (
		<>
			<AppBar component="nav">
				<Toolbar>
					<Typography
						variant="h6"
						component="div"
						sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}
					>
						<Link href='/'>
							<Button variant='text' style={{color: '#fff'}} sx={{touchAction: 'none'}}>
								DREAMER
							</Button>
						</Link>
					</Typography>
					<Box sx={{display: {xs: 'none', sm: 'block'}}}>
						{children}
					</Box>
				</Toolbar>
			</AppBar>
		</>
	);
};

export default Navigation;