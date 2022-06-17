import { Box } from '@mui/system';
import rick from '@/assets/rickroll.gif'

interface ErrorProps {
	children?: React.ReactNode;
}

export const Error = ({children}: ErrorProps) => {
	return(
		<Box>
			<img src={rick}></img>
		</Box>
	)
}